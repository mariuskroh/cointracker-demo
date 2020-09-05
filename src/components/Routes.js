import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "./Loader";
import Widget from "./Widget";
import SearchForm from "./SearchForm";
import SingleCurrency from "./SingleCurrency";

const Routes = (props) => {
  const { loading, coins } = props;
  return (
    <Switch>
      <Route exact path="/" render={() => <Loader loading={loading} />} />
      {!loading && (
        <>
          <Route
            path="/coin/:id"
            render={(routeProps) => (
              <SingleCurrency {...routeProps} currencies={coins} />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => <SearchForm currencies={coins} />}
          />
        </>
      )}
    </Switch>
  );
};

export default Routes;
