import { createStore } from 'redux'

import gomokuApp from '../reducers/gomokuApp'

const store = createStore(gomokuApp)

export default store
