import { Input, InputLabel, TextField, Select, Button, MenuItem, Icon } from '@material-ui/core';
import React, { useState } from 'react'
import './form-style.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
      '& > *': {
         margin: theme.spacing(1),
         width: '90%',
      },
   },
   button: {
      margin: theme.spacing(1),
   },
}));

export default function FormAddUser({ setUserList, userList, setViewAddUserForm }) {

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
      setViewAddUserForm()
   }

   const classes = useStyles();

   return (
      <form onSubmit={handleSubmit} className={`add-user-form ${classes.root}`}>

         <input type="hidden" name="id" value={userId} />
         <input type="hidden" name="dateCrate" value={new Date()} />

         <InputLabel htmlFor="username">Введите имя пользователя:</InputLabel>
         <TextField variant="outlined"
            id="username"
            name="username"
            placeholder='Имя пользователя'
            type="text"
            required />

         <InputLabel htmlFor="email"> Введите email: </InputLabel>
         <TextField id="email"
            placeholder='Email'
            variant="outlined"
            name="email"
            type="email"
            required />

         <InputLabel htmlFor="password"> Введите пароль: </InputLabel>
         <TextField id="password" placeholder='Пароль'
            variant="outlined" name="password" type="password" required />

         <InputLabel htmlFor="telephone"> Введите номер телефона: </InputLabel>
         <TextField id="telephone" variant="outlined" name="telephone" type="tel" placeholder="+7(999) 999-9999" required />

         <InputLabel> Выберите статус: </InputLabel>
         <Select name="status" required>
            <MenuItem value="client">Клиент</MenuItem>
            <MenuItem value="admin">Администратор</MenuItem>
            <MenuItem value="partner">Партнер</MenuItem>
         </Select>
         <br />
         <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            type="submit"
         >
            Send
         </Button>
      </form >
   )
}
