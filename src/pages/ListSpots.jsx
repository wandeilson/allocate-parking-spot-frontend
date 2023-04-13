import { useState } from "react";
import Menu from "./Menu";
import EditModal from "./EditModal";
function ListSpots({ listParkingSpots }) {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="list-pkspot">
            <Menu />
            <h1>Vagas cadastradas</h1>
            <table className="table table-pkspot" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Número</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listParkingSpots.map((obj, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{obj.number}</td>
                                <td> <button onClick={() => setOpenModal(true)} className=" btn btn-success" >Editar</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <EditModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal) }  >
                <h5>Número: </h5>
                <input type="text" className="form-control" name="number"  />
            </EditModal>
        </div>
    )
}

export default ListSpots;