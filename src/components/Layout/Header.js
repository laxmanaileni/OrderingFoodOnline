import { Fragment } from "react";
import image from "../../assets/images.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderCartButton";
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Hyderabadi</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Biryani" />
      </div>
    </Fragment>
  );
}

export default Header;
