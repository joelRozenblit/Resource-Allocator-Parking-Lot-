import { AllocateAble } from "../contract/AllocateAble";
import { SpotSize, Stats, VehicleKind } from "../domains/types";
import { Floor } from "./Floor";
import { Spot } from "./Spot";

export class ParkingLot implements AllocateAble {
  constructor( private floors: Floor[]) {}

  park(vehicle: VehicleKind): Spot | null {
    for (const floor of this.floors) {
      const spot = floor.park(vehicle);
      if (spot) return spot;
    }
    return null;
  }

  leave(id: string): boolean {
    for (const floor of this.floors) {
      if (floor.leave(id)) return true;
    }
    return false;
  }

  isFull(): boolean {
    return this.floors.every((floor) => floor.isFull());
  }

  isEmpty(): boolean {
    return this.floors.every((floor) => floor.isEmpty());
  }

  stats(): Stats {
    const totalBySize: Record<SpotSize, number> = {
      MOTORCYCLE: 0,
      COMPACT: 0,
      LARGE: 0,
    };
    const freeBySize: Record<SpotSize, number> = {
      MOTORCYCLE: 0,
      COMPACT: 0,
      LARGE: 0,
    };
    const usedByKind: Record<VehicleKind, number> = {
      MOTORCYCLE: 0,
      CAR: 0,
      VAN: 0,
    };

    for (const floor of this.floors) {
      for (const spot of floor.getSpots()) {
        totalBySize[spot.size]++;
        if (spot.isEmpty()) {
          freeBySize[spot.size]++;
        } else {
          const v = spot.getOccupiedBy();
          if (v) usedByKind[v]++;
        }
      }
    }
    return { totalBySize, freeBySize, usedByKind };
  }

}
