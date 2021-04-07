import React from 'react';
import PropTypes from 'prop-types';

const GroupMenuTab = (props) => {
    return (
        <div className={"w-11 h-11 border border-grey-veryLight bg-white bg-center bg-cover rounded-xl relative align-middle"} onClick={props.onClick} style={props.isClicked ? {backgroundImage:'url('+props.picture+')'} : {filter: 'brightness(50%)',backgroundImage:'url('+props.picture+')'}}>
            {
                props.notification === 0 ? null : <p className={"absolute bg-alert-red text-white rounded-xl text-sm font-medium px-2 left-7 -mt-2"}>{props.notification}</p>
            }
            {
                props.picture == null ? <p className={"w-full h-full font-roboto text-xs font-bold text-center select-none"}><span className={"w-10 align-middle inline-block leading-4"}>{props.title}</span></p> : null
            }
        </div>
    );
}

GroupMenuTab.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string,
    notification: PropTypes.number,
    isClicked: PropTypes.string,
    onClick: PropTypes.func,
};

GroupMenuTab.defaultProps = {
    title:'New plate',
    picture: null
};

export default GroupMenuTab;