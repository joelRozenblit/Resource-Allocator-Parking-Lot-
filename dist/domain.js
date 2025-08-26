export const stats = (lot) => {
    const totalBySize = {
        MOTORCYCLE: 0,
        COMPACT: 0,
        LARGE: 0,
    };
    const freeBySize = {
        MOTORCYCLE: 0,
        COMPACT: 0,
        LARGE: 0,
    };
    const usedByKind = {
        MOTORCYCLE: 0,
        CAR: 0,
        VAN: 0,
    };
    for (const floor of lot.floors) {
        for (const spot of floor.spots) {
            totalBySize[spot.size]++;
            if (!spot.occupiedBy) {
                freeBySize[spot.size]++;
            }
            else {
                usedByKind[spot.occupiedBy]++;
            }
        }
    }
    return { totalBySize, freeBySize, usedByKind };
};
export const canFit = (vehicle, spot) => {
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
export const allocateResource = (lot, resource) => {
    for (const floor of lot.floors) {
        for (const spot of floor.spots) {
            if (!spot.occupiedBy && canFit(resource.kind, spot.size)) {
                spot.occupiedBy = resource.kind;
                return spot.id;
            }
        }
    }
    return null;
};
export const releaseResource = (lot, id) => {
    for (const floor of lot.floors) {
        for (const spot of floor.spots) {
            if (spot.id === id) {
                if (spot.occupiedBy) {
                    spot.occupiedBy = null;
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
    return false;
};
//# sourceMappingURL=domain.js.map