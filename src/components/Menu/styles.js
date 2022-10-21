import styled from 'styled-components';
import {NavLink} from "react-router-dom";

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

`;

export const Lista = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 400px;
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

