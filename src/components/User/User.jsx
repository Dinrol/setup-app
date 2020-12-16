import React, { useState } from 'react'
import './user-style.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
   root: {
      minWidth: 275,
      maxWidth: 375,
      marginBottom: 20,
   },
   editMode: {
      '& > *': {
         margin: theme.spacing(1),
         width: '90%',
      },
   },
   bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
   button: {
      margin: '20px 0 0',
   },
   buttonSave: {
      margin: theme.spacing(1),
   },
}));

export default function User({ username, email, status, telephone, id, setUserList }) {
   const [editMode, setEditMode] = useState(false)

   const updateUserInfo = (e) => {
      const formData = new FormData(e.target)
      const userList = JSON.parse(localStorage.getItem('users') || '[]')
      e.preventDefault()
      userList.forEach(user => {
         if (id === user.id) {
            for (let entry of formData.entries()) {
               user[entry[0]] = entry[1]
            }
         }
      })
      localStorage.setItem("users", JSON.stringify(userList))
      setUserList(userList)
      setEditMode(false)

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

   const classes = useStyles();

   return (
      <Card className={classes.root} variant="outlined">
         <CardContent>
            {!editMode &&
               <>
                  <Typography >Имя пользователя: {username}</Typography>
                  <Typography >Email: {email}</Typography>
                  <Typography >Статус: {status}</Typography>
                  <Typography >Телефон: {telephone}</Typography>
                  <EditIcon className='edit-icon' onClick={() => setEditMode(true)} />
                  <DeleteIcon className='delete-icon' onClick={removeUser} />
               </>
            }
            {editMode &&
               <form onSubmit={updateUserInfo} className={classes.editMode}>
                  <input type="hidden" name="dateEdit" value={new Date()} />
                  <InputLabel htmlFor="username">Введите имя пользователя:</InputLabel>
                  <TextField variant="outlined"
                     defaultValue={username}
                     id="username"
                     name="username"
                     placeholder='Имя пользователя'
                     type="text"
                     required />
                  <InputLabel htmlFor="email"> Введите email: </InputLabel>
                  <TextField id="email"
                     defaultValue={email}
                     placeholder='Email'
                     variant="outlined"
                     name="email"
                     type="email"
                     required />

                  <InputLabel htmlFor="telephone"> Введите номер телефона: </InputLabel>
                  <TextField id="telephone"
                     defaultValue={telephone}
                     variant="outlined"
                     name="telephone"
                     type="tel"
                     placeholder="+7(999) 999-9999"
                     required />

                  <InputLabel> Выберите статус: </InputLabel>
                  <Select name="status" defaultValue={status} required>
                     <MenuItem value="client">Клиент</MenuItem>
                     <MenuItem value="admin">Администратор</MenuItem>
                     <MenuItem value="partner">Партнер</MenuItem>
                  </Select>
                  <Button
                     variant="contained"
                     color="primary"
                     className={classes.buttonSave}
                     startIcon={<SaveIcon />}
                     type='submit'
                  >
                     Save
                  </Button>
                  <Button variant="contained" onClick={() => setEditMode(false)}>Отмена</Button>
               </form>
            }
         </CardContent>
      </Card>
   )
}
