import React, {useState, useEffect} from 'react';
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";
import SettingCard from "../../../Cards/SettingCard/SettingCard";
import SubscriptionCard from "../../../Cards/SubscriptionCard/SubscriptionCard";
import * as Icon from "react-feather";
import BillCard from "../../../Cards/BillCard/BillCard";
import {Dialog, DialogActions, Button, TextField, IconButton, OutlinedInput, InputAdornment} from "@material-ui/core";
import FieldInput from '../../../Inputs/FieldInput';

const SubscriptionScreen = (props) => {

    const [popOver, popOverUpdate] = useState(null)

    const [infos, setInfos] = useState({
        settings: [
            {
                id: 1,
                title:"Détails de l'abonnement",
                icon:<Icon.DollarSign className={"text-blue w-8 h-8"}/>,
                content:[{
                    label: "Abonnement Gold",
                    infos :"Date du prochain renouvellement : 13 mars 2021",
                }],
                links:[
                    {
                        label: "Annuler l'abonnement",
                        onClick: () => popOverUpdate("cancel-subscription")
                    },
                    {
                        label: 'Changer de formule',
                        onClick:() => popOverUpdate("change-subscription")
                    }
                ]
            },
            {
                id: 2,
                title:"Informations de paiement",
                icon:<Icon.CreditCard className={"text-blue w-8 h-8"}/>,
                content:[{
                    label: "Carte bancaire",
                    infos :"Visa ****6789 expirant en 03/2021",
                }],
                links:[{
                    label: "Changer de carte bancaire",
                    onClick: () => popOverUpdate("change-card")
                }]
            },
            {
                id: 3,
                title:"Responsables de la facturation",
                icon:<Icon.UserCheck className={"text-blue w-8 h-8"}/>,
                content:[{
                    label: "Lucie Bonnet",
                    infos :"lucie.bonnet@mail.com",
                },{
                    label:"Adrien Lebon",
                    infos:"adrien.lebon@gmail.com"
                }],
                links:[{
                    label: "Modifier le ou les responsable(s) de facturation",
                    onClick: () => popOverUpdate("change-responsable")
                }]
            },
            {
                id: 4,
                title:"Adresse de facturation",
                icon:<Icon.Map className={"text-blue w-8 h-8"}/>,
                content:[{
                    label: "Wolfox SAS",
                    infos :"11 rue Coustou 75018 Paris",
                }],
                links:[{
                    label: "Changer l’adresse de facturation",
                    onClick: () => popOverUpdate("change-billing-address")
                }]
            }
        ],
        bills: [
            {
                id: 1,
                amount:250.00,
                taxFreeAmount:200.00,
                subscriptionPlan:"Gold",
                status:"paid",
                description:"Abonnement Janvier 2021",
                paymentDate:"10 Janvier 2021",
                billingDate:"12 Janvier 2021",
                paymentMethod:"Visa 1234",
                billId:"AIKERJCD80",
                tvaPercentage:20,
                licenses:{neoFleet : 3, carOwner: 4, carMarket : 3},
            },
            {
                id: 2,
                amount:250.00,
                taxFreeAmount:200.00,
                subscriptionPlan:"Gold",
                status:"refused",
                description:"Abonnement Janvier 2021",
                paymentDate:"10 Janvier 2021",
                billingDate:"12 Janvier 2021",
                paymentMethod:"Visa 1234",
                billId:"AIKERJCD80",
                tvaPercentage:20,
                licenses:{neoFleet : 3, carOwner: 4, carMarket : 3},
            },
            {
                id: 3,
                amount:250.00,
                taxFreeAmount:200.00,
                subscriptionPlan:"Gold",
                status:"paid",
                description:"Abonnement Janvier 2021",
                paymentDate:"10 Janvier 2021",
                billingDate:"12 Janvier 2021",
                paymentMethod:"Visa 1234",
                billId:"AIKERJCD80",
                tvaPercentage:20,
                licenses:{neoFleet : 3, carOwner: 4, carMarket : 3},
            },
            {
                id: 4,
                amount:250.00,
                taxFreeAmount:200.00,
                subscriptionPlan:"Gold",
                status:"pending",
                description:"Abonnement Janvier 2021",
                paymentDate:"10 Janvier 2021",
                billingDate:"12 Janvier 2021",
                paymentMethod:"Visa 1234",
                billId:"AIKERJCD80",
                tvaPercentage:20,
                licenses:{neoFleet : 3, carOwner: 4, carMarket : 3},
            },
            {
                id: 5,
                amount:250.00,
                taxFreeAmount:200.00,
                subscriptionPlan:"Gold",
                status:"paid",
                description:"Abonnement Janvier 2021",
                paymentDate:"10 Janvier 2021",
                billingDate:"12 Janvier 2021",
                paymentMethod:"Visa 1234",
                billId:"AIKERJCD80",
                tvaPercentage:20,
                licenses:{neoFleet : 3, carOwner: 4, carMarket : 3},
            },
            {
                id: 6,
                amount:250.00,
                taxFreeAmount:200.00,
                subscriptionPlan:"Gold",
                status:"paid",
                description:"Abonnement Janvier 2021",
                paymentDate:"10 Janvier 2021",
                billingDate:"12 Janvier 2021",
                paymentMethod:"Visa 1234",
                billId:"AIKERJCD80",
                tvaPercentage:20,
                licenses:{neoFleet : 3, carOwner: 4, carMarket : 3},
            },
            {
                id: 7,
                amount:250.00,
                taxFreeAmount:200.00,
                subscriptionPlan:"Gold",
                status:"pending",
                description:"Abonnement Janvier 2021",
                paymentDate:"10 Janvier 2021",
                billingDate:"12 Janvier 2021",
                paymentMethod:"Visa 1234",
                billId:"AIKERJCD80",
                tvaPercentage:20,
                licenses:{neoFleet : 3, carOwner: 4, carMarket : 3},
            },
            {
                id: 8,
                amount:250.00,
                taxFreeAmount:200.00,
                subscriptionPlan:"Gold",
                status:"refused",
                description:"Abonnement Janvier 2021",
                paymentDate:"10 Janvier 2021",
                billingDate:"12 Janvier 2021",
                paymentMethod:"Visa 1234",
                billId:"AIKERJCD80",
                tvaPercentage:20,
                licenses:{neoFleet : 3, carOwner: 4, carMarket : 3},
            },
            {
                id: 9,
                amount:250.00,
                taxFreeAmount:200.00,
                subscriptionPlan:"Gold",
                status:"refused",
                description:"Abonnement Janvier 2021",
                paymentDate:"10 Janvier 2021",
                billingDate:"12 Janvier 2021",
                paymentMethod:"Visa 1234",
                billId:"AIKERJCD80",
                tvaPercentage:20,
                licenses:{neoFleet : 3, carOwner: 4, carMarket : 3},
            },
        ],
        subscriptions: [
            {
                id: 1,
                title: "Silver",
                price: 150.0,
                current: false,
                description: "Pour les petites équipes qui souhaitent dynamiser leur nouvelle activité et maitriser leur visibilité."
            },
            {
                id: 2,
                title: "Gold",
                price: 200.0,
                current: true,
                description: "Pour les agences ambitieuses de taille moyenne à la recherche d'une source supplémentaire de nouvelles opportunités et aspirant à devenir une agence de référence."
            },
            {
                id: 3,
                title: "Platinium",
                price: 400.0,
                current: false,
                description: "Pour les agences de premier plan qui souhaitent renforcer leur position et ne pas manquer la prochaine opportunité de taille."
            }
        ],
        cardInfo: {
            number: "1234567812345678",
            expireDate: "01/01",
            code: "000",
        },
    })

    const [selectedSubscriptionId, setSelectedSubscriptionId] = useState(null)
    const [cardForm, setCardForm] = useState({name: '', number:'', expireMonth:'', expireYear:'', code:''})
    const [responsablesForm, setResponsablesForm] = useState([...(infos.settings[2].content.map(content => ({label: content.label, infos: content.infos})))]);
    const [billingAdressForm, setBillingAdressForm] = useState({label: '', adress:'', zipCode:'', city:'', country: ''})
    
    const namePattern = /^[^0-9()]+$/;
    const cardNumberPattern = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/
    const monthPattern = /^(0?[1-9]|1[012])$/
    const yearPattern = /^\d{4}$/
    const codePattern = /[0-9]\d\d$/
    const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/
    const zipCodePattern = /^(?:[0-8]\d|9[0-8])\d{3}$/;
    const cityPattern = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    const countryPattern = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;

    const handleClose = () => {
        popOverUpdate(null);
    }

    const handleCancelSubscription = () => {
        console.log("cancel subscription");
        handleClose();
    }

    const handleSubscriptionCheck = (id) => {
        setSelectedSubscriptionId(id);
    };

    const handleSubscriptionSubmit = () => {
        console.log("submit subscription " + selectedSubscriptionId)
        let updatedSubs = infos.subscriptions.map((sub) => {
            return {...sub, current: sub.id === selectedSubscriptionId}
        });
        setInfos({...infos, subscriptions: updatedSubs});
        handleClose();
    };

    const handleCardSubmit = () => {
        console.log("submit " + cardForm.number)
        handleClose()
    }

    const handleChangeResponsable = (index, label, infos) => {
        setResponsablesForm([...responsablesForm.map((responsable, i) => {
            if(i === index){
                responsable.label = label;
                responsable.infos = infos;
            }
            return responsable;
        })])
    }  
    
    const disableResponsablesForm = () => {
        if(responsablesForm.length > 3 || responsablesForm.length == 0) return true;
        let responsable;
        for(let i = 0; i<responsablesForm.length;i++){
            responsable = responsablesForm[i];
            if (!(namePattern.test(responsable.label) && emailPattern.test(responsable.infos))){
                return true;
            }
        }
        return false;
    }

    const handleChangeResponsableSubmit = () => {
        console.log("submit change responsable");
        setInfos({...infos, settings:[...infos.settings.map((setting) => {
            if(setting.id === 3) setting.content = responsablesForm;
            return setting;
        })]})
        handleClose();
    }

    const handleBillingAdressSubmit = () => {
        console.log("submit " + billingAdressForm.label)
        handleClose()
    }

    const renderPopOver = () => {
        switch (popOver) {
            case ("cancel-subscription") :
                return (
                    <div className={"w-200 bg-white rounded-xl"}>
                        <div className={"flex p-4 pl-8 justify-between items-center border-b border-grey"}>
                            <p className={"text-grey-dark font-poppins font-bold text-2xl"}>Annuler l'abonnement</p>
                            <Icon.X onClick={handleClose} className={"text-xs text-grey-dark"}/>
                        </div>
                        <div className={"space-y-4 mt-6 px-10"}>
                            <p className={"font-poppins font-bold text-sm"}>Vous êtes sur le point d'annuler votre abonnement</p>
                            <p className={"font-roboto text-xs text-grey-text leading-3.5"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere arcu justo dui tincidunt felis iaculis tortor diam. Gravida a vel ultricies urna. A tellus libero, facilisi sit vehicula magna id. Porttitor nunc, ultricies pulvinar leo. Egestas diam sed et elementum scelerisque duis. In proin dignissim auctor tellus. Euismod tempus, egestas volutpat metus quam sit. Aliquam blandit adipiscing ridiculus rutrum ornare et adipiscing sed. Venenatis pretium bibendum condimentum penatibus orci dignissim odio.</p>
                        </div>
                        <div className={"flex flex-row-reverse p-4 border-t border-grey mt-6"}>
                            <div className={"space-x-4"}>
                                <DialogActions className={"mx-auto"}>
                                    <Button onClick={handleClose} style={{border: '1px solid #F1F1F5', color: '#97A0C3', borderRadius:'10px', padding:'10px', margin: 'auto', fontFamily:'Poppins', fontSize: '12px', textTransform:'inherit'}}>Annuler</Button>
                                    <PrimaryButton onPress={handleCancelSubscription} label={"Confirmer l'annulation d'abonnement"} oneLine={false} customStyle={{fontSize:'12px', padding:'0', width: '178px'}}/>
                                </DialogActions>
                            </div>
                        </div>
                    </div>
                )
            case("change-subscription"):
                return (
                    <div className={"w-200 bg-white rounded-xl"}>
                        <div className={"flex p-4 pl-8 justify-between items-center border-b border-grey"}>
                            <p className={"text-grey-dark font-poppins font-bold text-2xl"}>Changer abonnement</p>
                            <Icon.X onClick={handleClose} className={"text-xs text-grey-dark"}/>
                        </div>
                        <div className={"flex overflow-x-auto w-full disable-scrollbars space-x-4 my-7 px-4"}>
                            {
                                !infos.subscriptions ? <div>Loading subscriptions...</div> : infos.subscriptions.map((subscription) => (
                                    <SubscriptionCard key={subscription.id} id={subscription.id} title={subscription.title} price={subscription.price} current={subscription.current} selected={selectedSubscriptionId === subscription.id} description={subscription.description} handleSubscriptionCheck={handleSubscriptionCheck} handleSubscriptionSubmit={handleSubscriptionSubmit}/>
                                ))
                            }
                        </div>
                        <div className={"space-y-4 px-10"}>
                            <p className={"font-poppins font-bold text-sm"}>Vous êtes sur le point de passer à un forfait supérieur</p>
                            <p className={"font-roboto text-xs text-grey-text leading-3.5"}>Pour le paiement en cours, vous serez facturé 209.00€ au prorata du mois en cours. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere arcu justo dui tincidunt felis iaculis tortor diam. Gravida a vel ultricies urna. A tellus libero, facilisi sit vehicula magna id. Porttitor nunc, ultricies pulvinar leo. Egestas diam sed et elementum scelerisque duis. In proin dignissim auctor tellus. Euismod tempus, egestas volutpat metus quam sit. Aliquam blandit adipiscing ridiculus rutrum ornare et adipiscing sed. Venenatis pretium bibendum condimentum penatibus orci dignissim odio.</p>
                        </div>
                        <div className={"flex p-4 justify-around items-center border-t border-grey mt-6"}>
                            <div className={"flex items-center space-x-3"}>
                                <Icon.CreditCard style={{color: '#0062FF'}} />
                                <p className={"text-xs font-roboto"}>Visa **** {infos.cardInfo.number.substring(12)}</p>
                                <Button onClick={() => popOverUpdate("change-card")} style={{padding: '0', color: '#0062FF', fontSize:'12px', textTransform: 'inherit'}}>Changer de méthode de paiement</Button>
                            </div>
                            <div className={"flex space-x-3 items-center"}>
                                <Button onClick={handleClose} style={{border: '1px solid #F1F1F5', color: '#97A0C3', borderRadius:'10px', padding:'10px', margin: 'auto', fontFamily:'Poppins', fontSize: '12px', textTransform:'inherit'}}>Annuler</Button>
                                <PrimaryButton onPress={handleSubscriptionSubmit} disabled={selectedSubscriptionId == null || infos.subscriptions.find((sub)=> sub.current).id === selectedSubscriptionId} label={"Confirmer le changement d'abonnement"} oneLine={false} customStyle={{fontSize:'12px', padding:'0', width: '178px'}}/>
                            </div>
                        </div>
                    </div>
                )
            case ("change-card"):
                return (
                    <div className={"w-200 bg-white rounded-xl"}>
                        <div className={"flex p-4 pl-8 justify-between items-center border-b border-grey"}>
                            <p className={"text-grey-dark font-poppins font-bold text-2xl"}>Changer de carte</p>
                            <Icon.X onClick={handleClose} className={"text-xs text-grey-dark"}/>
                        </div>
                        <div className={"flex flex-col items-center"}>
                            <div className={"flex flex-col space-y-4 my-7 px-4"}>
                                <FieldInput
                                label={"Nom du détenteur de la carte"}
                                value={cardForm.name}
                                test={namePattern.test(cardForm.name)}
                                onChange={(e) => setCardForm({...cardForm,name:e.target.value})}
                                />
                                <FieldInput
                                label={"Numéro de carte"}
                                value={cardForm.number}
                                test={cardNumberPattern.test(cardForm.number)}
                                onChange={(e) => setCardForm({...cardForm,number:e.target.value.substring(0,16)})}
                                />
                                <div className={"w-full flex space-x-4"}>
                                    <FieldInput
                                        label={"Mois"}
                                        customStyles={{width: '100px'}}
                                        value={cardForm.expireMonth}
                                        test={monthPattern.test(cardForm.expireMonth) && (parseInt(cardForm.expireYear) === (new Date()).getFullYear() && parseInt(cardForm.expireMonth) >= (new Date()).getMonth())}
                                        onChange={(e) => setCardForm({...cardForm,expireMonth:e.target.value.substring(0,2)})}
                                        />
                                    <FieldInput
                                        label={"Année"}
                                        customStyles={{width: '150px'}}
                                        value={cardForm.expireYear}
                                        test={yearPattern.test(cardForm.expireYear) && cardForm.expireYear >= (new Date()).getFullYear()}
                                        onChange={(e) => setCardForm({...cardForm,expireYear:e.target.value.substring(0,4)})}
                                        />
                                </div>
                                <FieldInput
                                label={"Code CVC/CCV"}
                                value={cardForm.code}
                                test={codePattern.test(cardForm.code)}
                                onChange={(e) => setCardForm({...cardForm,code:e.target.value.substring(0,3)})}
                                />

                            </div>
                        </div>
                        <div className={"space-y-4 px-10"}>
                            <p className={"font-poppins font-bold text-sm"}>Vous êtes sur le point de changer de carte</p>
                            <p className={"font-roboto text-xs text-grey-text leading-3.5"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere arcu justo dui tincidunt felis iaculis tortor diam. Gravida a vel ultricies urna. A tellus libero, facilisi sit vehicula magna id. Porttitor nunc, ultricies pulvinar leo. Egestas diam sed et elementum scelerisque duis. In proin dignissim auctor tellus. Euismod tempus, egestas volutpat metus quam sit. Aliquam blandit adipiscing ridiculus rutrum ornare et adipiscing sed. Venenatis pretium bibendum condimentum penatibus orci dignissim odio.</p>
                        </div>
                        <div className={"flex flex-row-reverse p-4 border-t border-grey mt-6"}>
                            <div className={"space-x-4"}>
                                <Button onClick={() => {handleClose(); setCardForm({name: '', number: '', expireMonth: '', expireYear: '', code: ''})}} style={{border: '1px solid #F1F1F5', color: '#97A0C3', borderRadius:'10px', padding:'10px', fontFamily:'Poppins', fontSize: '12px', textTransform:'inherit'}}>Annuler</Button>
                                <PrimaryButton onPress={handleCardSubmit} buttonType={"submit"} disabled={!(namePattern.test(cardForm.name) && cardNumberPattern.test(cardForm.number) && (monthPattern.test(cardForm.expireMonth) && !(parseInt(cardForm.expireYear) === (new Date()).getFullYear() && parseInt(cardForm.expireMonth) < (new Date()).getMonth())) && yearPattern.test(cardForm.expireYear) && cardForm.expireYear >= (new Date()).getFullYear() && codePattern.test(cardForm.code))} label={"Confirmer le changement de carte"} oneLine={false} customStyle={{fontSize:'12px', padding:'0', width: '178px'}}/>
                            </div>
                        </div>
                    </div>
                )
            case ("change-responsable"):
                return (
                    <div className={"w-200 bg-white rounded-xl"}>
                        <div className={"flex p-4 pl-8 justify-between items-center border-b border-grey"}>
                            <p className={"text-grey-dark font-poppins font-bold text-2xl"}>Modifier le ou les responsable(s) de facturation</p>
                            <Icon.X onClick={handleClose} className={"text-xs text-grey-dark"}/>
                        </div>
                        <div className={"flex flex-col items-center"}>
                            <div className={"flex flex-col space-y-4 my-7 px-4"}>
                                {
                                    responsablesForm.map((responsable, index) => (
                                        <div key={index} className={"relative flex flex-col items-center"}>
                                            <FieldInput
                                            label={"Nom"} 
                                            value={responsable.label} 
                                            test={namePattern.test(responsable.label)} 
                                            onChange={(e) => handleChangeResponsable(index, e.target.value, responsable.infos)}
                                            /> 
                                            <FieldInput
                                            label={"Email"} 
                                            value={responsable.infos} 
                                            test={emailPattern.test(responsable.infos)} 
                                            onChange={(e) => handleChangeResponsable(index, responsable.label, e.target.value)}
                                            /> 
                                            <div className={"mt-2"}>
                                                <PrimaryButton onPress={() => setResponsablesForm(responsablesForm.filter((responsable, i) => i!==index))} startIcon={<Icon.X />} label={"Supprimer"} color={"#FC5A5A"} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            {
                                responsablesForm.length < 3 ? <IconButton onClick={() => setResponsablesForm([...responsablesForm, {label: "", infos:""}])}><Icon.Plus className={"text-blue"} /></IconButton>
                                : null
                            }
                            </div>
                        <div className={"space-y-4 mt-8 px-10"}>
                            <p className={"font-poppins font-bold text-sm"}>Vous êtes sur le point de modifier le ou les responsable(s) de facturation</p>
                            <p className={"font-roboto text-xs text-grey-text leading-3.5"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere arcu justo dui tincidunt felis iaculis tortor diam. Gravida a vel ultricies urna. A tellus libero, facilisi sit vehicula magna id. Porttitor nunc, ultricies pulvinar leo. Egestas diam sed et elementum scelerisque duis. In proin dignissim auctor tellus. Euismod tempus, egestas volutpat metus quam sit. Aliquam blandit adipiscing ridiculus rutrum ornare et adipiscing sed. Venenatis pretium bibendum condimentum penatibus orci dignissim odio.</p>
                        </div>
                        <div className={"flex flex-row-reverse p-4 border-t border-grey mt-6"}>
                            <div className={"space-x-4"}>
                                <Button onClick={() => {handleClose(); setResponsablesForm([...(infos.settings[2].content.map(content => ({label: content.label, infos: content.infos})))])}} style={{border: '1px solid #F1F1F5', color: '#97A0C3', borderRadius:'10px', padding:'10px', fontFamily:'Poppins', fontSize: '12px', textTransform:'inherit'}}>Annuler</Button>
                                <PrimaryButton onPress={handleChangeResponsableSubmit} buttonType={"submit"} disabled={disableResponsablesForm()} label={"Confirmer le changement de responsables"} oneLine={false} customStyle={{fontSize:'12px', padding:'0', width: '178px'}}/>
                            </div>
                        </div>
                    </div>
                )
            case ("change-billing-address"):
                return (
                    <div className={"w-200 bg-white rounded-xl"}>
                        <div className={"flex p-4 pl-8 justify-between items-center border-b border-grey"}>
                            <p className={"text-grey-dark font-poppins font-bold text-2xl"}>Changer l'adresse de facturation</p>
                            <Icon.X onClick={handleClose} className={"text-xs text-grey-dark"}/>
                        </div>
                        <div className={"flex flex-col items-center"}>
                            <div className={"flex flex-col space-y-4 my-7 px-4"}>
                                <FieldInput
                                label="Nom de l'adresse"
                                value={billingAdressForm.label}
                                test={namePattern.test(billingAdressForm.label)}
                                onChange={(e) => setBillingAdressForm({...billingAdressForm,label:e.target.value})}
                                />
                                <FieldInput
                                label="Adresse"
                                value={billingAdressForm.adress}
                                onChange={(e) => setBillingAdressForm({...billingAdressForm,adress:e.target.value})}
                                />
                                <FieldInput
                                label="Code postal"
                                value={billingAdressForm.zipCode}
                                test={zipCodePattern.test(billingAdressForm.zipCode)}
                                onChange={(e) => setBillingAdressForm({...billingAdressForm,zipCode:e.target.value.substring(0, 5)})}
                                />
                                <FieldInput
                                label="Ville"
                                value={billingAdressForm.city}
                                test={cityPattern.test(billingAdressForm.city)}
                                onChange={(e) => setBillingAdressForm({...billingAdressForm,city:e.target.value})}
                                />
                                <FieldInput
                                label="Pays"
                                value={billingAdressForm.country}
                                test={countryPattern.test(billingAdressForm.country)}
                                onChange={(e) => setBillingAdressForm({...billingAdressForm,country:e.target.value})}
                                />
                            </div>
                        </div>
                        <div className={"space-y-4 px-10"}>
                            <p className={"font-poppins font-bold text-sm"}>Vous êtes sur le point de changer d'adresse de facturation</p>
                            <p className={"font-roboto text-xs text-grey-text leading-3.5"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere arcu justo dui tincidunt felis iaculis tortor diam. Gravida a vel ultricies urna. A tellus libero, facilisi sit vehicula magna id. Porttitor nunc, ultricies pulvinar leo. Egestas diam sed et elementum scelerisque duis. In proin dignissim auctor tellus. Euismod tempus, egestas volutpat metus quam sit. Aliquam blandit adipiscing ridiculus rutrum ornare et adipiscing sed. Venenatis pretium bibendum condimentum penatibus orci dignissim odio.</p>
                        </div>
                        <div className={"flex flex-row-reverse p-4 border-t border-grey mt-6"}>
                            <div className={"space-x-4"}>
                                <Button onClick={() => {handleClose(); setBillingAdressForm({label: '', adress: '', zipCode: '', city: '', country: ''})}} style={{border: '1px solid #F1F1F5', color: '#97A0C3', borderRadius:'10px', padding:'10px', fontFamily:'Poppins', fontSize: '12px', textTransform:'inherit'}}>Annuler</Button>
                                <PrimaryButton onPress={handleBillingAdressSubmit} buttonType={"submit"} disabled={!(namePattern.test(billingAdressForm.label) && billingAdressForm.adress.length > 0 && zipCodePattern.test(billingAdressForm.zipCode) && cityPattern.test(billingAdressForm.city) && countryPattern.test(billingAdressForm.country))} label={"Confirmer le changement d'adresse"} oneLine={false} customStyle={{fontSize:'12px', padding:'0', width: '178px'}}/>
                            </div>
                        </div>
                    </div>
                )
            default :
                return (
                <div className={"p-4"}>
                    Chargement...
                </div>)
        }
    }

    return(
        <div className={"w-full h-full bg-grey-background py-5 px-10"}>
            <Dialog open={popOver !== null} classes={{paper:"!rounded-xl"}} maxWidth={"700px"}>
                {renderPopOver()}
            </Dialog>
            <div className={"flex justify-between items-center mb-5"}>
                <p className={"font-poppins text-2xl font-semibold text-grey-dark"}>Gestion de mon abonnement</p>
                <PrimaryButton onPress={()=>console.log("ok")} label={"Passer à la formule supérieure"} color={"var(--blue)"}/>
            </div>
            <div className={"flex justify-between space-x-2 h-11/12"}>
                <div className={"w-2/5 h-full space-y-2 overflow-y-auto disable-scrollbars flex flex-col justify-between"}>
                    {
                        !infos.settings ? <div>Loading...</div> : infos.settings.map((setting) => (
                            <SettingCard
                                key={setting.id}
                                title={setting.title}
                                icon={setting.icon}
                                content={setting.content}
                                links={setting.links}
                            />
                        ))
                    }
                </div>
                <div className={"w-3/5 min-w-min w-content h-full bg-white border border-grey rounded-2xl py-4 px-6 overflow-hidden"}>
                    <div className={"flex justify-between items-center mb-2"}>
                        <p className={"font-poppins text-sm font-bold text-left"}>Mes factures</p>
                        <Icon.Paperclip className={"text-blue w-8 h-8"}/>
                    </div>
                    <div className={"flex rounded py-1 px-4 items-center text-left mb-2"} style={{backgroundColor: "#F1F1F5"}}>
                        <p className={"w-1/6 font-poppins font-semibold text-grey-text text-xs"}>MONTANT</p>
                        <p className={"w-24 font-poppins font-semibold text-grey-text text-xs"}>STATUT</p>
                        <p className={"w-2/6 font-poppins font-semibold text-grey-text text-xs"}>DESCRIPTION</p>
                        <p className={"w-1/6 font-poppins font-semibold text-grey-text text-xs"}>DATE</p>
                        <p className={"font-poppins font-semibold text-grey-text text-xs"}>MOYEN DE PAIEMENT</p>
                    </div>
                    <div className={"space-y-2 overflow-y-auto disable-scrollbars"} style={{height:'90%'}}>
                        {
                            !infos.bills ? <div>Loading...</div> : infos.bills.map((bill) => (
                                <BillCard
                                    key={bill.id}
                                    amount={bill.amount}
                                    taxFreeAmount={bill.taxFreeAmount}
                                    subscriptionPlan={bill.subscriptionPlan}
                                    status={bill.status}
                                    description={bill.description}
                                    paymentDate={bill.paymentDate}
                                    billingDate={bill.billingDate}
                                    paymentMethod={bill.paymentMethod}
                                    billId={bill.billId}
                                    tvaPercentage={bill.tvaPercentage}
                                    licenses={bill.licenses}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionScreen;