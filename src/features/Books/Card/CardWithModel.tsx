import {CardStyle} from "../../../common/styles/StyledComponents.tsx";
import Modal from "../../Modal.tsx";
import {FC, useState} from "react";
import {SearchBook} from "../../Header/api/header.api.ts";

type Props = {
    item: SearchBook
    bookExample: string | undefined
}

export const CardWithModel: FC<Props> = ({item, bookExample}) => {

    const [show, setShow] = useState<boolean>(false);
    const [bookItem, setItem] = useState<SearchBook>({id: '1', volumeInfo: {title: ''}});

    return (
        <>
            <CardStyle >
                <div className={'cardBox'}
                    onClick={() => {
                    setShow(true);
                    setItem(item);
                }}
                >
                    <img src={bookExample} alt="" />
                    <div className="bottom">
                        <h3 className="title">{item.volumeInfo.title}</h3>

                    </div>

                </div>
            </CardStyle>
            <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
            />
        </>
    );
};

