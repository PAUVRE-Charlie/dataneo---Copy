import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {CardMedia, Dialog, IconButton} from "@material-ui/core";
import * as Icon from 'react-feather';
import ReactPlayer from "react-player";

const UniversityCard = (props) => {

    const [popOver, setPopOver] = useState(false);

    return (
        <div className={"bg-white border border-grey border-box rounded-xl flex p-6 justify-between items-center w-full " + (props.alignment === "vertical" ? "flex-col-reverse" : "max-h-48")}>
            <div className={"w-1/2 min-w-36 h-full flex flex-col justify-between"}>
                <div className={"border-b border-grey pb-6"}>
                    <p className={"font-poppins text-sm font-bold mb-2"}><b>{props.title}</b></p>
                    <p className={"font-roboto text-xs"}>{props.description}</p>
                </div>
                <div className={"font-roboto text-xs mt-2 flex justify-start items-center space-x-1"}>
                    <p className={"text-blue cursor-pointer w-content whitespace-nowrap"} onClick={()=>setPopOver(true)}>Débuter la formation</p>
                    {Boolean(props.time) ? <div className={"min-w-min h-1 w-1 rounded-full bg-grey-text"}/> : null}
                    {Boolean(props.time) ? <p className={"text-grey-text flex items-center whitespace-nowrap"}>Environ {props.time} minutes <Icon.Clock className={"h-3 w-3 ml-1"}/></p> : null }
                </div>
            </div>
            <img className={"h-full min-w-32 mt-4"} src={props.picture} alt={'university_illustration'}/>
            <Dialog open={popOver} maxWidth={"xl"}>
                <div className={"flex justify-between items-center p-4"}>
                    <p className={"font-poppins font-semibold"}>{props.title}</p>
                    <IconButton onClick={() => setPopOver(false)} className={""}>
                        <Icon.X/>
                    </IconButton>
                </div>
                <ReactPlayer url={props.media}/>
            </Dialog>
        </div>
    );
}

UniversityCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    time:PropTypes.number,
    alignment : PropTypes.oneOf(["vertical", "horizontal"])
};

UniversityCard.defaultProps = {
    alignment:"horizontal"
};

export default UniversityCard;