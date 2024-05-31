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

## Design:
Furrbook prioritizes a user-friendly and visually appealing experience.

- Clean and Readable: We've implemented clear and easy-to-read fonts throughout the app to ensure a smooth browsing experience for all users.
- Color Palette: The primary color scheme leverages a warm and inviting orange palette, symbolizing the playful energy and vibrancy often associated with pets. Accents of calming blue hues are used mainly in buttons and active sites to create a sense of balance and trust. This combination fosters a positive and engaging atmosphere for pet lovers to connect and share.
- Intuitive Interface: The layout is designed to be intuitive and user-friendly, allowing you to navigate through profiles, posts, and features effortlessly.

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

- ## Test Cases
    - A comprehensive list of test cases is documented in a Google Sheet. You can access it here: [Test Cases](https://docs.google.com/spreadsheets/d/1LvJkSQGfZ4yk8WmQe60oK-RN7XQrBZjLdl2Cw6R3Tow/edit?usp=sharing)


## Project Infrastructure: Libraries, Contexts, and Hooks
This section explores the essential building blocks that contribute to the application's functionality and user experience.

- Streamlined Data Fetching with react-infinite-scroll-component:
    - The project incorporates react-infinite-scroll-component as a replacement for traditional pagination. This library enables smooth and efficient lazy loading, eliminating the need for static page breaks. This approach enhances performance by loading content only when necessary, resulting in a more responsive and engaging user experience.

- React Bootstrap Integration:
    - The project leverages react-bootstrap to seamlessly integrate Bootstrap components within the React application. This library provides pre-built and customizable Bootstrap components, simplifying the development process and ensuring consistency in styling.

- Centralized State Management with Contexts:
    - CurrentUserContext: This context serves as a central location for managing the user's authentication state. Components throughout the application can subscribe to changes within this context, ensuring they display the appropriate UI elements based on the user's login status.
    - ProfileDataContext: This context manages the state of user profile data. By utilizing this context, components like PopularProfiles can stay in sync with the content displayed on the ProfilePage, leading to a more cohesive user experience.

- Custom Hooks for Enhanced Reusability:
    - The project includes custom hooks designed to reduce code duplication and improve maintainability.
    - useClickOutsideToggle: This hook simplifies the implementation of a toggle functionality that activates when a user clicks outside a designated area. This is commonly used for dropdown menus or modal components.
    - useRedirect: This hook streamlines user redirects based on their login status. Depending on the use case, it can redirect logged-in users to appropriate dashboards or redirect non-logged-in users to login or signup pages.

These well-structured libraries, contexts, and custom hooks establish a strong foundation for a scalable and maintainable React application.

### package.json: A Glimpse into Project Dependencies
The package.json file plays a crucial role in managing project dependencies and scripts. Here's a breakdown of some key elements:

- Dependencies: This section lists the external libraries required for the application to function. These include libraries for UI components (like React Bootstrap), testing frameworks (Jest and related libraries), API communication (Axios), and authentication (JWT-decode).

- Dev Dependencies: This section contains development-specific dependencies. Tools like ESLint and Prettier are included for code linting and formatting, ensuring code quality and consistency. Additionally, msw is included for mocking API endpoints during testing.

- Scripts: This section defines various commands for development and deployment workflows. Scripts for starting the development server, building the production-ready application, running tests, and linting code are all included.

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

## Credits
- Major Code credits to the [Moments Walkthrough](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+1/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/) project with a few new custom elements, additions and functionalities.
- Icon set used from [fontawesome](https://fontawesome.com/icons)
- Coolors for design
- Favicon converter - https://favicon.io/favicon-converter/
- Logo.com logo maker - https://logo.com/login?returnTo=%2Fdashboard%2Fyour-logo-files
- All images are from Pexels or free royalty sites - https://www.pexels.com/
- Draw.io for Diagrams - https://www.drawio.com/
- Major credits to my mentor for always advising me and listening to my ideas.