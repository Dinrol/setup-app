import React, { useState } from 'react'
import './user-style.css'

export default function User({ username, email, status, telephone, id, setUserList }) {
   const [editModeUserName, setEditModeUserName] = useState(false)
   const [editModeEmail, setEditModeEmail] = useState(false)
   const [editModeStatus, setEditModeStatus] = useState(false)
   const [editModePhone, setEditModePhone] = useState(false)

   const onChangeData = (e) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      users.forEach(user => {
         if (id === user.id) {
            switch (true) {
               case editModeUserName:
                  user.username = e.currentTarget.value
                  user.lastEdit = new Date()
                  setEditModeUserName(false)
                  break
               case editModeEmail:
                  user.email = e.currentTarget.value
                  setEditModeEmail(false)
                  user.lastEdit = new Date()
                  break
               case editModeStatus:
                  user.status = e.currentTarget.value
                  setEditModeStatus(false)
                  user.lastEdit = new Date()
                  break
               case editModePhone:
                  user.telephone = e.currentTarget.value
                  setEditModePhone(false)
                  user.lastEdit = new Date()
                  break
               default:
                  break;
            }

         }
      });
      localStorage.setItem("users", JSON.stringify(users))
      setUserList(users)

   }

   const removeUser = () => {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      users.forEach((user, index) => {
         if (id === user.id) {
            users.splice(index, 1)
         }
      });
      localStorage.setItem("users", JSON.stringify(users))
      setUserList(users)
   }

   return (
      <div className='user-cart'>
         {
            editModeUserName
               ? <input type="text" defaultValue={username} placeholder='Имя пользователя' autoFocus={true} onBlur={(e) => onChangeData(e)} />
               : <span onDoubleClick={() => setEditModeUserName(true)}>Имя пользователя: {username}</span>
         }
         <br />
         {
            editModeEmail
               ? <input type="email" defaultValue={email} placeholder='Email' autoFocus={true} onBlur={(e) => onChangeData(e)} />
               : <span onDoubleClick={() => setEditModeEmail(true)}>Email: {email}</span>
         }
         <br />
         {
            editModeStatus
               ? <select defaultValue={status} name="status" onBlur={(e) => onChangeData(e)} >
                  <option value="client">Клиент</option>
                  <option value="admin">Администратор</option>
                  <option value="partner">Партнер</option>
               </select>
               : <span onDoubleClick={() => setEditModeStatus(true)}>Статус: {status}</span>
         }
         <br />
         {
            editModePhone
               ? <input defaultValue={telephone} type="tel" placeholder="+7(999) 999-9999" autoFocus={true} onBlur={(e) => onChangeData(e)} />
               : <span onDoubleClick={() => setEditModePhone(true)}>Телефон: {telephone}</span>
         }
         <br />
         <br />
         <button onClick={removeUser}>Удалить пользователя</button>
      </div>
   )
}
