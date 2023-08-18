
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module/Searchbar.module.css';
import searchIcon from '../ImgIcon/search-icon.png';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <img src={searchIcon} alt="Search" className={s.buttonIcon} />
          </button>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
