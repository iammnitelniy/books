import {Container, Content, HeaderContainer, SelectContainer} from "../../../common/styles/StyledComponents.tsx";
import {Header} from "../../Header/ui/Header.tsx";
import {useState} from "react";
import {headerThunks} from "../../Header/model/bookSearch.slice.ts";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../app/store.ts";
import {Cards} from "./Cards.tsx";
import {SuperSelect} from "../../../common/components/SuperSelect.tsx";
import {ButtonUniversal} from "../../../common/components/ButtonUniversal.tsx";
import {LinearLoader} from "../../../common/components/LinearLoader.tsx";
import {selectAppStatus} from "../../../app/app.selectors.ts";

export type CategoriesType = 'all'| 'Art'| 'Biography'| 'Computers'| 'History'| 'Medical'| 'Poetry'
export type BooksSortsType = 'newest' | 'relevance'

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
    const status = useSelector(selectAppStatus);



    const onChangeSelectCategoryHandler = (value: string) => {
        setCategory(value as CategoriesType)
       dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: '0', filter: value, order: sortBy}))

    }
    const onChangeSortHandler = (value: string) => {
        setSortby(value as BooksSortsType)
       dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: '0', filter: category, order: value as BooksSortsType}))

    }

const afterSearch = books.length !== 0



  return (
    <div>
        <HeaderContainer>
            <Header setSearch={setSearch} search={search} setCategory={setCategory} setSortBy={setSortby}></Header>

            {afterSearch &&
                <SelectContainer>
                    <div>{textTotalCount}</div>
                    <SuperSelect options={sortsOptions} value={sortBy} callBack={(value: string) => onChangeSortHandler(value)} />
                    <SuperSelect options={selectOptions} value={category} callBack={(value: string) => onChangeSelectCategoryHandler(value)} />
                </SelectContainer>

            }
        </HeaderContainer>


        <Content>
            {status === "loading" && <LinearLoader />}

            <Container>

                <Cards books={books} />
            </Container>


            {afterSearch &&

            <ButtonUniversal disabled={!afterSearch} callBack={() => {
                dispatch(headerThunks.fetchBooks({search, maxResults: '30', startIndex: (books?.length).toString(), filter: category, order: sortBy}))

            }} name={'Load more'}/>}


        </Content>

    </div>
  );
};

