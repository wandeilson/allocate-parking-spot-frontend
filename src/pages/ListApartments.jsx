import Menu from "./Menu";
import { useState } from "react";
import EditModal from "./EditModal";
function ListApartment({ listApartments }) {

    const [openModal, setOpenModal] = useState(false);
    const [idApartment, setIdApartment] = useState();
    const [block, setBlock] = useState();
    const [number, setNumber] = useState();
    const [nameLocator, setNameLocator] = useState();
    const [numberPkSpot, setNumberPkSpot] = useState();

    function openEditor(obj) {
        setIdApartment(obj.idApartment);
        setBlock(obj.block);
        setNumber(obj.number);
        setNameLocator(obj.nameLocator);
        setNumberPkSpot(obj.parkingSpot ? obj.parkingSpot.number : "");
        setOpenModal(true);
    }

    function deleteApt(obj){
        setIdApartment(obj.idApartment);
        setIdApartment(obj.idApartment);
        deleteAptRequest();
    }

    function deleteAptRequest(){
        const response = fetch(`http://localhost:8080/api/apartment/${idApartment}`, {
            method: "DELETE"
        });
        return response;
    };

    async function updateApartment() {
        const response = await fetch(`http://localhost:8080/api/apartment/${idApartment}`, {
            method: "PUT",
            body: JSON.stringify({block, nameLocator, number}),
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
              }
        });
        updatePkSpotFromApartment();
        setOpenModal(false);

    }

   async function updatePkSpotFromApartment() {
        const response = await fetch(`http://localhost:8080/api/apartment/${idApartment}/${numberPkSpot}`, {
            method: "PUT",
            headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
              }
        });

    }

    return (
        <div className="list-apt">
            <Menu />
            <h1>Apartamentos cadastrados</h1>
            <table className="table" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
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
                                <td>{obj.idApartment}</td>
                                <td>{obj.block}</td>
                                <td>{obj.number}</td>
                                <td>{obj.nameLocator}</td>
                                <td>{obj.parkingSpot ? obj.parkingSpot.number : "Não adicionado"}</td>

                                <td> <button onClick={() => deleteApt(obj)} className=" btn btn-warning" >Deletar</button> </td>
                                <td> <button onClick={() => openEditor(obj)} className=" btn btn-success" >Editar</button> </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <EditModal isOpen={openModal} setModalOpen={openModal}  >
                <h5>Id: </h5>
                <input type="text" disabled value={idApartment} className="form-control" />
                <h5>Bloco: </h5>
                <input type="text" onChange={(e) => setBlock(e.target.value)} value={block} className="form-control" />
                <h5>Número: </h5>
                <input type="text" onChange={(e) => setNumber(e.target.value)} value={number} className="form-control" />
                <h5>Locador: </h5>
                <input type="text" onChange={(e) => setNameLocator(e.target.value)} value={nameLocator} className="form-control" />
                <h5>Insira o id da vaga: </h5>
                <input type="text" onChange={(e) => setNumberPkSpot(e.target.value)} value={numberPkSpot} className="form-control" />
                <div className="buttons-modal" >
                    <button onClick={updateApartment}  className="btn btn-primary btn-save-modal">Atualizar</button>
                    <span className="espaco"></span>
                    <button className="btn btn-secondary btn-close-modal" onClick={() => setOpenModal(false)} >Cancelar</button>

                </div>

            </EditModal>

        </div>
    )
}

export default ListApartment;