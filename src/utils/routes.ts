export interface AppRoute {
  label: string
  href: string
  parentHref: string
};

export type AppRoutes = AppRoute[];

export type AppRouteMap = {[k: string]: AppRoute}

export const appRouteList: AppRoutes = [
  {
    label: 'home',
    href: '/',
    parentHref: null
  },
  {
    label: 'tests',
    href: '/tests',
    parentHref: '/'
  },
  {
    label: 'test attempts',
    href: '/tests/attempts',
    parentHref: '/tests'
  },
  {
    label: 'test attempt',
    href: '/tests/attempts/[id]',
    parentHref: '/tests/attempts'
  },
  {
    label: 'attempt analytics',
    href: '/tests/attempts/[id]/analytics',
    parentHref: '/tests/attempts/[id]'
  },
  {
    label: 'attempt analytic',
    href: '/tests/attempts/[id]/analytics/[analyticsid]',
    parentHref: '/tests/attempts/[id]/analytics'
  }
];

export const appRouteMap = appRouteList.reduce(
  (a, r) => ({
    ...a,
    [r.href]: r
  }),
  {},
)