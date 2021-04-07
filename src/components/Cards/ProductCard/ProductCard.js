import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import {Link} from "react-router-dom";

const ProductCard = (props) => {
    return (
        <div className={"group border-box bg-white border-grey border hover:bg-blue-light hover:border-2 rounded-xl flex items-center p-6 min-w-96 w-96 "}>
            <div className={"text-grey-dark font-roboto text-xs group-hover:-ml-0.25 space-y-2 flex flex-col justify-between"}>
                <p className={"font-poppins text-xl"}><b>{props.title}</b></p>
                <p className={"font-bold"}><b>{props.catchphrase}</b></p>
                <p>{props.description}</p>
                <Link to={props.url}>
                    <PrimaryButton label={props.buttonLabel} color={"#0062FF"}/>
                </Link>
            </div>
            <img className={"w-full h-auto group-hover:-mr-0.25"} src={props.image} alt={props.title + "_logo"}/>
        </div>
    );
}

ProductCard.propTypes = {
    title : PropTypes.string.isRequired,
    catchphrase: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonLabel: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url:PropTypes.string
};

ProductCard.defaultProps = {
    title: "Title",
    catchphrase: "Ceci est une catchphrase de Product Card",
    description: "Ceci est une description de Product Card",
    buttonLabel: "buttonLabel"
};

export default ProductCard;