import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import GroupMenuTab from "../GroupMenuTab/GroupMenuTab";
import {useAuth} from "../../../plugins/Auth";

const GroupMenu = (props) => {

    let auth = useAuth();
    const [clickedTab, clickedTabUpdate] = useState(0);

    return (auth.user ? (auth.user.structure === "group" ?
        <div className={"h-full min-w-20 w-20 bg-grey-dark items-center flex flex-col space-y-3"}>
            <Icon.AlignJustify className={"h-18 text-white"}/>
            <GroupMenuTab
                title={'Sud-Est'}
                notification={3}
                isClicked={clickedTab === 0}
                picture={"https://images.frandroid.com/wp-content/uploads/2020/05/0cdbc9fe12ff81e2d843c248-1200-800.jpg"}
                onClick={()=>clickedTabUpdate(0)}
            />
            <GroupMenuTab
                title={'Ile-de-France'}
                notification={0}
                isClicked={clickedTab === 1}
                picture={"https://images.caradisiac.com/logos/0/1/4/4/260144/S7-nouvelles-aides-a-l-achat-d-une-voiture-pas-avant-la-rentree-182926.jpg"}
                onClick={()=>clickedTabUpdate(1)}
            />
            <GroupMenuTab
                title={'Sud-Ouest'}
                notification={0}
                isClicked={clickedTab === 2}
                picture={"https://static.lpnt.fr/images/2020/09/12/20729794lpw-20729998-article-lamborghini-jpg_7343426_1250x625.jpg"}
                onClick={()=>clickedTabUpdate(2)}
            />
        </div> : null) : null
    );
}

GroupMenu.propTypes = {

};

GroupMenu.defaultProps = {};

export default GroupMenu;