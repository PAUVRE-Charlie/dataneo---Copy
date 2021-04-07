import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ButtonBase, Dialog, DialogActions, FormControl, Menu, MenuItem, Select} from "@material-ui/core";
import * as Icon from "react-feather";
import GoalCard from "../../Cards/GoalCard/GoalCard";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import {useLocation} from "react-router-dom";

const GoalsList = (props) => {

    const [popOver, setPopOver] = useState(null);
    const [anchorEl, setAnchorEl] = useState(false);
    const location = useLocation();

    const displayPopOver = () => {
        switch (popOver) {
            case "newCard" :
                return(
                    <form onSubmit={handleSubmit} className={"flex-row space-y-4"}>
                        <div>
                            <label className={"font-inter font-bold text-grey text-sm"} >Nom de l'objectif</label>
                            <input type={'text'} className={"px-2 w-full h-11 rounded-lg bg-grey-veryLight border border-grey"} name={"name"} required={true}/>
                        </div>
                        <FormControl variant={"outlined"} className={"px-2 w-full rounded-lg bg-grey-veryLight"}>
                            <label className={"font-inter font-bold text-grey text-sm"}>Produit</label>
                            <Select name={"product"} className={"border-grey rounded-lg"} required={true}>
                                <MenuItem value={"NeoFleet"}>NeoFleet</MenuItem>
                                <MenuItem value={"CarOwner"}>CarOwner</MenuItem>
                                <MenuItem value={"CarMarket"}>CarMarket</MenuItem>
                            </Select>
                        </FormControl>
                        <div>
                            <label className={"font-inter font-bold text-grey text-sm"}>Attachments</label>
                            <input type={'number'} className={"px-2 w-full h-11 rounded-lg bg-grey-veryLight border border-grey"} name={"attachments"} required={true}/>
                        </div>
                        <div>
                            <label className={"font-inter font-bold text-grey text-sm"}>Tasks</label>
                            <input type={'number'} className={"px-2 w-full h-11 rounded-lg bg-grey-veryLight border border-grey"} name={"tasks"} required={true}/>
                        </div>
                        <div>
                            <label className={"font-inter font-bold text-grey text-sm"}>Temps</label>
                            <input type={'number'} className={"px-2 w-full h-11 rounded-lg bg-grey-veryLight border border-grey"} name={"time"} required={true}/>
                        </div>

                        <DialogActions className={"mx-auto"}>
                            <PrimaryButton onPress={handleClose} color={"#F1F1F5"} labelColor={"#636E95"} label={"Annuler"}/>
                            <PrimaryButton buttonType={'submit'} color={"#3DD586"} labelColor={"#FFFFFF"} label={"Confirmer"}/>
                        </DialogActions>
                    </form>
                );
            case "deleteList" :
                return (
                    <form onSubmit={handleSubmit} className={"flex-row space-y-4"}>
                        <p>Voulez vous supprimer la liste "{props.label}" ?</p>
                        <DialogActions className={"mx-auto"}>
                            <PrimaryButton onPress={handleClose} color={"#F1F1F5"} labelColor={"#636E95"} label={"Annuler"}/>
                            <PrimaryButton buttonType={'submit'} color={"#3DD586"} labelColor={"#FFFFFF"} label={"Confirmer"}/>
                        </DialogActions>
                    </form>
                );
            case "renameList":
                return (
                    <form onSubmit={handleSubmit} className={"flex-row space-y-4"}>
                        <input type={"text"} name={"name"} placeholder={"Nouveau nom de liste"} className={"px-2 w-full h-11 rounded-lg bg-grey-veryLight border border-grey"} autoFocus={true} required={true}/>
                        <DialogActions className={"mx-auto"}>
                            <PrimaryButton onPress={handleClose} color={"#F1F1F5"} labelColor={"#636E95"} label={"Annuler"}/>
                            <PrimaryButton buttonType={'submit'} color={"#3DD586"} labelColor={"#FFFFFF"} label={"Confirmer"}/>
                        </DialogActions>
                    </form>
                )
            default : return null
        }
    }

    const handleClose = () => {
        setPopOver(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (popOver){
            case "newCard" :
                props.createCard(props.id, e.target.name.value, e.target.product.value, e.target.attachments.value, e.target.tasks.value, e.target.time.value)
                break;
            case "deleteList" :
                setAnchorEl(false);
                props.deleteList(props.id);
                break;
            case "renameList" :
                setAnchorEl(false);
                props.renameList(props.id, e.target.name.value);
                break;
            default : break;
        }
        setPopOver(null);
    }

    const handleClickMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }

    return (
        <div className={"flex flex-col justify-between border border-grey rounded-2xl max-h-full h-content overflow-hidden"}>
            <div className={"flex justify-between items-center p-4 text-grey-text font-semibold"}>
                <p>{props.label}</p>
                <ButtonBase onClick={handleClickMenu}>
                    <Icon.MoreHorizontal/>
                </ButtonBase>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                    <MenuItem onClick={() => setPopOver("deleteList")}>Supprimer la liste</MenuItem>
                    <MenuItem onClick={() => setPopOver("renameList")}>Renommer la liste</MenuItem>
                </Menu>
            </div>
            <div className={"space-y-2 pb-2 px-1 overflow-y-auto disable-scrollbars min-w-72 h-1/2"}>
                {props.cards.map((card,i) => {
                    return(
                        <GoalCard
                            title={card.title}
                            progress={card.progress}
                            members={card.members}
                            attachmentNbr={card.attachmentNbr}
                            deadline={card.deadline}
                            product={card.product}
                            completedTasks={card.completedTasks}
                            totalTasks={card.totalTasks}
                            id={card.id}
                            finished={card.finished}
                            key={i}
                        />
                    )
                })}

            </div>
            <ButtonBase className={"w-full"} onClick={() => setPopOver("newCard")}>
                <div className={"w-full h-12 flex-grow bg-white border-t border-grey flex justify-center items-center text-grey"}>
                    <Icon.Plus className={"bg-white"}/>
                </div>
            </ButtonBase>
            <Dialog open={Boolean(popOver)}>
                <div className={"p-4"}>
                    {displayPopOver()}
                </div>
            </Dialog>
        </div>
    )
}

GoalsList.propTypes = {
    label: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        product: PropTypes.string,
        attachmentNbr: PropTypes.number,
        completedTasks: PropTypes.number,
        totalTasks: PropTypes.number,
        deadline:PropTypes.number,
        progress: PropTypes.number.isRequired,
        members: PropTypes.arrayOf(PropTypes.string).isRequired,
        finished: PropTypes.bool
    }))
};

GoalsList.defaultProps = {
    label:"Nouvelle liste"
};

export default GoalsList;