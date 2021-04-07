import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import {Badge, ClickAwayListener, IconButton, MenuItem, MenuList} from "@material-ui/core";

const NotificationMenu = (props) => {

    const [isOpen, isOpenUpdate] = useState(false);

    const handleClick = () => {
        isOpenUpdate(!isOpen);
    }

    const handleListKeyDown = () => {

    }

    const renderNotifications = () => {
        if(props.notification == null) return <MenuItem onClick={handleClick}>Pas de notification !</MenuItem>
    }

    return (
        <div className={"h-full"}>
            <IconButton onClick={handleClick}>
                <Badge color={"error"} badgeContent={""} variant={"dot"} invisible={props.notification == null}>
                    <Icon.Bell className={"text-grey"}/>
                </Badge>
            </IconButton>
            {isOpen ?
                <div className={"absolute mt-4 z-10"}>
                    <div className={"w-0 h-0 ml-2"} style={{
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderBottom: '10px solid white',
                    }}/>
                    <ClickAwayListener onClickAway={handleClick}>
                        <MenuList className={"bg-white rounded shadow"} autoFocusItem={isOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                            {renderNotifications()}
                        </MenuList>
                    </ClickAwayListener>
                </div>
                :
                null
            }
        </div>
    );
}

NotificationMenu.propTypes = {
    notification: PropTypes.string,
};

NotificationMenu.defaultProps = {};

export default NotificationMenu;