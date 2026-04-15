// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
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
  ProfileCompressResponse,
  ProfileExportResponse,
  ProfileExtractParams,
  ProfileExtractResponse,
  ProfileExtractSyncParams,
  ProfileExtractSyncResponse,
  ProfileRetrieveResponse,
  ProfileStatusResponse,
  Profiles,
} from './profiles';

export class Contacts extends APIResource {
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);

  /**
   * Get Contact
   */
  retrieve(
    projectId: string,
    contactId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContactRetrieveResponse> {
    return this._client.get(`/api/v1/projects/${projectId}/contacts/${contactId}`, options);
  }

  /**
   * List Contacts
   */
  list(projectId: string, options?: Core.RequestOptions): Core.APIPromise<ContactListResponse> {
    return this._client.get(`/api/v1/projects/${projectId}/contacts`, options);
  }

  /**
   * Delete all data (contact, profile, conversations) for a contact.
   */
  delete(projectId: string, contactId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/v1/projects/${projectId}/contacts/${contactId}/contact`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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

Contacts.Conversations = Conversations;
Contacts.Profiles = Profiles;

export declare namespace Contacts {
  export {
    type ContactRetrieveResponse as ContactRetrieveResponse,
    type ContactListResponse as ContactListResponse,
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
    type ProfileExtractParams as ProfileExtractParams,
    type ProfileExtractSyncParams as ProfileExtractSyncParams,
  };
}
