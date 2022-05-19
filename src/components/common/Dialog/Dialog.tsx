import React from 'react'
import style from './Dialog.module.scss'

/*
    Dialog interactive component which overlays other contents on a page, such as a dismissible alert, inspector, or subwindow.
*/

export interface DialogProps {
    open: boolean
    closeOnBackdropClick: boolean
    onClose(): void
    children: React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
}

interface CustomDialogElement extends HTMLElement {
    showModal(): void
    open: boolean
    close(): void
}

const Dialog = (
    {
        open,
        onClose,
        header,
        footer,
        children,
        closeOnBackdropClick,
    }: DialogProps
) => {
    // const [hideDialogClass, setHideDialogClass] = React.useState('')
    const [ref, setRef] = React.useState<React.RefObject<CustomDialogElement>>(null)

    const handleClose = () => {
        if (ref) {
            console.log('handleClose function is called', style.hide)
            const closer = (e) => {
                // only close dialog if animation is for hide dialog content
                if (style?.['hide-dialog-content'] === e?.animationName) {
                    ref?.current?.classList.remove(style.hide)
                    onClose()
                    ref?.current?.close?.()
                    window.removeEventListener("webkitAnimationEnd", closer)
                }
            }
            ref?.current?.classList.add(style.hide)
            // only when closing dialog add event listener to run closer function when animation has finished
            window.addEventListener("webkitAnimationEnd", closer)
        }
    }

    const handleBackdropClick = () => {
        if (closeOnBackdropClick) {
            handleClose()
        }
    }

    const handleKeyDown = React.useCallback((event: KeyboardEvent): void => {
        event?.preventDefault?.()
        if (event.code === "Escape") {
            handleClose()
        }
    }, [ref])

    React.useEffect(() => {
        if (open && !ref?.current?.open) {
            ref?.current?.showModal?.()
        }
    }, [open, ref])

    React.useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [handleKeyDown])

    React.useEffect(() => {
        setRef(React.createRef<CustomDialogElement>())
    }, [])

    return (
        <dialog
            className={style.wrapper}
            ref={ref}
            onClick={handleBackdropClick}
        >
            <section className="dialog-section">
                <header className="dialog-section__header">
                    {header}
                </header>
                <div className="dialog-section__content">
                    {children}
                </div>
                <footer className="dialog-section__footer">
                    {footer}
                </footer>
            </section>
        </dialog>
    )
}

Dialog.defaultProps = {
    footer: null,
    header: null,
}

export default Dialog
