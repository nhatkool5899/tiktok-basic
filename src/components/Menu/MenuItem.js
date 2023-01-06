import Button from "../Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({data, onClick}) {
    return ( 
        <Button 
            className={cx('menu-item')} 
            to={data.to} 
            onClick={onClick}
        >
            {data.icon && <span className={cx('menu-icon')}>{data.icon}</span>} 
            {
                data.type === 'language' 
                ?
                <span className={cx('language-title')}>{data.title}</span> 
                :
                <span>{data.title}</span>
            }
        </Button>
     );
}

export default MenuItem;