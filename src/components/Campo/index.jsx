import { Field } from './styles';

const Campo = ({aoAlterar, id, value }) => {

    const aoDigitar = event => {
        aoAlterar(event.target.value);
    }

    return(
        <Field
         type="text" 
         id={id}
         required={true}
         onChange={aoDigitar}
         value={value}
        />
    );
}

export default Campo;