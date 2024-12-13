import Image from "next/image";
import { Avatar, Divider, Flex, IconButton } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";

import {
  TiSmartHome,
  TiChecklist,
  TiNews,
  TiBrandYoutube,
  TiSettings,
} from "../../../../../public/icons";
import defaultInstitutionFavicon from "../../../../../public/images/default-institution-favicon.svg";

export function NavBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Flex gap="8" flexDir="column" h="100%">
      <Image src={defaultInstitutionFavicon} alt="Institution Favicon" />
      <IconButton
        variant={pathname === "/" ? "iconPrimary" : "iconSecondaryNav"}
        aria-label="Home"
        p="2"
        icon={
          <TiSmartHome
            stroke={pathname === "/" ? "white" : "#6C737F"}
            fill="none"
          />
        }
        onClick={() => router.push("/")}
      />
      <IconButton
        variant="iconSecondaryNav"
        aria-label="" //TODO: Add aria-label
        color="gray.neutral.500"
        p="2"
        icon={<TiChecklist />}
      />
      <IconButton
        variant="iconSecondaryNav"
        aria-label="" //TODO: Add aria-label
        p="2"
        icon={<TiNews />}
      />
      <Flex flexDir="column" mt="auto" gap="3">
        <IconButton
          variant="iconSecondaryNav"
          aria-label="" //TODO: Add aria-label
          p="2"
          icon={<TiBrandYoutube />}
        />
        <Divider color="gray.neutral.200" />
        <Avatar
          w="40px"
          h="40px"
          bg="gray.neutral.200"
          color="gray.neutral.500"
          fontWeight="semibold"
          name="John Karl"
          _hover={{ cursor: "pointer" }}
          // onClick={() => router.push("/user/profile")}
        />
        <IconButton
          variant={
            pathname === "/user/settings" ? "iconPrimary" : "iconSecondaryNav"
          }
          aria-label="user settings"
          p="2"
          icon={
            <TiSettings color={pathname === "/user/settings" ? "white" : ""} />
          }
          // onClick={() => router.push("/user/settings")}
        />
      </Flex>
    </Flex>
  );
}

export default NavBar;
