import type { Post } from './types'
import { DateTime } from 'luxon'

// sort posts by date
export default function sortPost(posts: Post[]): Post[] {
    return posts.sort((a: Post, b: Post) => {
        const aDate: (typeof a.frontMatter.date) = DateTime.fromISO(a.frontMatter.date)
        const bDate: (typeof a.frontMatter.date) = DateTime.fromISO(b.frontMatter.date)
        return bDate - aDate;
    })
}