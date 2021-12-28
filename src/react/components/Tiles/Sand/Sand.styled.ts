import styled from "styled-components";

const SandColor = (props) => (props.level > 1 ? "#d48a00" : "#c1c452");

export const SandContainer = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SandBackground = styled.div<{ level: number }>`
  position: absolute;
  height: 40px;
  width: 40px;
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: ${SandColor};
  left: 50%;
  top: 50%;
  border: 1px solid black;
`;

export const SandLevel = styled.div`
  position: absolute;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 16px;
  top: -10px;
  left: 50%;
  transform: translate(-50%, 0%);
  font-size: 12px;
  background-color: ${SandColor};
`;
