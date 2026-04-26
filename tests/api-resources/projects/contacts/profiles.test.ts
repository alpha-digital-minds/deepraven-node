// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DeepRaven from 'deepraven';

const client = new DeepRaven({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource profiles', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.contacts.profiles.retrieve('contact_id', { project_id: 'project_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.projects.contacts.profiles.retrieve('contact_id', { project_id: 'project_id' });
  });

  // Mock server tests are disabled
  test.skip('compress: only required params', async () => {
    const responsePromise = client.projects.contacts.profiles.compress('contact_id', { project_id: 'project_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('compress: required and optional params', async () => {
    const response = await client.projects.contacts.profiles.compress('contact_id', { project_id: 'project_id' });
  });

  // Mock server tests are disabled
  test.skip('export: only required params', async () => {
    const responsePromise = client.projects.contacts.profiles.export('contact_id', { project_id: 'project_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('export: required and optional params', async () => {
    const response = await client.projects.contacts.profiles.export('contact_id', { project_id: 'project_id' });
  });

  // Mock server tests are disabled
  test.skip('extract: only required params', async () => {
    const responsePromise = client.projects.contacts.profiles.extract('contact_id', { project_id: 'project_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('extract: required and optional params', async () => {
    const response = await client.projects.contacts.profiles.extract('contact_id', { project_id: 'project_id', force: true });
  });

  // Mock server tests are disabled
  test.skip('extractSync: only required params', async () => {
    const responsePromise = client.projects.contacts.profiles.extractSync('contact_id', { project_id: 'project_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('extractSync: required and optional params', async () => {
    const response = await client.projects.contacts.profiles.extractSync('contact_id', { project_id: 'project_id', force: true });
  });

  // Mock server tests are disabled
  test.skip('status: only required params', async () => {
    const responsePromise = client.projects.contacts.profiles.status('contact_id', { project_id: 'project_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('status: required and optional params', async () => {
    const response = await client.projects.contacts.profiles.status('contact_id', { project_id: 'project_id' });
  });
});
