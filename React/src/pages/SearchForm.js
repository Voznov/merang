import React, { Component } from 'react';

import './SearchForm.css';

class SearchForm extends Component {
  render() {
    return (
      <div >
        <form>
          <input
            className="search-form__input"
            type="text"
            placeholder="Что вы ищите?" />
        </form>
      </div>
    );
  }
}

export default SearchForm;