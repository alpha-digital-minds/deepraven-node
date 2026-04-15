# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRefreshResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthRegisterResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthUpdatePasswordResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthVerifyOtpResponse</a></code>

Methods:

- <code title="post /api/v1/auth/login">client.auth.<a href="./src/resources/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>
- <code title="post /api/v1/auth/refresh">client.auth.<a href="./src/resources/auth.ts">refresh</a>({ ...params }) -> AuthRefreshResponse</code>
- <code title="post /api/v1/auth/register">client.auth.<a href="./src/resources/auth.ts">register</a>({ ...params }) -> AuthRegisterResponse</code>
- <code title="post /api/v1/auth/resend-otp">client.auth.<a href="./src/resources/auth.ts">resendOtp</a>({ ...params }) -> void</code>
- <code title="post /api/v1/auth/reset-password">client.auth.<a href="./src/resources/auth.ts">resetPassword</a>({ ...params }) -> void</code>
- <code title="post /api/v1/auth/update-password">client.auth.<a href="./src/resources/auth.ts">updatePassword</a>({ ...params }) -> AuthUpdatePasswordResponse</code>
- <code title="post /api/v1/auth/verify-otp">client.auth.<a href="./src/resources/auth.ts">verifyOtp</a>({ ...params }) -> AuthVerifyOtpResponse</code>

# Account

## Keys

Types:

- <code><a href="./src/resources/account/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/account/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="post /api/v1/account/keys">client.account.keys.<a href="./src/resources/account/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /api/v1/account/keys">client.account.keys.<a href="./src/resources/account/keys.ts">list</a>() -> KeyListResponse</code>
- <code title="delete /api/v1/account/keys/{key_id}">client.account.keys.<a href="./src/resources/account/keys.ts">delete</a>(keyId) -> void</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectExportProfilesResponse</a></code>

Methods:

- <code title="post /api/v1/projects">client.projects.<a href="./src/resources/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /api/v1/projects/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>(projectId) -> ProjectRetrieveResponse</code>
- <code title="patch /api/v1/projects/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">update</a>(projectId, { ...params }) -> ProjectUpdateResponse</code>
- <code title="get /api/v1/projects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>() -> ProjectListResponse</code>
- <code title="delete /api/v1/projects/{project_id}">client.projects.<a href="./src/resources/projects/projects.ts">delete</a>(projectId) -> void</code>
- <code title="get /api/v1/projects/{project_id}/profiles/export">client.projects.<a href="./src/resources/projects/projects.ts">exportProfiles</a>(projectId) -> unknown</code>

## Keys

Types:

- <code><a href="./src/resources/projects/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/projects/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="post /api/v1/projects/{project_id}/keys">client.projects.keys.<a href="./src/resources/projects/keys.ts">create</a>(projectId, { ...params }) -> KeyCreateResponse</code>
- <code title="get /api/v1/projects/{project_id}/keys">client.projects.keys.<a href="./src/resources/projects/keys.ts">list</a>(projectId) -> KeyListResponse</code>
- <code title="delete /api/v1/projects/{project_id}/keys/{key_id}">client.projects.keys.<a href="./src/resources/projects/keys.ts">delete</a>(projectId, keyId) -> void</code>

## Contacts

Types:

- <code><a href="./src/resources/projects/contacts/contacts.ts">ContactRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/contacts/contacts.ts">ContactListResponse</a></code>

Methods:

- <code title="get /api/v1/projects/{project_id}/contacts/{contact_id}">client.projects.contacts.<a href="./src/resources/projects/contacts/contacts.ts">retrieve</a>(projectId, contactId) -> ContactRetrieveResponse</code>
- <code title="get /api/v1/projects/{project_id}/contacts">client.projects.contacts.<a href="./src/resources/projects/contacts/contacts.ts">list</a>(projectId) -> ContactListResponse</code>
- <code title="delete /api/v1/projects/{project_id}/contacts/{contact_id}/contact">client.projects.contacts.<a href="./src/resources/projects/contacts/contacts.ts">delete</a>(projectId, contactId) -> void</code>

### Conversations

Types:

- <code><a href="./src/resources/projects/contacts/conversations.ts">ConversationCreateResponse</a></code>
- <code><a href="./src/resources/projects/contacts/conversations.ts">ConversationListResponse</a></code>

Methods:

- <code title="post /api/v1/projects/{project_id}/contacts/{contact_id}/conversations">client.projects.contacts.conversations.<a href="./src/resources/projects/contacts/conversations.ts">create</a>(projectId, contactId, { ...params }) -> ConversationCreateResponse</code>
- <code title="get /api/v1/projects/{project_id}/contacts/{contact_id}/conversations">client.projects.contacts.conversations.<a href="./src/resources/projects/contacts/conversations.ts">list</a>(projectId, contactId, { ...params }) -> ConversationListResponse</code>

### Profiles

Types:

- <code><a href="./src/resources/projects/contacts/profiles.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/contacts/profiles.ts">ProfileCompressResponse</a></code>
- <code><a href="./src/resources/projects/contacts/profiles.ts">ProfileExportResponse</a></code>
- <code><a href="./src/resources/projects/contacts/profiles.ts">ProfileExtractResponse</a></code>
- <code><a href="./src/resources/projects/contacts/profiles.ts">ProfileExtractSyncResponse</a></code>
- <code><a href="./src/resources/projects/contacts/profiles.ts">ProfileStatusResponse</a></code>

Methods:

- <code title="get /api/v1/projects/{project_id}/contacts/{contact_id}/profile">client.projects.contacts.profiles.<a href="./src/resources/projects/contacts/profiles.ts">retrieve</a>(projectId, contactId) -> ProfileRetrieveResponse</code>
- <code title="post /api/v1/projects/{project_id}/contacts/{contact_id}/profile/compress">client.projects.contacts.profiles.<a href="./src/resources/projects/contacts/profiles.ts">compress</a>(projectId, contactId) -> ProfileCompressResponse</code>
- <code title="get /api/v1/projects/{project_id}/contacts/{contact_id}/profile/export">client.projects.contacts.profiles.<a href="./src/resources/projects/contacts/profiles.ts">export</a>(projectId, contactId) -> unknown</code>
- <code title="post /api/v1/projects/{project_id}/contacts/{contact_id}/profile/extract">client.projects.contacts.profiles.<a href="./src/resources/projects/contacts/profiles.ts">extract</a>(projectId, contactId, { ...params }) -> ProfileExtractResponse</code>
- <code title="post /api/v1/projects/{project_id}/contacts/{contact_id}/profile/extract/sync">client.projects.contacts.profiles.<a href="./src/resources/projects/contacts/profiles.ts">extractSync</a>(projectId, contactId, { ...params }) -> ProfileExtractSyncResponse</code>
- <code title="get /api/v1/projects/{project_id}/contacts/{contact_id}/profile/status">client.projects.contacts.profiles.<a href="./src/resources/projects/contacts/profiles.ts">status</a>(projectId, contactId) -> ProfileStatusResponse</code>

# Stats

Types:

- <code><a href="./src/resources/stats.ts">StatConversationsDailyResponse</a></code>
- <code><a href="./src/resources/stats.ts">StatOverviewResponse</a></code>
- <code><a href="./src/resources/stats.ts">StatUsageResponse</a></code>

Methods:

- <code title="get /api/v1/stats/conversations/daily">client.stats.<a href="./src/resources/stats.ts">conversationsDaily</a>() -> StatConversationsDailyResponse</code>
- <code title="get /api/v1/stats/overview">client.stats.<a href="./src/resources/stats.ts">overview</a>() -> StatOverviewResponse</code>
- <code title="get /api/v1/stats/usage">client.stats.<a href="./src/resources/stats.ts">usage</a>() -> StatUsageResponse</code>
