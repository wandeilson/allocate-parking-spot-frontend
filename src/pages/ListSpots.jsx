import { useState } from "react";
import Menu from "./Menu";
import EditModal from "./EditModal";
function ListSpots({ listParkingSpots, selectPkSpot }) {

    const [openModal, setOpenModal] = useState(false);
    const [number, setNumber] = useState();
    const [idParkingSpot, setIdParkingSpot] = useState();
    

    function onClickBtEdit (obj){
        setOpenModal(true);
        setNumber(obj.number);
        setIdParkingSpot(obj.id);
    }

    function deletePkSpot(obj){
        setIdParkingSpot(obj.id);
        deletePkSpotRequest();
    }

    function deletePkSpotRequest(){
        const response = fetch(`http://localhost:8080/api/parking-spot/${idParkingSpot}`, {
            method: "DELETE"
        });
    
        return response;
    }

    async function updatePkSpot() {
        const response = await fetch(`http://localhost:8080/api/parking-spot/${idParkingSpot}`, {
            method: "PUT",
            body: JSON.stringify({number}),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
              }
        });
        setOpenModal(false);
        alert("Vaga atualizada.");
    }


    return (
        <div className="list-pkspot">
            <Menu />
            <h1>Vagas cadastradas</h1>
            <table className="table table-pkspot" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Número</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listParkingSpots.map((obj, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{obj.id}</td>
                                <td>{obj.number}</td>
                                <td> <button onClick={() => deletePkSpot(obj)}  className="btn btn-warning" >Deletar</button> </td>
                                <td> <button onClick={() => {onClickBtEdit(obj)}}  className=" btn btn-success" >Editar</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <EditModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal) }  >
                <h5>Número: </h5>
                <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} className="form-control" />

                <div className="buttons-modal" >
                    <button onClick={updatePkSpot} className="btn btn-primary btn-save-modal">Atualizar</button>
                    <span className="espaco"></span>
                    <button className="btn btn-secondary btn-close-modal" onClick={() => setOpenModal(false)} >Cancelar</button>

                </div>
            </EditModal>
        </div>
    )
}

export default ListSpots;