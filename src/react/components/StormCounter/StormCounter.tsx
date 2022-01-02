import React from "react";
import { Skull } from "../../icons/Skull";
import { getConfig } from "./helpers/getConfig";
import {
  StormCounterContainer,
  StormLevelIndicator,
  StormSection,
  StormSectionLevel,
  StormSectionsContainer,
  StormSectionTitle,
  StormSkullContainer,
} from "./StormCounter.styled";

interface IStormCounter {
  stormLevel: number;
  playerNumber: number;
}

export const StormCounter = ({ stormLevel, playerNumber }: IStormCounter) => {
  const config = getConfig(playerNumber);

  let sectionCount = 1;

  const sections = Object.entries(config).map(([section, height]) => {
    const stormLevels = [];

    for (let index = 0; index < height; index++) {
      stormLevels.push(
        <StormSectionLevel key={index}>
          {sectionCount === stormLevel && <StormLevelIndicator />}
        </StormSectionLevel>
      );
      sectionCount += 1;
    }

    return (
      <StormSection key={section} section={section}>
        <div>{stormLevels.reverse()}</div>
        <StormSectionTitle>{section}</StormSectionTitle>
      </StormSection>
    );
  });

  return (
    <StormCounterContainer>
      <StormSkullContainer>
        <Skull />
      </StormSkullContainer>
      <StormSectionsContainer>{sections.reverse()} </StormSectionsContainer>
    </StormCounterContainer>
  );
};
