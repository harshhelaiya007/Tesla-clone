import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

  const [burgerStatus, setburgerStatus] = useState(true)

  const cars = useSelector(selectCars);

  // console.log(cars);

  return (
    <Container>
      <a href='home'>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a href={'#'+index} key={index}>{car}</a>
        ))}
        {/* <a href="#modal-s">Model S</a>
        <a href="#modal-3">Model 3</a>
        <a href="#modal-x">Model X</a>
        <a href="#modal-y">Model Y</a> */}
      </Menu>
      <RightMenu>
        <a href='#shop'>Shop</a>
        <a href='#right'>Tesla Account</a>
        <CustomMenuIcon onClick={() => setburgerStatus(false)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setburgerStatus(true)} />
        </CloseWrapper>
        <li><a href='#some'>Existing Inventory</a></li>
        <li><a href='#some'>Existing Inventory</a></li>
        <li><a href='#some'>Existing Inventory</a></li>
        <li><a href='#some'>Existing Inventory</a></li>
        <li><a href='#some'>Existing Inventory</a></li>
        <li><a href='#some'>Existing Inventory</a></li>
        <li><a href='#some'>Existing Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

const CustomMenuIcon = styled(MenuIcon)`
cursor: pointer;`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(100%)' : 'translateX(0)'};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 500;
    }
  }
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
margin-right: 30px;
`;

const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
`