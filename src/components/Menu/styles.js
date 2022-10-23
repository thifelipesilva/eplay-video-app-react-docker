import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { Menu } from 'styled-icons/boxicons-regular';

export const MenuIcon =  styled(Menu)`
    height: 60px;
    width: 60px;
    display: none;
    cursor: pointer;

    color: var(--branco);

    @media (max-width: 750px) {
        display: block;
    }

`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

export const Titulo = styled.h1`
    font-size: 32px;
    font-weight: bold;

    color: var(--branco);

    margin-left: 8px;
`;

export const Navegacao = styled.nav`
  
    display: flex;
    align-items: center;

    margin-right: 10px;

    @media (max-width: 750px) {
        height: 100vh;
        z-index: 950px;
        position: relative;
        top: 94px;
        left: 0;

        display: none;
        flex-direction: column;
        align-items: center;
    }
`;

export const Lista = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 400px;

    margin-right: 64px;

    @media (max-width: 750px) {
              
        display: ${props => props.clicou ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
    }

`;

export const Item = styled(NavLink)`
    cursor: pointer;

    text-decoration: none;

    color: var(--branco);

    font-size: 18px;

    &:hover {
        color: var(--verde);
    }

    
`;


export const BackGroundMenu = styled.div`

    position: fixed;
    top: 92px;    
    right: .5px;

    
    height: 100vh;
    width: 100vw;
    background-color: var(--verde);
    
    display: ${props => props.clicou ? "block" : "none"};


`;
