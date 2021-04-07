import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Checkbox, IconButton, Menu, MenuItem} from "@material-ui/core";
import * as Icon from "react-feather";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import {useAuth} from "../../../plugins/Auth";
import MessageCard from "../MessageCard/MessageCard";
import { useHistory } from 'react-router-dom';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import AvatarGroupWrapper from "../../Lists/AvatarGroupWrapper/AvatarGroupWrapper";


const DetailledGoalCard = (props) => {

    const auth = useAuth();
    const history = useHistory();
    const theme = createMuiTheme({
        palette: {
            primary : {
                main: "#3DD598"
            }
        }
    })
    const [infos, setInfos] = useState({
        title: props.title,
        users: [{name:'Adam Yogie', picture:''},{name:'Fawaid Nur', picture:''},{name:'Juven Haider', picture:''},{name:'Juven Haider', picture:''},{name:'Juven Haider', picture:''}],
        description:'Suscipit sagittis penatibus velit tristique massa morbi. Mauris ullamcorper dolor id volutpat odio et. Quis quisque donec vulputate hendrerit leo nisi, adipiscing. Tortor at tincidunt nisl in pellentesque. Lectus sagittis, sit aliquam blandit. Pellentesque gravida justo ante facilisis imperdiet enim quis morbi magna. Volutpat eget ut aliquam sed cras id vivamus euismod.\n' +
            'Integer pulvinar leo sit adipiscing. Bibendum eget volutpat adipiscing sagittis viverra quisque bibendum. Venenatis eu platea nulla sem consequat lobortis. Velit egestas.',
        lists:[],
        attachments: [],
        tasks: [
            {id: 0,title: 'Create flow chart', deadline: '20/04/2021', users: [{name:'Adam Yogie', picture:''}], completed:true},
            {id: 1,title: 'Create Moodboard', deadline: '21/04/2021', users: [{name:'Adam Yogie', picture:''}, {name:'Fawaid Nur',picture: ''}], completed:true},
            {id: 2,title: 'Wireframing', deadline: '23/04/2021', users: [{name:'Adam Yogie', picture:''}], completed:false},
            {id: 3,title: 'Testing & Evaluation', deadline: '25/04/2021', users: [{name:'Adam Yogie', picture:''},{name:'Fawaid Nur', picture:''},{name:'Juven Haider', picture:''}], completed:false},
            {id: 5,title: 'Create look & feel', deadline: '20/04/2021', users: [{name:'Adam Yogie', picture:''},{name:'Fawaid Nur', picture:''},{name:'Juven Haider', picture:''}], completed:false},
        ],
        messages: [
            {id:0, author:'Joel Hopkins', picture:"", date:'Dec 14,2020', content: "We would like to have Pageviews, click, conversion and total revenue up in the right corner of the graph. And maybe design them so the look more like buttons that you can turn on/off?"}
        ],
    })
    const [editedInfos, setEditedInfos] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [anchorEl,setAnchorEl] = useState(null);
    const [editMode, setEditMode] = useState(props.newGoal);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [deadline, setDeadline] = useState(props.deadline);


    const calculateCompletion = () => {
        let completedTasks = 0;
        infos.tasks.map((task)=> {
            task.completed ? completedTasks++ : null;
        })
        return ((completedTasks / infos.tasks.length) * 100).toFixed(0);
    }

    const handleClose = () => {
        applyChanges();
        history.goBack();
    }

    const handleEdit = () => {
        if(!editMode) {
            setEditMode(true);
            setEditedInfos(infos)
        }
        else {
            setInfos(editedInfos);
            setEditMode(false);
            setEditedInfos(null);
        }
    }

    const handleEditCancel = () => {
        setEditMode(false);
        setEditedInfos(null);
    }

    const handleTaskCheck = (id) => {
        let newTasks = infos.tasks
        newTasks.map((task,i)=> {
            if(task.id === id) {
                task.completed = !task.completed;
                setInfos({...infos, tasks: newTasks})
                return 0;
            }
        })
    }

    const handleMessageSend = (e) => {
        e.preventDefault();
        let newMessages = infos.messages;
        newMessages.push({
            id:newMessages[newMessages.length - 1].id + 1,
            author:auth.user.name,
            picture:"",
            date: new Date().toDateString(),
            content: newMessage
        })
        setInfos({...infos, messages: newMessages});
        setNewMessage("");
    }

    const handleMessageEdit = (e) => {
        setNewMessage(e.target.value)
    }

    const handleMessageDelete = (id) => {
        let newMessages = infos.messages;
        newMessages.map((message,i) => {
            if(message.id === id) {
                newMessages.splice(i,1)
            }
        })
        setInfos({...infos, messages: newMessages})
    }

    //Apply eventual changes to parent (GoalCard.js)
    const applyChanges = () => {
        let completedTasks = 0;
        infos.tasks.map((task)=> {
            task.completed ? completedTasks++ : null;
        })
        props.applyChanges(infos.title, completedTasks, infos.tasks.length, deadline)
    }

    //Close calendar when new date is picked
    useEffect(() => openCalendar ? setOpenCalendar(false) : null,[deadline])

    return (
        <div className={"w-full disable-scrollbars"}>
            <div className={"flex text-grey justify-end space-x-1 w-full border-b border-grey-light"}>
                <IconButton onClick={(e)=> setAnchorEl(e.currentTarget)}><Icon.MoreHorizontal/></IconButton>
                {editMode ? <IconButton onClick={handleEdit}><Icon.Check className={"text-alert-green"}/></IconButton> : <IconButton onClick={handleEdit}><Icon.Edit3/></IconButton>}
                {editMode ? <IconButton onClick={handleEditCancel}><Icon.X className={"text-alert-red"}/></IconButton> : <IconButton onClick={handleClose}><Icon.X/></IconButton>}
                <Menu
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{vertical:'bottom', horizontal:'center'}}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                >
                    <MenuItem onClick={() => props.onDelete}>Supprimer l'objectif</MenuItem>
                    <MenuItem onClick={() => props.onDelete}>Archiver l'objectif</MenuItem>
                </Menu>
            </div>
            <div className={"p-10"}>
                {editMode ? <input placeholder={"Nom de l'objectif"} className={"font-poppins font-semibold text-2xl mb-4 w-1/2"} onChange={(e) => setEditedInfos({...editedInfos,title : e.currentTarget.value})} value={editedInfos.title}/> : <p className={"font-poppins font-semibold text-2xl mb-4"}>{infos.title}</p>}
                <div className={"border-b border-grey-light pb-4 mb-6"}>
                    <div className={"w-1/2 flex justify-between"}>
                        <div>
                            <p className={"uppercase text-grey-text text-xs font-semibold mb-2"}>Utilisateurs</p>
                            <AvatarGroupWrapper max={3} spacing={7} height={32} width={32}>
                                {infos.users !== undefined ? infos.users.map((user,i)=> {
                                    return <Avatar key={i} src={user.picture}><p className={"text-sm"}>{user.name.split(" ").map((n)=>n[0]).join("")}</p></Avatar>
                                }):null}
                            </AvatarGroupWrapper>
                        </div>
                        <div>
                            <p className={"uppercase text-grey-text text-xs font-semibold mb-2"}>Date limite</p>
                            <div>
                                <p className={"font-roboto font-medium"} onClick={editMode ? () => setOpenCalendar(true) : null}>{deadline.toLocaleDateString()}</p>
                                {openCalendar ? <Calendar onChange={setDeadline} value={deadline} className={"absolute"} locale={"fr-FR"}/> : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"mb-4"}>
                    <div className={"flex items-center mb-2"}>
                        <Icon.AlignLeft className={"w-6 h-6 mr-4 text-gray-500"}/>
                        <p className={"font-poppins font-semibold text-sm"}>Description</p>
                    </div>
                    <p className={"font-poppins text-sm ml-10"}>{infos.description}</p>
                </div>
                <div className={"mb-4"}>
                    <div className={"flex items-center mb-2"}>
                        <Icon.Paperclip className={"w-6 h-6 mr-4 text-gray-500"}/>
                        <p className={"font-poppins font-semibold text-sm"}>Liste d'entreprise</p>
                    </div>
                    {infos.lists !== undefined ? infos.lists.map((list, i)=> {
                        //TODO Rajouter Liste entreprise quand crée
                        return <p>{list.name}</p>
                    }) : null}
                </div>
                <div className={"mb-4"}>
                    <div className={"flex items-center mb-2"}>
                        <Icon.Paperclip className={"w-6 h-6 mr-4 text-gray-500"}/>
                        <p className={"font-poppins font-semibold text-sm"}>Pièces jointes</p>
                    </div>
                    {infos.attachments !== undefined ? infos.attachments.map((list, i)=> {
                        return <p>{list.name}</p>
                    }) : null}
                </div>
                <div className={"mb-4"}>
                    <div className={"flex items-center mb-2"}>
                        <Icon.CheckSquare className={"w-6 h-6 mr-4 text-gray-500"}/>
                        <p className={"font-poppins font-semibold text-sm"}>Liste des tâches</p>
                    </div>
                    <div className={"flex items-center mb-3"}>
                        <p className={"font-roboto text-sm mr-3"}>{calculateCompletion()}%</p>
                        <div className={"w-full rounded-xl overflow-hidden bg-grey-light h-2"}><div style={{width:calculateCompletion()+'%'}} className={"h-2 bg-alert-green rounded transition-all"}/></div>
                    </div>
                    <div className={"space-y-3"}>
                        {infos.tasks !== undefined ? infos.tasks.map((task, i)=> {
                            return (
                                <div className={"flex items-center text-gray-500 space-x-2"} key={i}>
                                    <MuiThemeProvider theme={theme}>
                                        <Checkbox style={{padding:0}} checked={task.completed} onChange={() => handleTaskCheck(task.id)} color={"primary"}/>
                                    </MuiThemeProvider>
                                    <p className={"font-roboto text-gray-800 " + (task.completed ? "line-through" : null)}>{task.title}</p>
                                    <Icon.Calendar className={"h-4 w-4"}/>
                                    <p>{task.deadline}</p>
                                    {task.users !== undefined ? task.users.map((user,i)=> {
                                        return <div className={"flex items-center"}><Avatar src={user.picture} style={{height:'18px', width:'18px'}} className={"mr-1"}/><p>{user.name}</p></div>
                                    }):null}
                                </div>
                            )
                        }) : null}
                    </div>
                </div>
                <div className={"mb-4"}>
                    <div className={"flex items-center mb-2"}>
                        <Icon.MessageCircle className={"w-6 h-6 mr-4 text-gray-500"}/>
                        <p className={"font-poppins font-semibold text-sm"}>Messages</p>
                    </div>
                    <div className={"space-y-3"}>
                        {infos.messages !== undefined ? infos.messages.map((message, i)=> {
                            return (<MessageCard key={i} author={message.author} date={message.date} content={message.content} onDelete={handleMessageDelete} id={message.id} picture={message.picture}/>)}) : null}
                    </div>
                </div>
                <div className={"flex w-full items-center"}>
                    <Avatar src={auth.user.picture} style={{border: '3px solid white'}} className={"-mr-3"}>
                        {auth.user.name.split(" ").map((n) => n[0]).join("")}
                    </Avatar>
                    <div className={"rounded-xl bg-grey-light p-5 w-full"}>
                        <form onSubmit={handleMessageSend} >
                            <input
                                onChange={handleMessageEdit}
                                value={newMessage}
                                type={"text"}
                                className={"w-full rounded p-2"}
                                placeholder={"Envoyer un message ou uploader un fichier"}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

DetailledGoalCard.propTypes = {
    id: PropTypes.number,
};

DetailledGoalCard.defaultProps = {};

export default DetailledGoalCard;