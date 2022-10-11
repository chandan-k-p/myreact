import React, { Component } from "react";
import propType from "prop-types";
import classes from "./BurgerIngredents.css";

class BurgerIngredents extends Component {
  render() {
    let ingredents = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredents = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredents = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div classes={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredents = <div className={classes.Meat}></div>;
        break;
      case "bacon":
        ingredents = <div className={classes.Beacon}></div>;
        break;
      case "cheese":
        ingredents = <div className={classes.Cheese}></div>;
        break;
      case "salad":
        ingredents = <div className={classes.Salad}></div>;
        break;

      default:
        ingredents = null;
        break;
    }
    return ingredents;
  }
}
BurgerIngredents.propType = {
  type: propType.string.isRequired,
};
export default BurgerIngredents;
