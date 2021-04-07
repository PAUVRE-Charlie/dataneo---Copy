import React, {useEffect, useState} from 'react';
import GoalsList from "../../../Lists/GoalsList/GoalsList";
import {ButtonBase, Dialog, DialogActions} from "@material-ui/core";
import * as Icon from "react-feather";
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";

const OrganizationScreen = () => {

    const [lists, setLists] = useState([]);
    const [popOver, setPopOver] = useState(null);
    
    useEffect(()=> {
        updateLists();
    },[])

    const updateLists = () => {
        setLists(
            [{
                id:0,
                label: "Objectifs à venir",
                cards:
                    [
                        {
                            id:1,
                            title: "Faire emailling \"Businessman”",
                            product: 'CarOwner',
                            attachmentNbr: 13,
                            completedTasks: 4,
                            totalTasks: 5,
                            deadline: "06/06/2021",
                            progress: 85,
                            members: ['AB', 'BA', 'KO'],
                        }
                    ]
            }]
        )
    }

    const createList = (e) => {
        e.preventDefault();
        let updatedLists = [...lists];
        updatedLists.push({
            id:lists[lists.length - 1].id + 1,
            label: e.target.name.value,
            cards:[]
        })
        setPopOver(null);
        setLists(updatedLists);
    }

    const renameList = (idList, name) => {
        let updatedLists = [...lists];
        updatedLists.map((list) => {
            if(list.id === idList) {
                list.label = name;
            }
        })
        setLists(updatedLists);
    }

    const deleteList = (idList) => {
        let updatedLists = [...lists];
        for(let i = 0; i < lists.length; i++) {
            if(updatedLists[i].id === idList) {
                updatedLists.splice(i, 1);
            }
        }
        setLists(updatedLists);
    }

    const createCard = (idList, cardName, cardProduct, cardAttachments, cardTasks, cardTime) => {
        let updatedLists = lists;
        updatedLists.map((list) => {
            if(list.id === idList) {
                list.cards.push({
                    id: list.cards.length !== 0 ? list.cards[list.cards.length-1].id + 1 : idList * 100 + 1,
                    title: cardName,
                    product: cardProduct,
                    attachmentNbr: cardAttachments,
                    completedTasks: 0,
                    totalTasks: cardTasks,
                    deadline: null,
                    progress: 0,
                    members: ['AB', 'BA', 'KO'],
                })
            }
        })
        setLists(updatedLists);
    }

    return (
        <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background px-10 pb-6 text-left"}>
            <p className={"font-poppins text-x2l text-grey-dark font-bold my-4"}>Organisation d'équipe</p>
            <div className={"flex space-x-4 h-5/6"}>
                {lists.map((list,i) => {
                    return (
                        <GoalsList
                            label={list.label}
                            cards={list.cards}
                            id={list.id}
                            key={i}
                            createCard={createCard}
                            renameList={renameList}
                            deleteList={deleteList}
                        />)
                })}
                <div className={"inline-block border border-grey rounded-2xl overflow-auto h-content "}>
                    <p className={"text-grey-text font-semibold p-4"}>Ajouter une colonne</p>
                    <ButtonBase className={"w-full"} onClick={() => setPopOver("createList")}>
                        <div className={"w-full h-12 flex-grow bg-white border-t border-grey flex justify-center items-center text-grey"}>
                            <Icon.Plus className={"bg-white"}/>
                        </div>
                    </ButtonBase>
                    <Dialog open={Boolean(popOver)}>
                        <form onSubmit={createList} className={"flex-row space-y-4 p-4 w-64"}>
                            <input type={"text"} name={"name"} placeholder={"Nom de votre nouvelle liste"} className={"px-2 w-full h-11 rounded-lg bg-grey-light border border-grey"} autoFocus={true} required={true}/>
                            <DialogActions className={"mx-auto"}>
                                <PrimaryButton onPress={() => setPopOver(null)} color={"#F1F1F5"} labelColor={"#636E95"} label={"Annuler"}/>
                                <PrimaryButton buttonType={'submit'} color={"#3DD586"} labelColor={"#FFFFFF"} label={"Confirmer"}/>
                            </DialogActions>
                        </form>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

OrganizationScreen.propTypes = {};

OrganizationScreen.defaultProps = {};

export default OrganizationScreen;