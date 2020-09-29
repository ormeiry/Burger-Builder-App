import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import { BuildControls, OrderButton } from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
  purchasable,
  ordered,
  disabled,
  price,
}) => (
  <div className={BuildControls}>
    <p>
      Current Price: <strong>{price.toFixed(2)}</strong>
    </p>
    {controls.map(({ label, type }) => (
      <BuildControl
        key={label}
        label={label}
        added={() => ingredientAdded(type)}
        removed={() => ingredientRemoved(type)}
        disabled={disabled[type]}
      />
    ))}
    <button className={OrderButton} disabled={!purchasable} onClick={ordered}>
      Order Now
    </button>
  </div>
);

export default buildControls;
