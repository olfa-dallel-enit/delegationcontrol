bash execution/chains/earth/configuration.sh
bash execution/chains/mars/configuration.sh
#bash execution/chains/venus/configuration.sh

#earth-mars
delegationcontrold tx fdpd send-establish-cooperation fdpd channel-0 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#earth-venus
#delegationcontrold tx fdpd send-establish-cooperation fdpd channel-1 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

#delegationcontrold query fdpd list-domain --node tcp://localhost:26657

sleep 30

#delegationcontrold tx fdpd send-request-delegation [src-port] [src-channel] [delegation-request] [flags]
delegationcontrold tx fdpd send-request-delegation fdpd '{"label":"request1","delegationAction":"grant","permission":{"action":"read","resource":"capteur1"}}' --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

#while true
#do
#    delegationcontrold tx fdpd send-request-delegation fdpd '{}' --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#done
delegationcontrold query fdpd list-delegation-decision --node tcp://localhost:26657

#delegationcontrold tx fdpd check-delegation [label] [selection-criteria] [flags]
#delegationcontrold tx fdpd check-delegation "request2" "lowest-cost" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
#delegationcontrold query fdpd list-final-delegation-decision --node tcp://localhost:26657

delegationcontrold query fdpd list-delegation-request-log --node tcp://localhost:26657

#delegationcontrold tx fdpd calculate-request-delegation-timing "request1" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
delegationcontrold query fdpd list-calculation-time --node tcp://localhost:26657

