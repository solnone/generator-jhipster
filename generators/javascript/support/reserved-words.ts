/**
 * Copyright 2013-2025 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const typescriptReservedKeywords = [
  'BREAK',
  'CASE',
  'CATCH',
  'CLASS',
  'CONST',
  'CONSTRUCTOR',
  'CONTINUE',
  'DEBUGGER',
  'DEFAULT',
  'DELETE',
  'DO',
  'ELSE',
  'ENUM',
  'EXPORT',
  'EXTENDS',
  'FALSE',
  'FINALLY',
  'FOR',
  'FUNCTION',
  'IF',
  'IMPORT',
  'IN',
  'INSTANCEOF',
  'NEW',
  'NULL',
  'RETURN',
  'SUPER',
  'SWITCH',
  'THIS',
  'THROW',
  'TRUE',
  'TRY',
  'TYPEOF',
  'VAR',
  'VOID',
  'WHILE',
  'WITH',
  'IMPLEMENTS',
  'INTERFACE',
  'LET',
  'PACKAGE',
  'PRIVATE',
  'PROTECTED',
  'PUBLIC',
  'STATIC',
  'YIELD',
] as const;

type ReservedTypescriptKeyword = (typeof typescriptReservedKeywords)[number];

export const isReservedTypescriptKeyword = (keyword: string): keyword is ReservedTypescriptKeyword => {
  return (typescriptReservedKeywords as readonly string[]).includes(keyword.toUpperCase());
};
