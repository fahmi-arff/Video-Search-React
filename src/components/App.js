import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube'

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term
      }
    })
    // youtube.get('/search/photos', {
    //   params: { query: term },
    // });
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    ) 
  }
}

export default App;