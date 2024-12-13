import { useForm, SubmitHandler } from "react-hook-form";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

interface RenameDocumentFormInput {
  documentTitle: string;
}

export function RenameDocument() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RenameDocumentFormInput>({
    mode: "onChange",
    defaultValues: {
      documentTitle: "",
    },
  });

  const onSubmit: SubmitHandler<RenameDocumentFormInput> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.documentTitle} mb="0">
        <FormLabel>Document name</FormLabel>
        <Input
          type="text"
          {...register("documentTitle", {
            required: "Document name is required",
          })}
          autoComplete="on"
        />
        {errors.documentTitle && (
          <FormErrorMessage>{errors.documentTitle?.message}</FormErrorMessage>
        )}
      </FormControl>
    </form>
  );
}
