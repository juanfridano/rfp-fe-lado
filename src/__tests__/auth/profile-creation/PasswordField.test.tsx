import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProfileCreation from "../../../app/(onboarding)/auth/(two-columns-layout)/profile-creation/page";

test("Password field", async () => {
  const user = userEvent.setup();
  render(<ProfileCreation />);

  // Find the label for the password input
  const firstNameLabel = screen.getByLabelText(/password/i);
  expect(firstNameLabel).toBeInTheDocument();

  // Find the input for the password
  const passwordInput = screen.getByPlaceholderText(/enter password/i);
  expect(passwordInput).toBeInTheDocument();

  // Make sure the input is not empty after losing focus
  await user.type(passwordInput, "John");
  await user.tab();
  expect(passwordInput).toHaveValue("John");

  // Clear the input
  user.clear(passwordInput);

  // Show the error message when the input is empty and loses focus
  user.type(passwordInput, "John");
  user.clear(passwordInput);
  const passwordError = await screen.findByText(/password is required/i);
  expect(passwordError).toBeInTheDocument();

  user.clear(passwordInput);

  // Show the error message when the input is empty and the form is submitted
  await user.type(passwordInput, "John");
  await user.clear(passwordInput);
  const submitButton = screen.getByRole("button", { name: /continue/i });
  await user.click(submitButton);

  const passwordErrorAfterSubmit = await screen.findByText(
    /password is required/i
  );
  expect(passwordErrorAfterSubmit).toBeInTheDocument();
});
