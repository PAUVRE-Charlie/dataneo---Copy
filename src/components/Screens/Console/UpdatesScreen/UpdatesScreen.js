import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {UpdatesScreenPictures} from "../../../../assets/img";
import UpdateCard from "../../../Cards/UpdateCard/UpdateCard";
import {useLocation} from "react-router-dom";

const UpdatesScreen = (props) => {

    const location = useLocation();
    const [updates, setUpdates] = useState([
        {
            id:'1',
            title:"Nouvelle fonctionnalité : le partage de document",
            summary:"How many free autoresponders have you tried? Really how many? And how many emails did you get through using them? How do you know?.\n",
            author:{name: "Clément Lenotre", job: "Directeur Produit chez Dataneo", picture:null},
            img:UpdatesScreenPictures.business_schedule,
            content:"You don’t need to have a full time ecommerce business to earn a little extra money through your website. You don’t even need to be there all the time. All you need to do is wait for the day your advertisers will pay you. However, this is not as easy as it seems. You can’t expect to just make a website and watch the money roll in. You have to exert first the effort to make the site popular and produce a huge traffic flow. Advertisers would only post their banners and ads on sites where they know there are many people who will see them. The more traffic and visitors you have the likely the chance that advertisers will want their ads on your site. You can also have pay-per-click advertising in your site. As each visitor clicks on an ad, the advertiser will pay you for those redirects. Google’s Adsense and Yahoo’s Search marketing are some of those that offer this performance based marketing strategies."
        },
        {
            id:'2',
            title:"Optimisation : Modification des utilisateurs à la volée",
            summary:"How many free autoresponders have you tried? Really how many? And how many emails did you get through using them? How do you know?.\n",
            author:{name: "Clément Lenotre", job: "Directeur Produit chez Dataneo", picture:null},
            img:UpdatesScreenPictures.delivery_services,
            content:"You don’t need to have a full time ecommerce business to earn a little extra money through your website. You don’t even need to be there all the time. All you need to do is wait for the day your advertisers will pay you. However, this is not as easy as it seems. You can’t expect to just make a website and watch the money roll in. You have to exert first the effort to make the site popular and produce a huge traffic flow. Advertisers would only post their banners and ads on sites where they know there are many people who will see them. The more traffic and visitors you have the likely the chance that advertisers will want their ads on your site. You can also have pay-per-click advertising in your site. As each visitor clicks on an ad, the advertiser will pay you for those redirects. Google’s Adsense and Yahoo’s Search marketing are some of those that offer this performance based marketing strategies."
        },
        {
            id:'3',
            title:"Enquête utilisateur : plus de granularité dans la gestion",
            summary:"How many free autoresponders have you tried? Really how many? And how many emails did you get through using them? How do you know?.\n",
            author:{name: "Clément Lenotre", job: "Directeur Produit chez Dataneo", picture:null},
            img:UpdatesScreenPictures.finance,
            content:"You don’t need to have a full time ecommerce business to earn a little extra money through your website. You don’t even need to be there all the time. All you need to do is wait for the day your advertisers will pay you. However, this is not as easy as it seems. You can’t expect to just make a website and watch the money roll in. You have to exert first the effort to make the site popular and produce a huge traffic flow. Advertisers would only post their banners and ads on sites where they know there are many people who will see them. The more traffic and visitors you have the likely the chance that advertisers will want their ads on your site. You can also have pay-per-click advertising in your site. As each visitor clicks on an ad, the advertiser will pay you for those redirects. Google’s Adsense and Yahoo’s Search marketing are some of those that offer this performance based marketing strategies."
        },
        {
            id:'4',
            title:"Nouvelle fonctionnalité : la sauvegarde des recherches",
            read:true,
            summary:"How many free autoresponders have you tried? Really how many? And how many emails did you get through using them? How do you know?.\n",
            author:{name: "Clément Lenotre", job: "Directeur Produit chez Dataneo", picture:null},
            img:UpdatesScreenPictures.presentation,
            content:"You don’t need to have a full time ecommerce business to earn a little extra money through your website. You don’t even need to be there all the time. All you need to do is wait for the day your advertisers will pay you. However, this is not as easy as it seems. You can’t expect to just make a website and watch the money roll in. You have to exert first the effort to make the site popular and produce a huge traffic flow. Advertisers would only post their banners and ads on sites where they know there are many people who will see them. The more traffic and visitors you have the likely the chance that advertisers will want their ads on your site. You can also have pay-per-click advertising in your site. As each visitor clicks on an ad, the advertiser will pay you for those redirects. Google’s Adsense and Yahoo’s Search marketing are some of those that offer this performance based marketing strategies."
        },
    ])

    return (

        <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background px-10 pb-6 text-left"}>
            <p className={"font-poppins text-x2l text-grey-dark font-bold my-4"}>Nouveautés Dataneo</p>
                <div className={"h-11/12 overflow-y-auto disable-scrollbars space-y-4 w-4/5"}>
                    {
                        updates.map((update,i) => (
                            <UpdateCard
                                id={update.id}
                                title={update.title}
                                summary={update.summary}
                                author={update.author}
                                img={update.img}
                                read={Boolean(update.read)}
                                key={i}
                                content={update.content}
                                open={location.pathname.split('/')[2] === update.id}
                            />
                        ))
                    }
                </div>
        </div>
    );
}

UpdatesScreen.propTypes = {};

UpdatesScreen.defaultProps = {};

export default UpdatesScreen;