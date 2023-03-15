import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import GifForm from './components/GifForm';
import GifList from './components/GifList';
import { getGifs } from './actions/action';

import './App.css';

function App(props) {
  const { loading, error, getGifs } = props;

  useEffect(() => {
    getGifs('cat');
  }, [])


  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <GifForm />

      {
        (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h3>We are loading</h3> : <GifList />
      }

    </div>
  );
}

const mapStateToProps = state => {
  return ({
    gifs: state.gifs,
    loading: state.loading,
    error: state.error
  })
}

export default connect(mapStateToProps, { getGifs })(App);