import React from "react";
import { SandBackground, SandContainer, SandLevel } from "./Sand.styled";

interface ISand {
  level: number;
}

export const Sand = ({ level }: ISand) => {
  if (level === 0) return null;

  return (
    <SandContainer>
      <SandBackground level={level} />
      <SandLevel level={level}>{level}</SandLevel>
    </SandContainer>
  );
};
