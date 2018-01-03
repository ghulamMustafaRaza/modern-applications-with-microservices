import { createStore, combineReducers, applyMiddleware } from 'redux'
import { combineEpics, createEpicMiddleware } from "redux-observable"
// import logger from "redux-logger"

import rootReducer from "./reducers"

import epics from "./epics"

const rootEpic = combineEpics(
    epics.add,
    epics.delete
)

const epicMiddleware =  createEpicMiddleware(rootEpic)

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)

export default store