// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DeepRaven } from './index';

export abstract class APIResource {
  protected _client: DeepRaven;

  constructor(client: DeepRaven) {
    this._client = client;
  }
}
