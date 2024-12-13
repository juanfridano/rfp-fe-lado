import { useState } from "react";
import { Box, FormLabel, Textarea, Text, chakra } from "@chakra-ui/react";

export default {
  title: "Components / Forms / Textarea",
  decorators: [
    (story: Function) => (
      <chakra.div maxW="500px" mt="40px" mx="auto">
        {story()}
      </chakra.div>
    ),
  ],
};

export const Basic = () => {
  return (
    <>
      <FormLabel>This is a label</FormLabel>
      <Textarea defaultValue="This is a textarea" />
    </>
  );
};

export const Rows = () => (
  <Textarea defaultValue="This is a textarea" rows={12} />
);

export const Disabled = () => (
  <Textarea isDisabled placeholder="A disabled textarea" />
);

export const Invalid = () => (
  <Textarea isInvalid placeholder="An invalid textarea" />
);

export const WithSizes = () => (
  <>
    <Textarea
      size="xs"
      placeholder="A sample placeholder"
      defaultValue="This is a x-small textarea"
    />
    <Textarea
      size="sm"
      placeholder="A sample placeholder"
      defaultValue="This is a small textarea"
    />
    <Textarea
      placeholder="A sample placeholder"
      defaultValue="This is a default textarea"
    />
    <Textarea
      size="lg"
      placeholder="A sample placeholder"
      defaultValue="This is a large textarea"
    />
  </>
);

export const WithResize = () => (
  <Textarea placeholder="Here is a sample placeholder" resize="horizontal" />
);

export const WithCharacterLimit = () => {
  const maxChars = 1000;
  const [remainingChars, setRemainingChars] = useState(maxChars);
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValue(value);
    setRemainingChars(maxChars - value.length);
  };

  return (
    <Box pos="relative">
      <Textarea
        placeholder="Here is a sample placeholder"
        value={value}
        onChange={handleChange}
        maxLength={maxChars}
        rows={5}
      />
      <Text
        pos="absolute"
        bottom="12px"
        right="16px"
        fontSize="xs"
        fontWeight="500"
        color="gray.neutral.400"
        zIndex="2"
      >
        {remainingChars} characters remaining
      </Text>
    </Box>
  );
};
