import React, { useState } from 'react'
import styles from './InputField.module.css'

function InputField({ addNote }) {
    const [textValue, setTextValue] = useState('')

    const handleTextareaOnChange = event => {
        setTextValue(event.target.value)
    }

    const handleOnClick = () => {
        addNote(textValue)
        setTextValue('')
    }

    return (
        <div className={styles.inputInner}>
            <div className={styles.wrapper} >

                <div className={styles.noticeTextarea}>
                    <textarea
                        className={styles.noticeTextareaItem}
                        placeholder='Type something'
                        value={textValue}
                        onChange={handleTextareaOnChange}
                    />
                </div>

                <div className={styles.sendingBtn}>
                    <button
                        className={styles.sendingBtnItem}
                        type='button'
                        onClick={handleOnClick}
                    >
                        add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InputField
