import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
    width: 345px;
    
    margin: 16px;
    padding: 20px;

    border: 1.4px solid var(--verde);
    border-radius: 16px;
`;
export const TituloVideo = styled.h4`
    color: var(--verde);
    font-weight: bold;
    font-size: 20px;
    margin: 8px 0;
`;

export const Texto = styled.p`
    color: var(--verde);
    padding: 16px 0;
`;
