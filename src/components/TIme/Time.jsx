import React, { useEffect, useState } from 'react'
import styles from './Time.module.css'

function Time({refList, refTime}) {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    const tick = () => {
        setCurrentTime(new Date().toLocaleTimeString())
    }

    useEffect(() => {
        let intervalId = setInterval(() => {
            tick()
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [currentTime])

    let startingPointX = null


    let handleTouchStart = event => {
        startingPointX = event.touches[0].clientX
    }

    let handleTouchMove = event => {
        let diff = startingPointX - event.touches[0].clientX

        if (diff > 0) {
            return
        }

        refTime.current.style.left = window.screen.width - Math.abs(diff) + 'px';
        refList.current.style.left = (diff <= 0 ? diff + 'px' : '-100%')

    };

    let handleTouchEnd = event => {
        let diff = startingPointX - event.changedTouches[0].clientX

        if (diff < 0) {
            refTime.current.style.left = window.screen.width + 'px'
            refList.current.style.left = 0
        }
    }


    return (
        <div
            ref={refTime}
            className={styles.time}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {currentTime}
        </div>
    )
}

export default Time
