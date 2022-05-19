import React from 'react'
import IconButton from '../IconButton'
import style from './IconList.module.scss'

const IconList = () => {
    return (
        <ul className={style.wrapper}>
            <li>
                <IconButton
                    iconName="dashboard"
                    onClick={console.log}
                />
            </li>
        </ul>
    )
}

export default IconList
