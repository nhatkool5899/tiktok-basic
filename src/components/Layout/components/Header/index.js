import styles from './header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEarthOceania, faEllipsis, faEllipsisVertical, faKeyboard, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import images from '../../../../assets/images';
import { wrapper as PopperWrapper } from '../../../Popper';
import AccountItem  from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Menu';

const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard'
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3])
        }, 3000)
    })
    return <header className={cx('wrapper')}>

        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Logo" />
            </div>
            <Tippy 
                visible = {searchResult.length > 0}
                interactive="true"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                <p>Tài khoản</p>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />

                            </h4>
                        </PopperWrapper>
                    </div>
            )}>
                <div className={cx('search')}>
                    <input placeholder='Tìm kiếm tài khoản và video' spellCheck="false" />
                    <button className={cx('btn-clear')}><FontAwesomeIcon icon={faCircleXmark} /></button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                    <Button primary>Log In</Button>
                    <Button outline style={{marginLeft: 6}} >Register</Button>

                    <Menu
                        items={MENU_ITEMS}
                    >

                        <span className={cx('more-list')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </span>
                    </Menu>
                        

            </div>
        </div>
    </header>
}

export default Header;