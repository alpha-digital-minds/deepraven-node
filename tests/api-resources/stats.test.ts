// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DeepRaven from 'deepraven';
import { Response } from 'node-fetch';

const client = new DeepRaven({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource stats', () => {
  // Mock server tests are disabled
  test.skip('conversationsDaily', async () => {
    const responsePromise = client.stats.conversationsDaily();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('conversationsDaily: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.stats.conversationsDaily({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      DeepRaven.NotFoundError,
    );
  });

  // Mock server tests are disabled
  test.skip('overview', async () => {
    const responsePromise = client.stats.overview();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('overview: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.stats.overview({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      DeepRaven.NotFoundError,
    );
  });

  // Mock server tests are disabled
  test.skip('usage', async () => {
    const responsePromise = client.stats.usage();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('usage: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.stats.usage({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      DeepRaven.NotFoundError,
    );
  });
});
