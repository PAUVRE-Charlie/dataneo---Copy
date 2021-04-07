import React, {useState} from 'react';
import {ProductCardPictures} from "../../../../assets/img";
import LicenceCard from "../../../Cards/LicenceCard/LicenceCard";
import {Avatar, IconButton, Input, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import * as Icon from 'react-feather';
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";
import UserRow from "../../../Lists/UserRow/UserRow";

const TeamScreen = () => {

    const [users, setUsers] = useState([
        {id:'1',picture:'',name:'Eleanor Pena', email:'eleanor@dataneo.mail', role:'Admin', lastActivity : '16 Dec 2020', access:['NeoFleet','CarOwner','CarMarket']},
        {id:'2',picture:'',name:'Floyd Mile', email:'floyd@dataneo.mail', role:'Propriétaire', lastActivity : '02 Sept 2020', access:[]},
        {id:'3',picture:'',name:'Courtney Henry', email:'courtney@dataneo.mail', role:'Vente', lastActivity : '10 Dec 2020', access:[]},
        {id:'4',picture:'',name:'Jerome Bell', email:'jerome@dataneo.mail', role:'Vente', lastActivity : '16 Mai 2020', access:[]},
        {id:'5',picture:'',name:'Wade Warren', email:'wade@dataneo.mail', role:'Admin', lastActivity : '26 Jun 2020', access:[]},
        {id:'6',picture:'',name:'Albert Flores', email:'albert@dataneo.mail', role:'Vente', lastActivity : '06 Jan 2020', onHold:true, access:['NeoFleet','CarOwner','CarMarket']},
    ])

    const addUser = () => {

    }

    const editUser = (userId) => {

    }

    const removeUser = (userId) => {
        let updatedUsers = users;
        updatedUsers.map((user,i) => {
            if(user.id === userId) updatedUsers.splice(i,1);
        })
        setUsers(updatedUsers);
    }

    const resetPassword = (userId) => {

    }

    const grantAccess = (userId, product) => {
        let updatedUsers = users;
        updatedUsers.map((user,i) => {
            if(user.id === userId) user.access.push(product);
        })
        setUsers(updatedUsers);
    }

    const removeAccess = (userId, accessIndex) => {
        let updatedUsers = users;
        updatedUsers.map((user,i) => {
            if(user.id === userId) user.access.splice(accessIndex,1);
        })
        setUsers(updatedUsers);
    }

    const setAdmin = (userId) => {
        let updated
    }

    return (
        <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background px-10 py-5 text-left disable-scrollbars"}>
            <p className={"font-poppins text-x2l text-grey-dark font-bold mb-2"}>Gestion de l'équipe</p>
            <div className={"flex w-full space-x-3 justify-between items-center overflow-x-auto disable-scrollbars mb-4"}>
                <LicenceCard product={"NeoFleet"} totalAccess={4} picture={ProductCardPictures.neofleet} activeUsers={3} pendingInvitations={1} availableAccess={0}/>
                <LicenceCard product={"CarOwner"} totalAccess={1} picture={ProductCardPictures.carowner} activeUsers={1}/>
                <LicenceCard product={"CarMarket"} totalAccess={2} picture={ProductCardPictures.carmarket} activeUsers={2} pendingInvitations={0} availableAccess={0}/>
            </div>
            <div className={"h-2/3 p-4 bg-white border border-grey rounded-xl overflow-hidden"}>
                <div className={"flex justify-between items-center space-x-4 mb-4"}>
                    <Input placeholder={"Chercher un membre de votre organisation"} startAdornment={<InputAdornment position={"start"}><Icon.Search className={"text-grey"}/></InputAdornment>} className={"flex-grow p-2 border border-grey bg-grey-light rounded"}/>
                    <PrimaryButton label={"Inviter un membre"} startIcon={<Icon.Plus/>} onPress={()=>console.log('ok')}/>
                </div>
                <div className={"overflow-auto h-11/12 pb-4 disable-scrollbars border-red-500"}>
                    <Table>
                        <TableHead className={"bg-grey-light"}>
                            <TableCell className={"rounded-l-xl"}>Photo</TableCell>
                            <TableCell>Prénom Nom</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Rôle</TableCell>
                            <TableCell>Dernière activité</TableCell>
                            <TableCell className={"max-w-72"}>Accès</TableCell>
                            <TableCell className={"rounded-r-xl"}/>
                        </TableHead>
                        <TableBody>
                            {users.map((row, i) => (
                                <UserRow
                                    key={i}
                                    name={row.name}
                                    email={row.email}
                                    role={row.role}
                                    lastActivity={row.lastActivity}
                                    picture={row.picture}
                                    id={row.id}
                                    access={row.access}
                                    onHold={row.onHold}
                                    editUser={()=>editUser(row.id)}
                                    removeUser={()=>removeUser(row.id)}
                                    resetPassword={()=>resetPassword(row.id)}
                                    grantAccess={grantAccess}
                                    removeAccess={removeAccess}
                                    setAdmin={()=>setAdmin(row.id)}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

TeamScreen.propTypes = {};

TeamScreen.defaultProps = {};

export default TeamScreen;