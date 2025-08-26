export type SpotSize = "MOTORCYCLE" | "COMPACT" | "LARGE";
export type VehicleKind = "MOTORCYCLE" | "CAR" | "VAN";


export type Stats = {
  totalBySize: Record<SpotSize, number>;
  freeBySize: Record<SpotSize, number>;
  usedByKind: Record<VehicleKind, number>;
}