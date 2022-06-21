bash execution/chains/earth/configuration.sh
bash execution/chains/mars/configuration.sh
bash execution/chains/venus/configuration.sh

#earth-mars
delegationcontrold tx fdpd send-establish-cooperation fdpd channel-0 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#earth-venus
delegationcontrold tx fdpd send-establish-cooperation fdpd channel-1 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

#delegationcontrold query fdpd list-domain --node tcp://localhost:26657

#delegationcontrold tx fdpd send-request-delegation [src-port] [src-channel] [delegation-action] [permission] [flags]
#delegationcontrold tx fdpd send-request-delegation fdpd channel-1 "" '{}' --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15



