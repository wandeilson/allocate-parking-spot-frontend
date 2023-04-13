import Menu from "./Menu";
function ListApartment({ listApartments }) {

    // const apt = {
    //     block: '',
    //     number: '',
    //     locator: '',
    //     numberParkingSpot: 0
    // }

    // let lista = []

    // listApartments.map((o, i) => (
    //     apt.block = o.block,
    //     apt.number = o.number,
    //     apt.locator = o.nameLocator,
    //     apt.numberParkingSpot = o.parkingSpot ?? "",
    //     console.log("teste"),
    //     lista.push(apt)

    // ))

    // console.log(lista);
    // apt.number = listApartments.number;
    // apt.locator = listApartments.nameLocator;
    // let n = listApartments.parkingSpot;
    // if (typeof n == 'undefined') {
    //     apt.numberParkingSpot = '-';
    // } else {
    //     apt.parkingSpot = listApartments.parkingSpot.number;
    // }

    return (
        <div className="list-apt">
            <Menu />
            <h1>Apartamentos cadastrados</h1>
            <table className="table" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bloco</th>
                        <th>Número</th>
                        <th>Locador</th>
                        <th>Nº Vaga</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        listApartments.map((obj, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{obj.block}</td>
                                <td>{obj.number}</td>
                                <td>{obj.nameLocator}</td>
                                <td>{obj.parkingSpot ? obj.parkingSpot.number : "Não adicionado"}</td>
                                
                                <td> <button className=" btn btn-success" >Editar</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListApartment;