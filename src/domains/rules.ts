import { SpotSize, VehicleKind } from "./types";

export const canFit = (vehicle: VehicleKind, spot: SpotSize): boolean => {
  switch (vehicle) {
    case "MOTORCYCLE":
      return true;
    case "CAR":
      return spot === "LARGE" || spot === "COMPACT";
    case "VAN":
      return spot === "LARGE";
    default:
      return false;
  }
};