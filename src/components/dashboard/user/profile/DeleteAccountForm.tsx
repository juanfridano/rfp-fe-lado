import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

interface DeletePasswordFormInput {
  firstName: string;
  lastName: string;
  email: string;
}

function DeletePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeletePasswordFormInput>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit: SubmitHandler<DeletePasswordFormInput> = (data) =>
    console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.firstName} mb="20px">
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            {...register("firstName", {
              required: "Your first name is required",
            })}
            autoComplete="on"
          />
          {errors.firstName && (
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.lastName} mb="20px">
          <FormLabel>
            Last Name{" "}
            <Text
              fontSize="sm"
              fontWeight="normal"
              fontStyle="italic"
              display="inline-block"
            >
              (optional)
            </Text>
          </FormLabel>
          <Input type="text" {...register("lastName")} autoComplete="on" />
          {errors.lastName && (
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb="20px">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...register("email", { required: "Your email is required" })}
            autoComplete="on"
          />
          {errors.email && (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          )}
        </FormControl>

        <Button type="submit" size="lg" w="100%">
          Invite
        </Button>
      </form>
    </>
  );
}

export default DeletePasswordForm;
