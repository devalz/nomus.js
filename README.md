# 📦 **Nomus**

Nomus is a naming-style toolkit for Node.js and NestJS. It detects the current style of a string and converts it to formats like **`UPPERCCASE`, `lowercase`, `PascalCase`, `camelCase`, `snake_case`, `SCREAMING_SNAKE_CASE`, `kebab-case`, `UPPER-KEBAB-CASE`, `Title Case` and `Train-Case`**.

## 🚀 **Features**

✔ Convert *from any format* to:

* **UPPERCCASE**
* **lowercase**
* **PascalCase**
* **camelCase**
* **snake_case**
* **SCREAMING_SNAKE_CASE**
* **kebab-case**
* **UPPER-KEBAB-CASE**
* **Title Case**
* **Train-Case**

✔ **Automatically detects**:

* UPPERCCASE
* lowercase
* PascalCase
* camelCase
* snake_case
* SCREAMING_SNAKE_CASE
* kebab-case
* UPPER-KEBAB-CASE
* Title Case
* Train-Case
* and mixed cases
  
✔ Pure TypeScript API for Node.js and TypeScript projects  
✔ Optional NestJS integration exposed as `nomus/nest`  
✔ ESM, CommonJS, and declaration files ready for npm publishing  
✔ Detects common naming conventions and mixed input  
✔ No runtime dependencies for the core package  

 ---
 
## 📥 Installation

```bash
npm install nomus
```

**For NestJS integration:**

```bash
npm install nomus @nestjs/common reflect-metadata
```

Nomus is compatible with NestJS 10 projects that already use `reflect-metadata@0.1.x`, and also with `reflect-metadata@0.2.x`.

## ✨ Node.js Usage

```ts
import { Naming, detectNamingStyle, toSnakeCase } from "nomus";

detectNamingStyle("votesUsers");
// "camelCase"

toSnakeCase("UserVotesDetails");
// "user_votes_details"

Naming.toTrainCase("helloWorldTest");
// "Hello-World-Test"
```

## ✨ NestJS Usage

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

---

# 🧩 Available Methods

---

## 🔤 **Naming.***

Static equivalents for all methods

```node
Naming.detectNamingStyle("UserVotesDetails");    // PascalCase
Naming.toTrainCase("userVotesDetails");          // "User-Votes-Details"
```

---

## 🔍 **detectNamingStyle(input)**

Automatically detects the naming convention of the text.

### Possible results:

- `'UPPERCASE'`
- `'lowercase'`
- `'PascalCase'`
- `'camelCase'`
- `'snake_case'`
- `'SCREAMING_SNAKE_CASE'`
- `'kebab-case'`
- `'UPPER-KEBAB-CASE'`
- `'Title Case'`
- `'Train-Case'`
- `'Unknown / Mixed'`

### Examples:

```node
Naming.detectNamingStyle("UserVotesDetails");    // PascalCase
detectNamingStyle("userVotesDetails");           // camelCase
Naming.detectNamingStyle("user_votes_details");  // snake_case
detectNamingStyle("user-votes-details");         // kebab-case
Naming.detectNamingStyle("votes UsersDetails");  // Unknown / Mixed
```

---

## 🔠 **toUpperCase(input)**

Converts from any format to UPPERCASE.

---

## 🔡 **toLowerCase(input)**

Converts from any format to lowercase.

---

## 🧱 **toPascalCase(input)**

Converts from any format to PascalCase.

---

## 🐪 **toCamelCase(input)**

Converts from any format to camelCase.

---

## 🐍 **toSnakeCase(input)**

Converts from any format to snake_case.

---

## 🐍🔠 **toScreamingSnakeCase(input)**

Converts from any format to SCREAMING_SNAKE_CASE.

---

## 🔗 **toKebabCase(input)**

Converts from any format to kebab-case.

---

## 🔗🔠 **toUpperKebabCase(input)**

Converts from any format to UPPER-KEBAB-CASE.

---

## 🔤 **toTitleCase(input)**

Converts from any format to Title Case.

---

## 🚂 **toTrainCase(input)**

Converts from any format to Title Case.

---

# 🧪 Additional Examples

```csharp
Naming.toPascalCase("hello-world");       // HelloWorld
toCamelCase("HELLO_WORLD");               // helloWorld
Naming.toSnakeCase("HelloWorld");         // hello_world
toKebabCase("helloWorldTest");            // hello-world-test
Naming.ToTrainCase("helloWorldTest");     // Hello-World-Test

detectNamingStyle("MyVariable");          // PascalCase
Naming.detectNamingStyle("myVariable");   // camelCase
detectNamingStyle("my_variable");         // snake_case
Naming.detectNamingStyle("my-variable");  // kebab-case
detectNamingStyle("My Variable");         // Title Case
```

---

## 📄 License

This project is licensed under the MIT License, which means you can freely use it in commercial and personal projects.

---

## 🤝 Contributing

Contributions are welcome!
You can:

* Report issues
* Propose improvements
* Submit PRs
  
---

## ⭐ Support the Project

If this package was useful to you, consider leaving a ⭐ on GitHub or sharing it with other developers.
