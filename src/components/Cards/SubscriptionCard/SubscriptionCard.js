import { Button, Radio } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0062FF" }
  },
});

const SubscriptionCard = (props) => {

    return (
        <div className={"flex relative p-4 pl-2 min-w-72 rounded-xl border border-grey"}>
            <MuiThemeProvider theme={theme}><div>
                <Radio color="primary" checked={props.selected} onChange={() => props.handleSubscriptionCheck(props.id)}/>
            </div></MuiThemeProvider>
            <div className={"space-y-3 pt-3"}>
                <p className={"text-grey-dark font-bold font-poppins text-sm"}>{props.title}</p>
                {
                    props.current ? 
                        <div className={"flex h-7 text-white text-xxs font-roboto  items-center"}><div className={"bg-blue rounded-xl py-0.5 px-1"}>Abonnement Actuel</div></div> 
                        : <div className={"h-7"} />
                }
                <p className={"text-grey-text text-xs pr-4 font-roboto"}>{props.description}</p>
                <Button style={{padding: '0', color: '#0062FF', fontSize:'12px', textTransform:'inherit'}}>Voir les détails de l'abonnement</Button>
            </div>
            <div className={"absolute top-6 right-4 text-right"}>
                <p className={"text-grey-dark text-sm font-poppins font-bold"}>{props.price.toFixed(2) + "€"}</p>
                <p className={"text-grey mt-1 text-xs font-roboto"}>par mois</p>
            </div>
        </div>
    )
}

SubscriptionCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    price: PropTypes.number,
    current: PropTypes.bool,
    selected: PropTypes.bool,
    description: PropTypes.string,
    handleSubscriptionCheck: PropTypes.func.isRequired,
    handleSubscriptionSubmit: PropTypes.func.isRequired,
}

SubscriptionCard.defaultProps = {
    title: 'Nom abonnement',
    price: 100,
    current: false,
    selected: false,
    description: 'Pas de description'
}

export default SubscriptionCard;