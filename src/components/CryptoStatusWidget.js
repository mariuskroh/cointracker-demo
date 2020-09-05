import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import Widget from "./Widget";

const Cointracker = () => {
  const [appState, setAppState] = useState({
    loading: true,
    coins: null,
  });
  const { loading, coins } = appState;

  useEffect(() => {
    const url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=100";
    const getData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setAppState({
          loading: false,
          coins: data.coins,
        });
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
        {!loading && (
          <Route
            exact
            path="/search"
            render={() => <Widget currencies={coins} />}
          />
        )}
      </Switch>
      {!loading && <Redirect to="/search" />}
    </div>
  );
};

export default Cointracker;
