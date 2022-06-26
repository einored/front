import { useContext, useState, useEffect } from "react";
import DataContext from "./DataContext";

function Edit() {

    const { modalUser, setModalUser, setEditUser } = useContext(DataContext);

    const [personalCode, setPersonalCode] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [accNumber, setAccNumber] = useState('');
    const [balance, setBalance] = useState('');

    const close = () => {
        setModalUser(null);
    }

    useEffect(() => {
        if (null === modalUser) return;
        setPersonalCode(modalUser.personalCode);
        setName(modalUser.name);
        setSurname(modalUser.surname);
        setPassword(modalUser.password);
        setAccNumber(modalUser.accNumber);
        setBalance(modalUser.balance);
    }, [modalUser])

    const edit = () => {
        setEditUser({personalCode, name, surname, password, accNumber, balance, id:modalUser.id});
        setModalUser(null);
    }

    if (null === modalUser) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Edit</h2>
                        <button type="button" className="close" onClick={close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card mt-4">
                            <div className="card-body">

                                <div className="form-group">
                                    <label>Personal number</label>
                                    <input type="text" className="form-control" value={personalCode} onChange={e => setPersonalCode(e.target.value)}/>
                                    <small className="form-text text-muted">Please enter personal code.</small>
                                </div>
                                
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                                    <small className="form-text text-muted">Please enter your name.</small>
                                </div>

                                <div className="form-group">
                                    <label>Surname</label>
                                    <input type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)}/>
                                    <small className="form-text text-muted">Please enter your surname.</small>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                                    <small className="form-text text-muted">Please enter your password.</small>
                                </div>

                                <div className="form-group">
                                    <label>Account number</label>
                                    <input type="text" className="form-control" value={accNumber} readonly/>
                                    <small className="form-text text-muted">Generated account number</small>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-success" onClick={edit}>Save changes</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={close}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;