import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {HeaderPictures} from "../../../assets/img";
import {Avatar, Button, ClickAwayListener, IconButton} from "@material-ui/core";
import {useAuth} from "../../../plugins/Auth";
import * as Icon from 'react-feather';

const UserMenu = (props) => {

    const [isOpen, isOpenUpdate] = useState(false);

    const auth = useAuth();

    const handleClick = () => {
        isOpenUpdate(!isOpen);
    }

    const handleSignout = () => {
        auth.signOut();
    }

    useEffect(async _ =>{
        const user = await auth.get('api/me');
        if(user) console.log(user)
    }, [])

    return (
        <div>
            <div className={"flex items-center justify-between w-full space-x-2"}>
                <Avatar className={"w-8 h-8"} src={props.picture} alt={'profile_picture'}>{props.name.split(" ").map((n)=>n[0]).join("")}</Avatar>
                <div className={"text-left"}>
                    <p className={"font-poppins font-semibold text-sm text-grey-dark mb-1"}>{props.name}</p>
                    <p className={"font-roboto text-xs text-grey"}>{props.job}</p>
                </div>
                <IconButton onClick={handleClick}>
                    <Icon.ChevronDown/>
                </IconButton>
            </div>
            {isOpen ?
                <div className={"absolute mt-5 z-10"}>
                    <div className={"w-0 h-0 ml-40"}
                         style={{
                             borderLeft: '10px solid transparent',
                             borderRight: '10px solid transparent',
                             borderBottom: '10px solid white',
                         }}
                    />
                    <ClickAwayListener onClickAway={handleClick}>
                        <div className={"bg-white h-content w-60 p-3 rounded text-left shadow"}>
                            <p className={"font-poppins font-semibold text-sm text-grey-dark mb-1"}><b>{props.name}</b></p>
                            <p className={"font-roboto text-xs text-grey mb-3"}>{props.job}</p>
                            <Button
                                style={{textTransform: 'inherit', color:'#636E95'}}
                                startIcon={<Icon.LogOut/>}
                                onClick={handleSignout}
                            >
                                Déconnexion
                            </Button>
                        </div>
                    </ClickAwayListener>
                </div>
                :
                null
            }
        </div>
    );
}

UserMenu.propTypes = {
    name: PropTypes.string.isRequired,
    job : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired
};

UserMenu.defaultProps = {
    name: "Didier VILBREQUIN",
    job:"Gestionnaire de concession",
    picture : HeaderPictures.profile
};

export default UserMenu;