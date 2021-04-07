import React, {useEffect, useState} from 'react';
//import PropTypes from 'prop-types';
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";
import {HeaderPictures, LoginPictures} from "../../../../assets/img";
import * as Icon from 'react-feather';
import Carousel from "react-material-ui-carousel";
import {InputAdornment, OutlinedInput} from "@material-ui/core";
import {useAuth} from "../../../../plugins/Auth";
import {useHistory, useLocation} from "react-router";
import {Link} from "react-router-dom";
import Cookies from 'js-cookie'

const LoginScreen = (props) => {

    const [signUp, setSignUp] = useState(false);
    const [passwordForgot, setPasswordForgot] = useState(false);
    const [submittedForm, setSubmittedForm] = useState(false);
    const [errorCode, setErrorCode] = useState(null);
    const [form, setForm] = useState({name:'', email:'noapi@dataneo.com', password:'admin', passwordConfirm:''})
    const namePattern = /^[A-Za-z ]+$/
    const emailPattern = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordPattern = /^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z])(?=.*[^\w\d\s])).{8,30}$/

    const history = useHistory()
    const location = useLocation()
    const auth = useAuth();

    const { from } = location.state || { from: { pathname: '/' } }
    const handleLogin = (event) => {
        event.preventDefault();
        setSubmittedForm(true)

        //compte pour bypass la connexion en démo
        if(event.target.email.value === "noapi@dataneo.com") {
            Cookies.set("token", "noAPI");
            auth.setUser({
                token:'noAPI',
                role:'admin',
                structure:'plate',
                name:'Didier Vilbrequin',
                job:'Gestionnaire de concession',
                picture: ''
            })
            history.replace(from);
        }
        else {
            auth.signIn(form, user => {
                if (user) {
                    auth.setUser({...auth.user, role: 'admin', structure: 'plate'})
                    history.replace(from);
                } else {
                    setForm({...form, password: ''});
                    setErrorCode("incorrect-password");
                    setSubmittedForm(false);
                }
            })
        }
        /*setForm({...form, password: ''});
        setErrorCode("api");
        setSubmittedForm(false);*/
    };

    useEffect(_ => {
        if( auth.user ) history.replace(from)
    }, [])


    const handleSignUp = (event) => {
        setSubmittedForm(true);
        setTimeout(() => setSubmittedForm(false), 2000);
        setTimeout(() => setErrorCode("api"),2000);
        event.preventDefault();
    }

    const handlePasswordForgot = (event) => {
        setSubmittedForm(true);
        setTimeout(() => setSubmittedForm(false), 2000);
        setTimeout(() => setErrorCode("password-reset-success"),2000);
        event.preventDefault();
    }

    const handleClick = (link) => {
        setErrorCode(null);
        switch (link) {
            case("login"):
                setSignUp(false);
                setPasswordForgot(false);
                break;
            case ("sign-up"):
                setSignUp(true);
                setPasswordForgot(false);
                break;
            case ("forgot-password"):
                setSignUp(false);
                setPasswordForgot(true);
                break;
            default:
                break;
        }
    }

    const renderError = () => {
        switch(errorCode) {
            case ("incorrect-password") :
                return(<div className={"bg-alert-redBackground p-2 rounded mb-4"}>
                    <p className={"text-alert-red"}>Email / mot de passe incorrect(s)</p>
                </div>)
            case ("api") :
                return(<div className={"bg-alert-redBackground p-2 rounded mb-4"}>
                    <p className={"text-alert-red"}>Problème de connexion à l'API</p>
                    <p className={"text-alert-red"}>Contactez le support si le problème se reproduit</p>
                </div>)
            case ("repeat") :
                return(<div className={"bg-alert-redBackground p-2 rounded mb-4"}>
                    <p className={"text-alert-red"}>Vos mots de passe doivent correspondre</p>
                </div>)
            case ("used-email") :
                return(<div className={"bg-alert-redBackground p-2 rounded mb-4"}>
                    <p className={"text-alert-red"}>Cette adresse mail est déjà utilisée</p>
                </div>)
            case ("password-reset-success") :
                return(<div className={"bg-alert-greenBackground p-2 rounded mb-4"}>
                    <p className={"text-alert-green"}>Un mail de réinitialisation vient d'être envoyé</p>
                </div>)
            default:
                return(<div className={"bg-alert-redBackground p-2 rounded mb-4"}>
                    <p className={"text-alert-red"}>Un problème est survenu</p>
                    <p className={"text-alert-red"}>Contactez le support si le problème se reproduit</p>
                </div>)
        }
    }

    return (
        <div className={"w-screen h-screen overflow-hidden flex text-left"}>
            <div className={"w-full md:w-5/12 h-full items-center justify-center flex bg-white"}>
                <div className={"w-80 min-w-60"}>
                    <img className={"w-44 h-auto mb-4"} src={HeaderPictures.logo} alt={'dataneo_logo'}/>
                    <p className={"font-inter text-grey text-base mb-2"}>Exploitez la puissance du data marketing sur le secteur automotive</p>
                    <form className={"mb-2 flex flex-col text-xs"} onSubmit={signUp ? handleSignUp : passwordForgot ? handlePasswordForgot : handleLogin}>

                        {signUp ? <div>
                            <label className={"font-inter font-bold text-grey"}>PRÉNOM NOM</label>
                            <OutlinedInput
                                className={"mt-2 mb-6 w-full h-11 !rounded-lg bg-grey-veryLight shadow"}
                                name={"name"}
                                disabled={submittedForm}
                                value={form.name}
                                error={Boolean(form.name) && !namePattern.test(form.name)}
                                onChange={(e) => setForm({...form,name:e.target.value})}
                                endAdornment={
                                    <InputAdornment position="end">
                                        {form.name && namePattern.test(form.name) ? <Icon.Check className={"text-alert-green"}/> : null }
                                        {form.name && !namePattern.test(form.name) ? <Icon.X className={"text-alert-red"}/> : null }
                                    </InputAdornment>
                                }
                            />
                        </div> : null}

                        <label className={"font-inter font-bold text-grey"}>EMAIL</label>
                        <OutlinedInput
                            className={"mt-2 mb-6 w-full h-11 !rounded-lg bg-grey-veryLight shadow"}
                            name={"email"}
                            value={form.email}
                            disabled={submittedForm}
                            error={Boolean(form.email) && !emailPattern.test(form.email)}
                            onChange={(e) => setForm({...form,email:e.target.value})}
                            endAdornment={
                                <InputAdornment position="end">
                                    {form.email && emailPattern.test(form.email) ? <Icon.Check className={"text-alert-green"}/> : null }
                                    {form.email && !emailPattern.test(form.email) ? <Icon.X className={"text-alert-red"}/> : null }
                                </InputAdornment>
                            }
                        />

                        {!passwordForgot ? <div>
                            <label className={"font-inter font-bold text-grey"}>MOT DE PASSE</label>
                            <OutlinedInput
                                className={"mt-2 mb-6 w-full h-11 !rounded-lg bg-grey-veryLight shadow"}
                                name={"password"}
                                type={"password"}
                                value={form.password}
                                disabled={submittedForm}
                                error={signUp && Boolean(form.password && !passwordPattern.test(form.password))}
                                onChange={(e) => setForm({...form,password:e.target.value})}
                                endAdornment={
                                    <InputAdornment position="end">
                                        {signUp && form.password && passwordPattern.test(form.password) ? <Icon.Check className={"text-alert-green"}/> : null }
                                        {signUp && form.password && !passwordPattern.test(form.password) ? <Icon.X className={"text-alert-red"}/> : null }
                                    </InputAdornment>
                                }
                            />
                        </div> : null}

                        {signUp ? <div>
                            <label className={"font-inter font-bold text-grey"}>CONFIRMATION DU MOT DE PASSE</label>
                            <OutlinedInput
                                className={"mt-2 mb-6 w-full h-11 !rounded-lg bg-grey-veryLight shadow"}
                                name={"password"}
                                type={"password"}
                                value={form.passwordConfirm}
                                disabled={submittedForm}
                                error={Boolean(form.passwordConfirm) && Boolean(form.password) && (!passwordPattern.test(form.password) || form.passwordConfirm === form.password)}
                                onChange={(e) => setForm({...form,password:e.target.value})}
                                endAdornment={
                                    <InputAdornment position="end">
                                        {form.passwordConfirm && emailPattern.test(form.password) && form.password === form.passwordConfirm ? <Icon.Check className={"text-alert-green"}/> : null }
                                        {form.passwordConfirm && !emailPattern.test(form.password) ? <Icon.X className={"text-alert-red"}/> : null }
                                    </InputAdornment>
                                }
                            />
                        </div> : null}

                        {!signUp && !passwordForgot ? <a className={"text-blue-dark text-right text-inter text-sm mb-4 cursor-pointer"} href={"#forgot-password"} onClick={() => handleClick("forgot-password")}>Mot de passe oublié ?</a> : null}
                        {passwordForgot ? <a className={"flex items-center text-blue-dark text-right text-inter text-sm mb-4 cursor-pointer"} href={"#login"} onClick={() => handleClick("login")}><Icon.ArrowLeft className={"h-4 w-4"}/> Retour connexion</a> : null}

                        {errorCode !== null ? renderError() : null}

                        <PrimaryButton
                            color={"#0601B8"}
                            label={signUp ? "INSCRIPTION" : "CONNEXION"}
                            customStyle={{width:'90%'}}
                            disabled={submittedForm ||
                                !(signUp ? namePattern.test(form.name) && emailPattern.test(form.email) && passwordPattern.test(form.password) && form.passwordConfirm === form.password :
                                    (passwordForgot ? emailPattern.test(form.email) : emailPattern.test(form.email) && Boolean(form.password)))
                            }
                            buttonType={"submit"}
                        />
                    </form>
                    <p className={"font-inter text-sm text-grey-darktext"}>By clicking Sign Up, you agree to our <a href={"https://www.dataneo.fr/page/mentions-legales-dataneo"} className={"text-blue-dark cursor-pointer"}>Terms</a>, <a href={"https://www.dataneo.fr/page/Politique-Confidentialite-Dataneo"}  className={"text-blue-dark cursor-pointer"}>Data Policy</a> and <a className={"text-blue-dark cursor-pointer"} href={"https://www.dataneo.fr/page/politique-gestion-cookies-dataneo"}>Cookie Policy</a>.</p>
                    {signUp ?
                        <p className={"font-inter text-sm text-grey mt-8"}>Vous avez déjà un compte ? <span className={"text-blue-dark cursor-pointer"} onClick={() => handleClick("login")}>Se connecter</span>.</p>
                        :
                        <p className={"font-inter text-sm text-grey mt-8"}>Vous n’avez pas encore de compte ? <span className={"text-blue-dark cursor-pointer"} onClick={() => handleClick("sign-up")}>S’inscrire.</span></p>
                    }
                </div>
            </div>
            <div className={"h-full w-7/12 bg-gradient-to-bl from-blue to-grey justify-center items-center overflow-hidden relative hidden md:flex"}>
                <div className={"h-full w-full absolute"}>
                    <div style={{
                        position:'absolute',
                        border: '1px solid #0601B8',
                        borderRadius: '0 50px',
                        width: '337px',
                        height: '359px',
                        left: '5%',
                        top: '5px'}}/>
                    <div style={{
                        position:'absolute',
                        border: '1px solid #0601B8',
                        borderRadius: '0 50px',
                        width: '593px',
                        height: '580px',
                        left: '35%',
                        top: '455px',
                    }}/>
                    <div style={{
                        position:'absolute',
                        background: '#0601B8',
                        borderRadius: '150px',
                        width: '366px',
                        height: '380px',
                        top: '32%',
                        left: '10%',
                    }}/>
                    <div style={{
                        position:'absolute',
                        background: '#FC5A5A',
                        borderRadius: '50px',
                        width: '125px',
                        height: '145px',
                        top: '55%',
                        left: '55%',
                    }}/>
                    <div style={{
                        position:'absolute',
                        border: '1px solid #0601B8',
                        borderRadius: '100%',
                        width: '63px',
                        height: '63px',
                        left:'10%',
                        top:'85%',
                    }}/>
                    <img style={{position:'absolute', top: '8%', left: '75%'}} src={LoginPictures.shape6} alt={"shape6"}/>
                </div>

                <Carousel animation={"slide"} interval={4000} timeout={500}>
                    <div className={"z-10 mx-auto w-1/2 text-white text-center"}>
                        <img src={LoginPictures.neofleet_big} className={"w-full mb-14"} alt={"illustration"}/>
                        <p className={"font-inter font-bold text-2xl mb-1"}>NEOFLEET : Identifiez les flottes des entreprises pour cibler leurs besoins</p>
                        <p className={"font-inter text-sm"}>Neofleet est une plateforme d'accès aux parcs véhicules détenus et utilisés par les entreprises. À l'aide des données des cartes grises enrichies, nous sommes capables de vous fournir des informations précieuses pour votre démarche commerciale.</p>
                    </div>
                    <div className={"z-10 mx-auto w-1/2 text-white text-center"}>
                        <img src={LoginPictures.neofleet_big} className={"w-full mb-14"} alt={"illustration"}/>
                        <p className={"font-inter font-bold text-2xl mb-1"}>CarOwner : Identifiez les flottes des entreprises pour cibler leurs besoins</p>
                        <p className={"font-inter text-sm"}>Neofleet est une plateforme d'accès aux parcs véhicules détenus et utilisés par les entreprises. À l'aide des données des cartes grises enrichies, nous sommes capables de vous fournir des informations précieuses pour votre démarche commerciale.</p>
                    </div>
                    <div className={"z-10 mx-auto w-1/2 text-white text-center"}>
                        <img src={LoginPictures.neofleet_big} className={"w-full mb-14"} alt={"illustration"}/>
                        <p className={"font-inter font-bold text-2xl mb-1"}>CarMarket : Identifiez les flottes des entreprises pour cibler leurs besoins</p>
                        <p className={"font-inter text-sm"}>Neofleet est une plateforme d'accès aux parcs véhicules détenus et utilisés par les entreprises. À l'aide des données des cartes grises enrichies, nous sommes capables de vous fournir des informations précieuses pour votre démarche commerciale.</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};

export default LoginScreen;