"use client";
import { Flex } from "@chakra-ui/react";

import { MyRfpsHeader } from "@/components/dashboard/my-rfps";
import { Filter, View } from "../../../components/ui";

function MyRfp() {
  return (
    <>
      <MyRfpsHeader />
      <Flex padding="0px 80px 16px 80px">
        <Filter />
        <View />
      </Flex>
    </>
  );
}

export default MyRfp;
