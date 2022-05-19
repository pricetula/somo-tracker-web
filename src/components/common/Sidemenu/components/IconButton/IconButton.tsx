import React from 'react'
import Button from 'src/components/common/Button'
import style from './IconButton.module.scss'

export interface IconButtonProps {
    iconName: string
    onClick(): void
}

const IconButton = ({ iconName, onClick }: IconButtonProps) => (
    <Button
        customClass={style.wrapper}
        leftIconName={iconName}
        onClick={onClick}
    />
)

export default IconButton
