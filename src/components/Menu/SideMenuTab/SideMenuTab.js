import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import {Accordion, AccordionDetails, AccordionSummary, Button, ButtonBase, IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";

const SideMenuTab = (props) => {

    const [isOpen, isOpenUpdate] = useState(props.clicked);
    const [clickedSub, clickedSubUpdate] = useState(null);

    useEffect(()=> {
        if(props.clicked === false) {
            isOpenUpdate(false);
            clickedSubUpdate(-1);
        }
    },[props.clicked])

    const handleClick = () => {
        if(props.subMenu !== undefined) {
            isOpenUpdate(!isOpen);
        }
    }

    const handleSubClick = (sub) => {
        clickedSubUpdate(sub);
    }

    const displayInteraction = () => {
        if(props.notification > 0) return <p className={"bg-alert-red rounded-xl text-white font-roboto text-sm px-2"}>{props.notification}</p>
        else if (props.subMenu !== undefined) return <Icon.ChevronDown className={"w-6 h-6"} style={isOpen ? {transform:'rotate(180deg)'} : null}/>
    }

    return (
        <div className={"w-full"}>
            <div className={"h-13 group w-full items-center cursor-pointer select-none relative flex  " + (props.clicked ? "text-blue" : "text-grey-dark")} onClick={handleClick}>
                <div className={"bg-blue rounded-r-lg absolute h-8 left-0 w-0.75 group-hover:inline-block " + (props.clicked ? "inline-block":"hidden" )}/>
                <div className={"flex w-10/12 relative items-center "}>
                    <div className={props.clicked ? "text-blue" : "text-grey"}>{props.icon}</div>
                    <p className={"font-poppins text-sm no-underline font-medium"}><b>{props.label}</b></p>
                </div>
                {displayInteraction()}
            </div>
            {isOpen && props.subMenu !== undefined?
                <div className={"overflow-hidden pl-1/5"}>
                    {props.subMenu.map((tab,i) => {
                        return(
                            <Link to={tab.url} className={"cursor-pointer decoration-none"} key={i}>
                                <p className={"font-poppins text-sm font-normal mt-3 "+ (clickedSub === tab.url ? "text-blue" : "text-grey-dark")} onClick={() => handleSubClick(tab.url)}>{tab.label}</p>
                            </Link>)
                    })}
                </div>
                :
                null
            }
        </div>
    );
}

SideMenuTab.propTypes = {
    icon: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    notification: PropTypes.number.isRequired,
    callback: PropTypes.func,
    subMenu: PropTypes.arrayOf(PropTypes.object)
};

SideMenuTab.defaultProps = {
    icon: "",
    label: "SideMenuTab",
    notification: 0,
};

export default SideMenuTab;