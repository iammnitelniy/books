import {instance} from "../../../common/api/common.api.ts";

export const headerApi = {
    getBooks(arg: Partial<getBooksArgType>) {
       const {search, filter, maxResults, startIndex, order} = arg
        const category = filter === 'all' ? "" : filter
        return instance.get<BooksDomainType>(`?q=${search}+subject:${category}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${order}`);
    },
}
export type BooksDomainType = {
    totalItems: number
    items: SearchBook[]
    startIndex?: string;
}

type volumeInfoType = {
    title?: string
    authors?: string[]
    description?: string
    categories?: string[]
    imageLinks?: ImageSizeType
    publishedDate?: string
}

type ImageSizeType = {
    smallThumbnail: string
    thumbnail: string
}

export type SearchBook = {
    id: string
    volumeInfo: volumeInfoType
}

export type getBooksArgType = {
    search: string,
    maxResults: string,
    startIndex: string
    filter: string
    order: string
}