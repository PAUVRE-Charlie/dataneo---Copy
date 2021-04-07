import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Avatar, IconButton, Menu, MenuItem} from "@material-ui/core";
import * as Icon from "react-feather";

const MessageCard = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleDelete = () => {
        setAnchorEl(null);
        props.onDelete(props.id);
    }

    return(
        <div className={"flex w-full"}>
            <Avatar src={props.picture} style={{border: '3px solid white'}} className={"-mr-3"}>{props.author.split(" ").map((n) => n[0]).join("")}</Avatar>
            <div className={"bg-grey-light rounded-xl p-5 pt-3 w-full"}>
                <div className={"flex justify-between items-center"}>
                    <p className={"w-content font-bold font-poppins text-sm"}>{props.author}</p>
                    <div className={"flex items-center space-x-2"}>
                        <p className={"text-xs text-gray-500"}>{props.date}</p>
                        <IconButton style={{padding:'2px'}} onClick={(e)=> setAnchorEl(e.currentTarget)}>
                            <Icon.MoreHorizontal/>
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{vertical:'bottom', horizontal:'center'}}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                        >
                            <MenuItem onClick={handleDelete}>Supprimer</MenuItem>
                        </Menu>
                    </div>
                </div>
                <p className={"text-grey-darktext font-roboto leading-6"}>{props.content}</p>
            </div>
        </div>
    )
}

MessageCard.propTypes = {
    id: PropTypes.number,
    author: PropTypes.string.isRequired,
    picture: PropTypes.string,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

MessageCard.defaultProps = {};

export default MessageCard;