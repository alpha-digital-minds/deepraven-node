// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DeepRaven from 'deepraven';
import { Response } from 'node-fetch';

const client = new DeepRaven({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profiles', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.projects.contacts.profiles.retrieve('project_id', 'contact_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.contacts.profiles.retrieve('project_id', 'contact_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(DeepRaven.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('deleteContact', async () => {
    const responsePromise = client.projects.contacts.profiles.deleteContact('project_id', 'contact_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteContact: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.contacts.profiles.deleteContact('project_id', 'contact_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(DeepRaven.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('extract', async () => {
    const responsePromise = client.projects.contacts.profiles.extract('project_id', 'contact_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('extract: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.contacts.profiles.extract('project_id', 'contact_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(DeepRaven.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('extract: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.contacts.profiles.extract(
        'project_id',
        'contact_id',
        { force: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DeepRaven.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('extractSync', async () => {
    const responsePromise = client.projects.contacts.profiles.extractSync('project_id', 'contact_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('extractSync: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.contacts.profiles.extractSync('project_id', 'contact_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(DeepRaven.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('extractSync: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.contacts.profiles.extractSync(
        'project_id',
        'contact_id',
        { force: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DeepRaven.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('status', async () => {
    const responsePromise = client.projects.contacts.profiles.status('project_id', 'contact_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('status: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.contacts.profiles.status('project_id', 'contact_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(DeepRaven.NotFoundError);
  });
});
