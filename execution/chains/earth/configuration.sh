delegationcontrold  tx fdpd configure-local-domain --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

delegationcontrold query fdpd show-local-domain --node tcp://localhost:26657

delegationcontrold tx fdpd create-forward-policy "broadcast" "" "" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

delegationcontrold query fdpd show-forward-policy --node tcp://localhost:26657