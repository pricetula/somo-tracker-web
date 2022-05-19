import React from 'react'

const preventClickPropagation = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (e) {
        e?.stopPropagation()
    }
}

export default preventClickPropagation
