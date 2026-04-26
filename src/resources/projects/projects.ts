// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as KeysAPI from './keys';
import { KeyCreateParams, KeyCreateResponse, KeyDeleteParams, KeyListResponse, Keys } from './keys';
import * as ContactsAPI from './contacts/contacts';
import { ContactDeleteParams, ContactListResponse, ContactRetrieveParams, ContactRetrieveResponse, Contacts } from './contacts/contacts';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Projects extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  contacts: ContactsAPI.Contacts = new ContactsAPI.Contacts(this._client);

  /**
   * Create Project
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.post('/api/v1/projects', { body, ...options, __security: {  } });
  }

  /**
   * Get Project
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get(path`/api/v1/projects/${projectID}`, { ...options, __security: {  } });
  }

  /**
   * Update Project
   */
  update(projectID: string, body: ProjectUpdateParams, options?: RequestOptions): APIPromise<ProjectUpdateResponse> {
    return this._client.patch(path`/api/v1/projects/${projectID}`, { body, ...options, __security: {  } });
  }

  /**
   * List Projects
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/api/v1/projects', { ...options, __security: {  } });
  }

  /**
   * Delete Project
   */
  delete(projectID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v1/projects/${projectID}`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]), __security: {  } });
  }

  /**
   * Download all contact profiles for a project as a single JSON file.
   */
  exportProfiles(projectID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/projects/${projectID}/profiles/export`, { ...options, __security: {  } });
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

export type ProjectListResponse = Array<ProjectListResponse.ProjectListResponseItem>

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

export type ProjectExportProfilesResponse = unknown

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
    type ProjectExportProfilesResponse as ProjectExportProfilesResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams
  };

  export {
    Keys as Keys,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
    type KeyDeleteParams as KeyDeleteParams
  };

  export {
    Contacts as Contacts,
    type ContactRetrieveResponse as ContactRetrieveResponse,
    type ContactListResponse as ContactListResponse,
    type ContactRetrieveParams as ContactRetrieveParams,
    type ContactDeleteParams as ContactDeleteParams
  };
}
