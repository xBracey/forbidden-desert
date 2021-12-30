import { IPlayer } from "../../Player/types";

export enum TileState {
  STORM = "storm",
  UNTURNED = "unturned",
  WATER = "water",
  WELL = "well",
  MIRAGE = "mirage",
  TUNNEL = "tunnel",
}

export interface ITile {
  players: IPlayer[];
  sandLevel: number;
  onClick: () => void;
  isMoveable: boolean;
  tileState: TileState;
}
