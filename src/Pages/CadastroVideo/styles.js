import styled from "styled-components";

export const Container = styled.div`
    margin-top: 64px;
    padding: 0 120px;
    height: auto;

    @media (max-width: 620px) {
        padding: 0 20px;
    }
`;

export const Formulario = styled.form`
    padding: 16px 0;
    
    border: 2px solid var(--verde);
    border-radius: 25px;
    
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 12px;

    width: 40%;

    @media (max-width: 820px) {
        width: 90%;
    }
`;

export const BotaoCadastro = styled.button`
    height: 40px;
    width: 40%;

    color: var(--branco);
    font-weight: bold;

    background-color: var(--verde);

    border: 2px solid var(--branco);
    border-radius: 5px;

    margin: 12px 0;
    
    padding: 12px;

    @media (max-width: 820px) {
        width: 90%;
    }



    &:hover{ 
        color: var(--verde);
        background-color: var(--mostarda);
        border: 2px solid var(--verde);
    }
`;