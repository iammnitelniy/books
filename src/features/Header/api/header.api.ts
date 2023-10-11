import {instance} from "../../../common/api/common.api.ts";

export const headerApi = {
    getBooks(arg: getBooksArgType) {
        debugger
        return instance.get<any>(`?q=${arg.search}&maxResults=${arg.maxResults}`);
    },
}
export type BooksDomainType = [

]

export type BookType = {

}

export type getBooksArgType = {
    search: string,
    maxResults: string
}