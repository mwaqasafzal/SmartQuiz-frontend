export const START_LOADER = "START_LOADER"
export const STOP_LOADER = "STOP_LOADER"

export const startLoader=()=>({
    type:START_LOADER
});

export const stopLoader=()=>({
    type:STOP_LOADER
});