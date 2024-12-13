import { ThemingProps } from "@chakra-ui/styled-system";
import { Meta, StoryFn } from "@storybook/react";
import {
  Button,
  Container,
  HStack,
  IconButton,
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";

import { Check, ArrowUpRight } from "../../../public/icons";

export default {
  title: "Components / Forms / Button",
  decorators: [
    (Story: any) => (
      <Container mt="40px" display="flex" flexWrap="wrap" gap="4">
        <Story />
      </Container>
    ),
  ],
} satisfies Meta;

interface StoryProps extends ThemingProps<"Button"> {
  children?: React.ReactNode;
}

export const Basic: StoryFn<StoryProps> = (props) => <Button {...props} />;
Basic.argTypes = {
  children: { type: "string" },
};
Basic.args = {
  children: "Button",
};

export const WithVariants = () => (
  <HStack spacing="24px" alignItems="baseline">
    <Box>
      <Text mb="4">Primary</Text>
      <Button variant="primary">Button</Button>
    </Box>

    <Box>
      <Text mb="4">Secondary</Text>
      <Button variant="secondary">Button</Button>
    </Box>

    <Box>
      <Text mb="4">Destruction</Text>
      <Button variant="destruction">Button</Button>
    </Box>

    <Box>
      <Text mb="4">Link</Text>
      <Button variant="link">Button</Button>
    </Box>
  </HStack>
);

export const WithSizes = () => (
  <HStack>
    <Box>
      <Text mb="4">sm</Text>
      <Button size="sm">Button</Button>
    </Box>

    <Box>
      <Text mb="4">md</Text>
      <Button size="md">Button</Button>
    </Box>

    <Box>
      <Text mb="4">lg</Text>
      <Button size="lg">Button</Button>
    </Box>
  </HStack>
);

export const WithIcon = () => (
  <Stack direction="row" spacing={4}>
    <Button leftIcon={<Check />}>Email</Button>
    <Button rightIcon={<Check />} variant="secondary">
      Call us
    </Button>
  </Stack>
);

export const WithLoading = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button size="lg" isLoading>
      Email
    </Button>

    <Button isLoading loadingText="Submitting..." variant="secondary">
      Submit
    </Button>
  </Stack>
);

export const WithLoadingSpinnerPlacement = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button
      isLoading
      loadingText="Loading"
      variant="secondary"
      spinnerPlacement="start"
    >
      Submit
    </Button>
    <Button
      isLoading
      loadingText="Loading"
      variant="secondary"
      spinnerPlacement="end"
    >
      Continue
    </Button>
  </Stack>
);

export const WithDisabled = () => (
  <HStack spacing="24px">
    <Button as="div" isDisabled>
      Button
    </Button>
    <Button isDisabled variant="secondary">
      Button
    </Button>
    <Button isDisabled variant="destruction">
      Button
    </Button>
    <Button isDisabled variant="link">
      Button
    </Button>
  </HStack>
);

export const WithIconButton = () => (
  <Stack direction="row">
    <IconButton
      aria-label="Search database"
      variant="iconPrimary"
      p="2"
      icon={<ArrowUpRight color="white" />}
    />

    <IconButton
      aria-label="Search database"
      variant="iconSecondary"
      icon={<ArrowUpRight />}
    />

    <IconButton
      aria-label="Search database"
      variant="iconDestruction"
      icon={<ArrowUpRight />}
    />

    <IconButton
      aria-label="Search database"
      variant="link"
      icon={<ArrowUpRight w="24px" h="24px" />}
    />
  </Stack>
);

export const IconButtonDisabled = () => (
  <Stack direction="row">
    <IconButton
      isDisabled
      aria-label="Search database"
      variant="iconPrimary"
      py="2"
      icon={<ArrowUpRight color="white" />}
    />

    <IconButton
      isDisabled
      aria-label="Search database"
      variant="iconSecondary"
      icon={<ArrowUpRight />}
    />

    <IconButton
      isDisabled
      aria-label="Search database"
      variant="iconDestruction"
      icon={<ArrowUpRight />}
    />

    <IconButton
      isDisabled
      aria-label="Search database"
      variant="link"
      icon={<ArrowUpRight w="24px" h="24px" />}
    />
  </Stack>
);
