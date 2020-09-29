import React from 'react';
import { BuildControl, Label, Less, More } from './BuildControl.module.css';

const buildControl = ({ removed, disabled, added, label }) => (
  <div className={BuildControl}>
    <div className={Label}>{label}</div>
    <button className={Less} onClick={removed} disabled={disabled}>
      Less
    </button>
    <button className={More} onClick={added}>
      More
    </button>
  </div>
);
export default buildControl;
