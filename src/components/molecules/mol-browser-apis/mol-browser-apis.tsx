import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'mol-browser-apis',
  styleUrl: 'mol-browser-apis.css',
  shadow: true,
})
export class MolBrowserApis {
  @State() content: Object = {};

  @Listen('message', { target: 'window' })
  handleMessage(e: any) {
    this.content = e.data;
  }

  private iframeRef: HTMLIFrameElement;

  print = () => {
    console.log('DOM Element Reference :: ', this.iframeRef);
  };

  render() {
    return (
      <div class="wrapper">
        <div class="left">
          <iframe src="https://stvnganga.github.io/card?origin=http://localhost:3333/" frameborder="0" ref={el => (this.iframeRef = el)} />
          <atm-btn onClick={this.print}>DOM Element reference</atm-btn>
        </div>
        <pre>{JSON.stringify(this.content, null, 2)}</pre>
      </div>
    );
  }
}
