# Compound Exporter

This exporter outputs CSS variable files from Supernova Design Tokens

## Exporter Features

- Each token is prefixed with "co-"
- Each token type is created in it's own file

## Example of Output

Given any design system, the exporter will produce CSS color definitions in the following format:

```css
/* This file was automatically generated. Do not modify manually. */

:root {
  --co-color-action-primary-border: #ffffff00;
  --co-color-action-primary-hover-border: #ffffff00;
  --co-color-action-secondary-background: #ffffff00;
  --co-color-action-tertiary-background: #ffffff00;
  --co-color-action-tertiary-border: #ffffff00;
}
```
