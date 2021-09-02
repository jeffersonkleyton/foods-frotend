import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    carne: false,
    queijo: false,
    bacon: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    props.adiocionaisFunc({...state ,[event.target.name]: event.target.checked} )
    event.preventDefault();

  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.carne}
            onChange={handleChange}
            name="carne"
          />
        }
        label="Carne"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.queijo}
            onChange={handleChange}
            name="queijo"
            color="primary"
          />
        }
        label="Queijo"
      />
            <FormControlLabel
        control={
          <Checkbox
            checked={state.bacon}
            onChange={handleChange}
            name="bacon"
            color="primary"
          />
        }
        label="Bacon"
      />
    </FormGroup>
  );
}
