import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import Gomoku from './container/Gomoku'

import store from './store/configureStore'

render(
    <Provider store={store}>
      <Gomoku />
    </Provider>,
    document.getElementById('root')
)
