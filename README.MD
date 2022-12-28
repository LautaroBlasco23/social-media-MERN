# Social media BACKEND
Basic backend api where you can create your user, make your posts and comments, Like the posts and comments you want. 

## Application entities:
![App-db-diagram](./app-data/Untitled%20Diagram.drawio.png)

## Repositories
**User:** 
* getAllUSers -> return a list of all users (without sensitive data)
* getUserWithId -> return user (without sensitive data)
* createUser -> inserts a new user into your mongo db
* modifyUser -> modifies user without returning sensitive data
* deleteUser -> deletes an user and returns it's id

**Post:**
* getAllPosts -> returns a list of all posts
* getSinglePostWithId -> returns single post
* getUserPosts -> returns all posts from one user (passing his id)
* createNewPost -> inserts a new post into your mongo db
* modifyPost -> -
* deletePost -> deletes post and comments made to it

**Comment:**
* getPostComments -> returns comments using postId as filter
* getUserComments -> returns comments using userId as filter
* createNewComment -> inserts a new comment into your mongo db
* modifyComment -> -
* deleteComment -> deletes comment and returns its id 

**Auth:**
* register -> returns user and token
* login -> returns token

# Todos
- [X] User Entities
- [X] User Application
- [X] User Infrastructure
- [X] Post Entities
- [X] Post Application
- [X] Post Infrastructure
- [X] Comment Entities
- [X] Comment Applciation
- [X] Comment Infrastructure
- [X] Auth Infrastructure (Login and register logic)
- [X] Basic test setup