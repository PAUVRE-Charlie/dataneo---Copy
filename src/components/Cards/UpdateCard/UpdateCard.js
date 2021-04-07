import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, ClickAwayListener, Dialog, DialogActions, DialogContent, IconButton} from "@material-ui/core";
import * as Icon from 'react-feather';
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import {Link, Redirect, useLocation} from "react-router-dom";

const UpdateCard = (props) => {

    let location = useLocation();

    const handleClose = () => {
        return(<Redirect to='/annoncements'/>)
    }

    const displayPopOver = () => {
        switch (location.pathname.split('/')[3]) {
            case ("share"):
                //TODO Faire menu share
                return null;
            default:
                return (
                    <div className={"bg-white p-8 pt-0 space-y-4 font-roboto"}>
                        <div className={"border-b border-grey-light"}>
                            <div className={"flex justify-between items-center"}>
                                <p className={"font-poppins font-semibold text-lg text-grey-dark"}>{props.title}</p>
                            </div>
                            {props.publishingDate ? <p className={"w-full font text-sm text-grey "}>Mis en ligne le {props.publishingDate}</p> : null}
                            <div className={"flex justify-between items-center mt-6 mb-6"}>
                                <div className={"flex justify-start items-center"}>
                                    <Avatar src={props.author.picture}>{props.author.name.split(" ").map((n)=>n[0]).join("")}</Avatar>
                                    <div className={"ml-2 space-y-1"}>
                                        <p className={"font-semibold text-xs font-poppins text-blue"}>{props.author.name}</p>
                                        <p className={"font-roboto text-xs font-roboto text-grey"}>{props.author.job}</p>
                                    </div>
                                </div>
                                <IconButton component={Link} to={location.pathname+"/share"}>
                                    <Icon.Share2 className={"text-grey"}/>
                                </IconButton>
                            </div>
                        </div>
                        <p>{props.content}</p>
                        <PrimaryButton label={"Voir"} onPress={() => console.log(props.link)}/>
                    </div>
                );
        }
    }

    return (
        <div>
            <Link to={location.pathname+"/"+props.id} className={"w-full bg-white border border-grey rounded-xl flex justify-start items-center p-8 pl-4 h-52 hover:bg-blue-light hover:border-2 cursor-pointer"}>
                <img src={props.img} alt={'illustration'} className={"h-36 mr-6 w-1/3"}/>
                <div className={"w-2/3 h-full flex flex-col justify-between"}>
                    <div className={"flex justify-between items-start"}>
                        <p className={"font-poppins font-semibold text-lg text-grey-dark"}>{props.title}</p>
                        {props.read ? null : <p className={"text-white bg-alert-red px-2 py-1 rounded-xl text-sm min-w-max"}>Non lu</p>}
                    </div>
                    <p className={"w-full font text-sm text-grey"}>{props.summary}</p>
                    <div className={"flex justify-between items-center"}>
                        <div className={"flex justify-start items-center"}>
                            <Avatar
                                src={props.author.picture}>{props.author.name.split(" ").map((n) => n[0]).join("")}</Avatar>
                            <div className={"ml-2 space-y-1"}>
                                <p className={"font-semibold text-xs font-poppins text-blue"}>{props.author.name}</p>
                                <p className={"font-roboto text-xs font-roboto text-grey"}>{props.author.job}</p>
                            </div>
                        </div>
                        <IconButton component={Link} to={location.pathname + "/" + props.id + '/share'} className={"absolute"}>
                            <Icon.Share2 className={"text-grey"}/>
                        </IconButton>
                    </div>
                </div>
            </Link>
            {props.open ?
            <Dialog open={props.open} classes={{paper: '!rounded-xl'}}>
                <ClickAwayListener onClickAway={handleClose}>
                    <div>
                        <DialogActions>
                            <IconButton component={Link} to={"/"+location.pathname.split('/')[1]} onClick={handleClose}>
                                <Icon.X/>
                            </IconButton>
                        </DialogActions>
                        <DialogContent>
                            {displayPopOver()}
                        </DialogContent>
                    </div>
                </ClickAwayListener>
            </Dialog> :  null}
        </div>
    );
}

UpdateCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    read: PropTypes.bool,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        job : PropTypes.string.isRequired,
        picture: PropTypes.string,
    }),
    publishingDate: PropTypes.string,
    content: PropTypes.any,
    link: PropTypes.string,
    open:PropTypes.bool,
};

UpdateCard.defaultProps = {
    read: false,
    open: false,
};

export default UpdateCard;