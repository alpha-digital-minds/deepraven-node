// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConversationsAPI from './conversations';
import {
  ConversationCreateParams,
  ConversationCreateResponse,
  ConversationListParams,
  ConversationListResponse,
  Conversations,
} from './conversations';
import * as ProfilesAPI from './profiles';
import {
  ProfileCompressParams,
  ProfileCompressResponse,
  ProfileExportParams,
  ProfileExportResponse,
  ProfileExtractParams,
  ProfileExtractResponse,
  ProfileExtractSyncParams,
  ProfileExtractSyncResponse,
  ProfileRetrieveParams,
  ProfileRetrieveResponse,
  ProfileStatusParams,
  ProfileStatusResponse,
  Profiles,
} from './profiles';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contacts extends APIResource {
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);

  /**
   * Get Contact
   */
  retrieve(
    contactID: string,
    params: ContactRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ContactRetrieveResponse> {
    const { project_id } = params;
    return this._client.get(path`/api/v1/projects/${project_id}/contacts/${contactID}`, {
      ...options,
      __security: {},
    });
  }

  /**
   * List Contacts
   */
  list(projectID: string, options?: RequestOptions): APIPromise<ContactListResponse> {
    return this._client.get(path`/api/v1/projects/${projectID}/contacts`, { ...options, __security: {} });
  }

  /**
   * Delete all data (contact, profile, conversations) for a contact.
   */
  delete(contactID: string, params: ContactDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { project_id } = params;
    return this._client.delete(path`/api/v1/projects/${project_id}/contacts/${contactID}/contact`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }
}

export interface ContactRetrieveResponse {
  id: string;

  created_at: string;

  external_id: string;

  project_id: string;
}

export type ContactListResponse = Array<ContactListResponse.ContactListResponseItem>;

export namespace ContactListResponse {
  export interface ContactListResponseItem {
    id: string;

    company: string;

    external_id: string;

    name: string;

    project_id: string;

    total_conversations: number;

    unprocessed_count: number;
  }
}

export interface ContactRetrieveParams {
  project_id: string;
}

export interface ContactDeleteParams {
  project_id: string;
}

Contacts.Conversations = Conversations;
Contacts.Profiles = Profiles;

export declare namespace Contacts {
  export {
    type ContactRetrieveResponse as ContactRetrieveResponse,
    type ContactListResponse as ContactListResponse,
    type ContactRetrieveParams as ContactRetrieveParams,
    type ContactDeleteParams as ContactDeleteParams,
  };

  export {
    Conversations as Conversations,
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams,
  };

  export {
    Profiles as Profiles,
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
