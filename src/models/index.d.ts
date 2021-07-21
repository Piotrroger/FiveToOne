import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class RecordTable {
  readonly id: string;
  readonly name: string;
  readonly category?: string;
  readonly Department?: string;
  readonly Steniment?: string;
  readonly Shift?: string;
  readonly Status?: string;
  readonly description?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly lastChangedAt: string;
  readonly version: number;
  constructor(init: ModelInit<RecordTable>);
  static copyOf(source: RecordTable, mutator: (draft: MutableModel<RecordTable>) => MutableModel<RecordTable> | void): RecordTable;
}