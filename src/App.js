import React from 'react';
import './App.css';

function App(props) {

  const { loading, error} = props;

  if (error !== "") {
    return <h3>{error}</h3>
  }

  return (
    <div className="App">
      <h1> Dog Photo </h1>

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

export default connect(mapStateToProps)(App);