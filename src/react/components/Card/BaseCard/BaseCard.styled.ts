import styled from "styled-components";
import { colours } from "../../../theme/colours";
import { CardType } from "./types";

export const BaseCardContainer = styled.div<{ cardType: CardType }>`
  height: 150px;
  width: 100px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: ${(props) =>
    props.cardType === "storm" ? colours.red : colours.blue};
`;
