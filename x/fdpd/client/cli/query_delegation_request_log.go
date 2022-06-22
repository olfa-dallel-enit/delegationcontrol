package cli

import (
	"context"
	"strconv"

	"delegationcontrol/x/fdpd/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListDelegationRequestLog() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-delegation-request-log",
		Short: "list all delegationRequestLog",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllDelegationRequestLogRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.DelegationRequestLogAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowDelegationRequestLog() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-delegation-request-log [id]",
		Short: "shows a delegationRequestLog",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetDelegationRequestLogRequest{
				Id: id,
			}

			res, err := queryClient.DelegationRequestLog(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
