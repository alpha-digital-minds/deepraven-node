// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Create a new API key for a project. The raw key is returned ONCE in this
   * response and is never stored.
   */
  create(projectID: string, body: KeyCreateParams, options?: RequestOptions): APIPromise<KeyCreateResponse> {
    return this._client.post(path`/api/v1/projects/${projectID}/keys`, { body, ...options, __security: {} });
  }

  /**
   * List Keys
   */
  list(projectID: string, options?: RequestOptions): APIPromise<KeyListResponse> {
    return this._client.get(path`/api/v1/projects/${projectID}/keys`, { ...options, __security: {} });
  }

  /**
   * Revoke Key
   */
  delete(keyID: string, params: KeyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { project_id } = params;
    return this._client.delete(path`/api/v1/projects/${project_id}/keys/${keyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
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

export interface KeyDeleteParams {
  project_id: string;
}

export declare namespace Keys {
  export {
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
    type KeyDeleteParams as KeyDeleteParams,
  };
}
