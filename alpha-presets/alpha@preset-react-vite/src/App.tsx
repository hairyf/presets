/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2021-01-26 16:25:51
 * @LastEditTime: 2021-01-26 16:43:53
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
const useWinSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = () => setSize({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  })
  return size
}
export default () => {
  const size = useWinSize()
  const [count, setCount] = useState(0)
  const [toCount, setToCount] = useState(0)
  useEffect(() => {
    console.log(count)
    console.log(toCount)
  }, [count])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => {
            setCount(count + 1);
            setToCount(toCount + 1);
          }}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <p>width: {size.width}</p>
        <p>height: {size.height}</p>
      </header>
    </div>
  )
}
