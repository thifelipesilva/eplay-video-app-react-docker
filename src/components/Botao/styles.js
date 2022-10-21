import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const BotaoEl = styled.button`
    border: 1px solid var(--branco);
    border-radius: 15px;
    
    background-color: var(--verde);
    
    
    
    
    cursor: pointer;
    
    margin-right: 8px;
    padding: 12px;

    width: 180px;

    &:hover {
        border: 1px solid var(--verde);
        background-color: var(--branco);
        color: var(--verde);
    }
    
`;

export const BotaoLink = styled(NavLink)`
    font-weight: bold;
    font-size: 18px;
    color: var(--branco);
    text-decoration: none;

    &:hover {
        color: var(--verde);
    }

`;
