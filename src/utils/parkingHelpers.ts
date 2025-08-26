import { AllocateAble } from "../contract/AllocateAble";
import { VehicleKind } from "../domains/types";

export function tryParkAnywhere(
  place: AllocateAble,
  vehicle: VehicleKind
): void {
  const spot = place.park(vehicle);

  if (spot) {
    console.log(
      `✅ הצלחנו להחנות רכב מסוג ${vehicle} בחניה ${spot.id}`
    );
  } else {
    console.log(`❌ לא נמצאה חניה פנויה לרכב מסוג ${vehicle}`);
  }
}
export function tryLeaveAnywhere(
  place: AllocateAble,
  id: string
): void {
  const success = place.leave(id);

  if (success) {
    console.log(`🚗 החניה ${id} שוחררה בהצלחה`);
  } else {
    console.log(`⚠️ לא נמצאה חניה עם מזהה ${id}`);
  }
}