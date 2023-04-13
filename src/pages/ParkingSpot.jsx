import Menu from "./Menu";
function ParkingSpot({eventKeyboard, create, obj}){
    return(
        <div className="form-create-pkspot" >
            <Menu/>
            <form>
                <h1>Cadastro de Vagas</h1>
                <h4>Número: </h4>
                <input type="text" value={obj.number} onChange={eventKeyboard} className="form-control" name="number"  />
                <br/>
                <input type='buttom' onClick={create} value='Cadastrar' className="btn btn-primary"></input>
            </form>
        </div>
    )
}

export default ParkingSpot;