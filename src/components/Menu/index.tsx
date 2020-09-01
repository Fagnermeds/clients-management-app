import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconBaseProps, IconContext } from 'react-icons';
import { FiMenu, FiUsers, FiHome, FiX } from 'react-icons/fi';

import { 
  Container, 
  Header,
  Nav,
  List,
  Item
} from './styles';

interface MenuDataProps {
  title: string;
  path: string;
  icon: IconBaseProps;
}

const menuData: MenuDataProps[] = [
  {
    title: 'Home',
    path: '/home',
    icon: <FiHome />,
  },
  {
    title: 'Clientes',
    path: '/clients',
    icon: <FiUsers />,
  }
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Container>
      <IconContext.Provider value={{ color: '#F0F0F7', size: '20' }}>
        <Header>
          <Link to="#">
            {isOpen ? 
              <FiX onClick={toggleMenu} size={24}/> : 
              <FiMenu onClick={toggleMenu} size={24}/>}
          </Link>
        </Header>

        <Nav isOpen={isOpen}>
          <List>
            {menuData.map((item, index) => (
              <Item key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </Item> 
            ))} 
          </List>
        </Nav>
      </IconContext.Provider>
    </Container>
  );
}

export default Menu;