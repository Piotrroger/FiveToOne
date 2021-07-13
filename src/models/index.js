// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RecordTable } = initSchema(schema);

export {
  RecordTable
};