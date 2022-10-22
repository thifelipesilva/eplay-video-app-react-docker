import VideoPlayer from '../VideoPlayer'
import { Container, Texto, TituloVideo } from './styles'
const CardVideo = ({ titulo, descricao, url }) => {

    return (
        <Container>
            <TituloVideo>{titulo}</TituloVideo>
            <Texto>{descricao}</Texto>
            
            <VideoPlayer
                width={"315"}
                height={"180"}
                src={url}
                title={titulo}
            />
        </Container>
    )
}

export default CardVideo