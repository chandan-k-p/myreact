import React, { Component } from "react";
import Aux from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";

const INGREDENTS_PRICE = {
  salad: 0.4,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBulider extends Component {
  state = {
    ingredents: {
      salad: 0,
      cheese: 0,
      meat: 0,

      bacon: 0,
    },
    totalPrice: 4,
  };

  addIngredentHandler = (type) => {
    const oldCount = this.state.ingredents[type];
    const updatedCount = oldCount + 1;
    const updatedIngredents = {
      ...this.state.ingredents,
    };
    updatedIngredents[type] = updatedCount;
    const priceAdd = INGREDENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdd;
    this.setState({ totalPrice: newPrice, ingredents: updatedIngredents });
  };

  render() {
    return (
      <Aux>
        <Burger ingredents={this.state.ingredents} />
        <BurgerControls ingredentsAdded={this.addIngredentHandler} />
      </Aux>
    );
  }
}
export default BurgerBulider;
