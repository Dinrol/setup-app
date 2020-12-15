import React, { useState } from 'react'
import './form-style.css';


export default function FormAddUser({ setUserList, userList }) {

   const [userId, setuserId] = useState(userList.length ? +userList[userList.length - 1].id + 1 : 0)
   function handleSubmit(event) {
      const formData = new FormData(event.target)
      const userList = JSON.parse(localStorage.getItem('users') || '[]')
      const userObj = {}

      event.preventDefault()

      for (let entry of formData.entries()) {
         if (entry[0] === 'id' && userId === 0) {
            setuserId(userId + 1)
         }
         userObj[entry[0]] = entry[1]
         setuserId(userId + 1)
      }

      userList.push(userObj)
      localStorage.setItem("users", JSON.stringify(userList))
      setUserList(userList)
      event.target.reset()
   }
   return (
      <form onSubmit={handleSubmit}>

         <input type="hidden" name="id" value={userId} />
         <input type="hidden" name="date" value={new Date()} />

         <label htmlFor="username"> Введите имя пользователя: </label>
         <input id="username" name="username" type="text" required />
         <br />
         <label htmlFor="email"> Введите email: </label>
         <input id="email" name="email" type="email" required />
         <br />
         <label htmlFor="password"> Введите пароль: </label>
         <input id="password" name="password" type="password" required />
         <br />
         <label htmlFor="telephone"> Введите номер телефона: </label>
         <input id="telephone" name="telephone" type="tel" placeholder="+7(999) 999-9999" required />
         <br />
         <label> Выберите статус: </label>
         <select name="status">
            <option value="client">Клиент</option>
            <option value="admin">Администратор</option>
            <option value="partner">Партнер</option>
         </select>
         <br />
         <button className="btn-main">
            Send
         </button>
      </form >
   )
}
