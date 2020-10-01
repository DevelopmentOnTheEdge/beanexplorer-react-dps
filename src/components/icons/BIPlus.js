import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import {BootstrapIcon} from "./BootstrapIcon";

const BIPlus = ({width, height, className,color}) => {
    className = classNames('bi bi-plus', className);
    return (
        <BootstrapIcon height={height} width={width} className={className} color={color}
                       d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    )
}
BIPlus.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
};

export default BIPlus;