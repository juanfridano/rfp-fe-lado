"use client";

import React from "react";

import { AuthOnboardingWrapper } from "../../../hocs/AuthOnboardingWrapper";

export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthOnboardingWrapper>{children}</AuthOnboardingWrapper>;
}
