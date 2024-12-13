import { QueryClient } from "@tanstack/react-query";

import {
  RegisterUserDto,
  LoginUserDto,
  ForgotPasswordDto,
  ResetPasswordDto,
} from "../types";

export const queryClient = new QueryClient();
const API_BASE_URL =
  "https://31e4tiradl.execute-api.ap-southeast-2.amazonaws.com";
const API_ENV = "develop";
const API_VERSION = "v1";

export async function register(data: RegisterUserDto) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${API_ENV}/${API_VERSION}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody.message ||
        `An error occurred while creating the profile please try again later.`;
      const error = new Error(errorMessage);
      throw error;
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function signIn(data: LoginUserDto) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${API_ENV}/${API_VERSION}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody.message ||
        `An error occurred while signing in please try again later.`;
      const error = new Error(errorMessage);
      throw error;
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}

// Helper function to refresh tokens
async function refreshToken() {
  const refreshToken = localStorage.getItem("swift-rfp-refresh-token");
  if (!refreshToken) {
    throw new Error("Refresh token is not available");
  }

  const response = await fetch(
    `${API_BASE_URL}/${API_ENV}/${API_VERSION}/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to refresh token");
  }

  const data = await response.json();
  localStorage.setItem("swift-rfp-access-token", data.data.accessToken.token);

  return data.data.accessToken.token; // Return the new access token
}

export async function authMe() {
  let accessToken = localStorage.getItem("swift-rfp-access-token");

  if (!accessToken) {
    throw new Error("Access token is not available");
  }

  try {
    let response = await fetch(
      `${API_BASE_URL}/${API_ENV}/${API_VERSION}/auth/me`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // If access token is expired or invalid, try to refresh it
    if (!response.ok) {
      accessToken = await refreshToken(); // Refresh the token and get a new access token

      // Retry fetching the profile with the new access token
      response = await fetch(
        `${API_BASE_URL}/${API_ENV}/${API_VERSION}/auth/me`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch profile with new access token");
      }
    }

    return await response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function requestPasswordReset(data: ForgotPasswordDto) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${API_ENV}/${API_VERSION}/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody.message ||
        `An error occurred while requesting a password reset please try again later.`;
      const error = new Error(errorMessage);
      throw error;
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export async function resetPassword(data: ResetPasswordDto) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/${API_ENV}/${API_VERSION}/auth/confirm-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody.message ||
        `An error occurred while resetting the password please try again later.`;
      const error = new Error(errorMessage);
      throw error;
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
