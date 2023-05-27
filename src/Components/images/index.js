import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './images.module.scss';
import classNames from 'classnames';

function Image(
    {
        src,
        alt,
        className,
        fallback: customFallback = images.noImage,
        ...props
    },
    ref,
) {
    const [fallback, setFallback] = useState([]);

    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
