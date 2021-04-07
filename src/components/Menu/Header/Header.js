import React from 'react';
import PropTypes from 'prop-types';
import NotificationMenu from "../NotificationMenu/NotificationMenu";
import UserMenu from "../UserMenu/UserMenu";
import {useAuth} from "../../../plugins/Auth";
import {Input, InputAdornment} from "@material-ui/core";
import * as Icon from 'react-feather';

const Header = (props) => {

    const auth = useAuth();

    return (auth.user ?
        <div className={"shadow-header w-full bg-white h-18 flex justify-between items-center px-4"}>
            <img className={"w-28 h-auto"} src={props.logo} alt={'logo'}/>
            <div className={"flex justify-around align-center min-w-80 space-x-4"}>
                {props.searchBar ? <Input placeholder={"Trouver une entreprise"} startAdornment={<InputAdornment position={"start"}><Icon.Search className={"text-grey"}/></InputAdornment>} className={"flex-grow p-2 border border-grey bg-grey-light rounded w-80"}/>                 : null}
                <NotificationMenu/>
                <UserMenu disconnect={props.disconnect}/>
            </div>
        </div> : null
    );
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    searchBar : PropTypes.bool
};

Header.defaultProps = {};

export default Header;