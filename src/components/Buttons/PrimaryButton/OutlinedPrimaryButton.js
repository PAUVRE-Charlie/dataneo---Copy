import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "@material-ui/core";

const OutlinedPrimaryButton = (props) => {
    return (
        <Button
            style={{
                backgroundColor: props.disabled ? "#b5b5b5" : props.color,
                color: props.labelColor,
                textTransform:'inherit',
                padding:'9px 15px',
                borderRadius:'8px',
                border:'solid 1px',
                borderColor: props.labelColor,
                whiteSpace: props.oneLine ? 'nowrap' : 'normal',
                ...props.customStyle}}
            onClick={props.onPress}
            classes={{label : "font-poppins font-semibold text-xs leading-tight"}}
            type={props.buttonType}
            disabled={props.disabled}
            startIcon={props.startIcon}
        >
            {props.label}
        </Button>
    );
}

OutlinedPrimaryButton.propTypes = {
    label: PropTypes.string.isRequired,
    labelColor: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
    disabled : PropTypes.bool,
    buttonType: PropTypes.string,
    oneLine: PropTypes.bool,
    startIcon : PropTypes.any
};

OutlinedPrimaryButton.defaultProps = {
    label: "Press here",
    color: "white",
    labelColor:"#0062FF",
    oneLine:true,
};

export default OutlinedPrimaryButton;