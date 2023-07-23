import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  line-height: 18px;
  width: 100%;
  min-width: 1000px;
  padding: 24px;
  min-height: 30px;
  z-index: 1000;
  text-align: start;
`;
export const HeaderContainer = styled.div`
  padding: 0 36px;
  position: relative;
  display: flex;
  flex-flow: column;
`;

export const LogoLink = styled.h1`
  padding: 15px 0;
`;

export const MenuWrapper = styled.div`
  display: flex;
`;

export const MenuBar = styled.ul`
  width: 700px;
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 25px;
  flex-grow: 3;
`;

export const MenuSideBar = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const ControllBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
`;

export const SearchWrapper = styled.div`
  padding-left: 30px;
`;