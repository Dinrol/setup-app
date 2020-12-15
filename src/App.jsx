import React, { useEffect, useState } from 'react'
import FormAddUser from './components/FormAddUser/FormAddUser';
import User from './components/User/User';
import './App.css'

function App() {
   const getUserList = JSON.parse(localStorage.getItem('users'))
   const [userList, setUserList] = useState(getUserList)
   const [userListView, setUserListView] = useState(false)
   const [addUserForm, setAddUserForm] = useState(false)
   // debugger
   const filterByStatus = () => {
      const statusValue = document.getElementById('status_').value
      if (statusValue !== 'all') {
         const usersFilter = getUserList.filter(user => user.status === statusValue)
         setUserList(usersFilter)
      } else {
         setUserList(getUserList)
      }
   }
   const searchForEmailOrPhone = () => {
      const searchValue = document.getElementById('site-search').value
      const usersSearch = []
      getUserList.forEach(user => {
         if (searchValue === user.email || searchValue === user.telephone) {
            usersSearch.push(user)
         }
      })
      setUserList(usersSearch)
   }

   return (
      <div className='container'>
         <div className='top'>
            <div className="btn-main" onClick={() => setUserListView(!userListView)}>Список пользователей</div>
            {
               userListView &&
               <>
                  <div className="btn-main" onClick={filterByStatus}>Фильтр по статусу
                  <select id="status_">
                        <option value='all'>Показать всех</option>
                        <option value="client">Клиент</option>
                        <option value="admin">Администратор</option>
                        <option value="partner">Партнер</option>
                     </select>
                  </div>
                  <div className="btn-main" >
                     <label hmtlfor="site-search">Поиск по email или телефону</label>
                     <input type="search" id="site-search" />
                     <button onClick={searchForEmailOrPhone}>Search</button>
                  </div>
               </>
            }
            <div className="btn-main" onClick={() => setAddUserForm(!addUserForm)}>Добавить пользователя</div>
         </div>
         <div className="form">
            {
               addUserForm && <FormAddUser
                  userList={userList}
                  setUserList={(users) => setUserList(users)}
               />
            }
         </div>
         <div className='users-block'>
            {
               userListView &&
               userList && userList.map(user => <User
                  key={user.id}
                  username={user.username}
                  telephone={user.telephone}
                  status={user.status}
                  email={user.email}
                  id={user.id}
                  setUserList={(users) => setUserList(users)} />)
            }
         </div>
      </div>
   );

}

export default App