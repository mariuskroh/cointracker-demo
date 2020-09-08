import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  formContainer: {
    height: 100,
    display: "flex",
    justifyContent: "center",
  },
  searchForm: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  option: {
    fontSize: 18,
    letterSpacing: "0.02rem",
  },
  input: {
    width: 350,
    marginRight: 20,
  },
  searchItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& img": {
      height: 36,
      marginRight: 16,
    },
  },
  submitButton: {
    height: 40,
    marginLeft: 20,
  },
});

export default styles;
