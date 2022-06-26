import { useContext } from "react";
import { useState } from "react";
import DataContext from "./DataContext";

function Create() {

    const {setCreateUser} = useContext(DataContext);

    const [personalCode, setPersonalCode] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [accNumber, setAccNumber] = useState('LT11 3333 2222 4444');
    const [balance, setBalance] = useState(0);

    const create = () => {
        setCreateUser({personalCode, name, surname, password, accNumber, balance});
        setPersonalCode('');
        setName('');
        setSurname('');
        setPassword('');
        setAccNumber('');
        setBalance(0);
    }

    return (
        <div className="col-5">
            <div className="card mt-4">
                <div className="card-header">
                    <h2>Create bank user</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Personal number</label>
                        <input type="text" className="form-control" value={personalCode} onChange={e => setPersonalCode(e.target.value)}/>
                        <small className="form-text text-muted">Please enter personal code.</small>
                    </div>
                    
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                        <small className="form-text text-muted">Please enter name.</small>
                    </div>

                    <div className="form-group">
                        <label>Surname</label>
                        <input type="text" className="form-control" value={surname} onChange={e => setSurname(e.target.value)}/>
                        <small className="form-text text-muted">Please enter surname.</small>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                        <small className="form-text text-muted">Please enter password.</small>
                    </div>

                    <div className="form-group">
                        <label>Account number</label>
                        <input type="text" className="form-control" value={accNumber} readonly/>
                        <small className="form-text text-muted">Generated account number</small>
                    </div>

                    <button type="button" className="btn btn-outline-success" onClick={create}>Create</button>

                </div>
            </div>
        </div>
    );
}

export default Create;