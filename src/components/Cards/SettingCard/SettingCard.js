import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Switch from "@material-ui/core/Switch";

const theme= createMuiTheme({
    palette: {
        secondary : {
            main: "#3DD598"
        }
    }
})

const SettingCard = (props) => {
    return(
        <div className={"bg-white border border-grey border-box rounded-xl py-4 px-6 text-left w-full"}>
            <div className={"flex justify-between w-full items-center mb-4"}>
                <p className={"font-poppins text-sm font-bold"}>{props.title}</p>
                {props.icon}
            </div>
            {props.content.map((div,i) => {
                return(
                    <div className={"border-b border-grey pb-4 flex justify-between items-center mb-3"} key={i}>
                        <div>
                            <p className={"font-roboto text-xs font-bold mb-2"}>{div.label}</p>
                            <p className={"font-roboto text-xs font-normal"}>{div.infos}</p>
                        </div>
                        {div.onSlide != null ?
                        <MuiThemeProvider theme={theme}>
                            <Switch color={"secondary"} onChange={props.onSlide}/>
                        </MuiThemeProvider>
                        : null }
                    </div>
                )
            })}
            <div className={"no-underline flex flex-wrap w-full"}>
                {props.links !== undefined ? props.links.map((link,i) => {
                    return (
                        <div className={"mr-1 flex items-center space-x-1"} key={i}>
                            <p className={"font-roboto text-xs text-blue cursor-pointer "} onClick={link.onClick}>{link.label}</p>
                            {props.links.length === i + 1 ? null : <div className={"bg-grey h-1 w-1 rounded"}/>}
                        </div>
                    )
                }): null}
            </div>
        </div>
    );
}

SettingCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element,
    content: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        infos: PropTypes.string.isRequired,
        onSlide: PropTypes.func,
    })).isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        label : PropTypes.string,
        onClick : PropTypes.func
    }))
};

SettingCard.defaultProps = {
};

export default SettingCard;