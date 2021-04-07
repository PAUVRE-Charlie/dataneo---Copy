import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SettingCard from "../../../Cards/SettingCard/SettingCard";
import * as Icon from 'react-feather';

const SettingsScreen = (props) => {

    const [infos, setInfos] = useState({
        company: {
            name: 'Wolfox SAS',
            siret: 'SIRET 810 732 870 0034',
            sector: 'Conscessionnaire automobile - FIAT',
            license: 'License de niveau 2 du Ministère de l’Intérieur',
            licenseNumber: 'Numéro de licence'
        },
        profile: {
            name:'Augustin ROBERT',
            email:'augustin.robert@mail.com',
            phoneNumber:'+33 6 75 64 57 68 91'
        },
        security: {
            password:'***********'
        },
        cgu: {
            date:'11/01/2021'
        }
    })

    return (
        <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background px-10 pb-6 text-left"}>
            <p className={"font-poppins text-x2l text-grey-dark font-bold my-4"}>Paramétrages</p>
            <div className={"flex w-full justify-between items-center space-x-3 mb-3"}>
                <SettingCard title={"Profile de l'entreprise"} content={[
                    {label:infos.company.name, infos:infos.company.siret},
                    {label:"Secteur Automobile", infos:infos.company.sector},
                    {label:infos.company.license, infos:infos.company.licenseNumber}]}
                    links={[{label:"Éditer les informations de mon entreprise", onClick: ""}]}
                    icon={<Icon.Home className={"text-blue w-8 h-8"}/>}
                />
                <SettingCard title={"Mon profil"} content={[
                    {label:"Nom Prénom", infos:infos.profile.name},
                    {label:"Adresse mail", infos:infos.profile.email},
                    {label:"Numéro de télephone", infos:infos.profile.phoneNumber}]}
                    links={[{label:"Éditer mes informations de profil", onClick: ""}]}
                    icon={<Icon.User className={"text-blue w-8 h-8"}/>}
                />
            </div>
            <div className={"flex w-full justify-between items-center space-x-3"}>
                <SettingCard title={"Sécurité"}
                    content={[{label:infos.security.password, infos:"Sécurité du mot de passe : FORT"}]}
                    links={[{label:"Éditer mon mot de passe", onClick: ""}]}
                    icon={<Icon.Key className={"text-blue w-8 h-8"}/>}
                />
                <SettingCard title={"CGV"} content={[
                    {label:"Date de signature", infos:infos.cgu.date}]}
                    links={[{label:"Voir le document", onClick: ""}]}
                    icon={<Icon.Upload className={"text-blue w-8 h-8"}/>}
                />
            </div>
        </div>
    );
}

SettingsScreen.propTypes = {};

SettingsScreen.defaultProps = {};

export default SettingsScreen;