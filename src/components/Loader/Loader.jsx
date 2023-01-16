import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.loader}>
<InfinitySpin 
                width='500'
                color="#4fa94d"
                position = 'center'
                visible={true}
/>
        </div>
    );
};