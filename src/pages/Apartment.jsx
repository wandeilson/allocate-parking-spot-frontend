import Menu from "./Menu";

function Apartment({eventKeyboard, create, obj}){
    return(
        <div className="form-create-apt" >
            <Menu/>
            <form>
                <h1>Cadastro de Apartamentos</h1>
                <h4>Bloco: </h4>
                <input type="text" value={obj.block} placeholder="Bloco"  onChange={eventKeyboard} name="block" className="form-control"/>

                <br />
                <h4>Número: </h4>
                <input type="text" value={obj.number} placeholder="Número" onChange={eventKeyboard} name="number" className="form-control" />

                <br/>
                <h4>Locador: </h4>
                <input type="text" value={obj.nameLocator} placeholder="Locador" onChange={eventKeyboard} name="nameLocator"  className="form-control" />

                <br/>
            
                <input  type='buttom' value='Cadastrar' onClick={create} className="btn btn-primary"></input>
                <br /><br />
            </form>
        </div>
    )
}


export default Apartment;