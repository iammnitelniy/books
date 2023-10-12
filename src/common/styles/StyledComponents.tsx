import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

export const GlobalStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda&family=Poppins:wght@300&display=swap");

  * {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;

  }

  :root {
    --primary-color: #755139ff;
    --secondary-color: #d4b996ff;
  }

`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 600px;
  justify-content: center;
  align-content: flex-start;
`
export const SelectContainer = styled.div`
  height: 10vh;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`
export const StyledHeader = styled.header`
  width: 100%;
  height: 50vh;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;




`;

export const Row2 = styled.div`
  top: 10px;
  right: 150px;
  text-align: center;

  h2 {
    font-size: 3rem;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  img {
    margin-top: 30px;
    width: 250px;
  }
`;

export const Row1 = styled.div`
  h1 {
    font-size: 3rem;
    text-align: center;
    margin-left: 35px;
    font-family: "Bodoni Moda", serif;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    outline: 0;
    border: 0;
    padding: 0 0.5rem;
    font-size: 15px;
    font-weight: bold;
  }

  button {
    background-color: #535bf2;
    outline: none;
    border: none;
    padding: 0 0.5rem;
  }
`;
export const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #e9e9e9;
  padding: 2em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;


  &:hover {
    transform: scale(0.9);
    background-color: rgba(255, 255, 255, 0.8);
  }

  img {
    max-width: 100%;
    max-height: 200px;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 800px) {
      display: none;
    }

    .title {
      margin-bottom: 15px;
      font-size: 20px; /* Уменьшил размер шрифта заголовка */
      font-weight: 600;
    }
  }
`;
export const Overlay = styled.div`
  min-height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverlayInner = styled.div`
  background: white;
  width: 100%;
  max-width: 700px;
  height: 100%;
  max-height: 100vh;
  padding: 1.5rem;
  position: relative;
  box-sizing: border-box;
  overflow-y: auto;
  font-size: 1.3rem;

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    outline: none;
    border: none;
    font-size: 17px;
    background-color: transparent;
  }

  .inner-box {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    img {
      margin: 0 auto;
      width: 100%;
      max-height: 400px;
      image-rendering: high-quality;
    }

    h3 {
      margin-top: 10px;
      color: green;
    }

    h4 {
      color: blue;
    }

    button {
      outline: none;
      border: none;
      width: 100px;
      border-radius: 5px;
      background-color: #24a0ed;
      color: white;
      font-weight: bold;
      padding: 0.3rem 0.5rem;
      margin: 10px 0;
    }
  }

  .description {
    margin-top: 2rem;
    text-align: justify;
    font-size: 13px;
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  margin-left: 90%;
  font-size: 24px;
  color: var(--secondary-color);
  transition: color 0.3s; 
  cursor: pointer;

  &:hover {
    color: #755139ff; 
  }
`;

export const CloseButton: React.FC<{ onClick: () => void }> = ({onClick}) => {
    return (
        <CloseIcon icon={faTimes} onClick={onClick}/>
    );
};

