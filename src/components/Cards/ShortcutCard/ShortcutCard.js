import React from 'react';
import PropTypes from 'prop-types';
import {ButtonBase} from "@material-ui/core";

const ShortcutCard = (props) => {
    return (
        <ButtonBase style={{borderRadius:'1rem', outline:'none'}} className={"outline-none"}>
        <div  className={"group bg-white border-box w-44 h-52 border border-grey rounded-2xl items-center p-5 pt-10 space-y-4 hover:bg-blue-light hover:border-2 text-center"} onClick={props.onPress}>
            <img src={props.image} alt={'shortcut_img'} className={"h-16 w-auto ml-auto mr-auto group-hover:-mt-0.25"}/>
            <p className={"font-poppins font-bold text-sm"}>{props.label}</p>
        </div>
        </ButtonBase>
    );
}

ShortcutCard.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
};

ShortcutCard.defaultProps = {
    disabled: false,
};

export default ShortcutCard;