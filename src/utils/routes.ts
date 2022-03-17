export interface AppRoute {
  label: string
  href: string
  parentHref: string
};

export type AppRoutes = AppRoute[];

export const appRouteList: AppRoutes = [
  {
    label: 'home',
    href: '/',
    parentHref: null
  }
];