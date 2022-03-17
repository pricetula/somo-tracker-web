import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { appRouteMap } from 'src/utils/routes';
import { ValuesToInjectInUrl } from 'src/utils/getUrlWithInjectedValues';
import getBreadCrumbList, { BreadCrumbs } from './utils/getBreadCrumbList'
import style from './BreadcrumbNav.module.scss';

const BreadcrumbNav = () => {
  const router = useRouter()

  const [shown, setShown] = React.useState<BreadCrumbs>([]);
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
    if (listEl && navEl && list.length) {
      let navWidth = navEl?.current?.clientWidth || 0;
      if (navWidth) {
        const listItems = listEl?.current?.getElementsByTagName('li');
        const showIndexes = [0];
        const hideIndexes = [];

        let totalItemWidths = listItems[0]?.clientWidth || 0;

        if (totalItemWidths) {
          totalItemWidths += 50
        }

        let addExpander = false;

        for (let i = listItems?.length || 0; i > 1; i--) {
          const index = i - 1;

          totalItemWidths += listItems[index]?.clientWidth;

          if (totalItemWidths < navWidth) {
            showIndexes.push(index);
          } else {
            if (!addExpander) {
              addExpander = true;
            }

            hideIndexes.push(index);
          }
        }

        let showCollection = [];
        let hideCollection = [];

        list.forEach((item, itemIndex) => {
          if (showIndexes.includes(itemIndex)) {
            showCollection.push(item);
            if (itemIndex === 0 && addExpander) {
              showCollection.push('[...]')
            }
          } else if (hideIndexes.includes(itemIndex)) {
            hideCollection.push(item);
          }
        })

        if (showCollection.length) {
          setShown(showCollection);
        }

        if (hideCollection.length) {
          setHidden(hideCollection);
        }
      }
    }
  }, [list, setShown, setHidden]);

  return (
    <nav
      ref={navEl}
      aria-label="bread crumb"
      className={style.nav}
    >
      <ul>
        {shown.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <a>
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <ul>
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

      <ul ref={listEl} className={style.hiddenList}>
        {list.map((item) => (
          <li key={item.href}>{item.href}</li>
        ))}
      </ul>
    </nav>
  );
}

export default BreadcrumbNav;
