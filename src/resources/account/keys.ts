// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Keys extends APIResource {
  /**
   * Create a new account-level API key. The raw key is returned ONCE and is never
   * stored — save it securely.
   */
  create(body: KeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<KeyCreateResponse> {
    return this._client.post('/api/v1/account/keys', { body, ...options });
  }

  /**
   * List Keys
   */
  list(options?: Core.RequestOptions): Core.APIPromise<KeyListResponse> {
    return this._client.get('/api/v1/account/keys', options);
  }

  /**
   * Revoke Key
   */
  delete(keyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/account/keys/${keyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface KeyCreateResponse {
  id: string;

  account_id: string;

  created_at: string;

  key: string;

  name: string;
}

export type KeyListResponse = Array<KeyListResponse.KeyListResponseItem>;

export namespace KeyListResponse {
  export interface KeyListResponseItem {
    id: string;

    account_id: string;

    created_at: string;

    name: string;

    last_used_at?: string | null;

    revoked_at?: string | null;
  }
}

export interface KeyCreateParams {
  name: string;
}

export declare namespace Keys {
  export {
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
  };
}
