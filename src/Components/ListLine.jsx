import { useContext } from "react";
import DataContext from "./DataContext";

function ListLine({ user }) {

    const {setDeleteUser, setCashIn, setCashOut} = useContext(DataContext);

    const remove = () => {
        setDeleteUser(user);
    }

    const cashIn = () => {
        setCashIn(user);
    }

    const cashOut = () => {
        setCashOut(user);
    }

    return (
        <li className="list-group-item">
            <div className="one-user">
                <div className="one-user__content">
                    <p>Personal code: <br/><b>{user.personalCode}</b></p>
                    <p>Name: <br/><b>{user.name}</b></p>
                    <p>Surname: <br/><b>{user.surname}</b></p>
                    <p>Account number: <br/><b>{user.accNumber}</b></p>
                    <p>Balance: <br/><span>{user.balance}€</span></p>
                </div>

                <div className="one-user__buttons">
                <button type="button" className="btn btn-outline-success mr-3" onClick={cashIn}>Cash In</button>
                <button type="button" className="btn btn-outline-success mr-3" onClick={cashOut}>Cash Out</button>
                    <button type="button" className="btn btn-outline-danger" onClick={remove}>Delete</button>
                </div>
            </div>

        </li>
    );
}

export default ListLine;