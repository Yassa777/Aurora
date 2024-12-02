import React, { useState } from "react";
import {
  Container,
  Header,
  QuestionContainer,
  QuestionText,
  Option,
  BubbleContainer,
  Bubble,
  ProgressBarContainer,
  ProgressBarLabel,
  ProgressBar,
  ProgressFill,
} from "./styles";
import questions from "./questionsData";

const Questions = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleBubbleClick = (value) => {
    setSelectedValue(value);
    console.log(`Bubble clicked with value: ${value}`); // Debugging/logging
  };

  return (
    <Container>
      <Header>Aurora</Header>
      {questions.map((question) => (
        <QuestionContainer key={question.id}>
          <QuestionText>
            {question.options.map((option, index) => (
              <Option key={index} color={option.color}>
                {option.text}
              </Option>
            ))}
          </QuestionText>
          <BubbleContainer>
            {question.bubbles.map((bubble, index) => (
              <Bubble
                key={index}
                color={bubble.color}
                size={bubble.size}
                onClick={() => handleBubbleClick(index + 1)} // Assign value to each bubble (e.g., 1-5)
              />
            ))}
          </BubbleContainer>
        </QuestionContainer>
      ))}
      <ProgressBarContainer>
        <ProgressBarLabel>
          {selectedValue
            ? `You selected bubble with value: ${selectedValue}`
            : "Please select a bubble"}
        </ProgressBarLabel>
        <ProgressBar>
          <ProgressFill percentage="25%" />
        </ProgressBar>
      </ProgressBarContainer>
    </Container>
  );
};

export default Questions;
