// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as KeysAPI from './keys';
import { KeyCreateParams, KeyCreateResponse, KeyListResponse, Keys } from './keys';
import * as ContactsAPI from './contacts/contacts';
import { ContactListResponse, ContactRetrieveResponse, Contacts } from './contacts/contacts';

export class Projects extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);

  /**
   * Create Project
   */
  create(body: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProjectCreateResponse> {
    return this._client.post('/api/v1/projects', { body, ...options });
  }

  /**
   * Get Project
   */
  retrieve(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ProjectRetrieveResponse> {
    return this._client.get(`/api/v1/projects/${projectId}`, options);
  }

  /**
   * Update Project
   */
  update(
    projectId: string,
    body: ProjectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProjectUpdateResponse> {
    return this._client.patch(`/api/v1/projects/${projectId}`, { body, ...options });
  }

  /**
   * List Projects
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProjectListResponse> {
    return this._client.get('/api/v1/projects', options);
  }

  /**
   * Delete Project
   */
  delete(projectId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/projects/${projectId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ProjectCreateResponse {
  id: string;

  account_id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export interface ProjectRetrieveResponse {
  id: string;

  account_id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export interface ProjectUpdateResponse {
  id: string;

  account_id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export type ProjectListResponse = Array<ProjectListResponse.ProjectListResponseItem>;

export namespace ProjectListResponse {
  export interface ProjectListResponseItem {
    id: string;

    account_id: string;

    created_at: string;

    name: string;

    updated_at: string;

    description?: string | null;
  }
}

export interface ProjectCreateParams {
  name: string;

  description?: string | null;
}

export interface ProjectUpdateParams {
  description?: string | null;

  name?: string | null;
}

Projects.Keys = Keys;
Projects.Contacts = Contacts;

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectUpdateResponse as ProjectUpdateResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };

  export {
    Keys as Keys,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
  };

  export {
    Contacts as Contacts,
    type ContactRetrieveResponse as ContactRetrieveResponse,
    type ContactListResponse as ContactListResponse,
  };
}
