import { Stats, VehicleKind } from "../domains/types";
import { Spot } from "../model/Spot";

export interface AllocateAble {
  park(vehicle: VehicleKind): Spot | null;
  leave(id: string): boolean;
  isEmpty(): boolean;
  isFull(): boolean;
  stats(): Stats
}
