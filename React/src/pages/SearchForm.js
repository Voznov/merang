import React, { Component } from 'react';

import './SearchForm.css';

class SearchForm extends Component {
  render() {
    return (
      <div className="search-form__wrap">
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

// <form className="search-form">
//   <input
//     className="search-form__input  search-form__input-filter"
//     type="text"
//     placeholder="Что вы ищите?" />
//   <a
//     className="search-form__filter-button"
//     href="#" />
//
// </form>

export default SearchForm;
