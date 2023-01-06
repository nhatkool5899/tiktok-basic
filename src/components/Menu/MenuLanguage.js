import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";


import { wrapper as PopperWrapper } from "../Popper";


const cx = classNames.bind(styles);


function MenuLanguage({title, onBack}) {

    return ( 
        <div className={cx('box-language')}>
            
        </div>
     );
}

export default MenuLanguage;