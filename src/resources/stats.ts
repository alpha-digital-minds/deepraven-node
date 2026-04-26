// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Stats extends APIResource {
  /**
   * Conversation counts per day for the last 30 days.
   */
  conversationsDaily(options?: RequestOptions): APIPromise<StatConversationsDailyResponse> {
    return this._client.get('/api/v1/stats/conversations/daily', { ...options, __security: {  } });
  }

  /**
   * Account-level counts: projects, contacts, conversations, total LLM tokens.
   */
  overview(options?: RequestOptions): APIPromise<StatOverviewResponse> {
    return this._client.get('/api/v1/stats/overview', { ...options, __security: {  } });
  }

  /**
   * Per-project LLM token usage rollup.
   */
  usage(options?: RequestOptions): APIPromise<StatUsageResponse> {
    return this._client.get('/api/v1/stats/usage', { ...options, __security: {  } });
  }
}

export type StatConversationsDailyResponse = Array<{ [key: string]: unknown }>

export type StatOverviewResponse = { [key: string]: unknown }

export type StatUsageResponse = Array<{ [key: string]: unknown }>

export declare namespace Stats {
  export {
    type StatConversationsDailyResponse as StatConversationsDailyResponse,
    type StatOverviewResponse as StatOverviewResponse,
    type StatUsageResponse as StatUsageResponse
  };
}
