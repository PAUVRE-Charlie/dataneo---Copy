import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";

const BillCard = (props) => {

    const [isOpen, isOpenUpdate] = useState(false);

    return (
    <Accordion classes={{root: "border-box border border-grey min-w-100 overflow-hidden", expanded:"!border-blue !bg-grey-background", rounded: "!rounded-xl"}} onClick={()=>isOpenUpdate(!isOpen)} elevation={0}>
        <AccordionSummary expandIcon={<Icon.ChevronDown/>} classes={{content: " h-18 rounded-2xl justify-between items-center text-left", expanded : "!text-blue"}}>
            <p className={"w-1/8 font-poppins font-bold text-sm"}>{Number(props.amount).toFixed(2)} €</p>
            {props.status === "paid" ?
                <div className={"flex font-roboto font-bold text-xs text-white rounded bg-alert-green w-20 justify-around py-1 px-2"}>Payé<Icon.CheckCircle className={"w-4 h-4"}/> </div> : null }
            {props.status === "pending" ?
                <div className={"flex font-roboto font-bold text-xs text-white rounded bg-alert-orange w-20 justify-around py-1 px-1"}>En attente<Icon.HelpCircle className={"w-4 h-4"}/></div> : null }
            {props.status === "refused" ?
                <div className={"flex font-roboto font-bold text-xs text-white rounded bg-alert-red w-20 justify-around py-1 px-2"}>Refusé<Icon.XCircle className={"w-4 h-4"}/></div> : null }
            <p className={"font-roboto font-bold font-xs"}>{props.description}</p>
            <p className={"font-robot font-xs text-grey-text"}>{props.paymentDate}</p>
            <p className={"font-robot font-xs text-grey-text"}>{props.paymentMethod}</p>
        </AccordionSummary>
        <AccordionDetails classes={{root:'text-left flex justify-between border-t border-blue !p-6 h-48 bg-white rounded-b-xl'}} >
            <div className={"h-full"}>
                <p className={"font-roboto text-xs text-grey"}>Détails de l'abonnement</p>
                <p className={"font-poppins font-bold text-sm mb-2"}>{props.subscriptionPlan}</p>
                <div className={"bg-grey-background rounded-lg text-grey-text flex p-4.5 text-xs h-3/5"}>
                    <Icon.AlertCircle className={"w-4 h-4 mr-3"}/>
                    <div>
                    {props.licenses.neoFleet > 0 ? <p className={"font-bold"}>{props.licenses.neoFleet} accès Neofleet</p> : null}
                    {props.licenses.carOwner > 0 ? <p className={"font-bold"}>{props.licenses.carOwner} accès CarOwner</p> : null}
                    {props.licenses.carMarket > 0 ? <p className={"font-bold"}>{props.licenses.carMarket} accès CarMarket</p> : null}
                    </div>
                </div>
            </div>
            <div className={"w-2/5 text-left flex flex-col justify-between h-full"}>
                <div className={"flex justify-between"}>
                    <div className={"w-1/2"}>
                        <p className={"font-roboto text-xs text-grey"}>N° d’immatriculation<br/> de la facture</p>
                        <p className={"font-roboto text-xs text-grey-text"}>{props.billId}</p>
                    </div>
                    <div className={"w-1/2"}>
                        <p className={"font-roboto text-xs text-grey"}>Moyen de paiement </p>
                        <p className={"font-roboto text-xs text-grey-text"}>{props.paymentMethod}</p>
                    </div>
                </div>
                <div className={"flex justify-between"}>
                    <div className={"w-1/2"}>
                        <p className={"font-roboto text-xs text-grey"}>Date de facturation</p>
                        <p className={"font-roboto text-xs text-grey-text"}>{props.billingDate}</p>
                    </div>
                    <div className={"w-1/2"}>
                        <p className={"font-roboto text-xs text-grey"}>Date de paiement</p>
                        <p className={"font-roboto text-xs text-grey-text"}>{props.paymentDate}</p>
                    </div>
                </div>
                <div className={"flex justify-between"}>
                    <div className={"w-1/2"}>
                        <p className={"font-roboto text-xs text-grey"}>Taux TVA</p>
                        <p className={"font-roboto text-xs text-grey-text"}>{props.tvaPercentage}</p>
                    </div>
                    <div className={"w-1/2"}>
                        <p className={"font-roboto text-xs text-grey"}>Montant HT</p>
                        <p className={"font-roboto text-xs text-grey-text"}>{props.taxFreeAmount}</p>
                    </div>
                </div>
            </div>
            <div className={"w-3/12 flex flex-col justify-between border-l border-grey pl-8 text-right"}>
                <div>
                    <p className={"font-roboto text-xs text-grey"}>Montant total</p>
                    <p className={"font-poppins font-bold text-2xl"}>{Number(props.amount).toFixed(2)} €</p>
                </div>
                <PrimaryButton onPress={()=>console.log("Download pdf")} oneLine={false} color={"#E1EBFA"} label={"Télecharger ma facture en pdf"} labelColor={"#0062FF"}/>
            </div>
        </AccordionDetails>
    </Accordion>);
}

BillCard.propTypes = {
    amount: PropTypes.number.isRequired,
    taxFreeAmount: PropTypes.number.isRequired,
    subscriptionPlan: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["paid", "pending", "refused"]).isRequired,
    description: PropTypes.string.isRequired,
    paymentDate: PropTypes.string.isRequired,
    billingDate:  PropTypes.string.isRequired,
    paymentMethod : PropTypes.string.isRequired,
    billId : PropTypes.string.isRequired,
    tvaPercentage: PropTypes.number.isRequired,
    licenses : PropTypes.shape({
        neoFleet: PropTypes.number,
        carOwner: PropTypes.number,
        carMarket: PropTypes.number,
    }).isRequired
};

BillCard.defaultProps = {};

export default BillCard;