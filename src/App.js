import React,{useEffect} from 'react';
import {Home} from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import CreateQuiz from './components/CreateQuiz/CreateQuiz'
import {loadData} from './actions/shared'
import {connect} from 'react-redux'

function App(props) {
  const {dispatch} = props;

  useEffect(()=>{
    dispatch(loadData());
  },[]);

  return (
    <div className="App">
      <CreateQuiz/>
    </div>
  );
}

export default connect()(App);
