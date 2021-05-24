import React, { useState } from 'react'
import InputField from '../InputField/InputField';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.css'

function List({ refList, refTime }) {
    const [notes, setNotes] = useState([])

    const addNote = text => {
        if (!text) {
            return
        }

        setNotes([
            ...notes,
            text
        ])
    }

    let startingPointX = null

    let handleTouchStart = event => {
        startingPointX = event.touches[0].clientX
    };

    let handleTouchMove = event => {
        let diff = startingPointX - event.touches[0].clientX

        if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'BUTTON') {
            return
        } 

        if (diff < 0) {
            return
        }

        refList.current.style.left = '-' + diff + 'px';
        refTime.current.style.left = window.screen.width - diff + 'px'
    };

    let handleTouchEnd = event => {
        let diff = startingPointX - event.changedTouches[0].clientX;

        if (event.target.tagName === 'TEXTAREA' || event.target.tagName === 'BUTTON') {
            return
        } 

        if (diff > 0) {
            refList.current.style.left = '-100%'
            refTime.current.style.left = 0
        }
    }

    return (
        <div
            ref={refList}
            className={styles.list}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >

            <InputField addNote={addNote} refList={refList}/>

            {
                notes.map((item, index) => <ListItem
                    key={index}
                    note={item}
                />)
            }

        </div>
    )
}

export default List
