// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Profiles extends APIResource {
  /**
   * Return the current profile for a contact. Creates an empty one if new.
   */
  retrieve(
    contactID: string,
    params: ProfileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ProfileRetrieveResponse> {
    const { project_id } = params;
    return this._client.get(path`/api/v1/projects/${project_id}/contacts/${contactID}/profile`, {
      ...options,
      __security: {},
    });
  }

  /**
   * Run compression on the current profile — trim bloat, newer wins. Safe to call at
   * any time; intended to be triggered manually or by the daily scheduler.
   */
  compress(
    contactID: string,
    params: ProfileCompressParams,
    options?: RequestOptions,
  ): APIPromise<ProfileCompressResponse> {
    const { project_id } = params;
    return this._client.post(path`/api/v1/projects/${project_id}/contacts/${contactID}/profile/compress`, {
      ...options,
      __security: {},
    });
  }

  /**
   * Download a single contact's profile as a JSON file.
   */
  export(contactID: string, params: ProfileExportParams, options?: RequestOptions): APIPromise<unknown> {
    const { project_id } = params;
    return this._client.get(path`/api/v1/projects/${project_id}/contacts/${contactID}/profile/export`, {
      ...options,
      __security: {},
    });
  }

  /**
   * Trigger LLM profile extraction in the background. Returns immediately.
   *
   * - **force=false** (default): only processes new unprocessed conversations.
   * - **force=true**: reprocesses ALL conversations from scratch, fully overwrites
   *   the profile.
   */
  extract(
    contactID: string,
    params: ProfileExtractParams,
    options?: RequestOptions,
  ): APIPromise<ProfileExtractResponse> {
    const { project_id, force } = params;
    return this._client.post(path`/api/v1/projects/${project_id}/contacts/${contactID}/profile/extract`, {
      query: { force },
      ...options,
      __security: {},
    });
  }

  /**
   * Same as /extract but synchronous — blocks until done and returns the updated
   * profile.
   */
  extractSync(
    contactID: string,
    params: ProfileExtractSyncParams,
    options?: RequestOptions,
  ): APIPromise<ProfileExtractSyncResponse> {
    const { project_id, force } = params;
    return this._client.post(
      path`/api/v1/projects/${project_id}/contacts/${contactID}/profile/extract/sync`,
      { query: { force }, ...options, __security: {} },
    );
  }

  /**
   * Check whether profile extraction is currently running for this contact.
   */
  status(
    contactID: string,
    params: ProfileStatusParams,
    options?: RequestOptions,
  ): APIPromise<ProfileStatusResponse> {
    const { project_id } = params;
    return this._client.get(path`/api/v1/projects/${project_id}/contacts/${contactID}/profile/status`, {
      ...options,
      __security: {},
    });
  }
}

export interface ProfileRetrieveResponse {
  user_id: string;

  created_at?: string;

  personal?: ProfileRetrieveResponse.Personal;

  preferences?: ProfileRetrieveResponse.Preferences;

  relationship?: ProfileRetrieveResponse.Relationship;

  relatives?: Array<ProfileRetrieveResponse.Relative>;

  sales?: ProfileRetrieveResponse.Sales;

  updated_at?: string;
}

export namespace ProfileRetrieveResponse {
  export interface Personal {
    company?: string;

    delivery_address?: string;

    gender?: string;

    location?: string;

    name?: string;

    phone?: string;

    role?: string;
  }

  export interface Preferences {
    best_contact_channel?: string;

    communication_style?: string;

    languages?: Array<string>;
  }

  export interface Relationship {
    last_contact_date?: string;

    personal_details?: Array<string>;

    status?: string;
  }

  export interface Relative {
    age?: string;

    gender?: string;

    name?: string;

    notes?: string;

    preferences?: Array<string>;

    relation?: string;

    sizes?: { [key: string]: string };
  }

  export interface Sales {
    budget_range?: string;

    buying_persona?: string;

    buying_triggers?: Array<string>;

    current_needs?: Array<string>;

    objections_raised?: Array<string>;

    pain_points?: Array<string>;

    purchase_history?: Array<string>;
  }
}

export interface ProfileCompressResponse {
  user_id: string;

  created_at?: string;

  personal?: ProfileCompressResponse.Personal;

  preferences?: ProfileCompressResponse.Preferences;

  relationship?: ProfileCompressResponse.Relationship;

  relatives?: Array<ProfileCompressResponse.Relative>;

  sales?: ProfileCompressResponse.Sales;

  updated_at?: string;
}

export namespace ProfileCompressResponse {
  export interface Personal {
    company?: string;

    delivery_address?: string;

    gender?: string;

    location?: string;

    name?: string;

    phone?: string;

    role?: string;
  }

  export interface Preferences {
    best_contact_channel?: string;

    communication_style?: string;

    languages?: Array<string>;
  }

  export interface Relationship {
    last_contact_date?: string;

    personal_details?: Array<string>;

    status?: string;
  }

  export interface Relative {
    age?: string;

    gender?: string;

    name?: string;

    notes?: string;

    preferences?: Array<string>;

    relation?: string;

    sizes?: { [key: string]: string };
  }

  export interface Sales {
    budget_range?: string;

    buying_persona?: string;

    buying_triggers?: Array<string>;

    current_needs?: Array<string>;

    objections_raised?: Array<string>;

    pain_points?: Array<string>;

    purchase_history?: Array<string>;
  }
}

export type ProfileExportResponse = unknown;

export interface ProfileExtractResponse {
  contact_id: string;

  status: string;
}

export interface ProfileExtractSyncResponse {
  user_id: string;

  created_at?: string;

  personal?: ProfileExtractSyncResponse.Personal;

  preferences?: ProfileExtractSyncResponse.Preferences;

  relationship?: ProfileExtractSyncResponse.Relationship;

  relatives?: Array<ProfileExtractSyncResponse.Relative>;

  sales?: ProfileExtractSyncResponse.Sales;

  updated_at?: string;
}

export namespace ProfileExtractSyncResponse {
  export interface Personal {
    company?: string;

    delivery_address?: string;

    gender?: string;

    location?: string;

    name?: string;

    phone?: string;

    role?: string;
  }

  export interface Preferences {
    best_contact_channel?: string;

    communication_style?: string;

    languages?: Array<string>;
  }

  export interface Relationship {
    last_contact_date?: string;

    personal_details?: Array<string>;

    status?: string;
  }

  export interface Relative {
    age?: string;

    gender?: string;

    name?: string;

    notes?: string;

    preferences?: Array<string>;

    relation?: string;

    sizes?: { [key: string]: string };
  }

  export interface Sales {
    budget_range?: string;

    buying_persona?: string;

    buying_triggers?: Array<string>;

    current_needs?: Array<string>;

    objections_raised?: Array<string>;

    pain_points?: Array<string>;

    purchase_history?: Array<string>;
  }
}

export interface ProfileStatusResponse {
  contact_id: string;

  status: string;
}

export interface ProfileRetrieveParams {
  project_id: string;
}

export interface ProfileCompressParams {
  project_id: string;
}

export interface ProfileExportParams {
  project_id: string;
}

export interface ProfileExtractParams {
  /**
   * Path param
   */
  project_id: string;

  /**
   * Query param
   */
  force?: boolean;
}

export interface ProfileExtractSyncParams {
  /**
   * Path param
   */
  project_id: string;

  /**
   * Query param
   */
  force?: boolean;
}

export interface ProfileStatusParams {
  project_id: string;
}

export declare namespace Profiles {
  export {
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileCompressResponse as ProfileCompressResponse,
    type ProfileExportResponse as ProfileExportResponse,
    type ProfileExtractResponse as ProfileExtractResponse,
    type ProfileExtractSyncResponse as ProfileExtractSyncResponse,
    type ProfileStatusResponse as ProfileStatusResponse,
    type ProfileRetrieveParams as ProfileRetrieveParams,
    type ProfileCompressParams as ProfileCompressParams,
    type ProfileExportParams as ProfileExportParams,
    type ProfileExtractParams as ProfileExtractParams,
    type ProfileExtractSyncParams as ProfileExtractSyncParams,
    type ProfileStatusParams as ProfileStatusParams,
  };
}
