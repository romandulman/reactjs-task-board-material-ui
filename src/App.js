import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SchIcon from '@material-ui/icons/Schedule';
import SplashDialog from './components/dialog/dialog'
import AddTask from './components/add-task/addTask'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AppBar position="static" color="default">
              <Toolbar >
                  <SchIcon  className="logoIcon"/>

                  <Typography  variant="h5" color="inherit">

                      My Task Board
                  </Typography>
              </Toolbar>
          </AppBar>
      </header>
      <body>

      <SplashDialog/>
      </body>
        <footer>        <Fab onClick={<AddTask/>} color="primary" aria-label="Add"  className="fixedbutton">
            <AddIcon    />
        </Fab>
        </footer>
    </div>
  );
}

export default App;
