import React,{useEffect} from 'react';
import Navbar from './components/UI/Navbar'
import {Home} from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import TakeQuiz from './components/TakeQuiz/TakeQuiz'
import CreateQuiz from './components/CreateQuiz/CreateQuiz'
import QuizCreated from './components/QuizCreated/QuizCreated'
import QuizzesTaken from './components/Dashboard/QuizzesTaken'
import QuizzesCreated from './components/Dashboard/QuizzesCreated'
import QuizDescription from './components/Dashboard/QuizDescription'
import QuizStats from './components/Dashboard/QuizStats'
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
  
      <Switch>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path={"/dashboard/quizzes-taken"} component={QuizzesTaken}/>
        <Route path={"/dashboard/quizzes-created"} exact component={QuizzesCreated}/>
        <Route path={"/dashboard/quizzes-created/:quizId"} exact component={QuizStats}/>
        <Route path={"/dashboard/quizzes-created/:quizId/fullquiz"} component={QuizDescription}/> 
        <Route path="/create-quiz" exact component={CreateQuiz}/>
        <Route path="/created-quiz/:quizId" component={QuizCreated}/>
        <Route path="/take-quiz" exact component={TakeQuiz}/>
      </Switch>       
    </div>
  );
}

export default connect()(App);
