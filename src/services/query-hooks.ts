import { useQuery, useQueryClient } from "@tanstack/react-query";

interface ListingQueryProps{
    queryApi: () => Promise<any>;
    config: any;
    queryKey: string;
}

export function useListingQuery({queryApi, config, queryKey}:ListingQueryProps) {
  const response = useQuery(
    [queryKey],
    () => queryApi(),
    config || {}
  )
   
  return response;
}