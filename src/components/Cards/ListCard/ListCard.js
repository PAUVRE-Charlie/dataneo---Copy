import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Avatar, IconButton } from '@material-ui/core';
import * as Icon from 'react-feather';
import OutlinedPrimaryButton from '../../Buttons/PrimaryButton/OutlinedPrimaryButton';
import AvatarGroupWrapper from '../../Lists/AvatarGroupWrapper/AvatarGroupWrapper';


const ListCard = (props) => {

    return (
        <div className={"bg-white flex items-center justify-between space-x-4 p-2 min-w-100 rounded-2xl border border-grey"}>
            <div className={"flex space-x-4 w-full"}>
                <img className={"w-28 h-28 rounded-2xl"} src={props.image} alt="listImage"/>
                <div className={"w-full"}>
                    <div className={"flex items-center space-x-2 my-2"}>
                        <p className={"font-poppins text-sm font-semibold"}>{props.title}</p>
                        <div className={"bg-alert-red rounded-xl px-1.5 text-white"}><p className={"font-poppins text-sm font-bold"}>{props.notifications}</p></div>
                    </div>
                    <div className={"flex items-center space-x-2"}>
                        <p className={"font-roboto text-sm text-grey"}>{props.companies + " Entreprises"}</p>
                        <div className={"rounded-full w-1 h-1 bg-grey"} />
                        <p className={"font-roboto text-sm text-grey"}>{props.contactedCompanies + " contactées"}</p>
                    </div>
                    <div className={"flex items-center space-x-2 mt-1"}>
                        <AvatarGroupWrapper max={4} spacing={10} height={20} width={20} fontSize={9} background={"#50B5FF"}>
                            {props.members.map((member, i) => (
                                <Avatar key={i} alt={member.name} src={member.picture}><p>{member.name.split(' ')[0][0] + member.name.split(' ').pop()[0]}</p></Avatar>
                            ))}
                        </AvatarGroupWrapper>
                        <p className={"font-roboto text-xs text-grey"}>{`Liste partagée avec ${props.members.length} personnes`}</p>
                    </div>
                    <p className={"font-roboto text-sm text-right text-grey-text -mt-1"}>{((props.contactedCompanies / props.companies) * 100).toFixed(0)}%</p>
                    <div className={"w-full h-1 rounded"} style={{background: 'linear-gradient(90deg, #3DD598 ' + ((props.contactedCompanies / props.companies) * 100).toFixed(0) + '%,#F1F1F5 ' + ((props.contactedCompanies / props.companies) * 100).toFixed(0) +'%)'}}/>
                </div>
            </div>
            <div className={"flex items-center"}>
                <OutlinedPrimaryButton onPress={props.setSelectedList} label={"Voir la liste"} />
                <IconButton onClick={() => {props.switchPin(props.id)}}><Icon.Bookmark className={props.pinned ? "text-blue" : "text-grey-light"} /></IconButton>
            </div>
        </div>
    );
}

ListCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    notifications: PropTypes.number,
    companies: PropTypes.number,
    contactedCompanies: PropTypes.number,
    members: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        picture: PropTypes.string
    })),
    pinned: PropTypes.bool,
    switchPin: PropTypes.func.isRequired,
    setSelectedList: PropTypes.func.isRequired,
};

ListCard.defaultProps = {
    image: "http://via.placeholder.com/110x110",
    notifications: 0,
    companies: 0,
    contactedCompanies: 0,
    members: [],
    pinned: false
};

export default ListCard;