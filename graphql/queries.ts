import { gql } from '@apollo/client'

export interface DATA_COLUMN {
    desc: string
    employeer: string
    id: string;
    period_end: Date;
    period_start: Date;
    role: string;
}

export const QUERY_GET_DATA = gql `
query MyQuery {
  touchme_experiences(order_by: {period_end: desc}) {
    desc
    employeer
    id
    period_end
    period_start
    role
  }
}`

export const QUERY_GET_DATA_BY_UUID = gql`
query MyQuery($id: uuid = "") {
  touchme_experiences_by_pk(id: $id) {
    desc
    employeer
    period_end
    period_start
    role
    id
  }
}
`
export const MUTATION_INSERT_DATA = gql `
mutation MyMutation($object: touchme_experiences_insert_input = {}) {
  insert_touchme_experiences_one(object: $object) {
    id
  }
}
`

export const MUTATION_UPDATE_DATA = gql `
mutation MyMutation($id: uuid = "", $role: String = "", $period_start: date = "", $period_end: date = "", $employeer: String = "", $desc: String = "") {
  update_touchme_experiences_by_pk(pk_columns: {id: $id}, _set: {desc: $desc, employeer: $employeer, period_end: $period_end, period_start: $period_start, role: $role}) {
    id
  }
}
`

export const MUTATION_DELETE_DATA = gql `
mutation MyMutation($id: uuid = "") {
  delete_touchme_experiences_by_pk(id: $id) {
    id
  }
}
`