function EditPkSpotModal ({isOpen, children, setModalOpen}){
    const BACKGOUND_STYLE = {
        position: 'fixed',
        top:'0',
        bottom:'0',
        left:'0',
        right:'0',
        backgroundColor: 'rgb(0,0,0, 0.7)',
        zIndex: '1000'
    }

    const MODAL_STYLE = {
        position: 'fixed',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%,-50%)',
        padding:'50px',
        backgroundColor:'#fff',
        borderRadius:'10px',
        color:'black'
    }

    if(isOpen){
        return (
            <div style={BACKGOUND_STYLE}>
                <div style={MODAL_STYLE} >
                    <div> {children} </div>
                    <div className="buttons-modal">
                        <button className="btn btn-primary btn-save-modal">Atualizar</button>
                        <span className="espaco"></span>
                        <button className="btn btn-secondary btn-close-modal" onClick={setModalOpen} >Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}
export default EditPkSpotModal;