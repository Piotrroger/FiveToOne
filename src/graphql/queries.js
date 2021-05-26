/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      }
      nextToken
    }
  }
`;
