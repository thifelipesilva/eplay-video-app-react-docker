import Botao from "../Botao";

import { 
    Container,
    Item,
    Lista, 
    Navegacao, 
    Titulo 
} from "./styles";

const Menu = () => {
    return(

        <Container>
            <Titulo>E-Play</Titulo>
            <Navegacao>
                <Lista>
                    <Item to="/">
                        Home
                    </Item>
                    <Item to="/saladevideo">
                        Sala de Video
                    </Item>
                </Lista>
            </Navegacao>
    
            <Botao nomeBotao={'Add Videos'}/>

        </Container>
    );
}

export default Menu;

