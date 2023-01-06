import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";


import { wrapper as PopperWrapper } from "../Popper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles);


function Header({title, onBack}) {

    return ( 
        <div className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('title')}>{title}</h4>
        </div>
     );
}

export default Header;