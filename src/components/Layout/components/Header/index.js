import styles from './header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faCommentDots, faEarthAsia, faEarthOceania, faEllipsis, faEllipsisVertical, faKeyboard, faLocation, faLocationArrow, faMessage, faPlus, faSearch, faSign, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
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
        title: 'Tiếng Việt',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam'
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                }
            ]
        }
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

    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const currentUser = true;

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


            {currentUser ? (
                <div className={cx('actions')}>
                <Button textOutline><FontAwesomeIcon className={cx('actions-icon')} icon={faPlus}/> Tải lên</Button>
                <Button text><FontAwesomeIcon icon={faLocationArrow}/></Button>
                <Button text><FontAwesomeIcon icon={faCommentDots}/></Button>

                <Menu
                    items={MENU_ITEMS}
                    onChange = {handleMenuChange}
                >

                    <div className={cx('info-user')}>
                        <img src='https://hocdohoacaptoc.com/wp-content/uploads/2022/02/avata-dep-nam-2.jpg' alt='' className={cx('avatar')} />
                    </div>
                </Menu>
        </div>
            ): (

                <div className={cx('actions')}>
                        <Button textOutline><FontAwesomeIcon className={cx('actions-icon')} icon={faPlus}/> Tải lên</Button>
                        <Button primary className={cx('btn-login')}>Log In</Button>

                        <Menu
                            items={MENU_ITEMS}
                            onChange = {handleMenuChange}
                        >

                            <span className={cx('more-list')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </span>
                        </Menu>
                </div>
            )}
        </div>
    </header>
}

export default Header;