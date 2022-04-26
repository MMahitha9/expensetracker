import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import { increment, decrement, incrementBy } from './actions/countActions'
import { Provider} from 'react-redux'

const store = configureStore()
console.log(store)

console.log('state', store.getState())

store.subscribe(() => {
  console.log('state updated', store.getState())
})

store.dispatch(increment())
store.dispatch(increment())


ReactDOM.render(<Provider store={store}>   
                  <App />
                </Provider>,document.getElementById('root'))
