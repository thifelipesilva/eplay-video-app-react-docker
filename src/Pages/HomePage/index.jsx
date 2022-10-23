import VideoPlayer from "../../components/VideoPlayer";
import { Container, Paragrafo, Secao } from "./styles";

const HomePage = () => {
    return(
        <Container>
            <Secao>
                <VideoPlayer
                 
                 height={"315"} 
                 src={"https://www.youtube.com/embed/xzqBngxorUI?autoplay=1"} 
                 title="Video de condução de fêmeas"    
                />
            </Secao>
            <Secao>
                <Paragrafo>
                    E-Play, a plataforma feita para você guardar seu videos
                </Paragrafo>
                <Paragrafo>
                    Crie sua sala com os videos que você esta sempre vendo
                </Paragrafo>

                <Paragrafo>
                    Compartilhe com o pessoal do trabalho, seus amigos
                </Paragrafo>
            </Secao>
        </Container>
    );
}

export default HomePage;