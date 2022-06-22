delegationcontrold tx fdpd configure-local-domain --from alice --yes --home ~/.jupiter --chain-id jupiter --node tcp://localhost:26668 --gas=auto --gas-adjustment=1.15

delegationcontrold query fdpd show-local-domain --node tcp://localhost:26668

#add delegation decision
#delegationcontrold tx fdpd create-delegation-decision [decision] [delegation-conditions] [flags]

delegationcontrold tx fdpd create-delegation-decision "permit" '{"cost":120,"maxDelegateeNb":20, "validity":{"notBefore":"2022-02-03 00:00:00","notAfer":"2024-02-03 00:00:00"}}' --from alice --yes --home ~/.jupiter --chain-id jupiter --node tcp://localhost:26668 --gas=auto --gas-adjustment=1.15

