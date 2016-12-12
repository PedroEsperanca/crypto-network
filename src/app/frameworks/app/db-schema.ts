import { DBSchema } from '@ngrx/db';

/**
 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
 */
const schema: DBSchema = {
  version: 1,
  name: 'ORI_app',
  stores: {
    i18n: {
      autoIncrement: true,
      primaryKey: 'id'
    },
    apps: {
      autoIncrement: true,
      primaryKey: 'id'
    }
  }
};

export default schema;
