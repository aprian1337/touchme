import { gql } from '@apollo/client'

export interface DATA_COLUMN {
    desc: string
    employeer: string
    id: string;
    period_end: Date;
    period_start: Date;
    role: string;
}

export const GET_DATA = gql `
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

