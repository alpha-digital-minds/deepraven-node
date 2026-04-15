// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Conversations extends APIResource {
  /**
   * Ingest conversation messages for a contact. Stores immediately, then (re)sets
   * the extraction window in Redis. The worker processes all accumulated
   * conversations once the window closes. Accepts an API key or a JWT that owns the
   * project.
   */
  create(
    projectId: string,
    contactId: string,
    body: ConversationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConversationCreateResponse> {
    return this._client.post(`/api/v1/projects/${projectId}/contacts/${contactId}/conversations`, {
      body,
      ...options,
    });
  }

  /**
   * Return the most recent N conversation records for a contact.
   */
  list(
    projectId: string,
    contactId: string,
    query?: ConversationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConversationListResponse>;
  list(
    projectId: string,
    contactId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConversationListResponse>;
  list(
    projectId: string,
    contactId: string,
    query: ConversationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConversationListResponse> {
    if (isRequestOptions(query)) {
      return this.list(projectId, contactId, {}, query);
    }
    return this._client.get(`/api/v1/projects/${projectId}/contacts/${contactId}/conversations`, {
      query,
      ...options,
    });
  }
}

export interface ConversationCreateResponse {
  contact_id: string;

  conversations_added: number;

  profile_update: string;

  project_id: string;
}

export type ConversationListResponse = Array<ConversationListResponse.ConversationListResponseItem>;

export namespace ConversationListResponse {
  export interface ConversationListResponseItem {
    messages: Array<ConversationListResponseItem.Message>;

    metadata?: { [key: string]: unknown } | null;

    processed?: boolean;

    timestamp?: string;
  }

  export namespace ConversationListResponseItem {
    export interface Message {
      content: string;

      role: string;
    }
  }
}

export interface ConversationCreateParams {
  messages: Array<ConversationCreateParams.Message>;

  metadata?: { [key: string]: unknown } | null;
}

export namespace ConversationCreateParams {
  export interface Message {
    content: string;

    role: string;
  }
}

export interface ConversationListParams {
  limit?: number;
}

export declare namespace Conversations {
  export {
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams,
  };
}
