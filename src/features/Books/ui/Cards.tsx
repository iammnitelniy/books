import {SearchBook} from "../../Header/api/header.api.ts";
import {LinearLoader} from "../../../common/components/LinearLoader.tsx";
import {CardWithModel} from "../Card/CardWithModel.tsx";
import {ErrorCard} from "../Card/ErrorCard.tsx";
import {FC} from "react";
import {v1} from "uuid";

type Props = {
    books: SearchBook[]
}

export const Cards: FC<Props> = ({books}) => {


    if (!books) {
        return <LinearLoader/>
    }

    return (
        <>
            {books?.map((item: SearchBook, index) => {
                const bookExample = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                return bookExample !== undefined ? (
                    <CardWithModel key={v1()} item={item} bookExample={bookExample} />
                ) : (
                    <ErrorCard key={index} />
                );
            })}
        </>
    );
};

