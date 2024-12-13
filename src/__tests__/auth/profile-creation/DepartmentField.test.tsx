import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProfileCreation from "../../../app/(onboarding)/auth/(two-columns-layout)/profile-creation/page";

test("Department field", async () => {
  const user = userEvent.setup();
  render(<ProfileCreation />);

  // Find the label for the department input
  const departmentLabel = screen.getByLabelText(/Department/i);
  expect(departmentLabel).toBeInTheDocument();

  // Find the input for the department
  const departmentInput = screen.getByRole("textbox", { name: /Department/i });
  expect(departmentInput).toBeInTheDocument();

  // Make sure the input is not empty after losing focus
  await user.type(departmentInput, "John");
  await user.tab();
  expect(departmentInput).toHaveValue("John");

  // Clear the input
  user.clear(departmentInput);

  // Show the error message when the input is empty and loses focus
  user.type(departmentInput, "John");
  user.clear(departmentInput);
  const departmentError = await screen.findByText(/department is required/i);
  expect(departmentError).toBeInTheDocument();

  user.clear(departmentInput);

  // Show the error message when the input is empty and the form is submitted
  await user.type(departmentInput, "John");
  await user.clear(departmentInput);
  const submitButton = screen.getByRole("button", { name: /continue/i });
  await user.click(submitButton);

  const departmentErrorAfterSubmit = await screen.findByText(
    /Department is required/i
  );
  expect(departmentErrorAfterSubmit).toBeInTheDocument();
});
