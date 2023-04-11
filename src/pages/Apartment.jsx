import Menu from "./Menu";

function Apartment(){
    return(
        <div>
            <Menu/>
            <form>
                <h1>Cadastro de Apartamentos</h1>
                <h4>Bloco: </h4>
                <input type="text" className="form-control"/>

                <br />
                <h4>Número: </h4>
                <input type="text"  className="form-control" />

                <br/>
                <h4>Locador: </h4>
                <input type="text"  className="form-control" />

                <br/>
            
                <input  type='buttom' value='Cadastrar' className="btn btn-primary"></input>
                <br /><br />
            </form>
        </div>
    )
}


export default Apartment;