import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Seachbar.module.css';
// import { FiSearch } from 'react-icons/fi';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  inputChange = e => {
    const { value } = e.currentTarget;
    this.setState({ search: value });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search.toLowerCase());
    this.setState({ search: '' });
  };
  render() {
    return (
    
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchForm_button}>
            <span >Search</span>
          </button>

          <input className={css.searchForm_input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
            value={this.state.search}
          />
        </form>
          
      </header>
    
    );
  };
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};