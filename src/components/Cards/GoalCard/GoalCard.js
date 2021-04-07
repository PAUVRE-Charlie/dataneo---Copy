import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import {Dialog} from "@material-ui/core";
import DetailledGoalCard from "./DetailledGoalCard";
import {Link, useLocation, useRouteMatch} from "react-router-dom";

const GoalCard = (props) => {

    const location = useLocation();
    const match = useRouteMatch();

    const [infos, setInfos] = useState({
        title: props.title,
        attachmentNbr: props.attachmentNbr,
        completedTasks: props.completedTasks,
        totalTasks: props.totalTasks,
        deadline: new Date(parseInt(props.deadline.split('/')[2]),parseInt(props.deadline.split('/')[1])-1,parseInt(props.deadline.split('/')[0])),
        members: props.members,
    });

    const checkUrl = () => {
        let url = location.pathname.split('/');
        return url[url.length - 2] === "goal" && url[url.length - 1] == props.id;
    }

    const applyChanges = (title, completedTasks, totalTasks, deadline) => {
        let updatedInfos = infos;
        updatedInfos.title = title;
        updatedInfos.completedTasks = completedTasks;
        updatedInfos.totalTasks = totalTasks;
        updatedInfos.deadline = deadline;
        setInfos(updatedInfos);
    }

    const renderDeadline = () => {
        const daysBeforeDeadlineValue = daysBeforeDeadline(infos.deadline);
        if(daysBeforeDeadlineValue === 0) return(
            <div className={"flex justify-center items-center p-1 rounded text-alert-red bg-alert-redBackground"}>
                <Icon.Clock className={"h-4 w-4"}/>
                <p className={"font-roboto text-sm ml-1"}>Dernier jour</p>
            </div>
        )
        else if(daysBeforeDeadlineValue < 0) return (
            <div className={"flex justify-center items-center p-1 rounded text-alert-red bg-alert-redBackground"}>
                <Icon.Clock className={"h-4 w-4"}/>
                <p className={"font-roboto text-sm ml-1"}>Délai dépassé</p>
            </div>
        )
        else return (
                <div className={infos.completedTasks === infos.totalTasks ? "invisible" : daysBeforeDeadlineValue > 7 ? "flex p-1 justify-center items-center rounded text-grey" : daysBeforeDeadlineValue> 3 ? "flex justify-center items-center p-1 rounded text-alert-orange bg-alert-orangeBackground" : "flex justify-center items-center p-1 rounded text-alert-red bg-alert-redBackground"}>
                    <Icon.Clock className={"h-4 w-4"}/>
                    <p className={"font-roboto text-sm ml-1"}>{daysBeforeDeadlineValue} jours restants</p>
                </div>
            )
    }

    const daysBeforeDeadline = (deadline) => {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        return Math.ceil((deadline - new Date()) / _MS_PER_DAY);
    }

    return (
        <div>
            {checkUrl() ? <Dialog open={true} fullWidth={true} maxWidth={"md"} className={"disable-scrollbars"}><DetailledGoalCard {...props} deadline={infos.deadline} applyChanges={applyChanges}/></Dialog> : null}
            <Link to={match.url + "/goal/" + props.id}>
                <div className={"cursor-pointer border border-grey rounded-2xl p-4 min-w-72 max-w-72 max-h-48 h-content " + (infos.completedTasks === infos.totalTasks && infos.totalTasks !== 0? "bg-grey-light" : "bg-white")}>
                    <p className={"font-poppins font-semibold text-sm text-grey-dark mb-2 " + (infos.completedTasks === infos.totalTasks && infos.totalTasks !== 0 ? "line-through" : "no-underline")}>{infos.title}</p>
                    <p className={"font-roboto text-sm text-grey"}>{props.product}</p>
                    <div className={"flex justify-between text-center w-full mb-2"}>
                        <div className={"flex justify-center items-center"}>
                            <Icon.Paperclip className={"h-4 w-4 text-grey"}/>
                            <p className={"font-roboto text-sm text-grey ml-1"}>{infos.attachmentNbr}</p>
                        </div>
                        <div className={"flex justify-center items-center"}>
                            <Icon.CheckSquare className={"h-4 w-4 text-grey"}/>
                            <p className={"font-roboto text-sm text-grey ml-1"}>{infos.completedTasks}/{infos.totalTasks}</p>
                        </div>
                        {renderDeadline()}
                    </div>
                    <p className={"font-roboto text-sm text-right text-grey-text mb-2"}>{((infos.completedTasks / infos.totalTasks) * 100).toFixed(0)}%</p>
                    <div className={"w-full h-2 rounded"} style={{background: 'linear-gradient(90deg, #3DD598 ' + ((infos.completedTasks / infos.totalTasks) * 100).toFixed(0) + '%,#F1F1F5 ' + ((infos.completedTasks / infos.totalTasks) * 100).toFixed(0) +'%)'}}/>
                    <div className={"flex mt-3 space-x-1"}>
                        <div className={"text-white font-poppins font-medium text-sm text-center w-6 h-6 bg-gradient-to-br from-blue to-grey rounded-full leading-6"}>{props.members[0]}</div>
                        {infos.members[1] !== undefined ? <div className={"text-white font-poppins font-medium text-sm text-center w-6 h-6 bg-gradient-to-br from-blue to-grey rounded-full leading-6"}>{props.members[1]}</div> : null}
                        {infos.members[2] !== undefined ? <div className={"bg-white border border-grey-text font-poppins text-sm w-6 h-6 text-center text-grey-text rounded-full leading-6"}>+{props.members.length - 2}</div> : null}
                    </div>
                </div>
            </Link>
        </div>
    );
}

GoalCard.propTypes = {
    title: PropTypes.string.isRequired,
    product: PropTypes.string,
    attachmentNbr: PropTypes.number,
    completedTasks: PropTypes.number,
    totalTasks: PropTypes.number,
    deadline:PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.string),
    newGoal:PropTypes.bool,
};

GoalCard.defaultProps = {
    title:'Nouvel objectif',
    attachmentNbr: 0,
    newGoal:false,
};

export default GoalCard;