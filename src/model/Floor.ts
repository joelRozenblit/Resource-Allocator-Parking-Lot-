import { AllocateAble, VehicleKind } from "../domain";
import { Spot } from "./Spot";

export class Floor implements AllocateAble {
  constructor(public readonly id: string, private spots: Spot[]) {}

  getSpots(): Spot[] {
    return [...this.spots];
  }

  park(vehicle: VehicleKind): Spot | null {
    for (const spot of this.spots) {
      const parked = spot.park(vehicle);
      if (parked) return parked;
    }
    return null;
  }

  leave(id: string): boolean {
    for (const spot of this.spots) {
      if (spot.leave(id)) return true;
    }
    return false;
  }

  isEmpty(): boolean {
    return this.spots.every((s) => s.isEmpty());
  }

  isFull(): boolean {
    return this.spots.every((s) => s.isFull());
  }
}
