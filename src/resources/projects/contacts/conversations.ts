// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Conversations extends APIResource {
  /**
   * Ingest conversation messages for a contact. Stores immediately, then (re)sets
   * the extraction window in Redis. The worker processes all accumulated
   * conversations once the window closes. Accepts an API key or a JWT that owns the
   * project.
   */
  create(contactID: string, params: ConversationCreateParams, options?: RequestOptions): APIPromise<ConversationCreateResponse> {
    const { project_id, ...body } = params
    return this._client.post(path`/api/v1/projects/${project_id}/contacts/${contactID}/conversations`, { body, ...options, __security: {  } });
  }

  /**
   * Return the most recent N conversation records for a contact.
   */
  list(contactID: string, params: ConversationListParams, options?: RequestOptions): APIPromise<ConversationListResponse> {
    const { project_id, ...query } = params
    return this._client.get(path`/api/v1/projects/${project_id}/contacts/${contactID}/conversations`, { query, ...options, __security: {  } });
  }
}

export interface ConversationCreateResponse {
  contact_id: string;

  conversations_added: number;

  profile_update: string;

  project_id: string;
}

export type ConversationListResponse = Array<ConversationListResponse.ConversationListResponseItem>

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
  /**
   * Path param
   */
  project_id: string;

  /**
   * Body param
   */
  messages: Array<ConversationCreateParams.Message>;

  /**
   * Body param
   */
  metadata?: { [key: string]: unknown } | null;
}

export namespace ConversationCreateParams {
  export interface Message {
    content: string;

    role: string;
  }
}

export interface ConversationListParams {
  /**
   * Path param
   */
  project_id: string;

  /**
   * Query param
   */
  limit?: number;
}

export declare namespace Conversations {
  export {
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationListParams as ConversationListParams
  };
}
