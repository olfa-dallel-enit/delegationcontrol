#delegationcontrold tx fdpd add-delegation-decision [decision] [delegation-conditions] [decision-domain] [delegation-request-label] [flags]

bash execution/chains/earth/configuration.sh

delegationcontrold tx fdpd add-delegation-decision "permit" '{"cost":220,"maxDelegateeNb":20, "validity":{"notBefore":"2022-02-03 00:00:00","notAfter":"2022-12-31 00:00:00"}}' "domain1" "request1" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

delegationcontrold tx fdpd add-delegation-decision "permit" '{"cost":200,"maxDelegateeNb":25, "validity":{"notBefore":"2022-02-03 00:00:00","notAfter":"2024-02-03 00:00:00"}}' "domain2" "request1" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

sleep 10

delegationcontrold tx fdpd check-delegation "request1" "lowest-cost" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

delegationcontrold tx fdpd check-delegation "request1" "max-delegatee-nb" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

delegationcontrold tx fdpd check-delegation "request1" "min-delegatee-nb" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

delegationcontrold tx fdpd check-delegation "request1" "max-validity" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

delegationcontrold tx fdpd check-delegation "request1" "min-validity" --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

delegationcontrold query fdpd list-final-delegation-decision --node tcp://localhost:26657 > execution/simulation/final-delegation-decision-2requests.txt

delegationcontrold query fdpd list-calculation-time --node tcp://localhost:26657 > execution/simulation/calculation-time-2requests.txt
