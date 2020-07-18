export default function flatGroup<T extends Record<any, any>>(
    arr: Array<T>,
    keys: Array<string>
): Record<
    string,
    Record<
        string,
        {
            // @ts-ignore
            keys: string[];
            [key: string]: Array<T>;
        }
    >
> {
    const groups: Record<string, any> = {};

    for (const k of keys) {
        groups[k] = {};
        const group = groups[k];
        const keyOfGroups: Array<any> = (groups[k]["keys"] = []);

        for (const item of arr) {
            const value = item[k];
            if (keyOfGroups.indexOf(value) === -1) keyOfGroups.push(value);

            const groupKey: string = String(value);
            if (groupKey in group) group[groupKey].push(item);
            else group[groupKey] = [item];
        }
    }

    return groups;
}
