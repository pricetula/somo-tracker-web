import React from 'react'
import LinkComponent from 'next/link'
import style from './Link.module.scss'

export interface LinkProps {
    children: React.ReactNode
    href: string
    customClass?: string
}

const Link = ({
    children,
    href,
    customClass
}: LinkProps) => (
    <LinkComponent href={href}>
        <a className={`${style.link} ${customClass}`}>
            {children}
        </a>
    </LinkComponent>
)

export default Link
