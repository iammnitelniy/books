import {instance} from "../../../common/api/common.api.ts";

export const headerApi = {
    getBooks(arg: getBooksArgType) {
        return instance.get<BooksDomainType>(`?q=${arg.search}&maxResults=${arg.maxResults}&startIndex=${arg.startIndex}`);
    },
}
export type BooksDomainType = {
    totalItems: number
    items: SearchBook[]
    startIndex?: string;
}

type volumeInfoType = {
    title: string
    authors: string[]
    description: string
    categories: string[]
    imageLinks: ImageSizeType
    publishedDate: string
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
}