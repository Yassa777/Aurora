import os
import requests
import json
import time
from PIL import Image
from io import BytesIO

STABILITY_KEY = 'sk-P8LNz6tnjbeOuqZg5XPlCmodl0ooaDt0F4L3mF6tQEhmH4kv'

def send_generation_request(host, params, files=None):
    headers = {
        "Accept": "image/*",
        "Authorization": f"Bearer {STABILITY_KEY}",
    }

    if files is None:
        files = {}

    image = params.pop("image", None)
    if image:
        files["image"] = open(image, 'rb')

    print(f"Sending REST request to {host}...")
    response = requests.post(
        host,
        headers=headers,
        files=files,
        data=params,
    )
    if not response.ok:
        raise Exception(f"HTTP {response.status_code}: {response.text}")

    return response

def generate_gradient(image_path, prompt="colorful gradient", seed=None):
    host = "https://api.stability.ai/v2beta/stable-image/edit/search-and-recolor"
    
    params = {
        "image": image_path,
        "prompt": prompt,
        "grow_mask": 3,
        "seed": seed if seed else 0,
        "mode": "search",
        "output_format": "png",
    }
    
    response = send_generation_request(host, params)
    
    if response.headers.get("finish-reason") == "CONTENT_FILTERED":
        raise Exception("Image flagged by NSFW filter")
    
    output_image = response.content
    return output_image

def save_image(output_image, filename="generated_gradient.png"):
    with open(filename, "wb") as f:
        f.write(output_image)
    print(f"Saved image as {filename}")
    return filename

# Example usage
if __name__ == "__main__":
    input_image = "gradient.jpg"  # Path to your starting gradient image
    try:
        generated_image = generate_gradient(image_path=input_image, prompt="smooth pastel gradient")
        output_filename = save_image(generated_image, "unique_gradient.png")
        print(f"Generated image saved at {output_filename}")
    except Exception as e:
        print(f"Error: {e}")
