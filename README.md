## **Overview**

Read latest news article with us fetched from a News API. User can filter articles based on categories and implement pagination to navigate through articles efficiently.

## **Features and Requirements:**

### **Homepage Layout:**

- Displays a list of news articles with a title, image, and summary.
- Article are linked to a detailed view.
- A responsive design that adapts to both desktop and mobile devices.

### Category Filtering:

- Includes a dropdown to filter articles by categories.
- The UI updates to display articles on selecting category.

### Pagination:

- Implemented pagination at the bottom of the homepage.
- Users navigate through different pages of articles.

### Detailed Article View Page:

- When a user clicks on an article summary from the homepage, they should be navigated to a detailed view of the article.
- Display the full content of the article, including any media like images or videos.

### API Integration:

- Used a public news API - NewsAPI to fetch news articles.
- Ensured the application handles loading states and errors during API calls.

### State Management:

- Use React hooks for state management to handle user inputs, API responses, and application state.
- Use Redux toolkit for state management.

### Technical :

- Application is written using functional components and hooks.
- Used Axios or Fetch API for making API calls.
- Responsive design is implemented using TailwindCSS.
- Include error handling and loading states for network requests.

### Links:

- Github : https://github.com/Abhi-Ajmera/Newz-time
- Live : https://newztime.netlify.app/
