"use client";
import { useState } from "react";
import {
  Avatar,
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  ButtonGroup,
  Flex,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

import ChangePasswordModal from "../../../../components/dashboard/user/profile/ChangePasswordModal";
import DeleteAccountModal from "../../../../components/dashboard/user/profile/DeleteAccountModal";

interface ProfileFormInput {
  email: string;
  jobTitle: string;
  department: string;
}

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const {
    isOpen: isChangePasswordModalOpen,
    onOpen: onOpenChangePasswordModal,
    onClose: onCloseChangePasswordModal,
  } = useDisclosure();
  const {
    isOpen: isDeleteAccountModalOpen,
    onOpen: onOpenDeleteAccountModal,
    onClose: onCloseDeleteAccountModal,
  } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInput>({
    mode: "onChange",
    defaultValues: {
      email: "Jesstknatput@gmail.com",
      jobTitle: "Jobname1",
      department: "Department1",
    },
  });

  const onSubmit: SubmitHandler<ProfileFormInput> = (data) => console.log(data);

  return (
    <Box px="85px" py="65px">
      <Box width="502px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex gap="29px" alignItems="center" pb="45px">
            <Avatar
              name="Ahmed Shaban"
              bgColor="#183454"
              color="white"
              boxSize="103px"
              fontSize="52px"
              fontWeight="bold"
            />
            <Box alignItems="center">
              <Heading
                as="h1"
                color="rgba(3, 10, 35, 0.80);"
                fontWeight="600"
                fontSize="30px"
                lineHeight="38px"
                letterSpacing="initial"
                pb="10px"
              >
                Jesst Knatput
              </Heading>
              {!isEditing && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
              )}
            </Box>
          </Flex>

          <FormControl
            isInvalid={!!errors.email}
            mb={isEditing ? "10px" : "24px"}
          >
            <Flex alignItems="center">
              {isEditing ? (
                <>
                  <FormLabel
                    color="gray.neutral.800"
                    fontSize="md"
                    fontWeight="600"
                    mb="0"
                    minW="139px"
                  >
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    {...register("email", {
                      required: "Your email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    autoComplete="on"
                  />
                </>
              ) : (
                <>
                  <Text minW="139px" color="gray.neutral.500" fontWeight="400">
                    Email
                  </Text>
                  <Text color="gray.neutral.800">Jesstknatput@gmail.com</Text>
                </>
              )}
            </Flex>
            {errors.email && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl
            isInvalid={!!errors.jobTitle}
            mb={isEditing ? "10px" : "24px"}
          >
            <Flex alignItems="center">
              {isEditing ? (
                <>
                  <FormLabel
                    color={isEditing ? "gray.neutral.800" : "gray.neutral.500"}
                    fontSize="md"
                    fontWeight={isEditing ? "600" : "400"}
                    mb="0"
                    minW="139px"
                  >
                    Job Title
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="Jobname1"
                    {...register("jobTitle", {
                      required: "Your job title is required",
                    })}
                  />
                </>
              ) : (
                <>
                  <Text minW="139px" color="gray.neutral.500" fontWeight="400">
                    Job Title
                  </Text>
                  <Text color="gray.neutral.800">Jobname1</Text>
                </>
              )}
            </Flex>
            {errors.jobTitle && (
              <FormErrorMessage>{errors.jobTitle?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.department}>
            <Flex alignItems="center">
              {isEditing ? (
                <>
                  <FormLabel
                    color={isEditing ? "gray.neutral.800" : "gray.neutral.500"}
                    fontSize="md"
                    fontWeight={isEditing ? "600" : "400"}
                    mb="0"
                    minW="139px"
                  >
                    Department
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="Department1"
                    {...register("department", {
                      required: "Your department is required",
                    })}
                  />
                </>
              ) : (
                <>
                  <Text minW="139px" color="gray.neutral.500" fontWeight="400">
                    Department
                  </Text>
                  <Text color="gray.neutral.800">Department1</Text>
                </>
              )}
            </Flex>
            {errors.department && (
              <FormErrorMessage>{errors.department?.message}</FormErrorMessage>
            )}
          </FormControl>

          <Flex>
            {isEditing && (
              <ButtonGroup gap="9px" ml="auto">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsEditing(false)}
                  minW="88px"
                >
                  Cancel
                </Button>
                <Button type="submit" size="sm" minW="88px">
                  Save
                </Button>
              </ButtonGroup>
            )}
          </Flex>
        </form>
      </Box>

      <Divider mt="59px" mb="55px" opacity="1" color="gray.neutral.200" />

      <Flex direction="column" alignItems="baseline" gap="6">
        <Button
          variant="link"
          fontSize="md"
          color="gray.neutral.800"
          onClick={onOpenChangePasswordModal}
        >
          Change Password
        </Button>

        <Button
          variant="link"
          fontSize="md"
          color="error.700"
          onClick={onOpenDeleteAccountModal}
        >
          Delete Account
        </Button>
      </Flex>

      <ChangePasswordModal
        isOpen={isChangePasswordModalOpen}
        onClose={onCloseChangePasswordModal}
      />
      <DeleteAccountModal
        isOpen={isDeleteAccountModalOpen}
        onClose={onCloseDeleteAccountModal}
      />
    </Box>
  );
}

export default Profile;
