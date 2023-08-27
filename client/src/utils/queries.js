import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
      username
      savedBooks {
        title
        link
        bookId
        authors
      }
      bookCount
    }
  }
  
    `;