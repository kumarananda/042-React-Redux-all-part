import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import {composeWithDevTools } from 'redux-devtools-extension';
import thunkMidleware from 'redux-thunk';
import checkMiddleware from '../middleware/checkMiddleware';
import testMiddleware from '../middleware/testMiddleware';




// create redux store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMidleware, checkMiddleware, testMiddleware)));

// export redux store
export default store