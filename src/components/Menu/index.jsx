import React, { useState } from 'react';
import Botao from "../Botao";
import { 
    BackGroundMenu,
    Container,
    Item,
    Lista,
    MenuIcon,
    Navegacao, 
    Titulo 
} from "./styles";

const Menu = () => {

    const [click, setClick] = useState(false);

    const abreFechaMenu = () => {
        setClick(!click)
        console.log('clicou');
    }

    return(

        <Container>
            <Titulo>E-Play</Titulo>
            
            <Navegacao>
                
                <Lista >
                    <Item to="/">
                        Home
                    </Item>
                    <Item to="/saladevideo">
                        Sala de Video
                    </Item>
                </Lista>

                <Botao nomeBotao={'Add Videos'}/>

            </Navegacao>
    

            <MenuIcon onClick={abreFechaMenu}/>
            <BackGroundMenu clicou={click}>&nbsp;</BackGroundMenu>
            
        </Container>
    );
}

export default Menu;

