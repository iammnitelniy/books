import "./App.css";
import {Books} from "../features/Books/ui/Books.tsx";
import {GlobalStyle} from "../common/styles/StyledComponents.tsx";
import {ErrorSnackbar} from "../common/components/ErrorSnackbar/ErrorSnackbar.tsx";


function App() {
  return (
    <>
        <ErrorSnackbar />
        <GlobalStyle/>

            <Books />

    </>
  );
}

export default App;
