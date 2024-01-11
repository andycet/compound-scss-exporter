# Compound SCSS Exporter

This exporter outputs SCSS variable files from Supernova Design Tokens

## Exporter Features

- Each token is prefixed with "$co"
- Each token type is created in it's own file

## Example of Output

Given any design system, the exporter will produce CSS color definitions in the following format:

```scss
/* This file was automatically generated. Do not modify manually. */

$co-typography-heading-8-xl: "700" $co-font-size-8-xl/$co-line-height-8-xl
  "Ubuntu";
/* Use for headings */
$co-typography-heading-7-xl: "700" $co-font-size-7-xl/$co-line-height-7-xl
  "Ubuntu";
/* Large H2, Small H1 */
$co-typography-heading-6-xl: "700" $co-font-size-6-xl/$co-line-height-6-xl
  "Ubuntu";
$co-typography-heading-5-xl: "700" $co-font-size-5-xl/$co-line-height-5-xl
  "Ubuntu";
```
