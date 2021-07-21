/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncRecordTables = /* GraphQL */ `
  query SyncRecordTables(
    $filter: ModelRecordTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecordTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        category
        Department
        Steniment
        Shift
        Status
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRecordTable = /* GraphQL */ `
  query GetRecordTable($id: ID!) {
    getRecordTable(id: $id) {
      id
      name
      category
      Department
      Steniment
      Shift
      Status
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRecordTables = /* GraphQL */ `
  query ListRecordTables(
    $filter: ModelRecordTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecordTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        Department
        Steniment
        Shift
        Status
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
