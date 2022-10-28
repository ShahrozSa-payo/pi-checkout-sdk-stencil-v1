import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'atm-btn',
  styleUrl: 'atm-btn.css',
  shadow: true,
})
export class AtmBtn {
  @Prop() disabled: boolean;

  render() {
    return (
      <button disabled={this.disabled}>
        <slot></slot>
      </button>
    );
  }
}
