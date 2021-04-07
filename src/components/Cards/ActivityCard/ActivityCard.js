import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Avatar, IconButton, Menu, MenuItem} from "@material-ui/core";
import * as Icon from 'react-feather';

const ActivityCard = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const displayIcon = () => {
        switch(props.type) {
            case ('share'):
                return <Icon.MessageSquare className={"w-8 h-8 text-blue p-2 bg-blue-100 rounded-full"}/>;
            case ('create'):
                return <Icon.FilePlus className={"w-8 h-8 text-grey-dark p-2 bg-grey-light rounded-full"}/>;
            case ('delete'):
                return <Icon.Trash className={"w-8 h-8 text-alert-red p-2 bg-alert-redBackground rounded-full"}/>;
            case ('export'):
                return <Icon.Share className={"w-8 h-8 text-grey-dark p-2 bg-grey-light rounded-full"}/>;
            default:
                return;
        }
    }

    const handleEdit = () => {
        setAnchorEl(null);
    }

    const handleArchive = () => {
        setAnchorEl(null);
    }

    const handleDelete = () => {
        setAnchorEl(null);
    }

    return (
        <div className={"w-full flex justify-between items-center p-4 rounded-2xl bg-white border border-grey"}>
            <div className={"flex items-center"}>
                <Avatar className={"mr-4"}>{props.name.split(" ").map((n)=>n[0]).join("")}</Avatar>
                <div>
                    <p className={"font-poppins text text-grey-dark"}><span className={"font-semibold"}>{props.name}</span> a {props.action} {props.subject}</p>
                    <p className={"font-roboto text-sm text-grey-text"}>Il y a {props.time}</p>
                </div>
            </div>
            <div className={"flex justify-around items-center"}>
                {displayIcon()}
                <IconButton onClick={(e)=> setAnchorEl(e.currentTarget)}>
                    <Icon.MoreHorizontal className={"w-6 h-6"}/>
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{vertical:'bottom', horizontal:'center'}}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={handleEdit}>Éditer l'objectif</MenuItem>
                    <MenuItem onClick={handleArchive}>Archiver l'objectif</MenuItem>
                    <MenuItem onClick={handleDelete}>Supprimer l'objectif</MenuItem>
                </Menu>
            </div>
        </div>)
}

ActivityCard.propTypes = {
    name:PropTypes.string.isRequired,
    action:PropTypes.string.isRequired,
    subject:PropTypes.string.isRequired,
    time:PropTypes.string.isRequired,
    type:PropTypes.string
};

ActivityCard.defaultProps = {};

export default ActivityCard;