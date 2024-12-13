"use client";

import Image from "next/image";
import {
  Heading,
  Text,
  Box,
  Flex,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import defaultInstitutionFavicon from "../../../../../public/images/default-institution-favicon.svg";
import {
  TiKey,
  TiMailForward,
  Ellipse69,
  TiAlertTriangle,
} from "../../../../../public/icons";
import { requestPasswordReset } from "../../../../utils/http";

interface ForgetPasswordFormInput {
  email: string;
}

function ForgetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordFormInput>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const { mutate, error, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["forget-password"],
    mutationFn: async (data: ForgetPasswordFormInput) =>
      requestPasswordReset(data),
    onError: (error) => {
      console.error(
        "An error occurred while sending the password reset",
        error
      );
      if (error.name === "TypeError") {
        error.message =
          "An error occurred while sending the password reset instruction please try again later.";
      }
    },
  });

  const onSubmit: SubmitHandler<ForgetPasswordFormInput> = (data) =>
    mutate(data);

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
            <Ellipse69
              w="13px"
              h="13px"
              position="absolute"
              top="8px"
              right="8px"
            />
            <TiMailForward w="24px" h="24px" color="white" />
          </Flex>
          <Heading as="h1" size="md" fontWeight="500" mt="27px">
            Check your email
          </Heading>
          <Text mt="4" mb="10">
            If your email is registered in our system, we will send you a link
            to reset your password. Please check your inbox, and if necessary,
            your spam or junk folder, for the reset link.
          </Text>
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
            <Heading as="h1" size="md" fontWeight="500" mt="27px">
              Forgot Your Password?
            </Heading>
            <Text mt="4" mb="10">
              Please enter your email to get the password reset instruction
            </Text>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="example@email.com"
                {...register("email", {
                  required: "Your email is required",
                  pattern: {
                    value:
                      /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/,
                    message: "Please enter a valid email",
                  },
                })}
                autoComplete="on"
              />
              {errors.email && (
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
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
              isLoading={isPending}
              type="submit"
              size="lg"
              w="100%"
              mt="24px"
            >
              Send
            </Button>
          </form>
        </>
      )}
    </Box>
  );
}

export default ForgetPasswordPage;
