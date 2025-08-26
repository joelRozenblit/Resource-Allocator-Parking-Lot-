import { AllocateAble } from "../contract/AllocateAble";
import { canFit } from "../domains/rules";
import { SpotSize, Stats, VehicleKind } from "../domains/types";

export class Spot implements AllocateAble {
  constructor(
    public readonly id: string,
    public readonly size: SpotSize,
    private occupiedBy: VehicleKind | null = null
  ) {}

  park(vehicle: VehicleKind): Spot | null {
    if (this.isEmpty() && canFit(vehicle, this.size)) {
      this.occupiedBy = vehicle;
      return this;
    }
    return null;
  }

  leave(id: string): boolean {
    if (this.id === id && !this.isEmpty()) {
      this.occupiedBy = null;
      return true;
    }
    return false;
  }

  isEmpty(): boolean {
    return this.occupiedBy === null;
  }

  isFull(): boolean {
    return this.occupiedBy !== null;
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
    
  }

  getOccupiedBy(): VehicleKind | null {
    return this.occupiedBy;
  }
}
