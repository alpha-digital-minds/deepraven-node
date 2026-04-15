// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Stats extends APIResource {
  /**
   * Conversation counts per day for the last 30 days.
   */
  conversationsDaily(options?: Core.RequestOptions): Core.APIPromise<StatConversationsDailyResponse> {
    return this._client.get('/api/v1/stats/conversations/daily', options);
  }

  /**
   * Account-level counts: projects, contacts, conversations, total LLM tokens.
   */
  overview(options?: Core.RequestOptions): Core.APIPromise<StatOverviewResponse> {
    return this._client.get('/api/v1/stats/overview', options);
  }

  /**
   * Per-project LLM token usage rollup.
   */
  usage(options?: Core.RequestOptions): Core.APIPromise<StatUsageResponse> {
    return this._client.get('/api/v1/stats/usage', options);
  }
}

export type StatConversationsDailyResponse = Array<{ [key: string]: unknown }>;

export type StatOverviewResponse = { [key: string]: unknown };

export type StatUsageResponse = Array<{ [key: string]: unknown }>;

export declare namespace Stats {
  export {
    type StatConversationsDailyResponse as StatConversationsDailyResponse,
    type StatOverviewResponse as StatOverviewResponse,
    type StatUsageResponse as StatUsageResponse,
  };
}
