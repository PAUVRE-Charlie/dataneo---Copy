import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AboutScreen = (props) => {
    return (
        <div className={"w-full h-full overflow-y-auto overflow-x-hidden bg-grey-background px-10 pb-6 text-left"}>
            <p className={"font-poppins text-x2l text-grey-dark font-bold my-4"}>En apprendre plus sur Dataneo</p>
        </div>
    );
}

AboutScreen.propTypes = {};

AboutScreen.defaultProps = {};

export default AboutScreen;