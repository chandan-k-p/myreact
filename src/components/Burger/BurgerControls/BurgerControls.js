import React from "react";
import BulidControl from "./BuildControl/BuildControl";
import classes from "./BurgerControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "chesse" },
  { label: "Meat", type: "meat" },
];

const bulidControl = (props) => (
  <div className={classes.BuildControl}>
    {controls.map((ctrl) => (
      <BulidControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredentsAdded(ctrl.type)}
      />
    ))}
  </div>
);

export default bulidControl;
