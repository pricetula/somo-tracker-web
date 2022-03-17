import {appRouteMap} from 'src/utils/routes';
import getBreadCrumbList from './getBreadCrumbList'

describe('getBreadCrumbList', () => {
    test('url with empty string to return null', () => {
        expect(
            getBreadCrumbList({
                appRouteMap,
                startingUrlPattern: ''
            })
        ).toEqual(null)
    })

    test('url with empty string to return null if starting url pattern not found', () => {
        expect(
            getBreadCrumbList({
                appRouteMap,
                startingUrlPattern: 'RandomFakeUrlPattterrrrnnnn'
            })
        ).toEqual(null)
    })

    test('url without parent href should return null', () => {
        const list = getBreadCrumbList({
            appRouteMap,
            startingUrlPattern: '/tests/attempts/[id]/analytics/[analyticsid]',
            values: {
                id: 23,
                analyticsid: 81,
            }
        })

        const expectedList = [
            {
                label: 'home',
                href: '/',
              },
              {
                label: 'tests',
                href: '/tests',
              },
              {
                label: 'test attempts',
                href: '/tests/attempts',
              },
              {
                label: 'test attempt',
                href: '/tests/attempts/23',
              },
              {
                label: 'attempt analytics',
                href: '/tests/attempts/23/analytics',
              },
              {
                label: 'attempt analytic',
                href: '/tests/attempts/23/analytics/81',
              }
        ]

        expect(list.length).toEqual(expectedList.length)
    })
})