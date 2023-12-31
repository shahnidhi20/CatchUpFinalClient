import { gql } from '@apollo/client';

export const GET_POSTS = gql`
query GetPosts {
  getPosts {
    _id
    postAuthor
    postText
    createdAt
    likeCount
  }
}
`;

export const QUERY_SINGLE_POST = gql`
    query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;


export const QUERY_USER = gql`
  query getUser ($_id: String) {
    user (_id: $_id) {
      _id
      username
      profilePic
      friends
      posts
    }
  }
`;