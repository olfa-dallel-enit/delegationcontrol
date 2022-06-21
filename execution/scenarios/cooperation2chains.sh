delegationcontrold tx fdpd send-establish-cooperation fdpd channel-0 "tunisie" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

delegationcontrold query fdpd list-domain --node tcp://localhost:26657
