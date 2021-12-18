import styled from "styled-components";

interface IPlayerContainer {
  colorHex: string;
}

export const PlayerContainer = styled.div<IPlayerContainer>`
  background-color: #${(props) => props.colorHex};
  height: 24px;
  width: 24px;
  border-radius: 100%;
  border: 1px solid black;
  margin: 4px;
`;
