# cryptocompare-interface-app
React app that interfaces with CryptoCompare.com APIs

# Steps to run the application
1. Use the command: 'git clone "link from repository"' to clone the repository.
2. Make sure npm is installed.
3. Navigate to the project directory and use the command 'npm install' to install all dependencies.
4. Use the command 'npm start' to start the application.


# Development approach
Redux:
The Bookmarked items must me coordinated between the table and the bookmark cards, and since these components are entirely separate, it makes more sense to use redux to manage states relating to bookmark. Thus the bookmark slice has a state variable to store bookmarks and reducer which has actions for adding and removing bookmarks.

Real time updates:
Axios has been used for all api calls. For real time updates (every 1 minute), a refresh interval has been used to ensure periodic API calls.

Component design and Project Structure:
The project structure has been made such that it is neat and will remain so even upon expansion with additional features. The components created and in use are split up so as to promote reuse and readability.

Styling:
The 'styled-components' library has been used for styling.

# Challenges Faced:
1. The data object of an API call was causing problems while accessing data within and trying to pass as props. This was solved by instead calling the API from the child component. This solved the issue.

2. Initially, redux was being used to store state for priceData. However, the updated information after dispatch was not updated in the component functions. Upon review, I realised redux was unnecessary as priceData was only being used by one component and the issue could be solved by using a state variable (useState) instead.

