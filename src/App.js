import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Home from "./component/Home";
import AllMovies from "./component/AllMovies.js";
import logo from "./assets/Logo.png";
import user from "./assets/User.png";
import arrow from "./assets/Arrow.png";
import lupa from "./assets/Lupa.png";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  background-color:transparent;
  color:white;
  font-family:Arial, Helvetica, sans-serif;
}
body{
  background-color:black;
}
`;

const TopBox = styled.div`
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
  margin-left: 3.4rem;
`;
const Logo = styled.img`
  height: 2.5rem;
`;
const MenuBox = styled.nav`
  display: flex;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
`;
const Drop = styled.div`
  margin-left: 1.4rem;
  position: relative;
  display: inline-block;
`;
const DropList = styled.div`
  position: absolute;
  background-color: black;
  min-width: 8.5rem;
  min-height: 6.7rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.4rem;
`;
const DropButton = styled.button`
  border: none;
  cursor: pointer;
  width: 8.5rem;
  padding-left: 0.8rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;
const DropImg = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: middle;
  display: inline-block;
`;
const DropLi = styled.p`
  font-size: 0.8rem;
  margin-left: 0.8rem;
`;
const DropLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  margin-left: 0.8rem;
`;
const SearchBox = styled.div`
  display: flex;
  margin-right: 3.4rem;
`;
const Add = styled.button`
  height: 2rem;
  width: 7rem;
  background-color: #e71b27;
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffffff;
  }
`;
const Search = styled.input`
  width: 25rem;
  margin-left: 0.9rem;
  font-size: 0.9rem;
  padding: 0.4rem;
  background-color: #2c2c2c;
  border-radius: 4px;
  background-image: url(${lupa});
  background-size:1.18rem;
  background-repeat: no-repeat;
  background-position: 0.3rem;
  padding-left: 2rem;
  border: none;
`;
const User = styled.div`
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserIcon = styled.img`
  height: 2rem;
`;
const Arrow = styled.img`
  height: 1.5rem;
`;

export default class App extends React.Component {
  state = {
    stateList: false
  };

  handleList = () => {
    this.setState({ stateList: !this.state.stateList });
  };

  render() {
    return (
      <Router>
        <TopBox>
          <GlobalStyle />
          <IconBox>
            <Logo src={logo} alt="" />
            <MenuBox>
              <Menu>
                <Item to="/">Início</Item>
                <Drop>
                  <DropButton
                    onClick={this.handleList}
                    onMouseEnter={() => {
                      this.setState({ stateList: true });
                    }}
                  >
                    Categorias
                    <DropImg src={arrow} alt="" />
                  </DropButton>
                  {this.state.stateList && (
                    <DropList
                      onMouseLeave={() => {
                        this.setState({ stateList: false });
                      }}
                    >
                      <DropLink to="/AllMovies">Todos</DropLink>
                      <DropLi>Favoritos</DropLi>
                      <DropLi>Já vistos</DropLi>
                      <DropLi>Adicionados</DropLi>
                    </DropList>
                  )}
                </Drop>
              </Menu>
            </MenuBox>
          </IconBox>
          <SearchBox>
            <Add>Adicionar filme</Add>
            <Search type="text" placeholder="Pesquisar" />
            <User>
              <UserIcon src={user} alt="" />
              <Arrow src={arrow} alt="" />
            </User>
          </SearchBox>
        </TopBox>
        <Routes>
          <Route path="/AllMovies" element={<AllMovies />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}