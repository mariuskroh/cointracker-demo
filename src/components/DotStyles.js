import { createUseStyles } from "react-jss";

//workaround for jss bug
const keyframes = () => {
  return {
    "0%": { marginBottom: 0 },
    "50%": { marginBottom: 15 },
    "100%": { marginBottom: 0 },
  };
};

const styles = createUseStyles({
  "@keyframes bounce": {
    ...keyframes(),
  },
  dot: (props) => ({
    width: 20,
    height: 20,
    backgroundColor: props.color,
    borderRadius: "50%",
    margin: 20,
    animation: `$bounce 1s ease-in-out ${props.delay} infinite`,
  }),
});

export default styles;
