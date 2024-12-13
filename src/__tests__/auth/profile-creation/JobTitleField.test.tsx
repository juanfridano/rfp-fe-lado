import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ProfileCreation from "../../../app/(onboarding)/auth/(two-columns-layout)/profile-creation/page";

test("Job title field", async () => {
  const user = userEvent.setup();
  render(<ProfileCreation />);

  // Find the label for the job title input
  const jobTitleLabel = screen.getByLabelText(/job title/i);
  expect(jobTitleLabel).toBeInTheDocument();

  // Find the input for the job title
  const jobTitleInput = screen.getByRole("textbox", { name: /job title/i });
  expect(jobTitleInput).toBeInTheDocument();

  // Make sure the input is not empty after losing focus
  await user.type(jobTitleInput, "John");
  await user.tab();
  expect(jobTitleInput).toHaveValue("John");

  // Clear the input
  user.clear(jobTitleInput);

  // Show the error message when the input is empty and loses focus
  user.type(jobTitleInput, "John");
  user.clear(jobTitleInput);
  const jobTitleError = await screen.findByText(/job title is required/i);
  expect(jobTitleError).toBeInTheDocument();

  user.clear(jobTitleInput);

  // Show the error message when the input is empty and the form is submitted
  await user.type(jobTitleInput, "John");
  await user.clear(jobTitleInput);
  const submitButton = screen.getByRole("button", { name: /continue/i });
  await user.click(submitButton);

  const jobTitleErrorAfterSubmit = await screen.findByText(
    /job title is required/i
  );
  expect(jobTitleErrorAfterSubmit).toBeInTheDocument();
});
