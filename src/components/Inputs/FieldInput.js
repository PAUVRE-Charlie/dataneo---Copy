
import PropTypes from 'prop-types';
import {OutlinedInput, InputAdornment} from "@material-ui/core";
import * as Icon from "react-feather";

const FieldInput = (props) => {

    return (
        <div className={"flex flex-col"}>
            <label className={"font-inter font-bold text-grey"}>{props.label}</label>
            <OutlinedInput
            className={"w-full h-11 !rounded-lg bg-grey-veryLight shadow"}
            style={{...props.customStyles}}
            name={props.label}
            value={props.value}
            error={Boolean(props.value) && !props.test}
            onChange={props.onChange}
            endAdornment={
                <InputAdornment position="end">
                    {props.value && (props.test ? <Icon.Check className={"text-alert-green"}/>: <Icon.X className={"text-alert-red"} />)}
                </InputAdornment>
            }
            />
        </div>
    );
}

FieldInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    test: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

FieldInput.defaultProps = {
    test: true,
};

export default FieldInput;