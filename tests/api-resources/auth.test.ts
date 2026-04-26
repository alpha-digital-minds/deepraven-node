// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DeepRaven from 'deepraven';

const client = new DeepRaven({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource auth', () => {
  // Mock server tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.auth.login({ email: 'email', password: 'password' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.auth.login({ email: 'email', password: 'password' });
  });

  // Mock server tests are disabled
  test.skip('refresh: only required params', async () => {
    const responsePromise = client.auth.refresh({ refresh_token: 'refresh_token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('refresh: required and optional params', async () => {
    const response = await client.auth.refresh({ refresh_token: 'refresh_token' });
  });

  // Mock server tests are disabled
  test.skip('register: only required params', async () => {
    const responsePromise = client.auth.register({ email: 'email', password: 'password' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('register: required and optional params', async () => {
    const response = await client.auth.register({
    email: 'email',
    password: 'password',
    name: 'name',
  });
  });

  // Mock server tests are disabled
  test.skip('resendOtp: only required params', async () => {
    const responsePromise = client.auth.resendOtp({ email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resendOtp: required and optional params', async () => {
    const response = await client.auth.resendOtp({ email: 'email' });
  });

  // Mock server tests are disabled
  test.skip('resetPassword: only required params', async () => {
    const responsePromise = client.auth.resetPassword({ email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resetPassword: required and optional params', async () => {
    const response = await client.auth.resetPassword({ email: 'email' });
  });

  // Mock server tests are disabled
  test.skip('updatePassword: only required params', async () => {
    const responsePromise = client.auth.updatePassword({ access_token: 'access_token', password: 'password' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updatePassword: required and optional params', async () => {
    const response = await client.auth.updatePassword({ access_token: 'access_token', password: 'password' });
  });

  // Mock server tests are disabled
  test.skip('verifyOtp: only required params', async () => {
    const responsePromise = client.auth.verifyOtp({ token: 'token', email: 'email' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verifyOtp: required and optional params', async () => {
    const response = await client.auth.verifyOtp({ token: 'token', email: 'email' });
  });
});
