import Image from "next/image";
import { Grid, GridItem } from "@chakra-ui/react";

import placeholder from "../../../../../public/images/image-filter-hdr.svg";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Grid templateColumns={{ md: "repeat(2, 1fr)" }} h="100vh">
      <GridItem
        bgColor="brand.50"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={placeholder} alt="hero" />
      </GridItem>
      <GridItem px="140px" pt="27px" pb="100px">
        {children}
      </GridItem>
    </Grid>
  );
}

export default AuthLayout;
