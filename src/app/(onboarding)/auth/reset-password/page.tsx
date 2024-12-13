"use client";

import Image from "next/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { PasswordInput } from "../../../../components/ui/forms/PasswordInput";
import { PasswordStrengthMeter } from "../../../../components/ui/forms";
import { evaluatePasswordStrength } from "../../../../helpers";
import { resetPassword } from "../../../../utils/http";
import { TiAlertTriangle, TiChecks, TiKey } from "../../../../../public/icons";
import defaultInstitutionFavicon from "../../../../../public/images/default-institution-favicon.svg";

interface ResetPasswordFormInput {
  email: string;
  password: string;
  confirmPassword: string;
  code: string;
}

function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email") ?? "";
  const confirmationCode = searchParams.get("code") ?? "";

  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormInput>({
    mode: "onChange",
    defaultValues: {
      email: userEmail,
      password: "",
      confirmPassword: "",
      code: confirmationCode,
    },
  });

  const router = useRouter();

  const { mutate, error, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: async (data: ResetPasswordFormInput) => {
      const { email, password, code } = data;

      return resetPassword({ email, password, code });
    },
    onError: (error) => {
      console.error("An error occurred while resetting the password", error);
      if (error.name === "TypeError") {
        error.message =
          "An error occurred while resetting the password please try again later.";
      }
    },
  });

  const watchPassword = watch("password");
  const passwordStrength = evaluatePasswordStrength(watchPassword);

  const onSubmit: SubmitHandler<ResetPasswordFormInput> = (data) =>
    mutate(data);

  if (!userEmail || !confirmationCode) {
    return (
      <Box w="511px" m="0 auto">
        <Box textAlign="center">
          <Flex justifyContent="center" my="47px">
            <Image src={defaultInstitutionFavicon} alt="Logo" />
          </Flex>
          <Flex
            bg="success.700"
            w="48px"
            h="48px"
            alignItems="center"
            justifyContent="center"
            m="0 auto"
            borderRadius="2px"
            position="relative"
          >
            <TiChecks w="24px" h="24px" color="white" />
          </Flex>
          <Heading as="h1" size="md" fontWeight="500" mt="27px">
            Something went wrong!
          </Heading>
          <Text mt="4" mb="10">
            Please request a new password reset link.
          </Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box w="511px" m="0 auto">
      {isSuccess ? (
        <Box textAlign="center">
          <Flex justifyContent="center" my="47px">
            <Image src={defaultInstitutionFavicon} alt="Logo" />
          </Flex>
          <Flex
            bg="success.700"
            w="48px"
            h="48px"
            alignItems="center"
            justifyContent="center"
            m="0 auto"
            borderRadius="2px"
            position="relative"
          >
            <TiChecks w="24px" h="24px" color="white" />
          </Flex>
          <Heading as="h1" size="md" fontWeight="500" mt="27px">
            Your password has been reset
          </Heading>
          <Text mt="4" mb="10">
            Please login with your new password
          </Text>
          <Button
            size="lg"
            w="100%"
            mt="24px"
            onClick={() => router.push("/auth/sign-in")}
          >
            Login
          </Button>
        </Box>
      ) : (
        <>
          <Box textAlign="center">
            <Flex justifyContent="center" my="47px">
              <Box pos="relative" w="36px" h="36px">
                <Image src={defaultInstitutionFavicon} alt="Logo" />
              </Box>
            </Flex>
            <Flex
              bg="yellow.700"
              w="48px"
              h="48px"
              alignItems="center"
              justifyContent="center"
              m="0 auto"
              borderRadius="2px"
            >
              <TiKey w="24px" h="24px" color="white" />
            </Flex>
            <Heading as="h1" size="md" fontWeight="500" mt="27px" mb="10">
              Set new password
            </Heading>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.email}>
              <Input
                type="hidden"
                {...register("email", { required: "Your email is required" })}
              />
              {errors.email && (
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mb="12px" isInvalid={!!errors.password}>
              <FormLabel>New Password</FormLabel>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Your new password is required",
                  validate: {
                    strength: () => passwordStrength >= 2,
                  },
                }}
                render={() => (
                  <PasswordInput name="password" register={register} />
                )}
              />
              {errors.password && (
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              )}

              <PasswordStrengthMeter
                password={watchPassword}
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
                    value === watchPassword || "The passwords do not match",
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

            <FormControl isInvalid={!!errors.code}>
              <Input
                type="hidden"
                {...register("code", {
                  required: "Your confirmation code is required",
                })}
              />
              {errors.code && (
                <FormErrorMessage>{errors.code?.message}</FormErrorMessage>
              )}
            </FormControl>

            {isError && (
              <Flex alignItems="center">
                <TiAlertTriangle color="error.800" w="24px" h="24px" />
                <Text color="error.800" pl="2">
                  {error.message}
                </Text>
              </Flex>
            )}

            <Button
              isLoading={isPending || isSuccess}
              type="submit"
              size="lg"
              w="100%"
              mt="24px"
            >
              Set New Password
            </Button>
          </form>
        </>
      )}
    </Box>
  );
}

export default ResetPasswordPage;
