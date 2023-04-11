import Menu from "./Menu";
function ListApartment({list}){

    const apt = {
        block: '',
        number: '',
        locator: '',
        numberParkingSpot: 0
    }

    let lista = []

        list.map((o, i) =>(
            apt.block = o.block,
            apt.number = o.number,
            apt.locator = o.nameLocator,
            apt.numberParkingSpot = o.parkingSpot.number,
            console.log("teste"),
            lista.push(apt)
            
        ))

        console.log(lista);
        apt.number = list.number;
        apt.locator = list.nameLocator;
        let n = list.parkingSpot; 
        if( typeof n == 'undefined'){
           apt.numberParkingSpot = '-'; 
        }else{
            apt.parkingSpot = list.parkingSpot.number;
        }
    

   // console.log(lista)
    
    return(
        <div>
             <Menu/>
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
                    lista.map((obj, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{obj.block}</td>
                            <td>{obj.number}</td>
                            <td>{obj.locator}</td>
                            <td>{obj.numberParkingSpot}</td>
                           
                            <td> <button className=" btn btn-success" >Selecionar</button> </td>

                    </tr>
                    ) )
                }
            </tbody>
        </table>
       
        </div>
    )
}

export default ListApartment;