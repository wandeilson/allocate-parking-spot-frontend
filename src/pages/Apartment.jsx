import Menu from "./Menu";

function Apartment(){
    return(
        <div>
            <h1>Cadastro de Apartamentos</h1>
            <label>Bloco: </label>
            <input type="text" />

            <br />
            <label>Número: </label>
            <input type="text" />

            <br/>
            <label>Locador: </label>
            <input type="text" />

            <br/><br/>
        
            <button>Cadastrar</button>
            <br /><br />

            <Menu/>
        </div>
    )
}


export default Apartment;