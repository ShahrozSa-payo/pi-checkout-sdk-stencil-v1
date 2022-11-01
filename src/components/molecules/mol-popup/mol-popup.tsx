import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'mol-popup',
  styleUrl: 'mol-popup.css',
  shadow: true,
})
export class MolPopup {
  @State() private isOpened: boolean = false;

  render() {
    return (
      <Host>
        <atm-btn onClick={() => (this.isOpened = true)}>Open Popup</atm-btn>
        <div class={'backdrop ' + (this.isOpened ? 'opened' : '')}>
          <div class="overlay">
            <h1>I am Popup ;)</h1>
            <atm-btn onClick={() => (this.isOpened = false)}>Close Me</atm-btn>
          </div>
        </div>
      </Host>
    );
  }
}
