import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  container: {
    margin: "5% 0",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  root: { minWidth: 300 },

  change1h: (currency) => ({
    color: currency.priceChange1h > 0 ? "green" : "red",
  }),
  change1d: (currency) => ({
    color: currency.priceChange1d > 0 ? "green" : "red",
  }),
  change1w: (currency) => ({
    color: currency.priceChange1w > 0 ? "green" : "red",
  }),
  externalLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  backToSearch: {
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
});

export default styles;
