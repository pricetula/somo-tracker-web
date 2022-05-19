import React from 'react'
import IconButton from './components/IconButton'
import IconList from './components/IconList'
import NavList from './components/NavList'
import style from './Sidemenu.module.scss'

const Sidemenu = () => {
    const [expanded, setExpanded] = React.useState(false);
    return (
        <aside className={style.wrapper}>
            <section className={style.search}>
                <IconButton
                    iconName={expanded ? 'arrow_forward_ios' : 'arrow_back_ios'}
                    onClick={() => setExpanded(!expanded)}
                />
            </section>
            <section className={style.navigation}>
                <IconList />
                <NavList expanded={expanded}/>
            </section>
        </aside>
    );
};

export default Sidemenu;
