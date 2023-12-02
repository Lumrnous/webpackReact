import React from 'react'
// react18之前的引入方式，不支持异步批处理
// import ReactDOM from 'react-dom'
// 在此模块下面引入的ReactDOM它是支持异步批处理的
import ReactDOM from 'react-dom/client'

// 根组件，根容器 --> 它就是一个标签
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
