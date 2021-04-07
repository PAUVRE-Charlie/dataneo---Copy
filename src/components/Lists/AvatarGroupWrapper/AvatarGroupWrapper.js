import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core";
import {AvatarGroup} from "@material-ui/lab";

const AvatarGroupWrapper = (props) => {

    const customStyles = makeStyles({
        avatar: {
            height:props.height+'px',
            width:props.width+'px',
            fontSize: props.fontSize+'px',
            background:props.background,
            marginRight:props.spacing + 'px',
            ...props.customStyle
        }
    })()

    return (
    <AvatarGroup classes={{avatar:customStyles.avatar}} max={props.max} >
        {props.children}
    </AvatarGroup>)
}

AvatarGroupWrapper.propTypes = {
    height:PropTypes.number,
    width: PropTypes.number,
    background: PropTypes.any,
    spacing: PropTypes.number,
    fontSize: PropTypes.number,
    customStyle: PropTypes.any,
};

AvatarGroupWrapper.defaultProps = {
    fontSize: 14,
};

export default AvatarGroupWrapper;