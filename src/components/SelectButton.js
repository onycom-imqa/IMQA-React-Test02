import { makeStyles } from "@material-ui/core";
import {useIMQA} from "imqa-react-sdk";

const SelectButton = ({ children, selected, onClick }) => {
  const IMQARef = useIMQA(); // 삽입
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid gold",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold",
        color: "black",
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
      <div ref={IMQARef}>
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
      </div>
  );
};

export default SelectButton;
