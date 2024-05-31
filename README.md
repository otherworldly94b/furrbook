# Furrbook - React

## Project description
Furrbook is a social media platform all about showing off your furry friends. It has been designed for its users to share their pets' most interesting, funny and beautiful moments. The application consists of the React app and an API. Welcome to the React front end project section.

[Furrbook - React live site](https://my-social-media-app-ach-e0fa09aef052.herokuapp.com/)

![Am I Responsive]()

### User Stories
|  Category |    as   |            I want to           |                                           so that I can                                          |                 UI components                |
|:---------:|:-------:|:------------------------------:|:------------------------------------------------------------------------------------------------:|:--------------------------------------------:|
| auth      | user    | register for an account        | have a personal profile with a picture                                                           | SignUpForm<br>ProfilePage<br>ProfileEditForm |
| auth      | user    | register for an account        | create, like, dislike, bookmark and comment on posts                                             | Post<br>PostPage<br>Comment                  |
| auth      | user    | register for an account        | follow users                                                                                     | Profile<br>ProfilePage                       |
| posts     | visitor | view a list of posts           | browse the most recent uploads                                                                   | PostsPage                                    |
| posts     | visitor | view an individual post        | see user feedback, i.e. likes, dislikes, bookmarks and read comments                             | Post<br>PostPaget                            |
| posts     | visitor | search a list of posts         | find a post by a specific artist or a title                                                      | PostsPage                                    |
| posts     | visitor | scroll through a list of posts | browse the site more comfortably                                                                 | InfiniteScrollComponent                      |
| posts     | user    | edit and delete my post        | correct or hide any mistakes                                                                     | PostEditForm<br>MoreDropdownMenu             |
| posts     | user    | create a post                  | share my furry friends with others                                                               | PostCreateForm                               |
| posts     | user    | view liked posts               | go back often to my favourite posts                                                              | PostsPage                                    |
| posts     | user    | view disliked posts            | go back often to my least favourite posts                                                        | PostsPage                                    |
| posts     | user    | view bookmarked posts          | go back often to my saved posts                                                                  | PostsPage                                    |
| posts     | user    | view followed users' posts     | keep up with my favourite users' furry friends                                                   | PostsPage                                    |
| likes     | user    | like a post                    | express my interest in someone's shared content                                                  | Post like icon                               |
| likes     | user    | unlike a post                  | express that my interest in someone's shared moment has faded away                               | Post (un) like icon                          |
| dislikes  | user    | dislike a post                 | express my disinterest in someone's shared content                                               | Create dislike                               |
| dislikes  | user    | undislike a post               | express that my disinterest in someone's shared content has faded away                           | Destroy dislike                              |
| bookmark  | user    | bookmark a post                | express my interest in saving someone's shared content                                           | Create bookmark                              |
| bookmark  | user    | unbookmark a post              | express that my interest in saving someone's shared content has faded away                       | Destroy bookmark                             |
| comments  | user    | create a comment               | share my thoughts on other people's content                                                      | PostPage<br>CommentCreateForm                |
| comments  | user    | edit and delete my comment     | correct or hide any mistakes                                                                     | PostPage<br>Comment<br>MoreDropdownMenu      |
| profiles  | user    | view a profile                 | see a user's recent posts + post, followers, following count data                                | ProfilePage<br>Post                          |
| profiles  | user    | edit a profile                 | update my profile information                                                                    | ProfileEditForm                              |
| followers | user    | follow a profile               | express my interest in someone's content                                                         | Profile follow button                        |
| followers | user    | unfollow a profile             | express that my interest in someone's content has faded away and remove their posts from my feed | Profile (un) follow button                   |

## Features

### Content Management:
Owner can manage all functions from their logged in page.

![Bookmarks]()
![Unbookmarks]()
![Likes]()
![Unlikes]()
![Dislikes]()
![UnDislikes]()
![Comments]()
![EditComments]()
![DeleteComments]()
![Profiles]()
![EditProfiles]()
![ChangeUsernameProfiles]()
![ChnagePasswordProfiles]()
![Follow]()
![UnFollow]()
![Add Post]()
![Edit Post]()

### Detailed page and component breakdown:

![Diagram]()

### Most reused components:
- PostsPage:
    - Home, Feed, Liked. Disliked, Bookmarked
- Post:
    - PostsPage
- Profile:
    - PopularProfiles, PopularProfiles (mobile)
- DropdownMenus:
    - Post, ProfilePage, Comment
- InfiniteScrollComponent:
    - PostPage (loading Comment components)
    - PostsPage (loading all, feed or liked, disliked, bookmarked Post components)
    - ProfilePage (loading Post components that belong to the profile)

## Tests:
### Automated:
used the msw library to mock user and logout endpoints
tested the NavBar component:
renders without a problem
renders the link to a user profile for a logged in user
renders the sign in and sign up buttons again on logout
### Manual:
every other feature tested extensively

## Libraries, contexts and hooks:
react-infinite-scroll-component
introduced to replace traditional pagination with lazy loading instead of pagination to make the application more performant and seem more snappy/ engaging
react-bootstrap:
introduced
contexts:
CurrentUserContext exposes the user state to the entire app. Relevant components can subscribe to its changes
ProfileDataContext exposes the profile state to the entire app. Enables the PopularProfiles component to be in sync with the ProfilePage contents
custom hooks written to reduce repeatable state logic:
useClickOutsideToggle: enable toggle on the burger menu
useRedirect: enable redirect for users who are either logged in or logged out, depending on the use case


## Project Setup and Configuration
This section details the steps taken to configure the project for deployment:

### Pre-build Efficiency:

- Pre-build Script: Incorporate a pre-build script within your build process. This script can automate tasks resulting in a smaller and faster deployment package.

### Farewell, Console Logs:

- Eliminate Console Logs: Console logs can clutter your production environment logs. Consider implementing a more robust logging solution or filtering out unnecessary console logs during deployment.

### Bootstrap Optimization:

- Minimize Bootstrap Imports: Instead of importing the entire Bootstrap library, leverage specific components you require. This reduces the overall bundle size and improves loading times.

### Deployment

This project can be deployed on various cloud platforms. Here are generic instructions for deploying on Heroku:

1. **Heroku Setup:** Create a Heroku account and install the Heroku CLI following their instructions [Heroku Documentation Link](https://devcenter.heroku.com/).
2. **Git Integration:** Initialize a Git repository in your project directory and push your code to Heroku. Refer to the Heroku documentation for details [Heroku Git Deployment Guide](https://devcenter.heroku.com/articles/deploying-python).
3. **Requirements:** The package.json file lists all your project dependencies. Heroku will install them automatically during deployment.
4. **Procfile:** Create a `Procfile` file specifying the command to run your Django application.
5. **Deploy:** Once everything is set up, run `heroku deploy` to deploy your application to Heroku or log in to your Heroku Dashboard and manually Deploy Branch from the Deploy tab.

**Note:** These are general guidelines. Refer to Heroku's documentation for the latest and most accurate instructions.
