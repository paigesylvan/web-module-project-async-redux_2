import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { getDogs} from './actions';
import DogList from './components/dogList';
import axios from 'axios';
import { connect } from 'react-redux'

function App(props) {

  const { loading, error, getDogs} = props;

  useEffect(() => {
   getDogs();
  }, [])

  return (
    <div className="App">
      <h1> Dog Photo </h1>

      {
        (error !== "") && <h3>{error}</h3>
      }
      {
        loading ? <h3> We Are Loading </h3> : <DogList/>
      }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getDogs })(App);