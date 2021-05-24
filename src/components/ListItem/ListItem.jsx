import React from 'react'
import styles from './ListItem.module.css'

function ListItem({ note }) {
    return (
        <div className={styles.wrapper}>
            <span>
                {note}
            </span>
        </div>
    )
}

export default ListItem
