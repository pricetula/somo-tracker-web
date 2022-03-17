export interface DynamicRouteGeneratorInput {
    urlPattern: string
    values?: {[key: string]: string | number}
}

export default (
    {
        urlPattern,
        values,
    }: DynamicRouteGeneratorInput
) => {
    if (!urlPattern) return null;

    if (!values) return urlPattern;

    return Object.keys(values).reduce(
        (a, k) => {
            // check if any special characters are on the key
            if (!k.match("^[a-zA-Z0-9_]*$")) return a;

            // look for occurence of key with [] around, replace the string with value from values object
            // only first matched key should change since one can't have multiple named routes with the same name
            return a.replace(`[${k}]`, values[k] + '');
        },
        urlPattern,
    )
}