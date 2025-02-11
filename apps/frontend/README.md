> [!WARNING]
> dont forget about save env variable for firebase: api_key, auth_domain, project_id, storage_bucket, messagin_sender_id, app_id

### another value env:

```.env
NEXT_PUBLIC_ROOT_DOMAIN=http://localhost:3200
NEXT_PUBLIC_BE_URL=http://localhost:4000

# API
NEXT_PUBLIC_USER=/v1/api/fetch-user-data

```

> [!NOTE]
> data just display email, password and id. Backend
> i'm not provided logout function, if you want to log out just remove the token.

### Atomic Design:

I just only using templates folder, because anothers folder like atomic,moleclues, and organism already provided by MUI.
