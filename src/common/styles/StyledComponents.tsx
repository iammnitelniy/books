import styled from "styled-components";

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

export const StyledHeader = styled.header`
  width: 100%;
  height: 300px;
  background-color: var(--primary-color); /* Измените фон на основной цвет */
  color: var(--secondary-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Улучшенная тень */
  display: flex;
  flex-direction: column;
  align-items: center;
 
  

  &::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    //background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    //background-size: cover; /* Заполнение изображения по размеру */
    z-index: -1;
  }
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
    width: 350px;
    height: 35px;
    padding: 0 0.5rem;
    font-size: 15px;
    font-weight: bold;
  }

  button {
    background-color: #535bf2;
    outline: none;
    border: none;
    height: 35px;
    padding: 0 0.5rem;
  }
`;

export const Container = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 0.5fr));
  grid-gap: 20px;
  box-sizing: border-box;
`;

export const CardStyle = styled.div`
  background-color: var(--secondary-color);
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 10px;
  box-shadow: 0 5px 5px rgba(212, 185, 150, 0.5);
  transition: 0.5s;
  text-align: center;
  position: relative;

  &:hover {
    transform: scale(0.9);
    background-color: rgba(255, 255, 255, 0.8);
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 1rem 1rem 0 0;
  }

  .bottom {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 14px;
      margin-bottom: 32px;
    }

    .amount {
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      background-color: var(--primary-color);
      color: var(--secondary-color);
      font-size: 13px;
      font-weight: bold;
      padding: 0.2rem;
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
  width: 700px;
  height: 550px;
  padding: 1.5rem;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
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
    justify-content: center;

    img {
      margin-right: 20px;
      width: 150px;
      height: 200px;
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
    }
  }

  .description {
    margin-top: 2rem;
    text-align: justify;
    font-size: 13px;
  }
`;