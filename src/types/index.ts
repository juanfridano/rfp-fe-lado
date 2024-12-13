export interface RegisterUserDto {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  department: string;
  password: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface ResetPasswordDto {
  email: string;
  password: string;
  code: string;
}
