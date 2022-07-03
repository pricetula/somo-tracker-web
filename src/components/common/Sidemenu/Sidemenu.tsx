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
            <aside className={style.wrapper}>
                <div className={style.search}>
                    <IconButton
                        iconName={!expanded ? 'arrow_forward_ios' : 'arrow_back_ios'}
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
