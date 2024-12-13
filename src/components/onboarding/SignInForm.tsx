import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Flex,
  Link,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

import { TiAlertTriangle } from "../../../public/icons";
import { PasswordInput } from "../../components/ui/forms/PasswordInput";
import { signIn } from "../../utils/http";

interface SignInFormInput {
  email: string;
  password: string;
}

function SignInForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInput>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const { mutate, error, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signIn,
    onSuccess: (data) => {
      try {
        // Save the access token and refresh token to local storage
        const accessToken = data?.data?.accessToken?.token;
        const refreshToken = data?.data?.refreshToken?.token;

        if (accessToken === undefined || refreshToken === undefined) {
          console.error("Access token or refresh token is undefined");
        } else {
          localStorage.setItem("swift-rfp-access-token", accessToken);
          localStorage.setItem("swift-rfp-refresh-token", refreshToken);

          // Redirect to the welcome page
          router.push("/");
        }
      } catch (error) {
        console.error(
          "An error occurred while saving the tokens to local storage",
          error
        );
      }
    },
    onError: (error) => {
      if (error.name === "TypeError") {
        error.message =
          "An error occurred while signing in please try again later.";
      } else if (
        error.message.toLowerCase().includes("password is too weak") ||
        error.message.toLowerCase().includes("user not found")
      ) {
        error.message = "Invalid email or password";
      }
    },
  });

  const onSubmit: SubmitHandler<SignInFormInput> = (data) => mutate(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="example@email.com"
            {...register("email", {
              required: "Your email is required",
              pattern: {
                value: /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/,
                message: "Please enter a valid email",
              },
            })}
            autoComplete="on"
          />
          {errors.email && (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.password} mb="0">
          <FormLabel>Password</FormLabel>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
            }}
            render={() => (
              <PasswordInput
                placeholder="Enter your password"
                name="password"
                register={register}
              />
            )}
          />
          {errors.password && (
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          )}
        </FormControl>

        <Box textAlign="right" mt="1">
          <Link
            as={NextLink}
            color="gray.neutral.500"
            href="/auth/forget-password"
            textDecoration="underline"
            fontWeight="600"
          >
            Forgot password?
          </Link>
        </Box>

        {isError && (
          <Flex alignItems="center">
            <TiAlertTriangle color="error.700" w="24px" h="24px" />
            <Text color="error.700" fontWeight="600" pl="2">
              {error.message}
            </Text>
          </Flex>
        )}

        <Button
          isLoading={isPending || isSuccess}
          loadingText="Signing in"
          type="submit"
          size="lg"
          w="100%"
          mt="24px"
        >
          Continue
        </Button>
      </form>
    </>
  );
}

export default SignInForm;
