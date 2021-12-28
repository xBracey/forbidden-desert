import { IPlayer } from "../../Player/types";

export interface ITile {
  players: IPlayer[];
  sandLevel: number;
  waterLevel: number;
  onClick: () => void;
  isStorm: boolean;
  isMoveable: boolean;
}
