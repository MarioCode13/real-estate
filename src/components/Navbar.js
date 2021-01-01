import React, { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import Bars from '../images/bars.svg'

const Nav = styled.nav`
    height: 60px;
    justify-content: space-between;
    padding: 1rem 2rem;
    display: flex;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: ${({ navbar }) => (navbar ? 'rgba(64,224,208 ,0.81 )' : '')};
`
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`
const Logo = styled(Link)`
    ${NavLink}
    color: white;
    font-style: italic;
    font-weight: 900;
`
const MenuBars = styled.i`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 30px;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 40%);
        filter: invert(100%);
    }
`
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
    &:hover {
        color: #0092a6;
    }
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Navbar = (props) => {
    const [navbar, setNavbar] = useState(false)
    const changeNavBG = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavBG)

    return (
        <Nav navbar={navbar}>
            <Logo to='/'>RealEstate</Logo>
            <MenuBars onClick={props.toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
