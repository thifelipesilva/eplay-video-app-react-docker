import { BotaoEl, BotaoLink } from "./styles";
const Botao = ({ nomeBotao }) => {
    return( 
       <BotaoEl>
        <BotaoLink to={'/cadastro'}>
            {nomeBotao}
        </BotaoLink>
       </BotaoEl> 
    )
}

export default Botao;