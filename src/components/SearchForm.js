import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import styles from "./SearchFormStyles";

const SearchForm = ({ currencies }) => {
  const classes = styles();
  let history = useHistory();

  const {
    formContainer,
    searchForm,
    input,
    option,
    searchItem,
    submitButton,
  } = classes;

  const [value, setValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/coin/${value.id}`);
  };

  return (
    <div className={formContainer}>
      <form className={searchForm} onSubmit={(e) => handleSubmit(e)}>
        <Autocomplete
          className={input}
          options={currencies}
          classes={{
            option: option,
          }}
          autoHighlight
          getOptionLabel={(option) => option.name}
          renderOption={(option) => (
            <div className={searchItem}>
              <img src={option.icon} alt={option.name} />
              <span>{option.name}</span>
            </div>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a currency"
              variant="outlined"
            />
          )}
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue);
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={submitButton}
          disabled={value === null}
        >
          Display
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
