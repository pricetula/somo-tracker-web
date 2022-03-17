import getUrlWithInjectedValues from './getUrlWithInjectedValues';

describe('getUrlWithInjectedValues', () => {
    test('url with empty string to return null', () => {
        expect(
            getUrlWithInjectedValues({
                urlPattern: ''
            })
        ).toEqual(null)
    })

    test('url pattern without value to return same pattern', () => {
        const urlPattern = '/test/pattern'
        
        expect(
            getUrlWithInjectedValues({
                urlPattern
            })
        ).toEqual(urlPattern)
    })

    test('don\'t modify url pattern if a key has not been found', () => {
        expect(
            getUrlWithInjectedValues({
                urlPattern: '/test/[a]/pattern/[b]',
                values: {
                    a: 89,
                    z: 34
                }
            })
        ).toEqual('/test/89/pattern/[b]')
    })

    test('don\'t modify url pattern if a key has special characters', () => {
        expect(
            getUrlWithInjectedValues({
                urlPattern: '/test/[a]/pattern/[b]',
                values: {
                    a: 89,
                    '$b': 34
                }
            })
        ).toEqual('/test/89/pattern/[b]')
    })

    test('modify url pattern if a key is found', () => {
        expect(
            getUrlWithInjectedValues({
                urlPattern: '/test/[a]/pattern/[b]',
                values: {
                    a: 89,
                    b: 34
                }
            })
        ).toEqual('/test/89/pattern/34')
    })

    test('modify url pattern\'s first key found', () => {
        expect(
            getUrlWithInjectedValues({
                urlPattern: '/test/[a]/pattern/[a]',
                values: {
                    a: 89
                }
            })
        ).toEqual('/test/89/pattern/[a]')
    })
})