/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecordTable = /* GraphQL */ `
  mutation CreateRecordTable(
    $input: CreateRecordTableInput!
    $condition: ModelRecordTableConditionInput
  ) {
    createRecordTable(input: $input, condition: $condition) {
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
export const updateRecordTable = /* GraphQL */ `
  mutation UpdateRecordTable(
    $input: UpdateRecordTableInput!
    $condition: ModelRecordTableConditionInput
  ) {
    updateRecordTable(input: $input, condition: $condition) {
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
export const deleteRecordTable = /* GraphQL */ `
  mutation DeleteRecordTable(
    $input: DeleteRecordTableInput!
    $condition: ModelRecordTableConditionInput
  ) {
    deleteRecordTable(input: $input, condition: $condition) {
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
