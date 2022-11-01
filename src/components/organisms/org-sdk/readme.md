# org-sdk



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [mol-transaction](../../molecules/mol-transaction)
- [mol-popup](../../molecules/mol-popup)
- [atm-btn](../../atoms/atm-btn)
- [atm-frame](../../atoms/atm-frame)
- [mol-browser-apis](../../molecules/mol-browser-apis)

### Graph
```mermaid
graph TD;
  org-sdk --> mol-transaction
  org-sdk --> mol-popup
  org-sdk --> atm-btn
  org-sdk --> atm-frame
  org-sdk --> mol-browser-apis
  mol-transaction --> atm-input
  mol-transaction --> atm-btn
  mol-popup --> atm-btn
  mol-browser-apis --> atm-btn
  style org-sdk fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
