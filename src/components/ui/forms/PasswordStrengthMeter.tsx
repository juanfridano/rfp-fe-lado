import { HStack, Box, Text } from "@chakra-ui/react";

interface PasswordStrengthMeterProps {
  password: string | null;
  strength: number;
}

export function PasswordStrengthMeter({
  password,
  strength,
}: PasswordStrengthMeterProps) {
  let strengthColor = "gray.neutral.300";
  let feedback = "";

  if (password) {
    const strengthColors: { [key: number]: string } = {
      0: "error.700",
      1: "error.700",
      2: "yellow.700",
      3: "brand.700",
      4: "success.700",
    };
    const strengthFeedbacks: { [key: number]: string } = {
      0: "Very Weak",
      1: "Weak",
      2: "Moderate",
      3: "Strong",
      4: "Very Strong",
    };
    strengthColor = strengthColors[strength] || "gray.neutral.300";
    feedback = strengthFeedbacks[strength];
  }

  return (
    <HStack mt="12px">
      {[0, 1, 2, 3, 4].map((score) => (
        <Box
          key={score}
          bg={
            password && strength >= score ? strengthColor : "gray.neutral.300"
          }
          w="53px"
          h="6px"
          borderRadius="1px"
        />
      ))}
      <Text color={strengthColor} fontSize="sm" lineHeight="20px" ml="auto">
        {feedback}
      </Text>
    </HStack>
  );
}
