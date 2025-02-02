import gql from "graphql-tag";

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!){
        login(email:$email, password: $password){
            token
            user{
                _id
                username
            }
        }  
    }
`
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
  }
`
export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook) {
    saveBook(input: $input) {
      username
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

