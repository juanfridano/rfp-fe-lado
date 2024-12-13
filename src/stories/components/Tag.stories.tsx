import {
  chakra,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Avatar,
} from "@chakra-ui/react";

import { ArrowUpRight } from "../../../public/icons";

export default {
  title: "Components / Data Display / Tag",
  decorators: [
    (story: Function) => (
      <chakra.div maxW="600px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
};

export const Basic = () => <Tag colorScheme="teal">Teal</Tag>;

export const WithSizes = () => (
  <>
    <Tag size="sm">Gray</Tag>
    <Tag size="md">Gray</Tag>
    <Tag size="lg">Gray</Tag>
  </>
);

export const ColorSchemes = () => (
  <>
    <Tag size="sm" colorScheme="green">
      Gray
    </Tag>
    <Tag size="md" colorScheme="pink">
      Gray
    </Tag>
    <Tag size="lg" colorScheme="blue">
      Gray
    </Tag>
  </>
);

export const WithLeftIcon = () => (
  <Tag colorScheme="cyan">
    <TagLeftIcon w="12px" h="12px" as={ArrowUpRight} />
    <TagLabel>Green</TagLabel>
  </Tag>
);

export const WithRightIcon = () => (
  <>
    <Tag colorScheme="cyan">
      <TagLabel>Green</TagLabel>
      <TagRightIcon w="12px" h="12px" as={ArrowUpRight} />
    </Tag>

    <Tag variant="solid" colorScheme="teal">
      <TagLabel>Teal</TagLabel>
      <TagRightIcon as={ArrowUpRight} />
    </Tag>
  </>
);

export const WithCloseButton = () => (
  <>
    <Tag variant="solid" size="sm" colorScheme="cyan">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>

    <Tag variant="solid" size="md" colorScheme="cyan">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>

    <Tag variant="solid" size="lg" colorScheme="cyan">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>
  </>
);

export const WithCustomElement = () => (
  <Tag size="lg" colorScheme="red" borderRadius="full">
    <Avatar
      src="https://bit.ly/sage-adebayo"
      size="xs"
      name="Segun Adebayo"
      marginLeft={-1}
      marginRight={2}
    />
    <TagLabel>Segun</TagLabel>
    <TagCloseButton />
  </Tag>
);
