import { QueryClient } from "@tanstack/react-query";

// Static client-side query client for S3 deployment
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
      refetchInterval: false,
      refetchOnWindowFocus: false,
    },
  },
});
