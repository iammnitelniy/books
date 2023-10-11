import Modal from "../../Modal.tsx";
import {FC, useState} from "react";
import {CardStyle} from "../../../common/styles/StyledComponents.tsx";
import {AppRootStateType} from "../../../app/store.ts";
import {useSelector} from "react-redux";

type PropsType = {

};
const Card: FC<PropsType> = () => {

  const {books} = useSelector((state: AppRootStateType) => state.books)

  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <>
      {books?.items.map((item: any) => {
        const thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail != undefined ) {
          return (
            <>
              <CardStyle>
              <div onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
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
        }
      })}
    </>
  );
};
export default Card;
