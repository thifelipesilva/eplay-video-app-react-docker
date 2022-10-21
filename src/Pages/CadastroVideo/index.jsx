import { useState } from "react";
import { BotaoCadastro, Caixa, Container, Formulario } from "./styles";
import Campo from '../../components/Campo';
import SubTitulo from "../../components/SubTitulo";
import RotuloCampo from "../../components/RotuloCampo";

const CadastroVideo = ({ enviarDados }) => {

    const[titulo, setTitulo] = useState('');
    const[url, setUrl] = useState('');
    const[descricao, setDescricao] = useState('');


    const submeter = event => {
        event.preventDefault();

        enviarDados({
            titulo,
            url,
            descricao
        });

        setTitulo('');
        setUrl('');
        setDescricao('');

        console.log(`${titulo}, ${url}, ${descricao}`);
    }

    

    return(
        <Container>
            <Formulario onSubmit={submeter}>

                <SubTitulo texto="Cadastre um vídeo"/>
                <Caixa>
                    <RotuloCampo htmlFor={"titulo"} texto={"Titulo: "}/>
                    <Campo 
                     id={"titulo"}
                     value={titulo}
                     aoAlterar={titulo => setTitulo(titulo)}
                    />
                </Caixa>
                <Caixa>
                    <RotuloCampo htmlFor={"url"} texto={"Url: "}/>
                    <Campo 
                     id={"url"}
                     value={url}
                     aoAlterar={url => setUrl(url)}
                    />
                </Caixa>
                <Caixa>
                    <RotuloCampo htmlFor={"descricao"} texto={"Descrição: "} />
                    <Campo 
                     id={"descricao"}
                     value={descricao}
                     aoAlterar={descricao => setDescricao(descricao)}
                    />
                </Caixa>

                <BotaoCadastro>
                    Cadastrar
                </BotaoCadastro>

            </Formulario>
        </Container>
    );
}

export default CadastroVideo