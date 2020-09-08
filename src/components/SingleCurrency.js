import React from "react";
import { Link, Redirect } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { currencyFormat, numberFormat } from "../utility/helpers";
import styles from "./SingleCurrencyStyles";

const SingleCurrency = (props) => {
  const { currencies } = props;

  const id = props.match.params.id;

  const currency = currencies.filter((currency) => {
    return currency.id === id;
  })[0];

  if (currency === undefined) {
    return <Redirect to="/search" />;
  } else {
    document.title = `${currency.symbol} ${currencyFormat(currency.price)}`;

    const classes = styles(currency);
    const {
      container,
      root,
      avatar,
      change1h,
      change1d,
      change1w,
      externalLinks,
      backToSearch,
    } = classes;

    const hasTwitter = currency.twitterUrl !== undefined;
    const hasWebsite = currency.websiteUrl !== undefined;
    const shouldDisplayLinks = hasTwitter || hasWebsite;
    return (
      <div className={container}>
        <Card className={root}>
          <CardHeader
            title={currency.name}
            subheader={currency.symbol}
            titleTypographyProps={{ variant: "h4" }}
            avatar={
              <Avatar
                aria-label={currency.name}
                className={avatar}
                alt={currency.name}
                src={currency.icon}
              />
            }
          />
          <Divider variant="middle" light={true} />
          <CardContent>
            <Typography variant="overline">Rank</Typography>
            <Typography variant="h5">{currency.rank}</Typography>
            <Typography variant="overline">Price per Coin</Typography>
            <Typography variant="h5">
              {currencyFormat(currency.price)}
            </Typography>
            <Typography variant="overline">Market Cap</Typography>
            <Typography variant="h5">
              {currencyFormat(currency.marketCap)}
            </Typography>
            <Typography variant="overline">24h volume</Typography>
            <Typography variant="h5">
              {currencyFormat(currency.volume)}
            </Typography>
            <Typography variant="overline">Total supply</Typography>
            <Typography variant="h5">
              {numberFormat(currency.totalSupply)}
            </Typography>
            <Typography variant="overline">Available Supply</Typography>
            <Typography variant="h5" gutterBottom>
              {numberFormat(currency.availableSupply)}
            </Typography>
            <Divider />
            <Typography variant="overline">Change Hourly</Typography>
            <Typography className={change1h} variant="h5">
              {`${currency.priceChange1h}%`}
            </Typography>
            <Typography variant="overline">Change Daily</Typography>
            <Typography className={change1d} variant="h5">
              {`${currency.priceChange1d}%`}
            </Typography>
            <Typography variant="overline">Change Weekly</Typography>
            <Typography className={change1w} variant="h5" gutterBottom>
              {`${currency.priceChange1w}%`}
            </Typography>
            {shouldDisplayLinks && (
              <>
                <Divider />
                <Box mt={2} className={externalLinks}>
                  {hasTwitter && (
                    <Box p={1}>
                      <Button variant="contained" size="small">
                        <a href={currency.twitterUrl}>Twitter</a>
                      </Button>
                    </Box>
                  )}
                  {hasWebsite && (
                    <Box p={1}>
                      <Button variant="contained" size="small">
                        <a href={currency.websiteUrl}>Website</a>
                      </Button>
                    </Box>
                  )}
                </Box>
              </>
            )}
          </CardContent>
        </Card>
        <Box mt={2} className={backToSearch}>
          <Link to="/search/">back to search</Link>
        </Box>
      </div>
    );
  }
};

export default SingleCurrency;
