import React,{useEffect} from 'react';
import Navbar from './components/UI/Navbar'
import {Home} from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import TakeQuiz from './components/TakeQuiz/TakeQuiz'
import CreateQuiz from './components/CreateQuiz/CreateQuiz'
import {Route,Switch} from 'react-router-dom'
import {loadData} from './actions/shared'
import {connect} from 'react-redux'

function App(props) {
  const {dispatch} = props;

  useEffect(()=>{
    dispatch(loadData());
  },[]);

  return (
    <div className="App">
      <Navbar/>
      
     <div>
       {/* <Switch>
          <Route to="/dashboard" exact component={Dashboard}/>
          <Route to="/create-quiz" exact component={CreateQuiz}/>
          <Route to="/take-quiz" exact component={TakeQuiz}/>
        </Switch> */}
        <Dashboard/>
     </div>
      
    </div>
  );
}

export default connect()(App);
