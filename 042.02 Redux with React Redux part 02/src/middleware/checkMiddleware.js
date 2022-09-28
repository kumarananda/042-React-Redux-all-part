
// // 01 
// // create check middleware // kare function
// const checkMiddleware = (store) => (next) => (action) => {
//     // console.log(store.getState());
//     console.log(store.getState().color); // previous state value

//     const {color} = store.getState();

//     if(color === "green" || color === "red"|| color === "gray" ){
//         next(action)
//     }else{
//         console.log('You are not allowed');
//     }
//     console.log(action);

// }

// 02  on 30:00  https://www.youtube.com/watch?v=NFP5GVSVf5Q 
// create check middleware 
const checkMiddleware = (store) => (next) => (action) => {
    if(action.type === 'RED' || action.type === 'YELLOW' ){
        next(action) // only allowed types will be effective (RED & YELLOW)
    }else{
        // console.log("this type is ont allowed");
        next({type: "BLUE"})
    }

}


// export default
export default checkMiddleware;