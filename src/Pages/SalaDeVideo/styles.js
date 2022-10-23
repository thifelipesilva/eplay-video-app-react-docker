import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 64px;
    
    padding: 0 20px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media(max-width: 780px) {
       
        align-items: center;
        display: flex;
        flex-direction: column;
    };
`;

export const Alerta = styled.h2`
    position: relative;
    left: 90%;
    color: var(--verde);

    
`;