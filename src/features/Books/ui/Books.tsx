import {Container} from "../../../common/styles/StyledComponents.tsx";
import {Header} from "../../Header/ui/Header.tsx";
import {useState} from "react";
import {headerThunks} from "../../Header/model/bookSearch.slice.ts";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store.ts";
import {Cards} from "./Cards.tsx";
import {SuperSelect} from "../../../common/components/SuperSelect.tsx";

type CategoriesType = 'all'| 'Art'| 'Biography'| 'Computers'| 'History'| 'Medical'| 'Poetry'
type BooksSortsType = 'newest' | 'relevance'

export const Books = () => {
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const booksDomain = useSelector((state: AppRootStateType) => state.books)
    const books = booksDomain.items
    const textTotalCount = books  ? `Founded books: ${booksDomain.totalItems} ` : `For this request no books were found`;
    const categories = ['all', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry']
    const sortsOptions = [{value: 'newest', label: 'newest'}, {value: 'relevance', label: 'relevance'}]
    const selectOptions = categories.map((el) => ({ value: el, label: el }));
    const [category, setCategory] = useState<CategoriesType>("all")
    const [sortBy, setSortby] = useState<BooksSortsType>('relevance')



    const onChangeSelectCategoryHandler = (value: string) => {
        setCategory(value as CategoriesType)
       dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: '0', filter: value, order: sortBy}))

    }
    const onChangeSortHandler = (value: string) => {
        setSortby(value as BooksSortsType)
       dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: '0', filter: category, order: value as BooksSortsType}))

    }


    console.log(booksDomain)

  //  const filteredCategoriesBooks = books?.filter((cd) => category === 'All' ? books : cd?.volumeInfo?.categories?.[0] !== category )


  return (
    <>
        <div>
            <Header setSearch={setSearch} search={search}/>

        </div>
        <span>{textTotalCount}</span>

        <div>




            <Container>
             {/*{books.length !== 0}*/}
                    <SuperSelect options={sortsOptions} value={sortBy} callBack={(value: string) => onChangeSortHandler(value)} />
                    <SuperSelect options={selectOptions} value={category} callBack={(value: string) => onChangeSelectCategoryHandler(value)} />





                <Cards books={books}/>
            </Container>
            <button onClick={() => {
                dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: (books?.length).toString(), filter: category, order: "0"}))


            }}>Load more</button>


        </div>

    </>
  );
};

