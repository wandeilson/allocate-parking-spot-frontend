import Menu from "./Menu";
function ParkingSpot(){
    return(
        <div>
            <h1>Cadastro de Vagas</h1>
            <label>Número: </label>
            <input type="text" />
            <br /><br />
            <button>Cadastrar</button>
            <br /><br />
            <Menu/>
        </div>
    )
}

export default ParkingSpot;