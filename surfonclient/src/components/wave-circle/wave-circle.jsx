import React from 'react';
import PropTypes from 'prop-types';
import './wave-circle.style.css';

const WaveCirle = ({ style, stylecontainer }) => {

    return(
    <div style = {stylecontainer}>
        <div style={style} className='wave-circle'></div>
        <div style={style} className='wave-circle-bg'></div>
    </div>
    )
}
WaveCirle.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    stylecontainer: PropTypes.objectOf(PropTypes.string)
}

export default WaveCirle;