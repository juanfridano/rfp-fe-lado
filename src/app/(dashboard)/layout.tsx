"use client";

import { Grid, GridItem } from "@chakra-ui/react";

import { NavBar } from "@/components/dashboard/layout/nav-bar";
import { AuthWrapper } from "../../hocs/AuthWrapper";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthWrapper>
      <Grid
        h="100vh"
        templateAreas={`nav main`}
        gridTemplateColumns={"80px 1fr"}
      >
        <GridItem
          p="20px"
          h="100%"
          bg="gray.neutral.50"
          borderRight="1px solid"
          borderColor="gray.neutral.200"
        >
          <NavBar />
        </GridItem>
        <GridItem>{children}</GridItem>
      </Grid>
    </AuthWrapper>
  );
}
