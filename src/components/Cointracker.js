import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import SearchForm from "./SearchForm";
import SingleCurrency from "./SingleCurrency";

const Cointracker = () => {
  const [appState, setAppState] = useState({
    loading: true,
    coins: null,
    hasSelection: false,
    currencyToShow: null,
  });
  const { loading, coins, hasSelection, currencyToShow } = appState;

  const setUserSelection = (currency) => {
    setAppState({
      hasSelection: true,
      currencyToShow: currency,
    });
  };

  useEffect(() => {
    const url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=100";
    const getData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setAppState((state) => ({
          ...state,
          loading: false,
          coins: data.coins,
        }));
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [setAppState]);
  console.log(appState);

  return (
    <div>
      <Switch>
        {loading && <Route exact path="/" render={() => <Loader />} />}
        {!loading && !hasSelection && (
          <Route
            exact
            path="/search"
            render={() => (
              <SearchForm
                currencies={coins}
                setUserSelection={setUserSelection}
                hasSelection={hasSelection}
              />
            )}
          />
        )}
        {hasSelection && (
          <>
            <Route
              exact
              path="/coin/:id"
              render={(routeProps) => (
                <SingleCurrency {...routeProps} currency={currencyToShow} />
              )}
            />
            <Redirect to={`/coin/${currencyToShow.id}`} />
          </>
        )}
      </Switch>
      <Redirect to="/search" />
    </div>
  );
};

export default Cointracker;
