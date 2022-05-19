import React from 'react'
import style from './NavList.module.scss'

export interface NavListProps {
    expanded: boolean
}

const NavList = ({ expanded }: NavListProps) => {
    return (
        <ul className={style.wrapper}>
            <li></li>
        </ul>
    )
}

export default NavList