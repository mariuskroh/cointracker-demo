import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "./Loader";
import SearchForm from "./SearchForm";
import SingleCurrency from "./SingleCurrency";

const Routes = (props) => {
  const { loading, coins } = props;
  return (
    <Switch>
      {loading && <Route exact path="/" render={() => <Loader />} />}
      {!loading && (
        <>
          <Route
            exact
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
          <Route render={() => <Redirect to="/search" />} />
        </>
      )}
    </Switch>
  );
};

export default Routes;
