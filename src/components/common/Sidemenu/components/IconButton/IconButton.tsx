import React from 'react'
import Button from 'src/components/common/Button'
import style from './IconButton.module.scss'

export interface IconButtonProps {
    iconName: string
    customClass?: string
    onClick(): void
}

const IconButton = ({ iconName, onClick, customClass }: IconButtonProps) => (
    <Button
        customClass={`${style.wrapper} ${customClass}`}
        leftIconName={iconName}
        onClick={onClick}
    />
)

IconButton.defaultProps = {
    customClass: ''
}

export default IconButton
