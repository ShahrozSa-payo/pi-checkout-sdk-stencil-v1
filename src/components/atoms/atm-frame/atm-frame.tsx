import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'atm-frame',
  styleUrl: 'atm-frame.css',
  shadow: true,
})
export class AtmFrame {
  @State() src: string;

  loaded(event: Event) {
    if (!this.src) {
      const width = (event.target as HTMLIFrameElement).clientWidth;
      const height = (event.target as HTMLIFrameElement).clientHeight;
      this.src = 'https://picsum.photos/' + width + '/' + height;
    }
  }

  render() {
    return <iframe onLoad={this.loaded} src={this.src}></iframe>;
  }
}
