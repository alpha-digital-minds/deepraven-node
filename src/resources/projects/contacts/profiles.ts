// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Profiles extends APIResource {
  /**
   * Return the current profile for a contact. Creates an empty one if new.
   */
  retrieve(
    projectId: string,
    contactId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileRetrieveResponse> {
    return this._client.get(`/api/v1/projects/${projectId}/contacts/${contactId}/profile`, options);
  }

  /**
   * Delete all data (contact, profile, conversations) for a contact.
   */
  deleteContact(projectId: string, contactId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/projects/${projectId}/contacts/${contactId}/contact`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
    projectId: string,
    contactId: string,
    params?: ProfileExtractParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileExtractResponse>;
  extract(
    projectId: string,
    contactId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileExtractResponse>;
  extract(
    projectId: string,
    contactId: string,
    params: ProfileExtractParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileExtractResponse> {
    if (isRequestOptions(params)) {
      return this.extract(projectId, contactId, {}, params);
    }
    const { force } = params;
    return this._client.post(`/api/v1/projects/${projectId}/contacts/${contactId}/profile/extract`, {
      query: { force },
      ...options,
    });
  }

  /**
   * Same as /extract but synchronous — blocks until done and returns the updated
   * profile.
   */
  extractSync(
    projectId: string,
    contactId: string,
    params?: ProfileExtractSyncParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileExtractSyncResponse>;
  extractSync(
    projectId: string,
    contactId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileExtractSyncResponse>;
  extractSync(
    projectId: string,
    contactId: string,
    params: ProfileExtractSyncParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileExtractSyncResponse> {
    if (isRequestOptions(params)) {
      return this.extractSync(projectId, contactId, {}, params);
    }
    const { force } = params;
    return this._client.post(`/api/v1/projects/${projectId}/contacts/${contactId}/profile/extract/sync`, {
      query: { force },
      ...options,
    });
  }

  /**
   * Check whether profile extraction is currently running for this contact.
   */
  status(
    projectId: string,
    contactId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileStatusResponse> {
    return this._client.get(`/api/v1/projects/${projectId}/contacts/${contactId}/profile/status`, options);
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

export interface ProfileExtractParams {
  force?: boolean;
}

export interface ProfileExtractSyncParams {
  force?: boolean;
}

export declare namespace Profiles {
  export {
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileExtractResponse as ProfileExtractResponse,
    type ProfileExtractSyncResponse as ProfileExtractSyncResponse,
    type ProfileStatusResponse as ProfileStatusResponse,
    type ProfileExtractParams as ProfileExtractParams,
    type ProfileExtractSyncParams as ProfileExtractSyncParams,
  };
}
