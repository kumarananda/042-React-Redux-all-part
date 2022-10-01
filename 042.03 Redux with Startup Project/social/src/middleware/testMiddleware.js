

// create check middleware 
const testMiddleware = (store) => (next) => (action) => {
    
    console.log(action.type);

}


// export default
export default testMiddleware;