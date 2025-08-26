import express from "express";
import bodyParser from "body-parser";
import { ParkingSystem } from "./facade/ParkingSystem";
import { VehicleKind } from "./domains/types";

const app = express();
app.use(bodyParser.json());

const system = new ParkingSystem(3, 20);

// --- Routes (API) ---

app.post("/park", (req, res) => {
  const vehicle: VehicleKind = req.body.vehicle;
  if (!vehicle) {
    return res.status(400).json({ error: "vehicle type required" });
  }

  const spot = system.park(vehicle);
  if (spot) {
    res.json({ success: true, spot });
  } else {
    res.json({ success: false, message: "no spot available" });
  }
});

app.post("/leave", (req, res) => {
  const spotId: string = req.body.spotId;
  if (!spotId) {
    return res.status(400).json({ error: "spotId required" });
  }

  const success = system.leave(spotId);
  res.json({ success });
});

app.get("/stats", (req, res) => {
  res.json(system.getStats());
});

app.get("/", (req, res) => {
  res.send("Parking System API is running!");
});

//-----------------------------


app.listen(3000, () => {
  console.log("Parking API running on http://localhost:3000");
});
