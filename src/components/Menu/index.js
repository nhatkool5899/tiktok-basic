import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react";

import MenuItem from "./MenuItem";

import { wrapper as PopperWrapper } from "../Popper";


const cx = classNames.bind(styles);


function Menu({children, items = []}) {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />

        ))

    }
    return ( 
        <Tippy 
                visible
                interactive="true"
                render={(attrs) => (
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {renderItems()}
                        </PopperWrapper>
                    </div>
            )}>
                
            {children}

        </Tippy>
     );
}

export default Menu;