import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event, value) => {
    setValue(event.target.value);
    props.funcMolho(value)

  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Escolha um molho de sua preferencia</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="Barbecue" control={<Radio />} label="Barbecue" />
        <FormControlLabel value="Baconese" control={<Radio />} label="Baconese" />
        <FormControlLabel value="Catchup" control={<Radio />} label="Catchup" />
      </RadioGroup>
    </FormControl>
  );
}
