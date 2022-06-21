delegationcontrold  tx fdpd configure-local-domain --from alice --yes --home ~/.mars --chain-id mars --node tcp://localhost:26659 --gas=auto --gas-adjustment=1.15

delegationcontrold query fdpd show-local-domain --node tcp://localhost:26659
