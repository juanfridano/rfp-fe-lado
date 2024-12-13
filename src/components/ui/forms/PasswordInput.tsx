import { useState, forwardRef } from "react";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

import { TiEye } from "../../../../public/icons/ti-eye";
import { TiEyeOff } from "../../../../public/icons/ti-eye-off";

interface PasswordInputProps {
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>; //TODO: Fix any type
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  // Even though we don't need the 'ref' we still need to pass it to the forwardRef
  // eslint-disable-next-line no-unused-vars
  ({ name, placeholder, register }, ref) => {
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    return (
      <>
        <InputGroup size="md">
          <Input
            {...register(name)}
            paddingEnd="4rem"
            type={show ? "text" : "password"}
            placeholder={placeholder || "Enter password"}
            autoComplete="on"
          />
          <InputRightElement mr="5px">
            {show ? (
              <TiEyeOff width="24px" height="24px" onClick={handleClick} />
            ) : (
              <TiEye width="24px" height="24px" onClick={handleClick} />
            )}
          </InputRightElement>
        </InputGroup>
      </>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
