// get local storage data 
const localSTdata = JSON.parse(localStorage.getItem('devs'))

// initial state
export const initialDevState = {
    devs : localSTdata ? localSTdata : [],
    loading : false
}