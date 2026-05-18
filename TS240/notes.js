const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
  LevelFormat, PageBreak
} = require('docx');
const fs = require('fs');

// ── helpers ──────────────────────────────────────────────────────────────────
const BLUE   = "1F3864";
const MID    = "2E75B6";
const LIGHT  = "EBF3FB";
const GRAY   = "F5F5F5";
const RED    = "C0392B";
const GREEN  = "1A7A4A";
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

const sp = (before = 0, after = 100) => ({ spacing: { before, after } });

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    ...sp(300, 120),
    children: [new TextRun({ text, bold: true, size: 30, font: "Arial", color: BLUE })]
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    ...sp(200, 80),
    children: [new TextRun({ text, bold: true, size: 24, font: "Arial", color: MID })]
  });
}
function p(text, opts = {}) {
  return new Paragraph({
    ...sp(0, 80),
    children: [new TextRun({ text, font: "Arial", size: 20, ...opts })]
  });
}
function tip(text) {
  return new Paragraph({
    ...sp(80, 120),
    indent: { left: 360 },
    children: [
      new TextRun({ text: "💡 ", size: 20 }),
      new TextRun({ text, font: "Arial", size: 20, italics: true, color: "444444" })
    ]
  });
}
function warn(text) {
  return new Paragraph({
    ...sp(80, 120),
    indent: { left: 360 },
    children: [
      new TextRun({ text: "⚠️  ", size: 20 }),
      new TextRun({ text, font: "Arial", size: 20, italics: true, color: RED })
    ]
  });
}
function code(lines) {
  return lines.map(line =>
    new Paragraph({
      ...sp(0, 0),
      indent: { left: 360 },
      shading: { fill: "F4F4F4", type: ShadingType.CLEAR },
      children: [new TextRun({ text: line, font: "Courier New", size: 18, color: "222222" })]
    })
  );
}
function gap() { return new Paragraph({ children: [new TextRun("")] }); }

function table(rows, colWidths = [2800, 6560]) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: rows.map(([left, right, header]) =>
      new TableRow({
        children: [left, right].map((txt, i) =>
          new TableCell({
            borders,
            width: { size: colWidths[i], type: WidthType.DXA },
            margins: { top: 60, bottom: 60, left: 120, right: 120 },
            shading: header ? { fill: MID,   type: ShadingType.CLEAR }
                            : i === 0 ? { fill: GRAY, type: ShadingType.CLEAR }
                            : {},
            children: [new Paragraph({
              children: [new TextRun({
                text: txt,
                font: i === 0 ? "Courier New" : "Arial",
                size: 18,
                bold: header || false,
                color: header ? "FFFFFF" : "222222"
              })]
            })]
          })
        )
      })
    )
  });
}

function headerRow(l, r) { return [l, r, true]; }
function row(l, r)       { return [l, r, false]; }

// ── document ─────────────────────────────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
    }]
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 20 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, font: "Arial", color: BLUE },
        paragraph: { spacing: { before: 300, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: MID },
        paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 1 } }
    ]
  },
  sections: [{
    properties: {
      page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } }
    },
    children: [

      // ── TITLE ──
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: "TypeScript Quick Reference", bold: true, size: 56, font: "Arial", color: BLUE })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 500 },
        children: [new TextRun({ text: "Interview & Assessment Cheat Sheet", size: 24, font: "Arial", color: "666666", italics: true })]
      }),

      // ══ 1. BUILD TIME vs RUNTIME ══════════════════════════════════════════
      h1("1. Build Time vs Runtime"),
      table([
        headerRow("Stage", "What happens"),
        row("Build time", "TypeScript checks types and catches errors — then erases all type info"),
        row("Runtime",    "Plain JavaScript executes — interfaces, types, annotations are gone"),
        row("interface / type / annotations", "Build time only — erased"),
        row("class / enum", "Both — compile to real JS values"),
        row("typeof / instanceof", "Both — real JS operators that work at runtime"),
      ]),
      gap(),
      tip("JSON.parse returns any — TypeScript can't catch type mismatches from external data. Always type the result as unknown and validate."),
      ...code([
        "// Compiles fine — JSON.parse returns any",
        'const value: number = JSON.parse(\'"not a number"\');',
        "value.toFixed(2); // 💥 runtime crash — value is actually a string",
      ]),
      gap(),

      // ══ 2. TYPES OVERVIEW ═════════════════════════════════════════════════
      h1("2. Types at a Glance"),
      h2("Primitive Types"),
      table([
        headerRow("Type", "Example"),
        row("boolean",   "let done: boolean = true;"),
        row("number",    "let age: number = 30;"),
        row("string",    "let name: string = 'Jane';"),
        row("null",      "let x: null = null;"),
        row("undefined", "let y: undefined = undefined;"),
        row("symbol",    "let s: symbol = Symbol('id');"),
        row("bigint",    "let big: bigint = 9007199254740991n;"),
      ]),
      gap(),
      h2("Special Types"),
      table([
        headerRow("Type", "Behaviour"),
        row("any",     "Opt out of type checking — dangerous, avoid"),
        row("unknown", "Safer any — must narrow before use"),
        row("never",   "Function never returns (throws or infinite loop)"),
        row("void",    "Function returns nothing meaningful"),
        row("object",  "Any non-primitive value"),
        row("Date",    "Complex type — created with new Date()"),
      ]),
      gap(),
      tip("any vs unknown: both accept all types. But unknown cannot be used without narrowing first — that's what makes it safe."),
      gap(),

      // ══ 3. ANY vs UNKNOWN vs NEVER ════════════════════════════════════════
      h1("3. any / unknown / never"),
      ...code([
        "// any — TypeScript stops checking",
        "let x: any = 'hello';",
        "let y: number = x;       // ✅ no error — but y holds a string at runtime!",
        "",
        "// unknown — must narrow before use",
        "let a: unknown = 'hello';",
        "let b: string = a;       // ❌ Error — must narrow first",
        "if (typeof a === 'string') { a.toUpperCase(); } // ✅ safe",
        "",
        "// never — function never returns",
        "function fail(msg: string): never { throw new Error(msg); }",
        "function loop(): never { while (true) {} }",
      ]),
      gap(),
      table([
        headerRow("",          "any    "),
        row("Accepts all types",        "✅ yes     / ✅ yes"),
        row("Assignable to other types", "✅ yes     / ❌ must narrow"),
        row("Requires narrowing",        "❌ no      / ✅ yes"),
        row("Safe",                      "❌ no      / ✅ yes"),
      ], [3000, 6360]),
      gap(),

      // ══ 4. TYPE INFERENCE & WIDENING ══════════════════════════════════════
      h1("4. Type Inference & Widening"),
      ...code([
        "const x = 'hello';   // type: \"hello\"  (literal — const never changes)",
        "let   y = 'hello';   // type: string   (widened — let can be reassigned)",
        "",
        "let z = null;        // type: any  (null widens to any)",
        "z = 5;               // type follows latest assignment: number",
        "z = 'hi';            // type: string",
        "",
        "// Force literal type on let:",
        "let dir = 'left' as const; // type: \"left\"  not string",
      ]),
      gap(),
      tip("const locks primitives to their literal type. let widens to the general primitive type because it could be reassigned."),
      gap(),

      // ══ 5. FUNCTIONS ══════════════════════════════════════════════════════
      h1("5. Functions"),
      ...code([
        "// Basic",
        "function add(a: number, b: number): number { return a + b; }",
        "",
        "// Optional parameter",
        "function greet(name?: string): string {",
        "  return name ? `Hello ${name}` : 'Hello World';",
        "}",
        "",
        "// Default parameter",
        "function greet(name = 'World'): string { return `Hello ${name}`; }",
        "",
        "// void return",
        "function log(msg: string): void { console.log(msg); }",
        "",
        "// Function type alias",
        "type Predicate<T> = (value: T) => boolean;",
        "const isLong: Predicate<string> = (s) => s.length > 10;",
        "",
        "// Generic function",
        "function first<T>(arr: T[]): T | undefined { return arr[0]; }",
      ]),
      gap(),

      // ══ 6. INTERFACES & TYPES ═════════════════════════════════════════════
      h1("6. Interfaces & Type Aliases"),
      table([
        headerRow("Feature",              "interface  /  type alias"),
        row("Define object shape",        "✅ both"),
        row("Define primitives/unions",   "❌ interface  /  ✅ type"),
        row("Declaration merging",        "✅ interface  /  ❌ type"),
        row("extends",                    "✅ both (interface uses extends, type uses &)"),
        row("implements (class)",         "✅ both"),
      ]),
      gap(),
      ...code([
        "interface User { id: number; name: string; email?: string; }",
        "type User  = { id: number; name: string; email?: string; };",
        "",
        "// Extending",
        "interface Admin extends User { adminLevel: number; }",
        "type Admin = User & { adminLevel: number };",
        "",
        "// Optional ?  /  Readonly",
        "interface Config { debug: boolean; readonly apiUrl: string; }",
      ]),
      gap(),

      // ══ 7. STRUCTURAL TYPING ══════════════════════════════════════════════
      h1("7. Structural Typing"),
      p("TypeScript compares types by shape (properties + their types), not by name."),
      ...code([
        "type Point2D = { x: number; y: number };",
        "type Point3D = { x: number; y: number; z: number };",
        "",
        "let a: Point2D = { x: 1, y: 2 };",
        "let b: Point3D = { x: 1, y: 2, z: 3 };",
        "",
        "a = b;  // ✅ Point3D has everything Point2D needs",
        "b = a;  // ❌ Point2D missing z",
        "",
        "// Object literal excess property check:",
        "a = { x: 1, y: 2, z: 3 }; // ❌ extra props not allowed on literals",
      ]),
      gap(),
      tip("More specific types are always assignable to less specific ones — never the reverse."),
      gap(),

      // ══ 8. CLASSES ════════════════════════════════════════════════════════
      h1("8. Classes & Access Modifiers"),
      table([
        headerRow("Modifier",    "Inside class  /  Subclass  /  Outside  /  Runtime"),
        row("public",           "✅  /  ✅  /  ✅  /  ❌ (no enforcement)"),
        row("protected",        "✅  /  ✅  /  ❌  /  ❌ (build time only)"),
        row("private",          "✅  /  ❌  /  ❌  /  ❌ (build time only)"),
        row("#field (JS private)","✅  /  ❌  /  ❌  /  ✅ enforced by JS"),
      ]),
      gap(),
      ...code([
        "class Person {",
        "  public name: string;",
        "  protected age: number;",
        "  #secret: string;",
        "",
        "  constructor(name: string, age: number) {",
        "    this.name = name; this.age = age; this.#secret = 'hidden';",
        "  }",
        "}",
        "",
        "// Shorthand — declare + assign in constructor:",
        "class Person {",
        "  constructor(public name: string, private age: number) {}",
        "}",
        "",
        "// Subclass",
        "class Employee extends Person {",
        "  constructor(name: string, age: number, public employeeId: number) {",
        "    super(name, age);",
        "  }",
        "}",
      ]),
      gap(),

      // ══ 9. TYPE ASSERTIONS ════════════════════════════════════════════════
      h1("9. Type Assertions"),
      ...code([
        "// as syntax (works everywhere)",
        "const str = value as string;",
        "",
        "// Angle-bracket syntax (NOT allowed in .tsx files)",
        "const str = <string>value;",
        "",
        "// DOM — common safe use",
        "const input = document.getElementById('name') as HTMLInputElement;",
        "input.value;",
        "",
        "// instanceof — safer, performs real runtime check",
        "if (target instanceof HTMLButtonElement) {",
        "  console.log(target.disabled); // ✅ narrowed",
        "}",
      ]),
      gap(),
      warn("as overrides TypeScript — no runtime check. Wrong assertion = silent runtime crash."),
      table([
        headerRow("Scenario",              "Safe?"),
        row("DOM elements you control",    "✅ safe"),
        row("as const — literal types",    "✅ safe"),
        row("API responses",               "❌ dangerous — validate with unknown + type predicate"),
        row("Empty object {} as T",        "❌ dangerous — properties will be undefined"),
        row("Double assertion as unknown as T", "❌ bypasses all checks"),
      ]),
      gap(),

      // ══ 10. TYPE NARROWING ════════════════════════════════════════════════
      h1("10. Type Narrowing"),
      table([
        headerRow("Technique",         "Example"),
        row("typeof",         "if (typeof x === 'string')"),
        row("instanceof",     "if (err instanceof Error)"),
        row("in operator",    "if ('radius' in shape)"),
        row("discriminant",   "if (shape.kind === 'circle')  ← preferred"),
        row("truthiness",     "if (value)  ← covers null / undefined / ''  / 0"),
        row("type predicate", "function isCat(x: unknown): x is Cat { ... }"),
        row("Array.isArray",  "if (Array.isArray(value))"),
      ]),
      gap(),
      ...code([
        "// Type predicate — custom type guard",
        "function isUser(val: unknown): val is User {",
        "  return typeof val === 'object' && val !== null &&",
        "         'name' in val && 'id' in val;",
        "}",
        "",
        "// Discriminated union — cleanest pattern",
        "type Shape = { kind: 'circle'; radius: number }",
        "           | { kind: 'square'; side: number };",
        "",
        "function area(s: Shape) {",
        "  switch (s.kind) {",
        "    case 'circle': return Math.PI * s.radius ** 2;",
        "    case 'square': return s.side ** 2;",
        "    default:",
        "      const _check: never = s; // ✅ exhaustive check",
        "      throw new Error('Unhandled shape');",
        "  }",
        "}",
      ]),
      gap(),
      warn("typeof null === 'object' is a famous JS bug. Always use value === null for null checks."),
      gap(),

      // ══ 11. INDEX SIGNATURES ══════════════════════════════════════════════
      h1("11. Index Signatures"),
      ...code([
        "// Basic",
        "type Quantities = { [productId: string]: number };",
        "type Quantities = Record<string, number>;  // equivalent, cleaner",
        "",
        "// Mixed known + dynamic (union required!)",
        "type Config = {",
        "  name: string;               // known property",
        "  [key: string]: string | number; // all keys must satisfy this",
        "};",
        "",
        "// readonly index signature",
        "interface ReadOnly { readonly [key: string]: string; }",
      ]),
      gap(),
      tip("All named properties must be compatible with the index signature type — use a union if they differ."),
      gap(),

      // ══ 12. UTILITY TYPES ═════════════════════════════════════════════════
      h1("12. Utility Types"),
      table([
        headerRow("Utility",                  "What it does"),
        row("Partial<T>",                     "Makes all properties optional"),
        row("Required<T>",                    "Makes all properties required"),
        row("Readonly<T>",                    "Makes all properties readonly (shallow)"),
        row("Pick<T, 'a'|'b'>",              "Keeps only listed properties"),
        row("Omit<T, 'a'|'b'>",             "Removes listed properties"),
        row("Record<K, V>",                   "Object with keys K and values V"),
        row("NonNullable<T>",                 "Removes null and undefined"),
        row("ReturnType<typeof fn>",          "Extracts return type of a function"),
        row("Parameters<typeof fn>",          "Extracts parameter types as tuple"),
      ]),
      gap(),
      ...code([
        "// Make only email required — surgical pattern",
        "type UserWithRequiredEmail = Omit<User, 'email'>",
        "                          & Required<Pick<User, 'email'>>;",
        "",
        "// Partial config with defaults — common pattern",
        "async function fetch(config: Partial<ApiConfig> = {}) {",
        "  const final = { ...defaults, ...config };",
        "}",
      ]),
      gap(),

      // ══ 13. GENERICS ══════════════════════════════════════════════════════
      h1("13. Generics"),
      ...code([
        "// Generic function",
        "function wrapInArray<T>(value: T): T[] { return [value]; }",
        "wrapInArray(42);        // T inferred as number → number[]",
        "",
        "// Generic with constraint",
        "function first<T>(arr: T[]): T | undefined { return arr[0]; }",
        "",
        "// Generic type alias",
        "type Result<T> = { value?: T; error?: string };",
        "type Predicate<T> = (value: T) => boolean;",
        "type Pair<K, V>   = { key: K; value: V };",
        "",
        "// Generic interface",
        "interface Repository<T> {",
        "  getAll(): T[];",
        "  add(item: T): void;",
        "  getById(id: number): T | undefined;",
        "}",
        "",
        "// Generic constraint with keyof",
        "function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {",
        "  return obj[key];",
        "}",
      ]),
      gap(),

      // ══ 14. EXTENDING / UPDATING TYPES ════════════════════════════════════
      h1("14. Extending & Updating Types"),
      ...code([
        "type Base = { debug: boolean; logLevel: 'info'|'warn'|'error' };",
        "",
        "// Add required property",
        "type Extended = Base & { retryCount: number };",
        "",
        "// Add optional property without rewriting",
        "type WithTimeout = Base & Partial<{ timeout: number }>;",
        "",
        "// Make one optional field required",
        "type WithRequired = Omit<User, 'email'> & Required<Pick<User, 'email'>>;",
        "",
        "// Change a property modifier",
        "type ConfigWithDefaults = Omit<Base, 'logLevel'>",
        "  & { env: 'dev'|'prod'; logLevel?: 'info'|'warn'|'error' };",
      ]),
      gap(),

      // ══ 15. OBJECT SPREADING ══════════════════════════════════════════════
      h1("15. Object Spreading & Partial Updates"),
      ...code([
        "function updateUser(existing: User, updates: Partial<User>): User {",
        "  return { ...existing, ...updates }; // rightmost wins",
        "}",
        "",
        "// Partial update in array (mutate in place):",
        "const index = users.findIndex(u => u.id === id);",
        "if (index !== -1) {",
        "  users[index] = { ...users[index], ...updates };",
        "}",
      ]),
      gap(),
      tip("Spread creates a NEW object — it never mutates the original. Always spread existing first, then updates."),
      gap(),

      // ══ 16. PROMISES & ASYNC ══════════════════════════════════════════════
      h1("16. Promises & Async/Await"),
      ...code([
        "// Promise type",
        "const p: Promise<number> = new Promise(resolve => resolve(42));",
        "",
        "// Async function — always returns Promise<T>",
        "async function getData(url: string): Promise<void> {",
        "  try {",
        "    const res = await fetch(url);",
        "    const data: unknown = await res.json(); // type as unknown!",
        "    if (isUser(data)) console.log(data.name);",
        "  } catch (error: unknown) {",
        "    if (error instanceof Error) console.error(error.message);",
        "  }",
        "}",
      ]),
      gap(),
      warn("Always type caught errors as unknown, not any. Use instanceof Error before accessing .message."),
      gap(),

      // ══ QUICK PATTERNS ════════════════════════════════════════════════════
      h1("Quick Reference — Common Patterns"),
      table([
        headerRow("Pattern",               "Code"),
        row("Null check",                  "if (value === null)"),
        row("Undefined check",             "if (value !== undefined)"),
        row("Nullish coalescing",          "value ?? 'default'"),
        row("Optional chaining",           "user?.address?.city"),
        row("Non-null assert (careful!)",  "value!"),
        row("Readonly deep",               "Object.freeze(obj)  — runtime"),
        row("Safe JSON parse",             "const data: unknown = JSON.parse(str)"),
        row("DOM assertion",               "(el as HTMLInputElement).value"),
        row("Const literal",               "'left' as const"),
        row("Exhaust union",               "const _: never = val; throw new Error(...)"),
      ]),
      gap(),
      tip("Golden rule: TypeScript only protects you at build time. Validate all external data (APIs, JSON, user input) at runtime using type predicates or unknown + narrowing."),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('./TypeScript_Quick_Reference.docx', buffer);
  console.log('Done!');
});