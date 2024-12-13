import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Center } from "@chakra-ui/react";

import { useAuth } from "../hooks/useAuth";

export const AuthWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const { isAuthenticated, isPending } = useAuth();

  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      router.push("/auth/sign-in");
    }
  }, [isPending, isAuthenticated, router]);

  if (isPending) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="brand.500" />
      </Center>
    );
  }

  return isAuthenticated && children;
};
