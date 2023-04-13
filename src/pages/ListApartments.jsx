import Menu from "./Menu";
import { useState } from "react";
import EditModal from "./EditModal";
function ListApartment({ listApartments }) {

    const [openModal, setOpenModal] = useState(false)

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

                                <td> <button onClick={() => setOpenModal(true)} className=" btn btn-success" >Editar</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <EditModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}  >
                <h5>Id: </h5>
                <input type="text" className="form-control" />
                <h5>Bloco: </h5>
                <input type="text" className="form-control" />
                <h5>Número: </h5>
                <input type="text" className="form-control" />
                <h5>Locador: </h5>
                <input type="text" className="form-control" />
                <form>
                    <fieldset>
                        <div class="form-group">
                            <label for="exampleSelect1" class="form-label mt-4">Selecione o Nº da vaga</label>
                            <select class="form-select" id="exampleSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </fieldset>
                </form>

            </EditModal>

        </div>
    )
}

export default ListApartment;