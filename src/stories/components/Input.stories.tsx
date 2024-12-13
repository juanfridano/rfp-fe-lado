import { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  chakra,
} from "@chakra-ui/react";

import { TiEyeOff, TiEye } from "../../../public/icons";

export default {
  title: "Components / Forms / Input",
  decorators: [
    (story: Function) => (
      <chakra.div maxW="560px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
};

export const Basic = () => <Input placeholder="Basic input" />;

export const WithStates = () => (
  <Stack align="start">
    <Input placeholder="Idle" />
    <Input isInvalid placeholder="isInvalid" />
    <Input isDisabled placeholder="isDisabled" />
    <Input isReadOnly placeholder="isReadonly" />
  </Stack>
);

export const WithFormControl = () => {
  const [isError, setIsError] = useState(false);
  return (
    <Stack align="start">
      <FormControl id="first-name" isInvalid={isError}>
        <chakra.div display="flex" mb="2">
          <FormLabel mb="0" lineHeight="1em">
            Amount
          </FormLabel>
        </chakra.div>
        <InputGroup size="sm">
          <Input placeholder="Enter amount" />
        </InputGroup>
        <FormHelperText>
          Helper Message. Keep it very short and sweet!
        </FormHelperText>
        <FormErrorMessage>Is Invalid!</FormErrorMessage>
      </FormControl>
      <button onClick={() => setIsError((s) => !s)}>Toggle Invalid</button>
    </Stack>
  );
};

export function PasswordInput() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        paddingEnd="4rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement mr="5px">
        {show ? (
          <TiEyeOff width="24px" height="24px" onClick={handleClick} />
        ) : (
          <TiEye width="24px" height="24px" onClick={handleClick} />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
