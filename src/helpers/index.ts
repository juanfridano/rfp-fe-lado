export function evaluatePasswordStrength(password: string): number {
  // Very Strong: 16 or more characters with a mix of uppercase, lowercase, numbers, and symbols.
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{16,}$/.test(password)) {
    return 4;
  }

  // Strong: 12 or more characters including uppercase, lowercase letters, numbers, and at least one symbol.
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/.test(password)) {
    return 3;
  }

  // Moderate: 10 or more characters with a mix of uppercase and lowercase letters, at least one number, and at least one symbol.
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/.test(password)) {
    return 2;
  }

  // Weak: At least 8 characters including one alphabetical character and one number.
  if (/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password)) {
    return 1;
  }

  // Very Weak: At least one alphabetical character and a total length of 1 to 7 characters.
  if (/^(?=.*[a-zA-Z]).{1,7}$/.test(password)) {
    return 0;
  }

  // If none of the above conditions are met, it defaults to 0.
  return 0;
}
