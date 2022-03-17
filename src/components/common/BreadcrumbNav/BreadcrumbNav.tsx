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
            const navWidth = (navEl?.current?.clientWidth || 0) - 50;
            const listWidth = (listEl?.current?.clientWidth || 0);

            if (navWidth > listWidth) {
                setShown(list);
                return;
            }

            const listItems = listEl?.current?.getElementsByTagName('li');

            if (!listItems.length) return;

            let addExpander = false;

            let showIndexes = [];

            let hideIndexes = [];

            let totalItemWidths = listItems[0]?.clientWidth || 0;

            for (let i = listItems?.length - 1 || 0; i > 0; i--) {
                totalItemWidths += listItems[i]?.clientWidth;

                if (totalItemWidths < navWidth) {
                    showIndexes.push(list[i]);
                } else {
                    if (!addExpander) {
                        addExpander = true;
                    }

                    hideIndexes.push(list[i]);
                }
            }

            let sl: ShownBreadCrumb[] = [list[0]]

            if (addExpander) {
                sl = [
                    ...sl,
                    {
                        href: '',
                        label: '',
                        expander: true,
                    }
                ]
            }

            sl = [...sl, ...showIndexes.reverse()]

            if (sl.length) {
                setShown(sl);
            }
            
            if (hideIndexes.length) {
                setHidden(hideIndexes);
            }
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
