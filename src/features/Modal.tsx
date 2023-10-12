import { FC } from "react";
import {CloseButton, Overlay, OverlayInner} from "../common/styles/StyledComponents.tsx";
type PropsType = {
  show: boolean;
  item: any;
  onClose: () => void;
};

const Modal: FC<PropsType> = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <Overlay>
        <OverlayInner>
          <CloseButton onClick={onClose} />
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </OverlayInner>
      </Overlay>
    </>
  );
};
export default Modal;
