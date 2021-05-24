import React, { useRef } from 'react'
import styles from './App.module.css'
import List from './components/List/List';
import Time from './components/TIme/Time';

function App() {
    const refList = useRef(null)
    const refTime = useRef(null)

    return (
        <div className={styles.wrapper}>
            <List refList={refList} refTime={refTime}/>
            <Time refList={refList} refTime={refTime}/>
        </div>
    )
}

export default App
