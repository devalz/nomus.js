# Nomus

Nomus is a naming-style toolkit for Node.js and NestJS. It detects the current style of a string and converts it to formats like `PascalCase`, `camelCase`, `snake_case`, `SCREAMING_SNAKE_CASE`, `kebab-case`, `UPPER-KEBAB-CASE`, `Title Case`, and `Train-Case`.

## Features

- Pure TypeScript API for Node.js and TypeScript projects
- Optional NestJS integration exposed as `nomus/nest`
- ESM, CommonJS, and declaration files ready for npm publishing
- Detects common naming conventions and mixed input
- No runtime dependencies for the core package

## Installation

```bash
npm install nomus
```

For NestJS integration:

```bash
npm install nomus @nestjs/common reflect-metadata
```

## Node.js Usage

```ts
import { Naming, detectNamingStyle, toSnakeCase } from "nomus";

detectNamingStyle("votesUsers");
// "camelCase"

toSnakeCase("UserVotesDetails");
// "user_votes_details"

Naming.toTrainCase("helloWorldTest");
// "Hello-World-Test"
```

## NestJS Usage

```ts
import { Module } from "@nestjs/common";
import { NomusModule } from "nomus/nest";

@Module({
  imports: [NomusModule]
})
export class AppModule {}
```

```ts
import { Injectable } from "@nestjs/common";
import { NomusService } from "nomus/nest";

@Injectable()
export class SlugService {
  constructor(private readonly nomus: NomusService) {}

  formatLabel(value: string) {
    return this.nomus.toKebabCase(value);
  }
}
```

## API

- `detectNamingStyle(input)`
- `toUpperCase(input)`
- `toLowerCase(input)`
- `toPascalCase(input)`
- `toCamelCase(input)`
- `toSnakeCase(input)`
- `toScreamingSnakeCase(input)`
- `toKebabCase(input)`
- `toUpperKebabCase(input)`
- `toTitleCase(input)`
- `toTrainCase(input)`
- `Naming.*` static equivalents for all methods

## Detected Styles

- `UPPERCASE`
- `lowercase`
- `PascalCase`
- `camelCase`
- `snake_case`
- `SCREAMING_SNAKE_CASE`
- `kebab-case`
- `UPPER-KEBAB-CASE`
- `Title Case`
- `Train-Case`
- `Unknown / Mixed`

## Publish Checklist

```bash
npm run build
npm test
npm publish --access public
```

If the package name `nomus` is already taken on npm, update the `name` field in `package.json` before publishing. This repository lives at `devalz/nomus.js`.
