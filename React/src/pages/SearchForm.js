import React, { Component } from 'react';
import { Input } from 'antd'
// import { Search } from 'Input';

import './SearchForm.css';

class SearchForm extends Component {
  render() {
    const onChange = e => {
      console.log(e);
    };
    return (
      <div className="search-form__wrap">

        <Input.Search
          className="search-form__input"
          placeholder="Что вы ищите?"
          onSearch={value => console.log(value)}
          allowClear
          onChange={onChange}
        />

        {/* <form>
          <input
            className="search-form__input"
            type="text"
            placeholder="Что вы ищите?" />
        </form> */}
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
