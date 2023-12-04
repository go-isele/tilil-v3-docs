---
title: Bulk SMS API Development Strategy
---

# API Development Strategy by Tilil Tech

Welcome to Tilil Tech's Bulk SMS API Development Strategy guide! This document outlines our approach to developing and managing major version upgrades for our Bulk SMS API.

<docs-info>This strategy is discussed in more detail in our [Future Flags][future-flags-blog-post] blog post. Check it out for further information!</docs-info>

## Goals

At Tilil Tech, our goals for major Bulk SMS API releases are:

- Enable developers to opt-into SemVer-major features individually as they are released.
- Facilitate easy adoption of new features without the need to adopt them all at once during a new major version.

## Implementation - Future Flags

We implement our API upgrades using **Future Flags**, allowing users to adopt new features incrementally. This approach involves using flags provided during initialization to opt into future functionalities.

### Types of Future Flags

#### `future.unstable_feature`

- Allows iteration on the API with early adopters for specific features.
- Allows for continuous improvements and enhancements without affecting all users.

#### `future.v7_feature`

- Indicates a breaking change from the previous version (v6).
- Implies stable API and will be the default behavior in v7.

### Example Workflow for New Features

![Flowchart of the decision process for introducing a new feature][feature-flowchart]

- Non-Breaking + Stable API Feature -> Lands in v6
- Non-Breaking + Unstable API -> `future.unstable_` flag -> Lands in v6
- Breaking + Stable API Feature -> `future.v7_` flag -> Lands in v7
- Breaking + Unstable API -> `future.unstable_` flag -> `future.v7_` flag -> Lands in v7

## Current Future Flags - Bulk SMS API

Here are the current future flags available in Tilil Tech's Bulk SMS API:

Certainly! Here's how you can create the table in Markdown:

```markdown
### `@tilil-tech/bulk-sms` Future Flags

These flags are applicable when using the Bulk SMS API and are passed during API initialization:

```javascript
const smsApi = initializeBulkSmsApi({
  future: {
    v7_deliveryReport: true,
  },
});
```
| Flag                     | Description                                                           |
| ------------------------ | --------------------------------------------------------------------- |
| `v7_fetcherPersist`      | Delay active fetcher cleanup until they return to an `idle` state     |
| `v7_normalizeFormMethod` | Normalize `useNavigation().formMethod` to be an uppercase HTTP Method |
| `v7_prependBasename`     | Prepend the router basename to navigate/fetch paths                   |
