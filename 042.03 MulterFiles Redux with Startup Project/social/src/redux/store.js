import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools } from 'redux-devtools-extension';
import thunkMidleware from 'redux-thunk';




// create redux store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMidleware)));

// export redux store
export default store