import React, {useEffect} from 'react';
//import PropTypes from 'prop-types';
import ProductCard from "../../../Cards/ProductCard/ProductCard";
import ShortcutCard from "../../../Cards/ShortcutCard/ShortcutCard";
import GoalCard from "../../../Cards/GoalCard/GoalCard";
import UniversityCard from "../../../Cards/UniversityCard/UniversityCard";
import {ProductCardPictures, ShortcutCardPictures, UniversityCardPictures} from "../../../../assets/img";
import PlateCard from "../../../Cards/PlateCard/PlateCard";
import {useAuth} from "../../../../plugins/Auth";
import {useLocation} from "react-router-dom";

const Dashboard = (props) => {

    const auth = useAuth();
    const location = useLocation();

    useEffect(()=> {
        console.log(auth);
    },[])

    return (
        <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background px-10 py-5 text-left disable-scrollbars"}>
            {
                auth.user.structure === "group" ?
                    <div>
                        <p className={"font-poppins text-x2l text-grey-dark font-bold mb-2"}>Accès à vos concessions</p>
                        <div className={"disable-scrollbars w-full h-60 flex-nowrap inline-flex overflow-x-auto overflow-y-hidden space-x-3"}>
                            <PlateCard title={"Sud-Est"} picture={"https://images.frandroid.com/wp-content/uploads/2020/05/0cdbc9fe12ff81e2d843c248-1200-800.jpg"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis leo sagittis, quis non feugiat nec ac."}/>
                            <PlateCard title={"Ile-de-France"} picture={"https://images.caradisiac.com/logos/0/1/4/4/260144/S7-nouvelles-aides-a-l-achat-d-une-voiture-pas-avant-la-rentree-182926.jpg"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis leo sagittis, quis non feugiat nec ac."}/>
                            <PlateCard title={"Sud-Ouest"} picture={"https://static.lpnt.fr/images/2020/09/12/20729794lpw-20729998-article-lamborghini-jpg_7343426_1250x625.jpg"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis leo sagittis, quis non feugiat nec ac."}/>
                            <PlateCard title={"Nord-Ouest"} picture={"https://static.lpnt.fr/images/2020/09/12/20729794lpw-20729998-article-lamborghini-jpg_7343426_1250x625.jpg"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis leo sagittis, quis non feugiat nec ac."}/>
                            <PlateCard title={"Nord-Est"} picture={"https://static.lpnt.fr/images/2020/09/12/20729794lpw-20729998-article-lamborghini-jpg_7343426_1250x625.jpg"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis leo sagittis, quis non feugiat nec ac."}/>
                        </div>
                    </div>
                    :
                    <div className={"mb-14"}>
                        <p className={"font-poppins text-x2l text-grey-dark font-bold mb-2"}>Accès à nos produits</p>
                        <div className={"disable-scrollbars w-full h-60 flex justify-between overflow-x-auto overflow-y-hidden space-x-3"}>
                            <ProductCard
                                title={'NeoFleet'}
                                catchphrase={"Une plateforme d’identification des parcs de véhicules des entreprises."}
                                description={"Augmentez votre force de vente en scannant en temps réel les 1,4 M d'entreprises disposant d'une flotte en France."}
                                buttonLabel={"Accèder à Neofleet"}
                                image={ProductCardPictures.neofleet}
                                url={"/neofleet"}
                            />
                            <ProductCard
                                title={'CarOwner'}
                                catchphrase={'Une solution de ciblage sur mesure et interactif pour vos campagnes marketing direct multicanales.'}
                                description={'Accédez à des données ultra ciblées pour décupler vos capacités de prospection.'}
                                buttonLabel={"Accéder à CarOwner"}
                                image={ProductCardPictures.carowner}
                            />
                            <ProductCard
                                title={'CarMarket'}
                                catchphrase={'Accéder en temps réel aux statistiques clés des immatriculations automotive.'}
                                description={'Suivez vos performances avec des données géographiques et techniques de haute précision.'}
                                buttonLabel={"Accéder à CarMarket"}
                                image={ProductCardPictures.carmarket}
                            />
                        </div>
                    </div>
            }

            <div className={"w-full flex justify-between h-content"}>
                <div className={"mr-3 w-7/12 h-full flex flex-col justify-between"}>
                    {
                        auth.user.role === "admin" || auth.user.role === "superadmin" ?
                            <div>
                                <p className={"font-poppins text-x2l text-grey-dark font-bold mb-2 -mt-10"}>Accès rapide</p>
                                <div className={"disable-scrollbars w-full h-52 overflow-x-auto overflow-y-hidden space-x-3 mb-4 flex justify-between"}>
                                    <ShortcutCard
                                        image={ShortcutCardPictures.user}
                                        label={"Ajouter un nouvel utilisateur"}
                                        onPress={() => console.log("Add_user")}
                                    />
                                    <ShortcutCard
                                        image={ShortcutCardPictures.bill}
                                        label={"Télécharger ma dernière facture"}
                                        onPress={() => console.log("download_bill")}
                                    />
                                    <ShortcutCard
                                        image={ShortcutCardPictures.objective}
                                        label={"Créer un objectif d’équipe"}
                                        onPress={() => console.log("Add_objective")}
                                    />
                                    <ShortcutCard
                                        image={ShortcutCardPictures.cart}
                                        label={"Modifier mon abonnement"}
                                        onPress={() => console.log("change_subscription")}
                                    />
                                </div>
                            </div>
                            :
                            null
                    }

                    <p className={"font-poppins text-x2l text-grey-dark font-bold mb-2"}>Objectifs d'équipe en cours</p>
                    <div className={"disable-scrollbars w-full h-48 overflow-x-auto overflow-y-hidden space-x-3 flex justify-between"}>
                        <GoalCard
                            title={"Faire emailing \"Chauffeurs Uber\""}
                            product={"CarOwner"}
                            attachmentNbr={3}
                            completedTasks={4}
                            totalTasks={5}
                            deadline={"01/04/2021"}
                            progress={85}
                            id={1}
                            members={['OK','KO','LL']}
                        />
                        <GoalCard
                            title={"Contacter 50 PME locales"}
                            product={"NeoFleet"}
                            attachmentNbr={13}
                            completedTasks={4}
                            totalTasks={5}
                            deadline={"02/04/2021"}
                            progress={12}
                            members={['OK','AB']}
                            id={2}
                        />
                        <GoalCard
                            title={"Reporting d'activité"}
                            product={"CarMarket"}
                            attachmentNbr={13}
                            completedTasks={4}
                            totalTasks={5}
                            deadline={"06/06/2021"}
                            progress={55}
                            members={['OK']}
                            id={3}
                        />
                    </div>
                </div>

                <div className={"space-y-4 bg-grey-light disable-scrollbars w-5/12 h-university border-grey border border-box p-5 overflow-y-auto rounded-2xl"}>
                    <p className={"font-poppins text-x2l text-grey-text font-bold mb-4"}>Formez vos équipes et apprenez en toujours + avec Dataneo University</p>
                    <p className={"font-roboto text-xs text-grey mb-2"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At donec sed volutpat, lectus cursus rhoncus lacinia lectus egestas. Massa, sit feugiat at accumsan, pellentesque vitae velit, praesent quisque.</p>
                    <div className={"space-y-4"}>
                        <UniversityCard
                            title={"Débuter avec Dataneo"}
                            description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's."}
                            picture={UniversityCardPictures.illustration_1}
                            media={"https://www.youtube.com/watch?v=qMQ-y9dHE2k"}
                            time={2}
                        />
                        <UniversityCard
                            title={"Onboarder votre équipe"}
                            description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's."}
                            picture={UniversityCardPictures.illustration_2}
                            media={"https://www.youtube.com/watch?v=JhDIILjlhBQ"}
                            time={3}
                        />
                        <UniversityCard
                            title={"Découvrir Neofleet"}
                            description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's."}
                            picture={UniversityCardPictures.illustration_3}
                            media={"https://www.youtube.com/watch?v=PPzIWFJU_3s"}
                            time={1}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;