import { Injectable } from "@nestjs/common";
import {
  detectNamingStyle,
  toCamelCase,
  toKebabCase,
  toLowerCase,
  toPascalCase,
  toScreamingSnakeCase,
  toSnakeCase,
  toTitleCase,
  toTrainCase,
  toUpperCase,
  toUpperKebabCase
} from "../nomus.js";
import type { NamingStyle } from "../types.js";

@Injectable()
export class NomusService {
  detectNamingStyle(input: string): NamingStyle | "" {
    return detectNamingStyle(input);
  }

  toUpperCase(input: string): string {
    return toUpperCase(input);
  }

  toLowerCase(input: string): string {
    return toLowerCase(input);
  }

  toPascalCase(input: string): string {
    return toPascalCase(input);
  }

  toCamelCase(input: string): string {
    return toCamelCase(input);
  }

  toSnakeCase(input: string): string {
    return toSnakeCase(input);
  }

  toScreamingSnakeCase(input: string): string {
    return toScreamingSnakeCase(input);
  }

  toKebabCase(input: string): string {
    return toKebabCase(input);
  }

  toUpperKebabCase(input: string): string {
    return toUpperKebabCase(input);
  }

  toTitleCase(input: string): string {
    return toTitleCase(input);
  }

  toTrainCase(input: string): string {
    return toTrainCase(input);
  }
}
