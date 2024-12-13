import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProfileCreation from "../../../app/(onboarding)/auth/(two-columns-layout)/profile-creation/page";

test("Last name field", async () => {
  const user = userEvent.setup();
  render(<ProfileCreation />);

  // Find the label for the last name input
  const lastNameLabel = screen.getByLabelText(/Last Name/i);
  expect(lastNameLabel).toBeInTheDocument();

  // Find the input for the last name
  const lastNameInput = screen.getByRole("textbox", { name: /Last Name/i });
  expect(lastNameInput).toBeInTheDocument();

  // Make sure the input is not empty after losing focus
  await user.type(lastNameInput, "John");
  await user.tab();
  expect(lastNameInput).toHaveValue("John");

  // Clear the input
  user.clear(lastNameInput);

  // Show the error message when the input is empty and loses focus
  user.type(lastNameInput, "John");
  user.clear(lastNameInput);
  const lastNameError = await screen.findByText(/Last Name is required/i);
  expect(lastNameError).toBeInTheDocument();

  user.clear(lastNameInput);

  // Show the error message when the input is empty and the form is submitted
  await user.type(lastNameInput, "John");
  await user.clear(lastNameInput);
  const submitButton = screen.getByRole("button", { name: /continue/i });
  await user.click(submitButton);

  const lastNameErrorAfterSubmit = await screen.findByText(
    /Last Name is required/i
  );
  expect(lastNameErrorAfterSubmit).toBeInTheDocument();
});
