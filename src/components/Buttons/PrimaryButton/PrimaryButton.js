import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";

const PrimaryButton = (props) => {
    return (
        <Button
            style={{
                backgroundColor: props.disabled ? "#b5b5b5" : props.color,
                color: props.labelColor,
                textTransform:'inherit',
                padding:'8px 14px',
                borderRadius:'8px',
                whiteSpace: props.oneLine ? 'nowrap' : 'normal',
                ...props.customStyle}}
            onClick={props.onPress}
            classes={{label : "font-poppins font-semibold"}}
            type={props.buttonType}
            disabled={props.disabled}
            startIcon={props.startIcon}
        >
            {props.label}
        </Button>
    );
}

PrimaryButton.propTypes = {
    label: PropTypes.string.isRequired,
    labelColor: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
    disabled : PropTypes.bool,
    buttonType: PropTypes.string,
    oneLine: PropTypes.bool,
    startIcon : PropTypes.any
};

PrimaryButton.defaultProps = {
    label: "Press here",
    color: "#0062FF",
    labelColor:"white",
    oneLine:true,
};

export default PrimaryButton;