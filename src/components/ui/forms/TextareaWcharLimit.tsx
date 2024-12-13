import { useState } from "react";
import { Box, Text, Textarea } from "@chakra-ui/react";

export const TextareaWithCharLimit = () => {
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
