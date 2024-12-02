import styled from "styled-components";

// Styled components for UI elements
export const Container = styled.div`
  font-family: "Arial, sans-serif";
  text-align: center;
  background: linear-gradient(45deg, #f8f8ff, #e6e9f0);
  min-height: 100vh;
  padding: 20px;
`;

export const Header = styled.header`
  font-size: 36px;
  font-weight: bold;
  color: #4b4b4b;
  margin-bottom: 20px;
`;

export const QuestionContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const QuestionText = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const BubbleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Bubble = styled.div`
  width: ${(props) => props.size || "20px"};
  height: ${(props) => props.size || "20px"};
  background: ${(props) => props.color || "#ccc"};
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
  border: ${(props) => (props.selected ? "3px solid #000" : "none")};
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    transform: scale(1.2); /* Scale up */
    opacity: 0.9;         /* Slightly fade */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Optional shadow */
  }
`;

export const Option = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background: ${(props) => props.color || "#ccc"};
  color: #ffffff;
  border-radius: 10px;
  cursor: default; /* Non-clickable */
  transition: none; /* No hover effect */
`;

export const ProgressBarContainer = styled.div`
  margin: 30px auto;
  width: 80%;
  text-align: left;
`;

export const ProgressBarLabel = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
`;

export const ProgressBar = styled.div`
  position: relative;
  background: #e0e0e0;
  border-radius: 10px;
  height: 20px;
`;

export const ProgressFill = styled.div`
  position: absolute;
  height: 100%;
  width: ${(props) => props.percentage || "0%"};
  background: #6a1b9a;
  border-radius: 10px;
  transition: width 0.3s ease;
`;

export const ProgressText = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 12px;
  color: white;
  line-height: 20px;
`;
