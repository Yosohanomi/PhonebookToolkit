import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
 
import phoneBookReducer from '../redux/phoneBookSlice'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, phoneBookReducer)
 
export default persistedReducer