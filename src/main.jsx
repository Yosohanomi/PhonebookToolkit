import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { Homepage } from './pages/Homepage'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Homepage/>
  </Provider>
)
