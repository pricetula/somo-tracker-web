import getShownAndHiddenBreadcrumbs from './getShownAndHiddenBreadcrumbs'
describe('getShownAndHiddenBreadcrumbs', () => {
    let mockSetShown = null;
    let mockSetHidden = null;

    beforeEach(() => {
        mockSetShown = jest.fn(x => null);
        mockSetHidden = jest.fn(x => null);
    })
    
    afterEach(() => {
        mockSetShown.mockRestore()
        mockSetHidden.mockRestore()
    })

    test('don\'t call setter functions if any input is falsy', () => {
        getShownAndHiddenBreadcrumbs({
            wrapperWidth: 0,
            actualListWidth: 0,
            actualListItems: [],
            breadCrumbList: [],
            setShown: mockSetShown,
            setHidden: mockSetHidden,
        })
        
        expect(mockSetShown.mock.calls.length).toBe(0)
        expect(mockSetHidden.mock.calls.length).toBe(0)

        getShownAndHiddenBreadcrumbs({
            wrapperWidth: 100,
            actualListWidth: 0,
            actualListItems: [],
            breadCrumbList: [],
            setShown: mockSetShown,
            setHidden: mockSetHidden,
        })
        
        expect(mockSetShown.mock.calls.length).toBe(0)
        expect(mockSetHidden.mock.calls.length).toBe(0)

        getShownAndHiddenBreadcrumbs({
            wrapperWidth: 100,
            actualListWidth: 20,
            actualListItems: [],
            breadCrumbList: [],
            setShown: mockSetShown,
            setHidden: mockSetHidden,
        })
        
        expect(mockSetShown.mock.calls.length).toBe(0)
        expect(mockSetHidden.mock.calls.length).toBe(0)

        getShownAndHiddenBreadcrumbs({
            wrapperWidth: 100,
            actualListWidth: 20,
            actualListItems: [{ clientWidth: 2 }],
            breadCrumbList: [],
            setShown: mockSetShown,
            setHidden: mockSetHidden,
        })
        
        expect(mockSetShown.mock.calls.length).toBe(0)
        expect(mockSetHidden.mock.calls.length).toBe(0)
    })

    test('if wrapperWidth > actualListWidth then call setShown method with breadCrumbList', () => {
        const breadCrumbList = [{ label: 'A', href: '/A' }]

        getShownAndHiddenBreadcrumbs({
            wrapperWidth: 100,
            actualListWidth: 20,
            actualListItems: [{ clientWidth: 4 }],
            breadCrumbList,
            setShown: mockSetShown,
            setHidden: (a) => null,
        })
        
        expect(mockSetShown.mock.calls.length).toBe(1)
        expect(mockSetShown.mock.calls[0][0]).toMatchObject(breadCrumbList)
    })

    test('if wrapperWidth < actualListWidth then call setShown and setHidden methods with correct values', () => {
        const breadCrumbList = [
            {label: 'A', href: '/A'},
            {label: 'B', href: '/B'},
            {label: 'C', href: '/C'}
        ]

        const actualListItems = [
            {clientWidth: 5},
            {clientWidth: 10},
            {clientWidth: 5},
        ]

        getShownAndHiddenBreadcrumbs({
            wrapperWidth: 15,
            actualListWidth: 20,
            actualListItems,
            breadCrumbList,
            setShown: mockSetShown,
            setHidden: mockSetHidden,
        })
        
        expect(mockSetShown.mock.calls.length).toBe(1)
        expect(mockSetShown.mock.calls[0][0]).toMatchObject([
            {label: 'A', href: '/A'},
            {label: '', href: '', expander: true},
            {label: 'C', href: '/C'},
        ])
        expect(mockSetHidden.mock.calls.length).toBe(1)
        expect(mockSetHidden.mock.calls[0][0]).toMatchObject([
            {label: 'B', href: '/B'}
        ])
    })
})