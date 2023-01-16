import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
    return (
        <button className={css.button_load} onClick={loadMore}>Load more</button>
    );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};