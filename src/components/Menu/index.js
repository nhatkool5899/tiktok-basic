import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";

import MenuItem from "./MenuItem";

import { wrapper as PopperWrapper } from "../Popper";
import Header from "./Header";
import { useState } from "react";


const cx = classNames.bind(styles);

const defaultFn = () => {};


function Menu({children, items = [], onChange = defaultFn}) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]


    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent){
                    setHistory(prev => [...prev, item.children])
                } else{
                    onChange(item)
                }
            }} />
        })


    }
    return ( 
        <Tippy 
            // visible
            interactive
            delay={[0, 600]}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        { history.length > 1 && <Header title='Ngôn ngữ' onBack={() => {
                            setHistory(prev => prev.slice(0, -1))
                        }} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
            >
                
            {children}

        </Tippy>
     );
}

export default Menu;