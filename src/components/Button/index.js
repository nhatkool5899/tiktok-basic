import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);


function Button({to, href, primary = false, outline = false, small = false, large = false, text = false, textOutline = false, className, leftIcon, children, onClick, ...passProps}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
    if(to){
        props.to = to
        Comp = Link

    }else if(href){
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        text,
        primary,
        outline,
        small,
        large,
        textOutline,
        [className]: className,
    });
    return ( 
        <Comp className={classes} {...props}>
            {/* {leftIcon && <span className={cx('icon')}>{leftIcon}</span>} */}
            <span>{children}</span>
        </Comp>
     );
}

export default Button;