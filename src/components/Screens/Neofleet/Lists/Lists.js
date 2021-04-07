import React, {useState} from 'react';
import ListCard from '../../../Cards/ListCard/ListCard';

import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Button, Checkbox, IconButton, Input, InputAdornment } from '@material-ui/core';
import PrimaryButton from '../../../Buttons/PrimaryButton/PrimaryButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Map from '../../../Map/Map';
import { NeofleetPictures } from '../../../../assets/img'

const theme = createMuiTheme({
  palette: {
    primary: { main: "#3DD598" }
  },
});

const Lists = (props) => {

    const companies = [
        {
            id: 1,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: true,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 2,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: true,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 3,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: true,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: null,
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 4,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: null,
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 5,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 6,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: null,
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 7,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 8,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 9,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 10,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 11,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 12,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 13,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 14,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 15,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 16,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 17,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 18,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: {
                name: "Joel Hopkins",
                picture: null,
            },
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
        {
            id: 19,
            name: "Online Market",
            type: "Profession libérale",
            selected: false,
            notification: false,
            adress: "34, rue des bouleaux 75001 Paris",
            coordinates: [2.3451720005621364, 48.86602542181713],
            protocol: true,
            contactedBy: null,
            website: "www.onlinemarket.com",
            phone: "+33 6 60 60 60 60",
            naf: "Comm. détail ordinateurs et tablette lorem noieznzj e ze l",
            vehicules: 186,
            solvency: 4,
            leaders: [
                {
                    name: "Clément Lenotre",
                    job: "Directeur",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
                {
                    name: "Romy Lesage",
                    job: "Directrice",
                    company: "Dataneo",
                    link_linkedin: "https://www.linkedin.com/"
                },
            ],
            news: [
                {
                    title: "18 emplois protégés en France",
                    date: '18/11/2020'
                },
                {
                    title: "Clément Lenotre - DG",
                    date: '26/05/2020'
                },
                {
                    title: "Oneline market va transférer ses bureaux de Cesson-Sévigné",
                    date: '27/03/2020'
                },
                {
                    title: "180 recrutements envisagés en France fin 2019",
                    date: '09/10/2019'
                },
            ],
            cars: [
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Citroen",
                        logo: null,
                    },
                    model: "C3",
                    PMEC: "02/2006",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Marechal Automobiles",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VP",
                    brand: {
                        name: "Bluecar",
                        logo: null,
                    },
                    model: "Bluecar",
                    PMEC: "10/2013",
                    fundType: "PRP",
                    energy: "Electricité",
                    funder: "Leasys France",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Suzuki",
                        logo: null,
                    },
                    model: "Alto",
                    PMEC: "12/2010",
                    fundType: "PRP",
                    energy: "Essence",
                    funder: "Toyotakreditbank GMBH",
                    shape: "Exemple",
                    body: "Exemple"
                },
                {
                    type: "VU",
                    brand: {
                        name: "Renault",
                        logo: null,
                    },
                    model: "Clio",
                    PMEC: "01/2012",
                    fundType: "PRP",
                    energy: "Gazole",
                    funder: "Temsys",
                    shape: "Exemple",
                    body: "Exemple"
                }
            ],
            comments: [
                {
                    author: {
                        name: "Joel Hopkins",
                        picture: null,
                        job: "Administrateur"
                    },
                    body: "JM a contacté l'entreprise, on essaie de voir avec eux quand nous pourrions organiser un RDV",
                    date: "14/12/2018"
                }
            ],
        },
    ]

    const [infos, setInfos] = useState({
        lists: [
            {id:1, title: "Voitures vendues en 2020", notifications: 24, companies: companies, members: [{name: "Charlie de Pauvré", picture: null}, {name: "Alexandre Brajeux", picture: ""}], pinned: true},
            {id:2, title: "Utilitaires datés", notifications: 24, companies: [], members: [{name: "Charlie Pauvré", picture: ""}, {name: "Alexandre Brajeux", picture: ""}, {name: "Augustin Robert", picture: "http://trendsinusa.com/wp-content/uploads/2018/01/40ed7884d6c8aecf928a768704d1f21e-hat-photography-instagram-ideas-photography.jpg"}, {name: "Charlie Pauvré", picture: ""}, {name: "Alexandre Brajeux", picture: ""}, {name: "Augustin Robert", picture: "http://www.messagescollection.com/wp-content/uploads/2015/04/cute-fb-profile-picture.jpg"}], pinned: false},
            {id:3, title: "Voitures vendues en 2020", notifications: 24, companies: companies, members: [{name: "Charlie de Pauvré", picture: null}, {name: "Alexandre Brajeux", picture: ""}], pinned: true},
            {id:4, title: "Utilitaires datés", notifications: 24, companies: companies, members: [{name: "Charlie Pauvré", picture: ""}, {name: "Alexandre Brajeux", picture: ""}, {name: "Augustin Robert", picture: "http://www.messagescollection.com/wp-content/uploads/2015/04/cute-fb-profile-picture.jpg"}], pinned: false}
        ],
        map: {
            visibility: 40,
            center:  [2.3451720005621364, 48.86602542181713]
        }
    })

    const [selectedList, setSelectedList] = useState(null);
    const [searchContent, setSearchContent] = useState('');

    const switchPin = (idList) => {
        let updatedInfos = infos;
        let list = updatedInfos.lists.find((list) => list.id === idList);
        list.pinned = ! list.pinned;
        setInfos({...updatedInfos, lists: updatedInfos.lists});
    }

    const handleListSelection = (list) => {
        setSelectedList(list);
    }

    const handleSetSelectListItem = (list, company, bool) => {
        let updatedInfos = infos;
        let selectedList = updatedInfos.lists.find(l => l.id === list.id);
        let selectedCompany = selectedList.companies.find(c => c.id === company.id);
        selectedCompany.selected = bool;
        setInfos({...updatedInfos, lists: updatedInfos.lists})
    }

    const allItemsSelectedBool = (list) => {
        let bool = list.companies.length != 0;
        list.companies.forEach(company => {
            if(company.selected === false) bool = false;
        })
        return bool;
    }

    const handleSetSelectAllItems = (list) => {
        let bool = !allItemsSelectedBool(list);
        list.companies.forEach(company => {
           handleSetSelectListItem(list, company, bool) 
        });
    }

    const filteredCompanies = (selectedList) ? selectedList.companies.length > 0 && searchContent !== "" ?  selectedList.companies.filter(company => company.name.toLowerCase().includes(searchContent.toLowerCase())): selectedList.companies : null;

    return (
        <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background px-10 py-5 text-left disable-scrollbars pb-20"}>
            <div className={"relative h-full"}>
                <div className={"relative"}>
                    {
                        selectedList ? <div className={"flex items-center"}>
                            <Button onClick={()=> setSelectedList(null)} style={{textTransform: 'inherit'}}> <p className={"font-poppins text-x2l text-grey-dark font-bold"}>Mes listes</p></Button>
                            <Icon.ChevronRight />
                            <p className={"font-poppins text-x2l text-grey-dark font-bold"}>{selectedList.title}</p>
                        </div> : <Button disabled style={{textTransform:"inherit"}}> <p className={"font-poppins text-x2l text-grey-dark font-bold"}>Mes listes</p> </Button>
                    }
                </div>
                {
                    ! selectedList ? <div className={"space-w-2 w-full overflow-x-auto disable-scrollbars space-y-4"}>
                    <Link className={"flex flex-col items-center w-full space-y-3 py-3 px-7 text-center bg-grey-light rounded-2xl border border-grey"}>
                        <Icon.PlusCircle className={"h-8 w-8"} />
                        <p className={"font-poppins text-sm font-semibold"}>Ajouter une nouvelle liste</p>
                        <p className={"font-roboto text-sm text-grey-text"}>Utiliser les Listes pour sauvegarder les résutlats de vos recherches et vous permettre de suivre l'avancement de votre prospection</p>
                    </Link>
                    {infos.lists.map((list) => (
                        <ListCard key={list.id} id={list.id} image={list.image} title={list.title} notifications={list.notifications} companies={list.companies.length > 0 ? list.companies.length : 1} contactedCompanies={list.companies.filter(company => company.contactedBy).length} members={list.members} pinned={list.pinned} switchPin={switchPin} setSelectedList={() => handleListSelection(list)}/>
                    ))}
                </div> :
                    (
                        <div className={"relative inset-0 flex w-full h-full border border-grey rounded-2xl overflow-hidden"}>
                            <MuiThemeProvider theme={theme}>
                                <div className={"w-2/3 bg-white py-4 px-6 overflow-hidden"}>
                                        <div className={"flex space-x-2 h-10 mb-4 justify-between"}>
                                        <Input placeholder={"Chercher une entreprise"} value={searchContent} onChange={(e) => setSearchContent(e.target.value)} startAdornment={<InputAdornment position={"start"}><Icon.Search className={"text-grey"}/></InputAdornment>} className={"flex-grow p-2 border border-grey bg-grey-light rounded-lg max-w-sm"} />
                                        <PrimaryButton startIcon={<Icon.Plus />} label={"Ajouter des entreprises"} />
                                        <div className={"border-2 border-blue rounded-xl "}><IconButton style={{padding: '6px'}}><Icon.Share2 className={"text-blue"}/></IconButton></div>
                                    </div>
                                    <div className={"flex space-x-4 rounded py-1 items-center text-left mb-2"} style={{backgroundColor: "#F1F1F5"}}>
                                        <Checkbox color="primary" checked={allItemsSelectedBool(selectedList)} onChange={(e) => handleSetSelectAllItems(selectedList)} />
                                        <p className={"w-3/12 font-poppins font-semibold text-grey-text text-xs"}>RAISON SOCIALE & CATÉGORIE</p>
                                        <p className={"w-2/6 font-poppins font-semibold text-grey-text text-xs"}>ADRESSE</p>
                                        <p className={"w-3/12 font-poppins font-semibold text-grey-text text-xs"}>FLOTTE</p>
                                        <p className={"w-1/6 font-poppins font-semibold text-grey-text text-xs"}>ETAT</p>
                                        <div className={"w-8"} />
                                    </div>
                                    <div className={"space-y-2 overflow-y-auto disable-scrollbars"} style={{height:'100%'}}>
                                        {
                                            selectedList.companies && selectedList.companies.length > 0 && searchContent !== "" ? <div className={"m-8"}>
                                                <p className={"text-grey font-poppins text-sm"}>Résultat(s) pour "{searchContent}"</p>
                                                <div className={"rounded bg-grey-dark px-2 py-1 w-content mt-2"}><p className={"text-white font-poppins text-sm"}>{filteredCompanies.length} résultat</p></div>
                                            </div> : null
                                        }
                                        {
                                            selectedList.companies && selectedList.companies.length > 0 ? filteredCompanies.length > 0 ? filteredCompanies.map((company, i) => (
                                                <div  key={i} className={"flex space-x-4 rounded-2xl justify-between items-center text-left py-4"} style={{backgroundColor: i%2 == 0 ? "white" : "#FAFAFB", border: company.selected ? "solid 1px #3DD598": "solid 1px rgba(0,0,0,0)"}}>
                                                    <Checkbox color="primary" checked={company.selected} onClick={(e) => handleSetSelectListItem(selectedList, company, !company.selected)}/>
                                                    <div className={"flex items-center space-x-4 relative w-3/12 font-poppins font-bold text-sm text-grey-dark pr-4"}>
                                                        <p>{company.name}</p>
                                                        <div className={"relative w-4 h-4"}>
                                                            {
                                                            company.notification ? <div className={"absolute left-0 bottom-full rounded-full bg-alert-red w-4 h-4"} /> : null
                                                        }
                                                        </div>
                                                    </div>
                                                    <p className={"w-2/6 font-roboto text-sm text-grey-dark"}>{company.adress}</p>
                                                    <div className={"w-3/12 flex items-center space-x-4"}>
                                                        <p className={"font-roboto font-semibold text-sm text-grey-dark"}>{company.cars.length} véhicules</p>
                                                        <div className={"font-roboto text-sm text-grey whitespace-nowrap"}>
                                                            <p>{company.cars.filter(car => car.type === "VI").length} VI</p>
                                                            <p>{company.cars.filter(car => car.type === "VP").length} VP</p>
                                                            <p>{company.cars.filter(car => car.type === "VU").length} VU</p>
                                                        </div>
                                                    </div>
                                                    <div className={"w-1/6 flex"}>{
                                                        company.contactedBy ? <div className={"flex items-center bg-alert-greenBackground text-sm font-roboto text-alert-green p-1 rounded"}><Icon.Check/><p className={"mx-1"}>Contacté</p></div> : <div className={"flex items-center bg-grey-light text-sm font-roboto text-grey px-2 py-1 rounded whitespace-nowrap"}><p className={"mx-1"}>A contacter</p></div>
                                                    }</div>
                                                    <IconButton><Icon.MoreHorizontal /></IconButton>
                                                </div>
                                            ))
                                            
                                            // if no results in search bar
                                            : <div className={"absolute w-2/3 top-20 h-full grid place-items-center"}>
                                                <div className={"w-1/2 flex flex-col space-y-4 items-center text-center"}>
                                                    <Icon.AlertCircle size={90} className={"text-grey-light"} />
                                                    <p className={"text-grey font-semibold font-poppins text-2xl"}>Nous n'avons trouvé aucune entreprise pour "{searchContent}"</p>
                                                    <PrimaryButton label={"Rechercher des entreprises"} />
                                                </div>
                                            </div>
                                            
                                            
                                            // if no companies in this list
                                            : <div className={"w-full h-full grid place-items-center"}>
                                                <div className={"w-1/2 flex flex-col space-y-4 items-center text-center mb-16"}>
                                                    <img src={NeofleetPictures.list_empty} className={"w-2/3"} alt={"list_empty"}/>
                                                    <p className={"text-grey font-semibold font-poppins text-2xl"}>Cette liste est actuellement vide</p>
                                                    <p className={"text-grey font-roboto text-sm"}>Trouvez des entreprises à l'aide de nos templates de recherche, ou en les selectionnant dans la carte.</p>
                                                    <PrimaryButton label={"Rechercher des entreprises"} />
                                                </div>
                                                
                                            </div>
                                        }
                                    </div>
                                </div>
                            </MuiThemeProvider>
                            <div className={"relative w-1/3"}>
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
                    )
                }
            </div>
        </div>
    )
}

Lists.propTypes = {};

Lists.defaultProps = {};

export {Lists};