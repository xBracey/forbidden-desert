import React, { ReactNode } from "react";
import { BaseCardContainer } from "./BaseCard.styled";
import { CardType } from "./types";

interface IBaseCard {
  children: ReactNode;
  cardType: CardType;
}

export const BaseCard = ({ children, cardType }: IBaseCard) => {
  return <BaseCardContainer cardType={cardType}>{children}</BaseCardContainer>;
};
