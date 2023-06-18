import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary,
    btnLogin,
    btnGreen,
    small,
    large,
    children,
    disabled,
    className,
    onClick,
    ...PasProps
}) {
    const classes = cx('wrapper', {
        primary,
        btnLogin,
        btnGreen,
        small,
        large,
        disabled: false,
        [className]: className,
    });
    const props = { onClick, ...PasProps };
    let Comp = 'button';
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key];
            }
        });
    } else if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
