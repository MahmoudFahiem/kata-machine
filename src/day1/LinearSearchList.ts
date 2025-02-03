export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (const haystackItem of haystack) {
        if (haystackItem === needle) return true;
    }

    return false;
}
