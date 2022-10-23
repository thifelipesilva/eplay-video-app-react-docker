import styled from "styled-components";

export const Container = styled.div`
    margin-top: 64px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
    }
`;
export const Secao = styled.section`
    margin-top: 32px;
    margin-left: 8px;
    width: 45%;

    @media (max-width: 1100px) {
        width: auto;

        padding: 10px
    }

    @media ( max-widt: 580px) {
        width: 400px;
    }
`;

export const Paragrafo = styled.p`
    font-size: 24px;
    
    margin-bottom: 18px;

    color: var(--verde);

`;