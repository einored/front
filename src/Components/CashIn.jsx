import { useContext, useState, useEffect } from "react";
import DataContext from "./DataContext";

function CashIn() {

    const { cashIn, setCashIn, setEditUser } = useContext(DataContext);

    const [personalCode, setPersonalCode] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [accNumber, setAccNumber] = useState('');
    const [balance, setBalance] = useState('');
    // const [cash, setCash] = useState('');

    const close = () => {
        setCashIn(null);
    }

    useEffect(() => {
        if (null === cashIn) return;
        setPersonalCode(cashIn.personalCode);
        setName(cashIn.name);
        setSurname(cashIn.surname);
        setPassword(cashIn.password);
        setAccNumber(cashIn.accNumber);
        setBalance(cashIn.balance);
    }, [cashIn])


    const edit = () => {
        // const b = parseFloat(balance);
        // const c = parseFloat(cash)
        setEditUser({personalCode, name, surname, password, accNumber, balance, id:cashIn.id});
        setCashIn(null);
    }

    if (null === cashIn) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Cash In</h2>
                        <button type="button" className="close" onClick={close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card mt-4">
                            <div className="card-body">

                                <div className="form-group">
                                    <label>Cash In</label>
                                    <h2>Balance: {balance} €</h2>
                                    <input type="number" className="form-control" onChange={e => setBalance(parseFloat(e.target.value))}/>
                                    <small className="form-text text-muted">Write amount to add</small>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" className="btn btn-outline-success" onClick={e => setBalance(parseFloat(balance) + parseFloat(cash))}>Save changes</button> */}
                        <button type="button" className="btn btn-outline-success" onClick={edit}>Save changes</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={close}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CashIn;