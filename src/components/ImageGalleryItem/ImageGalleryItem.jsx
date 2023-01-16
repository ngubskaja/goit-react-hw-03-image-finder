import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
    return (
        <li className={css.imageGalleryItem}>
  <img className={css.imageGalleryItem_image} src={webformatURL} onClick={() => onClick(largeImageURL)} alt="" />
</li>
    )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}