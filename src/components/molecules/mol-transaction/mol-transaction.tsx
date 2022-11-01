import { Component, h, State } from '@stencil/core';

import ModuleApi from '../../../apis/module.api.js';
import { message } from '../../../utils/message.util.js';

@Component({
  tag: 'mol-transaction',
  styleUrl: 'mol-transaction.css',
  shadow: true,
})
export class MolTransaction {
  private titleRef: HTMLAtmInputElement;
  private userIdRef: HTMLAtmInputElement;
  private title: string;
  private userId: string;

  @State() private loading: boolean = false;
  @State() private response: string = '';

  submit = () => {
    this.loading = true;
    ModuleApi.create(this.title, Number.parseInt(this.userId)).then(res => {
      let type = '';
      if (!res.message) {
        this.titleRef.reset();
        this.userIdRef.reset();
        type = 'success';
      }

      this.response = res.message || 'Successfully created new record (' + res.id + ')';
      message(type, this.response);
      this.loading = false;
    });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <atm-input disabled={this.loading} placeholder="Title" onEntry={e => (this.title = e.detail)} ref={el => (this.titleRef = el)} />
          <atm-input disabled={this.loading} placeholder="User ID" onEntry={e => (this.userId = e.detail)} ref={el => (this.userIdRef = el)} />
          <atm-btn disabled={this.loading} onClick={this.submit}>
            Submit
          </atm-btn>
        </div>
        <div class="row">
          <p class="label"> Response:</p>
          <p class="value"> {this.loading ? 'Loading...' : this.response} </p>
        </div>
      </div>
    );
  }
}
