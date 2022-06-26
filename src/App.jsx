import { useEffect } from 'react';
import { useState } from 'react';
import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import DataContext from './Components/DataContext';
import List from './Components/List';
import axios from 'axios';
// import Edit from './Components/Edit';
import CashIn from './Components/CashIn';
import CashOut from './Components/CashOut';


function App() {

  const [users, setUsers] = useState([]);

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [createUser, setCreateUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [editUser, setEditUser] = useState(null);

  const [cashIn, setCashIn] = useState(null);
  const [cashOut, setCashOut] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/bank_react/back/users')
      .then(res => setUsers(res.data));
  }, [lastUpdate]);

  useEffect(() => {
    if(null === createUser) return;
    axios.post('http://localhost/bank_react/back/users', createUser)
      .then(_ => setLastUpdate(Date.now()));
  }, [createUser]);

  useEffect(() => {
    if(null === deleteUser) return;
    axios.delete('http://localhost/bank_react/back/users/' + deleteUser.id)
      .then(_ => setLastUpdate(Date.now()));
  }, [deleteUser]);

  useEffect(() => {
    if(null === editUser) return;
    axios.put('http://localhost/bank_react/back/users/' + editUser.id, editUser)
      .then(_ => setLastUpdate(Date.now()));
  }, [editUser]);


  return (
    <DataContext.Provider value={
      {
        users,
        setCreateUser,
        setDeleteUser,
        cashIn,
        setCashIn,
        cashOut,
        setCashOut,
        setEditUser
      }
    }>
      <div className="container">
        <div className="row">
          <Create />
          <List />
        </div>
      </div>
      <CashIn/>
      <CashOut/>
    </DataContext.Provider>
  );
}

export default App;
