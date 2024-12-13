import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";

import { TiAlertTriangle } from "../../../public/icons";
import { PasswordInput } from "../../components/ui/forms/PasswordInput";
import { PasswordStrengthMeter } from "../../components/ui/forms";
import { evaluatePasswordStrength } from "../../helpers";
import { register as registerQuery } from "../../utils/http";

interface ProfileCreationFormInput {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  password: string;
  confirmPassword: string;
}

function ProfileCreationForm() {
  const searchParams = useSearchParams();
  const userEmail = searchParams.get("email") ?? "";

  const {
    register,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileCreationFormInput>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: userEmail,
      jobTitle: "",
      department: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  const { mutate, error, isPending, isError, isSuccess } = useMutation({
    mutationKey: ["profile-creation"],
    mutationFn: async (data: ProfileCreationFormInput) => {
      const { firstName, lastName, email, jobTitle, department, password } =
        data;

      return registerQuery({
        firstName,
        lastName,
        email,
        jobTitle,
        department,
        password,
      });
    },
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
          router.push("/welcome");
        }
      } catch (error) {
        console.error(
          "An error occurred while saving the tokens to local storage",
          error
        );
      }
    },
    onError: (error) => {
      console.error("An error occurred while creating the profile", error);
      if (error.name === "TypeError") {
        error.message =
          "An error occurred while creating the profile please try again later.";
      }
    },
  });

  const watchPassword = watch("password");
  const passwordStrength = evaluatePasswordStrength(watchPassword);

  const onSubmit: SubmitHandler<ProfileCreationFormInput> = (data) =>
    mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="3">
        <FormControl isInvalid={!!errors.firstName} flex="1">
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            placeholder="First Name"
            {...register("firstName", {
              required: "Your first name is required",
            })}
            autoComplete="on"
          />
          {errors.firstName && (
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.lastName} flex="1">
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: "Your last name is required",
            })}
            autoComplete="on"
          />
          {errors.lastName && (
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          )}
        </FormControl>
      </Flex>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          disabled
          {...register("email", {
            pattern: {
              value: /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && (
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.jobTitle}>
        <FormLabel>Job Title</FormLabel>
        <Input
          type="text"
          placeholder="Your job title"
          {...register("jobTitle", {
            required: "Your job title is required",
          })}
        />
        {errors.jobTitle && (
          <FormErrorMessage>{errors.jobTitle?.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.department}>
        <FormLabel>Department</FormLabel>
        <Input
          type="text"
          placeholder="Department"
          {...register("department", {
            required: "Department is required",
          })}
        />
        {errors.department && (
          <FormErrorMessage>{errors.department?.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl mb="12px" isInvalid={!!errors.password}>
        <FormLabel>Password</FormLabel>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            validate: {
              strength: () => passwordStrength >= 2,
            },
          }}
          render={() => <PasswordInput name="password" register={register} />}
        />
        {errors.password && (
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        )}

        <PasswordStrengthMeter
          password={watchPassword}
          strength={passwordStrength}
        />

        <FormHelperText mt="12px" pl="0">
          At least 8 characters with uppercase, lowercase, numbers, and symbols.
        </FormHelperText>
      </FormControl>

      <FormControl isInvalid={!!errors.confirmPassword}>
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
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
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
        loadingText="Creating your profile"
        type="submit"
        size="lg"
        w="100%"
        mt="14px"
        mb="33px"
      >
        Continue
      </Button>
    </form>
  );
}

export default ProfileCreationForm;
