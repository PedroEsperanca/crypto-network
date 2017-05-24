// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  useHash: false,
  target: 'web',
  base_url: 'http://localhost:54447',
  api_version: 'api',
  auth_prefix: 'Bearer ',
  logging: {
    DEBUG: {
      LEVEL_1: true,
      LEVEL_2: true,
      LEVEL_3: true,
      LEVEL_4: true
    }
  }
};
