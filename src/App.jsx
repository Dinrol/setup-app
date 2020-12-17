import React, { useState } from 'react'
import FormAddUser from './components/FormAddUser/FormAddUser';
import User from './components/User/User';
import './App.css'
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { AppBar, Toolbar, Typography, InputBase, Container, InputLabel, MenuItem, Select, FormControl, FormHelperText, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      marginBottom: 10,
   },
   title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
         display: 'block',
      },
   },
   search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(1),
         width: 'auto',
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
   },
   inputRoot: {
      color: 'inherit',
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      textOverflow: 'ellipsis',
      [theme.breakpoints.up('sm')]: {
         width: '30ch',
         // '&:focus': {
         //    width: '30ch',
         // },
      },
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
   },
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
   },
   btnAddUser: {
      height: 55,
      margin: theme.spacing(1),
   }
}));


function App() {
   const getUserList = JSON.parse(localStorage.getItem('users') || '[]')
   const [userList, setUserList] = useState(getUserList)
   const [viewAddUserForm, setViewAddUserForm] = useState(false)
   const [status, setStatus] = React.useState('');

   const filterByStatus = (e) => {
      const statusValue = e.target.value
      setStatus(statusValue);
      if (statusValue !== 'all') {
         const usersFilter = getUserList.filter(user => user.status === statusValue)
         setUserList(usersFilter)
      } else {
         setUserList(getUserList)
      }
   }
   const searchForEmailOrPhone = () => {
      const search = document.getElementById('site-search')
      if (search.value !== '') {
         const usersSearch = getUserList.filter(user => search.value === user.email || search.value === user.telephone)
         setUserList(usersSearch)
      } else {
         setUserList(getUserList)
      }
   }

   // const clearSearchField = () => {
   //    document.getElementById('site-search').value = ''
   //    setUserList(getUserList)
   // }

   const classes = useStyles();

   return (
      <>
         <div className={classes.root}>
            <AppBar position="static">
               <Toolbar>
                  <Typography className={classes.title} variant="h6" noWrap>
                     Admin panel
                  </Typography>
                  <div className={classes.search} >
                     <div className={classes.searchIcon} onClick={searchForEmailOrPhone}>
                        <SearchIcon />
                     </div>
                     <InputBase id="site-search"
                        placeholder="Поиск по email или телефону"
                        classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                     />
                  </div>
               </Toolbar>
            </AppBar>
         </div>
         <div className='top'>
            <FormControl variant="outlined" className={classes.formControl}>
               <InputLabel id="demo-simple-select-outlined-label">Статус</InputLabel>
               <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={status}
                  onChange={filterByStatus}
                  label="Статус"
               >
                  <MenuItem value="all">Все</MenuItem>
                  <MenuItem value='client'>Клиент</MenuItem>
                  <MenuItem value='admin'>Администратор</MenuItem>
                  <MenuItem value='partner'>Партнер</MenuItem>
               </Select>
               <FormHelperText>Отфильтровать по статусу</FormHelperText>
            </FormControl>
            <Button variant="outlined"
               className={classes.btnAddUser}
               size="small"
               color="primary"
               onClick={() => setViewAddUserForm(!viewAddUserForm)}>Добавить пользователя
            </Button>
         </div>
         <div className="form">
            {
               viewAddUserForm && <FormAddUser
                  userList={userList}
                  setUserList={(users) => setUserList(users)}
                  setViewAddUserForm={() => setViewAddUserForm(false)}
               />
            }
         </div>
         <div className='users-block'>
            {
               userList && userList.map(user => <User
                  key={user.id}
                  username={user.username}
                  telephone={user.telephone}
                  status={user.status}
                  email={user.email}
                  id={user.id}
                  dateCreate={user.dateCreate}
                  dateEdit={user.dateEdit}
                  setUserList={(users) => setUserList(users)} />)
            }
         </div>
      </>
   );

}

export default App