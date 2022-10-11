import React from "react";
import BurgerIngredents from "./BurgerIngredents/BurgerIngredents";
import classes from "./Burger.css";

const burger = (props) => {
  let transformIngredent = Object.keys(props.ingredents)
    .map((igkey) => {
      return [...Array(props.ingredents[igkey])].map((_, i) => {
        return <BurgerIngredents key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngredent.length === 0) {
    transformIngredent = <p>please enter the Ingredents</p>;
  }
  return (
    <div className={classes.burger}>
      <BurgerIngredents type="bread-top" />
      {transformIngredent}
      <BurgerIngredents type="bread-bottom" />
    </div>
  );
};
export default burger;
