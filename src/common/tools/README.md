# Common Tools

## When to add tools here?

Any external library configurations or files used specifically for the library will be added here to keep them all in the same place.

Examples are libs like Chakra-UI or Apollo.

You could use the following structure as a guide

```
src/common/tools
- /chakra-ui
    - /components
      - /Button
        - /variants
          - primary.ts
        - Button.tsx
        - index.ts // Exports all from button
        - sizes.ts
      - /OtherComponentOverrides
        - ...
    - chakra-theme.ts
    - colors.ts
    - otherGlobalOverrides.ts
    - ...
- /apollo
  - queries.ts
  - mutations.ts
  - apollo-client.ts
  - ...
```
