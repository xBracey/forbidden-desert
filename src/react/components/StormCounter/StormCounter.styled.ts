import styled from "styled-components";
import { colours } from "../../theme/colours";

export const StormCounterContainer = styled.div`
  width: 220px;
  position: relative;
  margin-top: 50px;
`;

export const StormSectionsContainer = styled.div`
  border: 16px solid ${colours.brown};
  border-radius: 8px;
`;

export const StormSection = styled.div<{ section: string }>`
  background-color: ${(props) => colours.storm[props.section]};
  position: relative;
  padding: 16px 0;
`;

export const StormSectionLevel = styled.div`
  margin: 24px 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-right: 60px solid white;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StormSectionTitle = styled.div`
  position: absolute;
  color: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StormSkullContainer = styled.div`
  position: absolute;
  background-color: #692020;
  width: 100px;
  height: 50px;
  top: -50px;
  left: 50%;
  transform: translate(-50%, 0%) perspective(3px) rotateX(1deg);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 16px solid ${colours.brown};
  border-radius: 8px;
  border-bottom: 0px;

  & svg {
    fill: white;
  }
`;

export const StormLevelIndicator = styled.div`
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translate(0, -50%);
  height: 25px;
  width: 10px;
  background-color: black;
  border-top-left-radius: 100%;
  border-bottom-left-radius: 100%;
  border: 10px solid black;
  border-bottom: 0;
  border-top: 0;
`;
