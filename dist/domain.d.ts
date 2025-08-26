export type SpotSize = "MOTORCYCLE" | "COMPACT" | "LARGE";
export type VehicleKind = "MOTORCYCLE" | "CAR" | "VAN";
export interface Resource {
    id: string;
    kind: VehicleKind;
}
export interface Spot {
    id: string;
    size: SpotSize;
    occupiedBy: VehicleKind | null;
}
export interface Floor {
    id: string;
    spots: Spot[];
}
export interface ParkingLot {
    id: string;
    floors: Floor[];
}
export interface Stats {
    totalBySize: Record<SpotSize, number>;
    freeBySize: Record<SpotSize, number>;
    usedByKind: Record<VehicleKind, number>;
}
export declare const stats: (lot: ParkingLot) => Stats;
export declare const canFit: (vehicle: VehicleKind, spot: SpotSize) => boolean;
export declare const allocateResource: (lot: ParkingLot, resource: Resource) => string | null;
export declare const releaseResource: (lot: ParkingLot, id: string) => boolean;
