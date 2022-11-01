import { Component, h } from '@stencil/core';
import { message } from '../../../utils/message.util';

@Component({
  tag: 'org-sdk',
  styleUrl: 'org-sdk.css',
  shadow: true,
})
export class OrgSdk {
  render() {
    return (
      <div class="wrapper">
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
        <h1>SDK Heading H1 of font-size 30</h1>
        <div class="br" />
        <p>HTTP calls</p>
        <mol-transaction />
        <div class="br" />
        <p>Actions</p>
        <div class="actions">
          <mol-popup />
          <atm-btn onClick={() => message(null, 'Message from SDK', 2000, 'brown')}>Show Message from SDK</atm-btn>
        </div>
        <div class="br" />
        <p>Iframe</p>
        <atm-frame />
        <div class="br" />
        <p>Browser Apis</p>
        <mol-browser-apis />
      </div>
    );
  }
}
