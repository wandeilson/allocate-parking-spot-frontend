import Menu from "./Menu";
function ParkingSpot(){
    return(
        <div>
            <Menu/>
            <form>
                <h1>Cadastro de Vagas</h1>
                <h4>Número: </h4>
                <input type="text"  className="form-control" />
                <br/>
                <input  type='buttom' value='Cadastrar' className="btn btn-primary"></input>
            </form>
        </div>
    )
}

export default ParkingSpot;