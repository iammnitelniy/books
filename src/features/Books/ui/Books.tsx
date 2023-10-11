import Card from "../Book/Book.tsx";
import {Container} from "../../../common/styles/StyledComponents.tsx";
import {Header} from "../../Header/ui/Header.tsx";

export const Books = () => {


  return (
    <>
        <Header />

      <Container>
          <Card />
      </Container>
    </>
  );
};

