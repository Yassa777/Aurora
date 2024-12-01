from PIL import Image, ImageDraw, ImageFont

def create_card(output_path="card_template.png"):
    # Set card dimensions
    card_width, card_height = 768, 1280  # Same aspect ratio as your example
    background_color = (255, 255, 0)  # Yellow background, adjust as needed
    gradient_color = (173, 216, 230)  # Light blue gradient, adjust as needed

    # Create a blank card
    card = Image.new("RGB", (card_width, card_height), background_color)
    draw = ImageDraw.Draw(card)

    # Draw a gradient background
    for i in range(card_height):
        r = background_color[0] + i * (gradient_color[0] - background_color[0]) // card_height
        g = background_color[1] + i * (gradient_color[1] - background_color[1]) // card_height
        b = background_color[2] + i * (gradient_color[2] - background_color[2]) // card_height
        draw.line([(0, i), (card_width, i)], fill=(r, g, b))

    # Placeholder for avatar (white space)
    avatar_x, avatar_y = 100, 100  # Top-left corner of the avatar placeholder
    avatar_width, avatar_height = 568, 568  # Square placeholder
    draw.rectangle(
        [avatar_x, avatar_y, avatar_x + avatar_width, avatar_y + avatar_height],
        fill=(255, 255, 255),  # White
        outline=(0, 0, 0),  # Black outline for visibility
        width=5,  # Outline thickness
    )

    # Add text (example traits)
    font = ImageFont.truetype("arial.ttf", 40)  # Adjust the font and size as needed
    text_color = (0, 0, 0)  # Black text
    traits = [
        "Rarity: 2%",
        "Life of the party (Extroverted)",
        "Therapist (Sensing)",
        "Emotionally Intelligent (Feeling)",
        "Goes with the flow (Perceiving)"
    ]

    # Position text below the avatar placeholder
    text_x, text_y = 100, avatar_y + avatar_height + 20
    line_spacing = 60

    for trait in traits:
        draw.text((text_x, text_y), trait, fill=text_color, font=font)
        text_y += line_spacing

    # Save the card template
    card.save(output_path)
    print(f"Card template saved to {output_path}")

# Run the function to create the card
create_card()
