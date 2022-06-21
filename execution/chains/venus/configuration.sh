delegationcontrold  tx fdpd configure-local-domain --from alice --yes --home ~/.venus --chain-id venus --node tcp://localhost:26663 --gas=auto --gas-adjustment=1.15

delegationcontrold query fdpd show-local-domain --node tcp://localhost:26663
