export type AllocateResult = {
    kind: "ok";
    location: {
        containerId: string;
        spotId: string;
    };
} | {
    kind: "no_capacity";
} | {
    kind: "already_allocated";
    location: {
        containerId: string;
        spotId: string;
    };
};
export type ReleaseResult = {
    kind: "ok";
} | {
    kind: "not_found";
};
