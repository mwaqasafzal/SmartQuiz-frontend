import React,{useEffect} from 'react';
import Navbar from './components/UI/Navbar'
import {Home} from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import TakeQuiz from './components/TakeQuiz/TakeQuiz'
import CreateQuiz from './components/CreateQuiz/CreateQuiz'
import CreatedQuiz from './components/QuizCreated/QuizCreated'
import {Route,Switch} from 'react-router-dom'
import {loadData} from './actions/shared'
import {connect} from 'react-redux'
import QuizCreated from './components/Dashboard/QuizCreated';

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
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/create-quiz" exact component={CreateQuiz}/>
          <Route path="/take-quiz" exact component={TakeQuiz}/>
        </Switch> */}
      <Dashboard/>
     </div>
      
    </div>
  );
}

export default connect()(App);
