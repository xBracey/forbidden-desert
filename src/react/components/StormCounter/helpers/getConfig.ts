import { IStormConfig } from "../types";

export const getConfig = (playerNumber: number): IStormConfig => {
  const baseConfig: IStormConfig = {
    2: 1,
    3: 4,
    4: 4,
    5: 3,
    6: 2,
  };

  if (playerNumber === 2) {
    return {
      ...baseConfig,
      3: 3,
    };
  }

  if (playerNumber === 5) {
    return {
      ...baseConfig,
      3: 5,
    };
  }

  return baseConfig;
};
