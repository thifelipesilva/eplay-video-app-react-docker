
import CardVideo from "../../components/CardVideo";
import SubTitulo from '../../components/SubTitulo';
import { Alerta, Container } from "./styles";

const SalaDeVideo = ({ dados }) => {
    return(
        <Container>
            
            {
                dados ? 
                dados.map((dado, index) => {
                    return(
                        <>
                            <CardVideo 
                            key={index}
                            titulo={dado.titulo}
                            descricao={dado.descricao}
                            url={dado.url}
                            /> 
                        </>
                    );

                }) : <Alerta>Está tudo limpor por aqui, você ainda não adicionou nenhum vídeo.</Alerta>
            }
        </Container>
    );
}

export default SalaDeVideo;