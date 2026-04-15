// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Keys extends APIResource {
  /**
   * Create a new API key for a project. The raw key is returned ONCE in this
   * response and is never stored.
   */
  create(
    projectId: string,
    body: KeyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<KeyCreateResponse> {
    return this._client.post(`/api/v1/projects/${projectId}/keys`, { body, ...options });
  }

  /**
   * List Keys
   */
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<KeyListResponse> {
    return this._client.get(`/api/v1/projects/${projectId}/keys`, options);
  }

  /**
   * Revoke Key
   */
  delete(projectId: string, keyId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/projects/${projectId}/keys/${keyId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface KeyCreateResponse {
  id: string;

  created_at: string;

  key: string;

  name: string;

  project_id: string;
}

export type KeyListResponse = Array<KeyListResponse.KeyListResponseItem>;

export namespace KeyListResponse {
  export interface KeyListResponseItem {
    id: string;

    created_at: string;

    name: string;

    project_id: string;

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
