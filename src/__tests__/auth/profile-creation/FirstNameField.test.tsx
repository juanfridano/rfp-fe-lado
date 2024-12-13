import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProfileCreation from "../../../app/(onboarding)/auth/(two-columns-layout)/profile-creation/page";

test("First name field", async () => {
  const user = userEvent.setup();
  render(<ProfileCreation />);

  // Find the label for the first name input
  const firstNameLabel = screen.getByLabelText(/First Name/i);
  expect(firstNameLabel).toBeInTheDocument();

  // Find the input for the first name
  const firstNameInput = screen.getByRole("textbox", { name: /First Name/i });
  expect(firstNameInput).toBeInTheDocument();

  // Make sure the input is not empty after losing focus
  await user.type(firstNameInput, "John");
  await user.tab();
  expect(firstNameInput).toHaveValue("John");

  // Clear the input
  user.clear(firstNameInput);

  // Show the error message when the input is empty and loses focus
  user.type(firstNameInput, "John");
  user.clear(firstNameInput);
  const firstNameError = await screen.findByText(/First Name is required/i);
  expect(firstNameError).toBeInTheDocument();

  user.clear(firstNameInput);

  // Show the error message when the input is empty and the form is submitted
  await user.type(firstNameInput, "John");
  await user.clear(firstNameInput);
  const submitButton = screen.getByRole("button", { name: /continue/i });
  await user.click(submitButton);

  const firstNameErrorAfterSubmit = await screen.findByText(
    /First Name is required/i
  );
  expect(firstNameErrorAfterSubmit).toBeInTheDocument();
});
