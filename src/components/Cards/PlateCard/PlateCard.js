import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";

const PlateCard = (props) => {
    return (
        <div class={"group box-border bg-white inline-block rounded-xl border-grey border min-w-60 max-w-60 h-60 p-4 pl-6 pb-6 hover:bg-blue-light hover:border-2"}>
            <div className={"group-hover:-ml-0.25 group-hover:-mt-0.25  space-y-2 "}>
                <img class={"rounded-full w-16 h-16 object-cover"} src={props.picture} alt={"plate_img"}/>
                <p class={"font-poppins font-semibold text-lg text-grey-dark"}>{props.title}</p>
                <p class={"font-roboto text-grey-dark text-xs"}>{props.text}</p>
                <PrimaryButton onPress={()=>console.log('Accès à : '+ props.title)} label={"Accèder à Neofleet"} color={"#0062FF"}/>
            </div>
        </div>
    );
}

PlateCard.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
};

PlateCard.defaultProps = {};

export default PlateCard;