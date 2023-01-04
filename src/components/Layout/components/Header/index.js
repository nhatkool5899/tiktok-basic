import styles from './header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '../../../../assets/images';

const cx = classNames.bind(styles)

function Header() {
    return <header className={cx('wrapper')}>

        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Logo" />
            </div>
            <div className={cx('search')}>
                <input placeholder='Tìm kiếm tài khoản và video' spellCheck="false" />
                <button className={cx('btn-clear')}><i class="fa-regular fa-circle-xmark"></i></button>
                <button className={cx('btn-search')}></button>
            </div>
        </div>
    </header>
}

export default Header;