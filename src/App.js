import React from 'react';
import {Switch, BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import styles from './App.module.css';
import {HeaderPictures} from "./assets/img";
import Header from "./components/Menu/Header/Header";
import SideMenu from "./components/Menu/SideMenu/SideMenu";
import GroupMenu from "./components/Menu/GroupMenu/GroupMenu";
import * as Icon from 'react-feather';
import LoginScreen from "./components/Screens/Console/LoginScreen/LoginScreen";
import Dashboard from "./components/Screens/Console/Dashboard/Dashboard";
import SubscriptionScreen from "./components/Screens/Console/SubscriptionScreen/SubscriptionScreen";
import OrganizationScreen from "./components/Screens/Console/OrganizationScreen/OrganizationScreen";
import MonitorScreen from "./components/Screens/Console/MonitorScreen/MonitorScreen";
import UpdatesScreen from "./components/Screens/Console/UpdatesScreen/UpdatesScreen";
import {AuthProvider} from "./plugins/Auth";
import PrivateRoute from "./plugins/PrivateRoute";
import UniversityScreen from "./components/Screens/Console/UniversityScreen/UniversityScreen";
import SettingsScreen from "./components/Screens/Console/SettingsScreen/SettingsScreen";
import AboutScreen from "./components/Screens/Console/AboutScreen/AboutScreen";
import TeamScreen from "./components/Screens/Console/TeamScreen/TeamScreen";
import {Dashboard as NeofleetDashboard} from "./components/Screens/Neofleet/Dashboard/Dashboard";
import {Lists as NeofleetLists} from "./components/Screens/Neofleet/Lists/Lists";

const App = () => {

    return (
        <AuthProvider>
            <Router basename={process.env.PUBLIC_URL ? process.env.PUBLIC_URL : ''}>
                <Switch>
                    <PrivateRoute path={"/neofleet"}>
                        <div>
                            <Header searchBar={true} logo={HeaderPictures.logo_neofleet}/>
                            <div className={styles.contentContainer}>
                                <SideMenu console={false} admin={[
                                    {icon: <Icon.Command className={"mx-4 w-6 h-6"}/>, label:"Dashboard", notification:0, url:"/neofleet/dashboard"},
                                    {icon: <Icon.File className={"mx-4 w-6 h-6"}/>, label:"Mes listes", notification:0, url:"/neofleet/lists"},
                                    {icon: <Icon.Target className={"mx-4 w-6 h-6"}/>, label:"Ciblage", notification:0, url:"/neofleet/target"},
                                ]}/>
                                <Switch>
                                    <PrivateRoute path={"/neofleet/lists"}>
                                        <NeofleetLists />
                                    </PrivateRoute>
                                    <PrivateRoute path={"/neofleet/target"}>
                                        <p>ciblage</p>
                                    </PrivateRoute>
                                    <PrivateRoute path={"/neofleet/dashboard"}>
                                        <NeofleetDashboard/>
                                    </PrivateRoute>
                                    <PrivateRoute path={"/"}>
                                        <Redirect to={"/neofleet/dashboard"}/>
                                    </PrivateRoute>
                                </Switch>
                            </div>
                        </div>
                    </PrivateRoute>
                    <Route path={"/"}>
                        <div className={styles.App}>
                            <GroupMenu/>
                            <div style={{width:'100%'}}>
                                <Header searchBar={false} logo={HeaderPictures.logo}/>
                                <div className={styles.contentContainer}>
                                    <SideMenu
                                        admin={[
                                            {icon: <Icon.Command className={"mx-4 w-6 h-6"}/>, label:"Tableau de bord", notification: 0, url:"/dashboard"},
                                            {icon: <Icon.PieChart className={"mx-4 w-6 h-6"}/>, label:"Statistiques", notification:0, url:"/stats"},
                                            {icon: <Icon.Users className={"mx-4 w-6 h-6"}/>, label:"Équipe", notification:0, url:"/team"},
                                            {icon: <Icon.BarChart2 className={"mx-4 w-6 h-6 rotate-180"} style={{transform : 'rotate(180deg)'}}/>, label:"Activité", notification:0, url:"/activity", subMenu:[{label:"Organisation d’équipe",url:"/organize"}, {label:"Suivi des activités",url:"/tracking"}]},
                                            {icon: <Icon.DollarSign className={"mx-4 w-6 h-6"}/>, label:"Abonnement", notification:0, url:"/subscription"},
                                        ]}
                                        resources={[
                                            {icon: <Icon.MessageCircle className={"mx-4 w-6 h-6"}/>, label:"Annonces", notification: 3, url:"/annoncements"},
                                            {icon: <Icon.Award className={"mx-4 w-6 h-6"}/>, label:"Dataneo University", notification:0, url:"/university"},
                                            {icon: <Icon.Settings className={"mx-4 w-6 h-6"}/>, label:"Paramétrage", notification:0, url:"/settings"},
                                            {icon: <Icon.Star className={"mx-4 w-6 h-6"}/>, label:"En savoir + sur Dataneo", notification:0, url:"/about"},
                                        ]}
                                    />
                                    <Switch>
                                        <PrivateRoute path={"/stats"}>
                                            <p>Stats</p>
                                        </PrivateRoute>
                                        <PrivateRoute path={"/team"}>
                                            <TeamScreen/>
                                        </PrivateRoute>
                                        <PrivateRoute path={"/organize"}>
                                            <OrganizationScreen/>
                                        </PrivateRoute>
                                        <PrivateRoute path={"/tracking"}>
                                            <MonitorScreen/>
                                        </PrivateRoute>
                                        <PrivateRoute path={"/subscription"}>
                                            <SubscriptionScreen/>
                                        </PrivateRoute>
                                        <PrivateRoute path={"/annoncements"}>
                                            <UpdatesScreen/>
                                        </PrivateRoute>
                                        <PrivateRoute path={"/university"}>
                                            <UniversityScreen/>
                                        </PrivateRoute>
                                        <PrivateRoute path={"/settings"}>
                                            <SettingsScreen/>
                                        </PrivateRoute>
                                        <PrivateRoute path={"/about"}>
                                            <AboutScreen/>
                                        </PrivateRoute>
                                        <Route path={"/login"}>
                                            <LoginScreen/>
                                        </Route>
                                        <PrivateRoute path={"/dashboard"}>
                                            <Dashboard/>
                                        </PrivateRoute>
                                        <PrivateRoute path={"/"}>
                                            <Redirect to={"/dashboard"}/>
                                        </PrivateRoute>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
        </Router>
        </AuthProvider>
    );
}

export default App;
