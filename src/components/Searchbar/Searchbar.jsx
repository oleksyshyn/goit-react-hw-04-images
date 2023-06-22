import React from "react";
import { BsSearch } from "react-icons/bs";
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';


export class Searchbar extends React.Component {
    state = {
        imageName: '',
    }

    inputChange = e => {
        const imageName = e.target.value.toLowerCase();
        this.setState({ imageName });
    }
    
    formSubmit = e => {
        e.preventDefault();
        if (this.state.imageName.trim() === '') {
            return;
        }
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: ''});
    }

    render() {
      return (
        <header className={css.searchbar}>
            <form onSubmit={this.formSubmit} className={css.form}>
              <button type="submit" className={css.button}>
                      <span className={css.button_label}>Search</span>
                      <BsSearch />
              </button>

              <input
                  className={css.input}
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  value={this.state.imageName}
                  onChange={this.inputChange}
              />
          </form>
        </header>
      )
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};