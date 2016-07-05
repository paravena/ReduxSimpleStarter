import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCET3Wd3o5cDkvLG-D5B_WGs9JSSwaAnZY';

// Create a new component. This component should produce
// some HTML
const App = function() {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// Take this component's generated HTML and put
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
