import "./App.css";
import {Books} from "../features/Books/ui/Books.tsx";
import {GlobalStyle} from "../common/styles/StyledComponents.tsx";

function App() {
  return (
    <>
        <GlobalStyle/>

            <Books />

    </>
  );
}

export default App;
