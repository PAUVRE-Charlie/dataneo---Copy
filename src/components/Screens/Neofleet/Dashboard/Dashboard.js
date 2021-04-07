import React, {useState} from 'react';
import GoalCard from "../../../Cards/GoalCard/GoalCard";
import ShortcutCard from "../../../Cards/ShortcutCard/ShortcutCard";
import {ShortcutCardPictures} from "../../../../assets/img";
import {Link} from "react-router-dom";
import ListCard from '../../../Cards/ListCard/ListCard';
import Map from "../../../Map/Map"
import 'mapbox-gl/dist/mapbox-gl.css';

const Dashboard = (props) => {

    const [infos, setInfos] = useState({
        goals: [
            {id:1,title: "Contacter 50 PME locales", product:"Neofleet", attachmentNbr:13, completedTasks:4, totalTasks:5, deadline: '22/04/2021', members: ['AB']},
            {id:2,title: "Contacter 50 PME locales", product:"Neofleet", attachmentNbr:13, completedTasks:4, totalTasks:5, deadline: '20/04/2021', members: ['AB']},
        ],
        lists: [
            {id:1, title: "Voitures vendues en 2020", notifications: 24, companies:2351, contactedCompanies: 1547, members: [{name: "Charlie de Pauvré", picture: null}, {name: "Alexandre Brajeux", picture: ""}], pinned: true},
            {id:2, title: "Utilitaires datés", notifications: 24, companies:2351, contactedCompanies: 1547, members: [{name: "Charlie Pauvré", picture: ""}, {name: "Alexandre Brajeux", picture: ""}, {name: "Augustin Robert", picture: "http://trendsinusa.com/wp-content/uploads/2018/01/40ed7884d6c8aecf928a768704d1f21e-hat-photography-instagram-ideas-photography.jpg"}, {name: "Charlie Pauvré", picture: ""}, {name: "Alexandre Brajeux", picture: ""}, {name: "Augustin Robert", picture: "http://www.messagescollection.com/wp-content/uploads/2015/04/cute-fb-profile-picture.jpg"}], pinned: false},
            {id:3, title: "Voitures vendues en 2020", notifications: 24, companies:2351, contactedCompanies: 1547, members: [{name: "Charlie de Pauvré", picture: null}, {name: "Alexandre Brajeux", picture: ""}], pinned: true},
            {id:4, title: "Utilitaires datés", notifications: 24, companies:2351, contactedCompanies: 1547, members: [{name: "Charlie Pauvré", picture: ""}, {name: "Alexandre Brajeux", picture: ""}, {name: "Augustin Robert", picture: "http://www.messagescollection.com/wp-content/uploads/2015/04/cute-fb-profile-picture.jpg"}], pinned: false}
        ],
        map: {
            visibility: 40,
            center:  [2.3451720005621364, 48.86602542181713]
        }
    })

    const switchPin = (idList) => {
        let updatedInfos = infos;
        let selectedList = updatedInfos.lists.find((list) => list.id === idList);
        selectedList.pinned = ! selectedList.pinned;
        setInfos({...updatedInfos, lists: updatedInfos.lists});
    }

    return (
        <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background p-10 text-left disable-scrollbars"}>
            <div className={"flex justify-between space-x-8"}>
                <div className={"w-1/2"}>
                    <div className={"flex justify-between"}>
                        <p className={"font-poppins text-x2l text-grey-dark font-bold mb-2"}>{infos.goals.length} objectifs en cours</p>
                        <Link to={"/organize"}><p className={"text-blue"}>Voir tous les objectifs en cours</p></Link>
                    </div>
                    <div className={"flex space-x-3 w-full overflow-x-auto disable-scrollbars"}>
                        {infos.goals.map((goal,i) => (
                            <GoalCard id={goal.id} title={goal.title} product={goal.product} attachmentNbr={goal.attachmentNbr} completedTasks={goal.completedTasks} totalTasks={goal.totalTasks} deadline={goal.deadline} members={goal.members}/>
                        ))}
                    </div>
                </div>
                <div className={"w-1/2"}>
                    <p className={"font-poppins text-x2l text-grey-dark font-bold mb-2"}>Accès rapides</p>
                    <div className={"flex space-x-3 w-full overflow-x-auto disable-scrollbars"}>
                        <ShortcutCard label={"Trouver une entreprise"} image={ShortcutCardPictures.building} onPress={null}/>
                        <ShortcutCard label={"Cibler des entreprises"} image={ShortcutCardPictures.target} onPress={null}/>
                        <ShortcutCard label={"Créer une liste sur mesure"} image={ShortcutCardPictures.bill} onPress={null}/>
                    </div>
                </div>
            </div>
            <div className={"flex justify-between space-x-8 mt-10"}>
                <div>
                    <p className={"font-poppins text-x2l text-grey-dark font-bold mb-2"}>Mes listes sauvegardées</p>
                    <div>
                        {infos.lists.filter((list) => list.pinned).map((list) => (
                            <ListCard key={list.id} id={list.id} image={list.image} title={list.title} notifications={list.notifications} companies={list.companies} contactedCompanies={list.contactedCompanies} members={list.members} pinned={list.pinned} switchPin={switchPin}/>
                        ))}
                    </div>
                </div>
                <div className={"relative w-full h-content border border-grey rounded-3xl"}>
                    <Map visibility={infos.map.visibility} center={infos.map.center}/>
                    <div className={"absolute right-0 bottom-0 bg-white p-3 mr-3 mb-6 rounded-2xl"}>
                        <div className={"flex items-center space-x-4"}>
                            <div className={"bg-blue w-4 h-4 rounded-full"} />
                            <p>Zone couverte par l'abonnnement actuel</p>
                        </div>
                        <div className={"flex items-center space-x-4"}>
                            <div className={"bg-grey w-4 h-4 rounded-full"} />
                            <p>Zone de l'abonnement platinium - 100km</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export {Dashboard};