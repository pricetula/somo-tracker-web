import { BreadCrumb } from './getBreadCrumbList';

export interface ShownBreadCrumb extends BreadCrumb {
    expander?: boolean
}

export type ShownBreadCrumbs = ShownBreadCrumb[]

export interface ActualListItem {
    clientWidth: number
}

export type ActualListItems = ActualListItem[]

export interface GetShownAndHiddenBreadcrumbsInput {
    wrapperWidth: number
    actualListWidth: number
    actualListItems: ActualListItems
    breadCrumbList: ShownBreadCrumbs
    setShown(v: ShownBreadCrumbs): void
    setHidden(v: ShownBreadCrumbs): void
}

function f({
    wrapperWidth,
    actualListItems,
    actualListWidth,
    breadCrumbList,
    setHidden,
    setShown,
}: GetShownAndHiddenBreadcrumbsInput) {
    if (
        !wrapperWidth ||
        !actualListWidth ||
        !actualListItems?.length ||
        !breadCrumbList?.length ||
        !setHidden ||
        !setShown
    ) return

    if (wrapperWidth > actualListWidth) {
        setShown(breadCrumbList);
        return;
    }

    let addExpander = false;

    let showItems = [];

    let hideItems = [];

    let totalItemWidths = actualListItems[0]?.clientWidth || 0;

    for (let i = actualListItems?.length - 1 || 0; i > 0; i--) {
        totalItemWidths += actualListItems[i]?.clientWidth;

        if (totalItemWidths < wrapperWidth) {
            showItems.unshift(breadCrumbList[i]);
        } else {
            if (!addExpander) {
                addExpander = true;
            }

            hideItems.push(breadCrumbList[i]);
        }
    }

    let sl: ShownBreadCrumb[] = [breadCrumbList[0]]

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

    sl = [...sl, ...showItems]

    if (sl.length) {
        setShown(sl);
    }

    if (hideItems.length) {
        setHidden(hideItems);
    }


}

export default f;