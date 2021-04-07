import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SideMenuTab from "../SideMenuTab/SideMenuTab";
import {Link, useLocation} from "react-router-dom";
import {useAuth} from "../../../plugins/Auth";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import * as Icon from 'react-feather'
import UniversityCard from "../../Cards/UniversityCard/UniversityCard";
import {UniversityCardPictures} from "../../../assets/img";


const SideMenu = (props) => {

    const [clickedTab, clickedTabUpdate] = useState("/dashboard");
    const auth = useAuth();
    const location = useLocation()

    useEffect(() => {
        clickedTabUpdate(location.pathname);
    },)

    /*return(
        <Drawer variant={'permanent'} classes={{paper: 'w-60 !relative text-left justify-between'}} >
            <div className={"flex flex-col items-start"}>
                <p className={"mt-8 mb-3 font-poppins font-semibold text-sm text-grey-text mx-auto uppercase"}>Espace d'administration</p>
                {props.admin.map((tab, i) => {
                    return (
                        <SideMenuTab
                            icon={tab.icon}
                            label={tab.label}
                            notification={tab.notification}
                            subMenu={tab.subMenu}
                            key={'admin[' + i + ']'}
                            url={tab.url}
                        />
                    )
                })}
            </div>
            <div className={"flex flex-col items-start"}>
                <p className={"mb-3 font-poppins font-semibold text-sm text-grey-text uppercase"}>Ressources</p>
                {props.resources.map((tab, i) => {
                    return (
                        <SideMenuTab
                            icon={tab.icon}
                            label={tab.label}
                            notification={tab.notification}
                            subMenu={tab.subMenu}
                            key={'admin[' + i + ']'}
                            url={tab.url}
                        />
                    )
                })}
            </div>
        </Drawer>
    )*/
    return (auth.user ?
            props.console ?
                <div className={"bg-white h-full border-r border-grey min-w-60 w-60 text-left flex flex-col justify-between border-box overflow-hidden"}>
                    <div>
                        <p className={"mt-8 mb-3 font-poppins font-semibold text-sm text-grey-text mx-auto uppercase ml-5"}>Espace d'administration</p>
                        {props.admin.map((tab, i) => {
                            if(tab.subMenu === undefined || tab.subMenu === null) {
                                return (
                                <Link to={tab.url} key={'resources[' + i + ']'}>
                                    <SideMenuTab
                                        icon={tab.icon}
                                        label={tab.label}
                                        notification={tab.notification}
                                        clicked={clickedTab === tab.url}
                                        subMenu={tab.subMenu}
                                        key={'admin[' + i + ']'}
                                    />
                                </Link>
                            )}
                            else {
                                return(<SideMenuTab
                                    icon={tab.icon}
                                    label={tab.label}
                                    notification={tab.notification}
                                    clicked={tab.subMenu.some(submenu => submenu.url === clickedTab)}
                                    subMenu={tab.subMenu}
                                    key={'admin[' + i + ']'}
                                />)
                            }
                        })}
                    </div>
                    <div className={"border-t border-grey"}>
                        <p className={"mt-8 mb-3 font-poppins font-semibold text-sm text-grey-text mx-auto uppercase ml-5"}><b>Ressources</b></p>
                        {props.resources.map((tab, i) => {
                            return (
                                <Link to={tab.url} key={'resources[' + i + ']'}>
                                    <SideMenuTab
                                        icon={tab.icon}
                                        label={tab.label}
                                        notification={tab.notification}
                                        clicked={clickedTab === tab.url}
                                        subMenu={tab.subMenu}
                                    />
                                </Link>
                            )
                        })}
                    </div>
                </div>
                :
                <div className={"bg-blue-50 bg-opacity-50 h-full border-r border-grey min-w-60 w-60 text-left flex flex-col justify-between border-box overflow-hidden"}>
                    <div className={"mt-6"}>
                        {props.admin.map((tab, i) => {
                            if(tab.subMenu === undefined || tab.subMenu === null) {
                                return (
                                    <Link to={tab.url} key={'resources[' + i + ']'}>
                                        <SideMenuTab
                                            icon={tab.icon}
                                            label={tab.label}
                                            notification={tab.notification}
                                            clicked={clickedTab === tab.url}
                                            subMenu={tab.subMenu}
                                            key={'admin[' + i + ']'}
                                        />
                                    </Link>
                                )}
                            else {
                                return(<SideMenuTab
                                    icon={tab.icon}
                                    label={tab.label}
                                    notification={tab.notification}
                                    clicked={tab.subMenu.some(submenu => submenu.url === clickedTab)}
                                    subMenu={tab.subMenu}
                                    key={'admin[' + i + ']'}
                                />)
                            }
                        })}
                    </div>
                    <div className={"p-2 space-y-10"}>
                        <Link className={"rounded-2xl overflow-hidden w-11/12"} to={"/dashboard"} >
                            <PrimaryButton
                                label={"Retour à la console d'administration"}
                                labelColor={"#0062FF"}
                                color={"#FFFFFF"}
                                startIcon={<Icon.ArrowLeft className={"text-blue"}/>}
                                customStyle={{borderRadius: "30px", overflow:"hidden", border:"1px solid #0062FF"}}
                                oneLine={false}
                            />
                        </Link>
                        <UniversityCard alignment={"vertical"} title={"Constituer une liste"} description={"Nouveau sur Dataneo ? Apprenez à réaliser des listes d’entreprises adaptées à votre prospection."} picture={UniversityCardPictures.illustration_2} media={"https://www.youtube.com/watch?v=fn3KWM1kuAw&list=LL&index=19"}/>
                    </div>
                </div>
            : null
    );
}

SideMenu.propTypes = {
    admin: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.object.isRequired,
        label: PropTypes.string.isRequired,
        notification: PropTypes.number.isRequired,
        subMenu: PropTypes.arrayOf(PropTypes.object)
    })),
    resources: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.object.isRequired,
        label: PropTypes.string.isRequired,
        notification: PropTypes.number.isRequired,
        subMenu: PropTypes.arrayOf(PropTypes.object)
    })),
};

SideMenu.defaultProps = {
    admin: [],
    resources: [],
    console:true
};

export default SideMenu;