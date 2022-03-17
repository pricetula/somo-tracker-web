import getUrlWithInjectedValues, { ValuesToInjectInUrl } from 'src/utils/getUrlWithInjectedValues'
import { AppRouteMap } from 'src/utils/routes'

export interface BreadCrumb {
    label: string,
    href: string,
}

export type BreadCrumbs = BreadCrumb[]

export interface GetBreadCrumbListInput {
    appRouteMap: AppRouteMap,
    startingUrlPattern: string,
    values?: ValuesToInjectInUrl,
}

export default ({
    values,
    appRouteMap,
    startingUrlPattern,
}: GetBreadCrumbListInput): BreadCrumbs => {
    if (
        !startingUrlPattern ||
        !appRouteMap[startingUrlPattern]?.parentHref
    ) return null

    const l = []

    let k = startingUrlPattern

    while (appRouteMap[k].href) {
        l.push({
            label: appRouteMap[k].label,
            href: getUrlWithInjectedValues({
                values,
                urlPattern: appRouteMap[k].href
            }),
        })

        if (!appRouteMap[k].parentHref) break
        
        k = appRouteMap[k].parentHref
    }

    return l
}