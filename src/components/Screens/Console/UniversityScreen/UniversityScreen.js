import React, {useState} from 'react';
import UniversityCard from "../../../Cards/UniversityCard/UniversityCard";
import {UniversityCardPictures} from "../../../../assets/img";

const UniversityScreen = (props) => {
    return (
        <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background px-10 pb-6 text-left"}>
            <p className={"font-poppins text-x2l text-grey-dark font-bold my-4"}>Ressources</p>
            <div className={"mb-10"}>
                <p className={"font-poppins font-bold text-sm mb-2"}>Onboarding et bonnes pratiques</p>
                <div className={"flex flex-wrap overflow-hidden -mx-1"}>
                    <div className={"my-1 px-1 max-w-md"}>
                        <UniversityCard title={"Débuter avec Dataneo"} description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's. "} picture={UniversityCardPictures.illustration_1} media={"https://www.youtube.com/watch?v=uw2okK998UM"} time={2}/>
                    </div>
                    <div className={"my-1 px-1 max-w-md"}>
                        <UniversityCard title={"Onboarder votre équipe"} description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's. "} picture={UniversityCardPictures.illustration_2} media={"https://www.youtube.com/watch?v=uw2okK998UM"} time={2}/>
                    </div>
                    <div className={"my-1 px-1 max-w-md"}>
                        <UniversityCard title={"Découvrir NeoFleet"} description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's. "} picture={UniversityCardPictures.illustration_3} media={"https://www.youtube.com/watch?v=uw2okK998UM"} time={2}/>
                    </div>
                    <div className={"my-1 px-1 max-w-md"}>
                        <UniversityCard title={"Découvrir CarOwner"} description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's. "} picture={UniversityCardPictures.illustration_4} media={"https://www.youtube.com/watch?v=uw2okK998UM"} time={2}/>
                    </div>
                    <div className={"my-1 px-1 max-w-md"}>
                        <UniversityCard title={"Découvrir CarMarket"} description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's. "} picture={UniversityCardPictures.illustration_5} media={"https://www.youtube.com/watch?v=uw2okK998UM"} time={2}/>
                    </div>
                </div>
            </div>
            <div className={"mb-10"}>
                <p className={"font-poppins font-bold text-sm mb-2"}>Compétences d'aministration</p>
                <div className={"flex flex-wrap overflow-hidden -mx-1"}>
                    <div className={"my-1 px-1 max-w-md"}>
                        <UniversityCard title={"Administrer une équipe"} description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's. "} picture={UniversityCardPictures.illustration_6} media={"https://www.youtube.com/watch?v=uw2okK998UM"} time={2}/>
                    </div>
                    <div className={"my-1 px-1 max-w-md"}>
                        <UniversityCard title={"Onboarder votre équipe"} description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's. "} picture={UniversityCardPictures.illustration_7} media={"https://www.youtube.com/watch?v=uw2okK998UM"} time={2}/>
                    </div>
                    <div className={"my-1 px-1 max-w-md"}>
                        <UniversityCard title={"Découvrir NeoFleet"} description={"Nouveau sur Dataneo ? Apprenez dès à présent les bases pour identifier et exploiter de nouvelles opportunite's. "} picture={UniversityCardPictures.illustration_1} media={"https://www.youtube.com/watch?v=uw2okK998UM"} time={2}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

UniversityScreen.propTypes = {};

UniversityScreen.defaultProps = {};

export default UniversityScreen;