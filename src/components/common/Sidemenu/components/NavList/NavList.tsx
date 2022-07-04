import React from 'react'
import Link from 'src/components/common/Link'
import style from './NavList.module.scss'

export interface NavListProps {
    expanded: boolean
}

const NavList = ({ expanded }: NavListProps) => {
    return (
        <ul className={`${style.wrapper} ${expanded ? style.expanded : ''}`}>
            <li>
                <Link href='/' customClass={style.linkWrapper}>
                    {/* <i className="material-icons">{props.leftIconName}</i> */}
                </Link>
            </li>
        </ul>
    )
}

export default NavList

