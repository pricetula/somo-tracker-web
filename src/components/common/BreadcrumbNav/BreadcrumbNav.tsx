import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { appRouteMap } from 'src/utils/routes';
import { ValuesToInjectInUrl } from 'src/utils/getUrlWithInjectedValues';
import Button from 'src/components/common/Button';
import getBreadCrumbList, {
    BreadCrumb,
    BreadCrumbs,
} from './utils/getBreadCrumbList'
import getShownAndHiddenBreadcrumbs from './utils/getShownAndHiddenBreadcrumbs'
import style from './BreadcrumbNav.module.scss';

export interface ShownBreadCrumb extends BreadCrumb {
    expander?: boolean
}

const BreadcrumbNav = () => {
    const router = useRouter()

    const [shown, setShown] = React.useState<ShownBreadCrumb[]>([]);
    const [list, setList] = React.useState<BreadCrumbs>([]);
    const [hidden, setHidden] = React.useState<BreadCrumbs>([]);
    const listEl = React.useRef(null);
    const navEl = React.useRef(null);

    React.useEffect(() => {
        /* eslint-disable react-hooks/exhaustive-deps */
        if (router?.isReady) {
            setList(
                (
                    getBreadCrumbList({
                        appRouteMap,
                        startingUrlPattern: router?.pathname,
                        values: router?.query as ValuesToInjectInUrl
                    }) ||
                    []
                ).reverse()
            )
        }
    }, [router?.isReady])

    React.useEffect(() => {
        if (navEl && listEl && list.length) {
            getShownAndHiddenBreadcrumbs({
                setShown,
                setHidden,
                breadCrumbList: list,
                actualListItems: listEl?.current?.getElementsByTagName('li'),
                wrapperWidth: (navEl?.current?.clientWidth || 0) - 50,
                actualListWidth: (listEl?.current?.clientWidth || 0),
            })
        }
    }, [list, setShown, setHidden]);

    return (
        <nav
            ref={navEl}
            aria-label="bread crumb"
            className={style.nav}
        >
            <ul className={style.shownList}>
                {shown.map((item) => (
                    <li key={item.href}>
                        {
                            item?.expander
                                ?  <Button leftIconName="expand_more" customClass={style.expander} />
                                : (
                                    <Link href={item.href}>
                                        <a>
                                            {item.label}
                                        </a>
                                    </Link>
                                )
                        }
                    </li>
                ))}
            </ul>

            <ul className={style.hiddenList}>
                {hidden.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href}>
                            <a>
                                {item.label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>

            <ul ref={listEl} className={style.baseList}>
                {list.map((item) => (
                    <li key={item.href}>{item.label}</li>
                ))}
            </ul>
        </nav>
    );
}

export default BreadcrumbNav;
