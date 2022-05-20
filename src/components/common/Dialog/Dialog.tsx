import React from 'react'
import preventClickPropagation from 'src/utils/preventClickPropagation'
import Button from 'src/components/common/Button'
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

    // return function to be handled by key down event listener only once ref has changed
    const handleKeyDown = React.useCallback((event: KeyboardEvent): void => {
        if (event.code === "Escape") {
            event?.preventDefault?.()
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
            <section className={style.dialogSection} onClick={preventClickPropagation}>
                <header className={style.dialogSectionHeader}>
                    {header}
                    <Button
                        onClick={handleClose}
                        customClass={style.dialogSectionHeaderClose}
                    >
                        <i className="material-icons">close</i>
                    </Button>
                </header>
                <div className={style.dialogSectionContent}>
                    {children}
                </div>
                <footer className={style.dialogSectionFooter}>
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
