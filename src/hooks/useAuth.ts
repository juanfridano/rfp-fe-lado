import { useQuery } from "@tanstack/react-query";

import { authMe } from "../utils/http";

export const useAuth = () => {
  const {
    data,
    isPending,
    isSuccess: isAuthenticated,
  } = useQuery({
    queryKey: ["auth-me"],
    queryFn: authMe,
    retry: false,
    staleTime: 1000 * 60 * 30, // 30 minutes
  });

  return {
    data,
    isAuthenticated,
    isPending,
  };
};
