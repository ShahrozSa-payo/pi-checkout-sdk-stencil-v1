import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'atm-input',
  styleUrl: 'atm-input.css',
  shadow: true,
})
export class AtmInput {
  @Prop() disabled: boolean;
  @Prop() placeholder: string;

  @Event() input: EventEmitter<string>;

  @State() value: string = '';

  private onInput = (event: Event) => {
    event.stopPropagation();
    const value: string = (event.target as HTMLInputElement).value;
    this.value = value;
    this.input.emit(value);
  };

  @Method()
  async reset() {
    this.value = '';
  }

  render() {
    return <input disabled={this.disabled} placeholder={this.placeholder} onInput={this.onInput} value={this.value} />;
  }
}
