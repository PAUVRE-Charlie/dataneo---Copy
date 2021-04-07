import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Accordion, AccordionDetails, AccordionSummary, MenuItem, Select} from "@material-ui/core";
import * as Icon from 'react-feather';
import ActivityCard from "../../../Cards/ActivityCard/ActivityCard";

const MonitorScreen = (props) => {

    const [activities, setActivities] = useState({
        neofleet:[
            {
                name:'Alexandre BRAJEUX',
                action:'exporté en CSV',
                subject: 'la base \"PME\"',
                time:'2 heures',
                type:'export'
            },
            {
                name:'Agathe Machavoine',
                action:'envoyé la bse "PME" vers',
                subject: 'Salesforce',
                time:'2 heures',
                type:'share'
            }
        ],
        carowner:[
            {
                name:'Pierre Corre',
                action:'supprimé',
                subject: 'la base \"PME\"',
                time:'12 minutes',
                type:'delete'
            }
        ],
        carmarket:[
            {
                name:'Eric Dugast',
                action:'créé',
                subject: 'la base \"PME\"',
                time:'1 jour',
                type:'create'
            }
        ]});

    return (
    <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background px-10 pb-6 text-left"}>
        <div className={"flex justify-between items-center"}>
            <p className={"font-poppins text-x2l text-grey-dark font-bold my-4"}>Suivi d'activité</p>
            <div className={"flex items-center"}>
                <p className={"font-roboto text-lg text-grey-text"}>Montrer :</p>
                <Select defaultValue={"all"} className={"ml-2"}>
                    <MenuItem value={"all"} className={"font-roboto font-bold text-lg"}>Les actions de tout le monde</MenuItem>
                    <MenuItem value={"me"} className={"font-roboto font-bold text-lg"}>Mes actions</MenuItem>
                </Select>
            </div>
        </div>
        <div className={"space-y-4"}>
            <Accordion elevation={0} classes={{root:'!bg-grey-background overflow-hidden border border-grey shadow-0', rounded:'!rounded-2xl'}} defaultExpanded={true}>
                <AccordionSummary expandIcon={<Icon.ChevronDown/>}>
                    <p className={"font-poppins font-semibold text-grey"}>Neofleet</p>
                </AccordionSummary>
                <AccordionDetails className={"w-full max-h-80 overflow-y-auto"}>
                    <div className={"w-full space-y-2  disable-scrollbars h"}>
                        {activities.neofleet.map((activity,i) => {
                            return <ActivityCard name={activity.name} action={activity.action} subject={activity.subject} time={activity.time} type={activity.type} key={i}/>;
                        })}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} classes={{root:'!bg-grey-background overflow-hidden border border-grey', rounded:'!rounded-2xl'}}>
                <AccordionSummary expandIcon={<Icon.ChevronDown/>}>
                    <p className={"font-poppins font-semibold text-grey"}>CarOwner</p>
                </AccordionSummary>
                <AccordionDetails className={"w-full"}>
                    <div className={"w-full space-y-2 overflow-y-auto disable-scrollbars h"}>
                        {activities.carowner.map((activity,i) => {
                            return <ActivityCard name={activity.name} action={activity.action} subject={activity.subject} time={activity.time} type={activity.type} key={i}/>;
                        })}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={0} classes={{root:'!bg-grey-background overflow-hidden border border-grey', rounded:'!rounded-2xl'}}>
                <AccordionSummary expandIcon={<Icon.ChevronDown/>}>
                    <p className={"font-poppins font-semibold text-grey"}>CarMarket</p>
                </AccordionSummary>
                <AccordionDetails className={"w-full"}>
                    <div className={"w-full space-y-2 overflow-y-auto disable-scrollbars h"}>
                        {activities.carmarket.map((activity,i) => {
                            return <ActivityCard name={activity.name} action={activity.action} subject={activity.subject} time={activity.time} type={activity.type} key={i}/>;
                        })}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
    );
}

MonitorScreen.propTypes = {};

MonitorScreen.defaultProps = {};

export default MonitorScreen;