import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import CharactersServices from '../../../../services/characters.services';

export default function MarvelAutoComplete({getOption, ...rest}) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState(''); 
  
  const charactersServices = CharactersServices();

  useEffect(() => {
    let active = true;

    let timerFunc = setTimeout(() => {
      (async () => {
        if (inputValue !== '') {
          setLoading(true);
          const data = await charactersServices.getCharacters(inputValue);
          const characters = data.results;
  
          if (active) {
            setOptions(characters);
            setLoading(false);
          }
        }
      })();
    }, 300);

    return () => {
      active = false;
      clearTimeout(timerFunc);
    };
  }, [inputValue]);

  const handleChangeSelected = (event, newValue) => {
    setValue(newValue);
    getOption(newValue);
  };

  return (
    <Autocomplete
      id="hero-name-autocomplete"
      value={value}
      freeSolo
      disableClearable
      onChange={handleChangeSelected}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      style={{ width: 300 }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name ? option.name : ''}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Type character name"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

MarvelAutoComplete.propTypes = {
  getOption: PropTypes.func
};