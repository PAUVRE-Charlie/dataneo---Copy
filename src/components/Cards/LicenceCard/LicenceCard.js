import React, {useState} from 'react';
import PropTypes from 'prop-types';

const LicenceCard = (props) => {
    return (
        <div className={"flex bg-white p-10 pt-5 justify-between items-center w-full border border-grey rounded-xl h-48 max-h-48 min-w-max"}>
            <div className={"w-3/5 mr-6 h-full space-y-2"}>
                <p className={"font-poppins font-semibold text-xl text-grey-dark"}>{props.product}</p>
                <div className={"flex justify-between items-center border-b border-grey text-grey-dark"}>
                    <p className={"font-roboto text-xs"}>Accès totaux</p>
                    <p className={"font-poppins font-bold text-x2l"}>{props.totalAccess}</p>
                </div>
                <div className={"flex justify-between items-center text-grey-dark"}>
                    <p className={"font-roboto text-xs text-grey-text"}>Membres actifs</p>
                    <p className={"font-poppins font-bold text-sm"}>{props.activeUsers}</p>
                </div>
                {props.pendingInvitations !== undefined ?
                <div className={"flex justify-between items-center text-grey-dark"}>
                    <p className={"font-roboto text-xs text-grey-text"}>Invitations en attente</p>
                    <p className={"font-poppins font-bold text-sm"}>{props.pendingInvitations}</p>
                </div> : null}
                {props.availableAccess !== undefined ?
                    <div className={"flex justify-between items-center text-grey-dark"}>
                        <p className={"font-roboto text-xs text-grey-text"}>Accès disponibles</p>
                        <p className={"font-poppins font-bold text-sm"}>{props.availableAccess}</p>
                    </div>
                :null}
            </div>
            <img className={"w-2/5"} src={props.picture} alt={"logo"}/>
        </div>
    )
}

LicenceCard.propTypes = {
    product: PropTypes.string.isRequired,
    totalAccess: PropTypes.number.isRequired,
    activeUsers : PropTypes.number,
    pendingInvitations: PropTypes.number,
    availableAccess: PropTypes.number,
    picture: PropTypes.string.isRequired,
};

LicenceCard.defaultProps = {};

export default LicenceCard;