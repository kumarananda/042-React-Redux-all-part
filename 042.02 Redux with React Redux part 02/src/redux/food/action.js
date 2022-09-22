import { ALU, KUMRA, LAU, POTOL } from "./actionTypes"


// make KUMRA
export const makeKumra = (payload) => {
    return {
        type : KUMRA
    }
}

// make POTOL
export const makePotol = (payload) => {
    return {
        type : POTOL
    }
}

// make ALU
export const makeAlu = (payload) => {
    return {
        type : ALU
    }
}

// make LAU
export const makeLau = (payload) => {
    return {
        type : LAU
    }
}


