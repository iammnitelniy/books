import Card from "../Book/Card.tsx";
import {Container} from "../../../common/styles/StyledComponents.tsx";
import {Header} from "../../Header/ui/Header.tsx";
import {useState} from "react";
import {headerThunks} from "../../Header/model/bookSearch.slice.ts";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store.ts";

export const Books = () => {
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const books = useSelector((state: AppRootStateType) => state.books)
    console.log(books.items[1]?.volumeInfo.publishedDate)
    console.log(books.items[1]?.volumeInfo.categories)

    const textTotalCount = books.totalItems ? `Found ${books.totalItems} results` : `For this request no books were found`;

  return (
    <>
        <Header setSearch={setSearch} search={search}/>
        <span>{textTotalCount}</span>

      <Container>
          <Card />
      </Container>
        <button onClick={() => {
            dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: (books.items?.length).toString()}))


        }}>Load more</button>
    </>
  );
};

