import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Chip, IconButton, Menu, MenuItem, TableCell, TableRow} from "@material-ui/core";
import * as Icon from "react-feather";

const UserRow = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
            <TableRow className={"group border border-transparent rounded-xl"}>
                <TableCell className={"!border-transparent group-hover:border-alert-green"}><Avatar variant={"rounded"} src={props.picture}>{props.name.split(" ").map((n) => n[0]).join("")}</Avatar></TableCell>
                <TableCell>{props.name}{props.onHold ? <p>En attente</p> :null }</TableCell>
                <TableCell>{props.email}</TableCell>
                <TableCell>{props.role}</TableCell>
                <TableCell>{props.lastActivity}</TableCell>
                <TableCell>
                    <div className={"flex space-x-1"}>
                        {props.access.map((item, i) => (
                            <Chip key={i} label={item} onDelete={() => props.removeAccess(props.id, i)} variant={"outlined"} deleteIcon={<Icon.X onClick={() => props.removeAccess(props.id, i)}/>}/>
                        ))}
                    </div>
                </TableCell>
                <TableCell align={"right"}>
                    <IconButton onClick={handleOpen}><Icon.MoreHorizontal/></IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} className={"border border-grey"} onClick={handleClose}>
                        <MenuItem onClick={props.resetPassword}>Réinitialiser le mot de passe</MenuItem>
                        <MenuItem onClick={props.editUser}>Editer l'utilisateur</MenuItem>
                        {props.access.includes("CarMarket") ?
                            <MenuItem onClick={() => props.removeAccess(props.id, props.access.indexOf("CarMarket"))}>Révoquer l'accès à CarMarket</MenuItem> :
                            <MenuItem onClick={() => props.grantAccess(props.id, "CarMarket")}>Donner l'accès à CarMarket</MenuItem>
                        }
                        {props.access.includes("CarOwner") ?
                            <MenuItem onClick={() => props.removeAccess(props.id, props.access.indexOf("CarOwner"))}>Révoquer le droit d'achat sur CarOwner</MenuItem> :
                            <MenuItem onClick={() => props.grantAccess(props.id, "CarOwner")}>Donner le droit d'achat sur CarOwner</MenuItem>
                        }
                        {props.access.includes("NeoFleet") ?
                            <MenuItem onClick={() => props.removeAccess(props.id, props.access.indexOf("NeoFleet"))}>Révoquer l'accès à NeoFleet</MenuItem> :
                            <MenuItem onClick={() => props.grantAccess(props.id, "NeoFleet")}>Donner l'accès à NeoFleet</MenuItem>
                        }
                        <div className={"border border-grey-light w-full"}/>
                        <MenuItem onClick={props.setAdmin}>Nommer administrateur</MenuItem>
                        <MenuItem onClick={props.removeUser}>Supprimer l'utilisateur</MenuItem>
                    </Menu>
                </TableCell>
            </TableRow>
        );
}

UserRow.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    lastActivity: PropTypes.string.isRequired,
    access: PropTypes.array,
    picture: PropTypes.string,
    onHold: PropTypes.bool,
};

UserRow.defaultProps = {};

export default UserRow;