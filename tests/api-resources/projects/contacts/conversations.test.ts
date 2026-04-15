// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DeepRaven from 'deepraven';

const client = new DeepRaven({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversations', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.contacts.conversations.create('contact_id', {
      project_id: 'project_id',
      messages: [{ content: 'content', role: 'role' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.projects.contacts.conversations.create('contact_id', {
      project_id: 'project_id',
      messages: [{ content: 'content', role: 'role' }],
      metadata: { foo: 'bar' },
    });
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.projects.contacts.conversations.list('contact_id', {
      project_id: 'project_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.projects.contacts.conversations.list('contact_id', {
      project_id: 'project_id',
      limit: 0,
    });
  });
});
