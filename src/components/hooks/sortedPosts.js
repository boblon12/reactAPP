import { useMemo } from "react";

export const useSortedPost = (sortSelected, posts) => {
    const sortedPosts = useMemo(() => {
        if (sortSelected) {
            return [...posts].sort((a, b) => a[sortSelected].localeCompare(b[sortSelected]))
        }
        else
            return posts;
    }, [sortSelected, posts])

    return sortedPosts;
}