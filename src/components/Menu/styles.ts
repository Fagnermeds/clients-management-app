import styled from 'styled-components';

interface NavProps {
  isOpen: boolean;
}

export const Container = styled.div``;

export const Header = styled.header`
  background-color: #060b26;
  height: 80px;
  
  display: flex;
  align-items: center;
  justify-content: start;

  a {
    margin-left: 32px;
    background: none;
  }
`;

export const Nav = styled.nav<NavProps>`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  
  display: flex;
  justify-content: center;

  position: fixed;
  left: ${props => props.isOpen ? 0 : -100+'%'};
  transition: 0.7s;
`;

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  list-style: none;
  height: 48px;
/*   
  display: flex;
  align-items: center;
  justify-content: start; */

  &:hover {
      background-color: #1a83ff;
  }

  a {
    padding-left: 16px; 
    height: 100%;
    text-decoration: none;
    background: none;
   
    display: flex;
    align-items: center;
    transition: background-color 0.2s;

    span {
      color: #F0F0F7;
      font-size: 18px;
      line-height: 24px;
      margin-left: 16px;
    }
  }

`;
