# Furrbook - React

## Project description
Furrbook is a social media platform all about showing off your furry friends. It has been designed for its users to share their pets' most interesting, funny and beautiful moments. The application consists of the React app and an API. Welcome to the React front end project section.

[Furrbook - React live site](https://my-social-media-app-ach-e0fa09aef052.herokuapp.com/)

![Am I Responsive](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177660/Screenshots/Am_I_Responsive_lddxj9.png)

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

### Feed:

![FeedPage](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177624/Screenshots/FeedPage_vn1mr8.png)

### Bookmarks:

![Bookmarks](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177649/Screenshots/bookmarks_px60i9.png)
![Unbookmarks](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177631/Screenshots/Unbookmark_xjdkl0.png)
![BookmarksPage](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177665/Screenshots/BookmarkedPage_njyvlh.png)

### Likes:

![Likes](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177644/Screenshots/likes_tivmhi.png)
![Unlikes](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177648/Screenshots/Unlikes_skqhli.png)
![LikesPage](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177662/Screenshots/LikedPage_mlztta.png)

### Dislikes:

![Dislikes](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177644/Screenshots/Dislike_zqdlsl.png)
![UnDislikes](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177631/Screenshots/Undislike_x262ax.png)
![DislikesPage](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177616/Screenshots/DislikedPage_ztetzr.png)

### Comments:

![Comments](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177601/Screenshots/Comments_najeq2.png)
![EditComments](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177602/Screenshots/CommentsEdit_djjouz.png)
![DeleteComments](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177638/Screenshots/CommentsDelete_kb6for.png)

### Profiles:

![EditProfiles](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177610/Screenshots/EditProfileDropdown_cgro63.png)
![EditProfiles](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177611/Screenshots/EditProfile_tji2ha.png)
![ChangeUsernameProfiles](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177601/Screenshots/ChangeUsernameProfileDropdown_wefxrm.png)
![ChangeUsernameProfiles](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177601/Screenshots/ChangeUsernameProfile_cwjkux.png)
![ChangePasswordProfiles](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177601/Screenshots/ChangePasswordProfileDropdown_wgt99d.png)
![ChnagePasswordProfiles](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177601/Screenshots/ChangePasswordProfile_hkgfns.png)

### Follow:

![Follow](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177620/Screenshots/FollowButton_kmyaaj.png)
![UnFollow](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177637/Screenshots/UnfollowButton_vx3n7m.png)

### Post:

![Add Post](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177637/Screenshots/AddPost_iucgh3.png)
![Edit Post](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177612/Screenshots/EditPost_nn7rul.png)
![Edit Post](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177609/Screenshots/EditPostEdited_mxxcjh.png)
![Delete Post](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177609/Screenshots/DeletePost_hnybqj.png)

### Sign Up & In:

![SignUp](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177622/Screenshots/SignUpPage_yqgkkd.png)
![SignIn](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177622/Screenshots/SignInPage_pyulc4.png)

## Design:
Furrbook prioritizes a user-friendly and visually appealing experience.

- Clean and Readable: We've implemented clear and easy-to-read fonts throughout the app to ensure a smooth browsing experience for all users.
- Color Palette: The primary color scheme leverages a warm and inviting orange palette, symbolizing the playful energy and vibrancy often associated with pets. Accents of calming blue hues are used mainly in buttons and active sites to create a sense of balance and trust. This combination fosters a positive and engaging atmosphere for pet lovers to connect and share.
- Intuitive Interface: The layout is designed to be intuitive and user-friendly, allowing you to navigate through profiles, posts, and features effortlessly.

### Detailed page and component breakdown:

![Diagram](https://res.cloudinary.com/dgzf4ydy2/image/upload/v1717177662/Screenshots/Furrbook-React.drawio_rczwuz.png)

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

## Testing:
### Automated Testing Suite:
This section details the implemented automated tests within the application.

- Mocking Endpoints for Reliable Testing:

The project utilizes the msw library to effectively mock user and logout API endpoints. This mocking approach ensures consistent and controllable test environments, independent of external factors that might impact API responses.

- NavBar Component Scrutiny:
    - Rendering Verification: Tests confirm that the NavBar component renders successfully without encountering any errors.
    - Logged-In User Experience: Tests validate that the component displays a link to the user profile page when a user is logged in, ensuring proper behavior for authenticated users.
    - Logout Functionality: Tests verify that the component reverts to displaying sign-in and sign-up buttons upon user logout, simulating a realistic user journey.

### Manual testing:
Extensive manual testing involved clicking through all functionalities, verifying form submissions, and confirming page loads.

- #### Test Cases
    - A comprehensive list of test cases is documented in a Google Sheet. You can access it here: [Test Cases](https://docs.google.com/spreadsheets/d/1LvJkSQGfZ4yk8WmQe60oK-RN7XQrBZjLdl2Cw6R3Tow/edit?usp=sharing)


## Project Structure and Dependencies
This section explores the essential building blocks and tools that contribute to the application's functionality, user experience, and maintainability.

### Libraries and UI Components
The project leverages several libraries to streamline development and enhance the user experience:

- react-infinite-scroll-component: Enables smooth and efficient lazy loading of content, eliminating the need for static pagination and improving performance.
- react-bootstrap: Provides pre-built and customizable Bootstrap components, simplifying development and ensuring consistency in styling.

### State Management with Contexts
Centralized state management is achieved through custom contexts:

- CurrentUserContext: Manages the user's authentication state, allowing components throughout the application to adapt their behavior based on the user's login status.
- ProfileDataContext: Manages user profile data, keeping components like PopularProfiles and ProfilePage in sync for a cohesive user experience.

### Custom Hooks for Reusability
The project includes custom hooks to reduce code duplication and improve maintainability:

- useClickOutsideToggle: Simplifies implementing toggle functionality based on clicks outside a designated area (commonly used for dropdowns or modals).
- useRedirect: Streamlines user redirects based on login status, directing users to appropriate dashboards or login pages.

These well-structured libraries, contexts, and custom hooks establish a strong foundation for a scalable and maintainable React application.

### package.json: Project Dependencies
The package.json file plays a crucial role in managing project dependencies and scripts. Key elements include:

- Dependencies: External libraries required for application functionality (e.g., UI components, testing frameworks, API communication, authentication).
- Dev Dependencies: Development-specific tools like ESLint for code linting and formatting, and msw for mocking API endpoints during testing.
- Scripts: Various commands for development and deployment workflows (starting development server, building production application, running tests, linting code).

### Project Setup and Configuration
This section details the steps taken to configure the project for deployment, focusing on optimizing the build process and preparing for production:

- Pre-build Efficiency: Incorporate a pre-build script to automate tasks that result in a smaller and faster deployment package.
- Farewell, Console Logs: Implement a robust logging solution or filter out unnecessary console logs to avoid cluttering production environment logs.
- Bootstrap Optimization: Minimize Bootstrap imports by using only the specific components required, reducing the overall bundle size and improving loading times.

### Deployment

This project can be deployed on various cloud platforms. Here are generic instructions for deploying on Heroku:

1. **Heroku Setup:** Create a Heroku account and install the Heroku CLI following their instructions [Heroku Documentation Link](https://devcenter.heroku.com/).
2. **Git Integration:** Initialize a Git repository in your project directory and push your code to Heroku. Refer to the Heroku documentation for details [Heroku Git Deployment Guide](https://devcenter.heroku.com/articles/deploying-python).
3. **Requirements:** The package.json file lists all your project dependencies. Heroku will install them automatically during deployment.
4. **Procfile:** Create a `Procfile` file specifying the command to run your Django application.
5. **Deploy:** Once everything is set up, run `heroku deploy` to deploy your application to Heroku or log in to your Heroku Dashboard and manually Deploy Branch from the Deploy tab.

**Note:** These are general guidelines. Refer to Heroku's documentation for the latest and most accurate instructions.

## Credits
- Major Code credits to the [Moments Walkthrough](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+1/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/) project with a few new custom elements, additions and functionalities.
- Icon set used from [fontawesome](https://fontawesome.com/icons)
- [Coolors](https://coolors.co/?home) for colour design 
- [Favicon converter](https://favicon.io/favicon-converter/)
- [LOGO.com](https://logo.com/login?returnTo=%2Fdashboard%2Fyour-logo-files)
- All images are from [Pexels](https://www.pexels.com/) or other free royalty sites
- [Draw.io](https://www.drawio.com/) for Diagrams 
- Major credits to my mentor for always advising me and listening to my ideas.