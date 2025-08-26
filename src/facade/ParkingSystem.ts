import { Spot } from "../model/Spot";
import { ParkingLot } from "../model/ParkingLot";
import { Floor } from "../model/Floor";
import { Stats, VehicleKind } from "../domains/types";

export class ParkingSystem  {
  private lot: ParkingLot;

  constructor(floorsCount: number, spotsPerFloor: number) {
    const floors: Floor[] = [];

    for (let f = 0; f < floorsCount; f++) {
      const spots: Spot[] = [];
      for (let s = 0; s < spotsPerFloor; s++) {
        spots.push(new Spot(`F${f}-S${s}`, "COMPACT")); 
      }
      floors.push(new Floor(f, spots));
    }

    this.lot = new ParkingLot(floors);
  }

  park(vehicle: VehicleKind): Spot | null {
    return this.lot.park(vehicle);
  }

  leave(spotId: string): boolean {
    return this.lot.leave(spotId);
  }

  getStats(): Stats {
    return this.lot.stats();
  }

  
}
