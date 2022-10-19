/* eslint-disable @typescript-eslint/no-var-requires */

import 'svelte/register';

export function svelteTemplateEngine(filePath: string, options: any, next) {
  const Component = require(filePath).default;
  const { html } = Component.render(options);
  next(null, html);
}
