import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Flex,
  FormHelperText,
} from "@chakra-ui/react";

import { PasswordInput } from "../../../../components/ui/forms/PasswordInput";
import { evaluatePasswordStrength } from "../../../../helpers";
import { PasswordStrengthMeter } from "../../../../components/ui/forms";
import { TiAlertTriangle } from "../../../../../public/icons";

interface ChangePasswordFormInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<ChangePasswordFormInput>({
    mode: "onChange",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const watchNewPassword = watch("newPassword");
  const passwordStrength = evaluatePasswordStrength(watchNewPassword);

  const onSubmit: SubmitHandler<ChangePasswordFormInput> = (data) =>
    console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.currentPassword}>
          <FormLabel>Current Password</FormLabel>
          <Controller
            name="currentPassword"
            control={control}
            rules={{
              required: "Your current password is required",
            }}
            render={({ field }) => (
              <PasswordInput
                placeholder="Current Password"
                register={register}
                {...field}
              />
            )}
          />
          {errors.currentPassword && (
            <FormErrorMessage>
              {errors.currentPassword?.message}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl mb="12px" isInvalid={!!errors.newPassword}>
          <FormLabel>New Password</FormLabel>
          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: "Your new password is required",
              validate: {
                strength: () => passwordStrength >= 2,
              },
            }}
            render={() => <PasswordInput name="password" register={register} />}
          />
          {errors.newPassword && (
            <FormErrorMessage>{errors.newPassword?.message}</FormErrorMessage>
          )}

          <PasswordStrengthMeter
            password={watchNewPassword}
            strength={passwordStrength}
          />

          <FormHelperText mt="12px" pl="0">
            At least 8 characters with uppercase, lowercase, numbers, and
            symbols.
          </FormHelperText>
        </FormControl>

        <FormControl isInvalid={!!errors.confirmPassword}>
          <FormLabel>Confirm new password</FormLabel>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              validate: (value) =>
                value === watchNewPassword || "The passwords do not match",
              required: "Please confirm your password",
            }}
            render={({ field }) => (
              <PasswordInput
                placeholder="Confirm Password"
                register={register}
                {...field}
              />
            )}
          />
          {errors.confirmPassword && (
            <FormErrorMessage>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
          )}
        </FormControl>

        <Flex alignItems="center" mb="6">
          <TiAlertTriangle color="error.800" w="24px" h="24px" />
          <Text color="error.800" pl="2">
            ddd
          </Text>
        </Flex>

        <Button type="submit" size="lg" w="100%">
          Update Password
        </Button>
      </form>
    </>
  );
}

export default ChangePasswordForm;
