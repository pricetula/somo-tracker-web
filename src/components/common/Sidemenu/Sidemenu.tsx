import React from 'react'
import IconButton from './components/IconButton'
import NavList from './components/NavList'
import style from './Sidemenu.module.scss'

const Sidemenu = () => {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <>
            <div
                className={`${style.backdrop} ${expanded ? style.expandedBackdrop : ''}`}
                onClick={() => setExpanded(false)}
            />

            <aside className={`${style.wrapper} ${expanded ? style.expanded : ''}`}>
                <div className={style.search}>
                    <IconButton
                        customClass={style.expander}
                        iconName={!expanded ? 'keyboard_double_arrow_right' : 'keyboard_double_arrow_left'}
                        onClick={() => setExpanded(!expanded)}
                    />
                </div>

                <div className={style.navigation}>
                    <NavList expanded={expanded} />
                </div>
            </aside>
        </>
    );
};

export default Sidemenu;
