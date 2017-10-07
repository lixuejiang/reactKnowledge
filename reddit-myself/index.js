import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import React from 'react';

import ReactDOM from 'react-dom';

import AsyncApp from './containers/AsyncApp.js';
/*
const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
        loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
    )
)

store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() =>
    console.log(store.getState())
)
*/

ReactDOM.render(
    <AsyncApp />,
    document.getElementById('Picker')
);
