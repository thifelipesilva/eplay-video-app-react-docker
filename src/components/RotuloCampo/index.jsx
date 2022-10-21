import { Rotulo } from "./styles";

const RotuloCampo = ({ texto, forHtml}) => {
    return(
        <Rotulo htmlFor={forHtml}>
            { texto }
        </Rotulo>
    );
}

export default RotuloCampo;