import { allocateResource, releaseResource, stats, } from './domain.js'; // שים לב ל־.js אחרי הידור
// ---- 1️⃣ הגדרת חניון ----
const lot = {
    id: 'Lot1',
    floors: [
        {
            id: 'Floor1',
            spots: [
                { id: 'F1-S1', size: 'MOTORCYCLE', occupiedBy: null },
                { id: 'F1-S2', size: 'COMPACT', occupiedBy: null },
                { id: 'F1-S3', size: 'LARGE', occupiedBy: null },
            ],
        },
        {
            id: 'Floor2',
            spots: [
                { id: 'F2-S1', size: 'COMPACT', occupiedBy: null },
                { id: 'F2-S2', size: 'LARGE', occupiedBy: null },
            ],
        },
    ],
};
// ---- 2️⃣ יצירת רכבים ----
const vehicles = [
    { id: 'V1', kind: 'MOTORCYCLE' },
    { id: 'V2', kind: 'CAR' },
    { id: 'V3', kind: 'VAN' },
];
// ---- 3️⃣ הקצאה ----
for (const vehicle of vehicles) {
    const spotId = allocateResource(lot, vehicle);
    console.log(`${vehicle.kind} allocated to: ${spotId ?? 'No spot available'}`);
}
// ---- 4️⃣ סטטיסטיקות אחרי הקצאה ----
console.log('Stats after allocation:');
console.log(stats(lot));
// ---- 5️⃣ שחרור ----
releaseResource(lot, 'F1-S2'); // נניח שחררנו חניה COMPACT
console.log('Stats after releasing F1-S2:');
console.log(stats(lot));
//# sourceMappingURL=index.js.map