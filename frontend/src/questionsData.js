const questions = [
    {
      id: 1,
      options: [
        { text: "I’m the first to start a conversation", color: "#FF6F61" },
        { text: "I wait for others to approach me", color: "#6EC1E4" },
      ],
      bubbles: [
        { value: -2, color: "#FF6F61", size: "40px" },
        { value: -1, color: "#FF6F61", size: "30px" },
        { value: 0, color: "#000000", size: "20px" },
        { value: 1, color: "#6EC1E4", size: "30px" },
        { value: 2, color: "#6EC1E4", size: "40px" },
      ],
    },
    {
      id: 2,
      options: [
        { text: "I wear my heart on my sleeve", color: "#8BC34A" },
        { text: "I keep my emotions under tight control", color: "#AB47BC" },
      ],
      bubbles: [
        { value: -2, color: "#8BC34A", size: "40px" },
        { value: -1, color: "#8BC34A", size: "30px" },
        { value: 0, color: "#000000", size: "20px" },
        { value: 1, color: "#AB47BC", size: "30px" },
        { value: 2, color: "#AB47BC", size: "40px" },
      ],
    },
  ];
  
  export default questions;
  