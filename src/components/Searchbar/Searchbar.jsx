import React, {useState} from "react";
import { BsSearch } from "react-icons/bs";
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

function Searchbar({onSubmit}) {
    const [imageName, setImageName] = useState('');

    const inputChange = e => {
        const imageName = e.target.value.toLowerCase();
        setImageName(imageName);
    }
  
    const formSubmit = e => {
        e.preventDefault();
        if (imageName.trim() === '') {
            return;
        }
        onSubmit(imageName);
        setImageName('');
    }

    return (
        <header className={css.searchbar}>
            <form onSubmit={formSubmit} className={css.form}>
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
                  value={imageName}
                  onChange={inputChange}
              />
          </form>
        </header>
    )
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};