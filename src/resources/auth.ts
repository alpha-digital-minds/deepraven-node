// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Auth extends APIResource {
  /**
   * Authenticate with email + password and return a Supabase JWT.
   */
  login(body: AuthLoginParams, options?: Core.RequestOptions): Core.APIPromise<AuthLoginResponse> {
    return this._client.post('/api/v1/auth/login', { body, ...options });
  }

  /**
   * Exchange a refresh token for a new access token.
   */
  refresh(body: AuthRefreshParams, options?: Core.RequestOptions): Core.APIPromise<AuthRefreshResponse> {
    return this._client.post('/api/v1/auth/refresh', { body, ...options });
  }

  /**
   * Create a new account. Supabase sends a confirmation email. If email confirmation
   * is disabled in Supabase, a session is returned immediately.
   */
  register(body: AuthRegisterParams, options?: Core.RequestOptions): Core.APIPromise<AuthRegisterResponse> {
    return this._client.post('/api/v1/auth/register', { body, ...options });
  }

  /**
   * Resend the signup confirmation OTP to the given email address.
   */
  resendOtp(body: AuthResendOtpParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/api/v1/auth/resend-otp', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Send a password reset email. Supabase emails a link that points back to GET
   * /auth/confirm?token_hash=...&type=recovery
   */
  resetPassword(body: AuthResetPasswordParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/api/v1/auth/reset-password', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Set a new password using the access token obtained from the recovery callback.
   * Call this after the user has been redirected to /auth/confirm?type=recovery and
   * the dashboard has extracted the access_token from the URL fragment.
   */
  updatePassword(
    body: AuthUpdatePasswordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthUpdatePasswordResponse> {
    return this._client.post('/api/v1/auth/update-password', { body, ...options });
  }

  /**
   * Verify the 6-digit OTP code sent to the user's email during signup. Returns a
   * full session on success.
   */
  verifyOtp(
    body: AuthVerifyOtpParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthVerifyOtpResponse> {
    return this._client.post('/api/v1/auth/verify-otp', { body, ...options });
  }
}

export interface AuthLoginResponse {
  access_token: string;

  expires_in?: number | null;

  refresh_token?: string | null;

  token_type?: string;
}

export interface AuthRefreshResponse {
  access_token: string;

  expires_in?: number | null;

  refresh_token?: string | null;

  token_type?: string;
}

export interface AuthRegisterResponse {
  access_token: string;

  expires_in?: number | null;

  refresh_token?: string | null;

  token_type?: string;
}

export interface AuthUpdatePasswordResponse {
  access_token: string;

  expires_in?: number | null;

  refresh_token?: string | null;

  token_type?: string;
}

export interface AuthVerifyOtpResponse {
  access_token: string;

  expires_in?: number | null;

  refresh_token?: string | null;

  token_type?: string;
}

export interface AuthLoginParams {
  email: string;

  password: string;
}

export interface AuthRefreshParams {
  refresh_token: string;
}

export interface AuthRegisterParams {
  email: string;

  password: string;

  name?: string | null;
}

export interface AuthResendOtpParams {
  email: string;
}

export interface AuthResetPasswordParams {
  email: string;
}

export interface AuthUpdatePasswordParams {
  access_token: string;

  password: string;
}

export interface AuthVerifyOtpParams {
  token: string;

  email: string;
}

export declare namespace Auth {
  export {
    type AuthLoginResponse as AuthLoginResponse,
    type AuthRefreshResponse as AuthRefreshResponse,
    type AuthRegisterResponse as AuthRegisterResponse,
    type AuthUpdatePasswordResponse as AuthUpdatePasswordResponse,
    type AuthVerifyOtpResponse as AuthVerifyOtpResponse,
    type AuthLoginParams as AuthLoginParams,
    type AuthRefreshParams as AuthRefreshParams,
    type AuthRegisterParams as AuthRegisterParams,
    type AuthResendOtpParams as AuthResendOtpParams,
    type AuthResetPasswordParams as AuthResetPasswordParams,
    type AuthUpdatePasswordParams as AuthUpdatePasswordParams,
    type AuthVerifyOtpParams as AuthVerifyOtpParams,
  };
}
