import "./App.css";

import {GlobalStyles} from "../common/styles/StyledComponents.tsx";
import {Books} from "../features/Books/ui/Books.tsx";

function App() {
  return (
    <>
        <GlobalStyles>

            <Books />

        </GlobalStyles>
    </>
  );
}

export default App;
