# Weather Information Application

![Description](screenshot/screen.gif)

## Project Overview

The Weather Information Application is a user-friendly platform designed to provide real-time weather updates. Built using Next.js, TypeScript, and Tailwind CSS, this application features an interface that closely resembles the simplicity of the Google homepage, ensuring an intuitive search experience for users. By entering locality names, users can benefit from autocomplete suggestions that guide them to a dedicated page displaying comprehensive weather information for their selected location.

## Features

- **Familiar Search Interface:** The search page is crafted to mirror the Google homepage, offering users a comfortable and recognizable experience.
- **Real-time Autocomplete:** As users type in the search box, locality names are suggested dynamically, enhancing the search process.
- **Detailed Weather Information:** Upon selecting a locality, users are seamlessly redirected to a dedicated page showcasing weather details sourced from the Weatherunion API.
- **Responsive Design:** The application is styled with Tailwind CSS, ensuring optimal performance and appearance across a variety of devices.
- **Robust State Management:** Redux is employed for state management, providing a scalable and efficient solution for handling application state.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling Framework:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management Library:** [Redux](https://redux.js.org/)

## Installation

To set up the Weather Information Application on your local machine, please follow these steps:

1. **Clone the repository:**
`git clone https://github.com/yourusername/weather-app.git`
`cd weather-app`


2. **Install the necessary dependencies:**
`npm install`


3. **Configure environment variables:**
   - Create a `.env.local` file in the root directory.
   - Add your Weatherunion API key:
`NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here`


4. **Launch the development server:**
`npm run dev`

   You can then open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## Usage Instructions

1. **Initiate a search:** Begin typing a locality name in the search box.
2. **Select from the suggestions:** Choose a locality from the autocomplete suggestions that appear.
3. **Access weather information:** You will be redirected to a page that displays the weather details for the selected locality.

## Dependencies

### Core Dependencies
- **@emotion/react & @emotion/styled:** Utilized for styling Material-UI components.
- **@mui/material & @mui/icons-material:** For user interface components and icons.
- **@reduxjs/toolkit & react-redux:** For effective state management.
- **framer-motion:** For adding animations to the application.
- **next:** The React framework powering the application.
- **react & react-dom:** The essential libraries for building the user interface.
- **react-icons:** For integrating icons within the application.

### Development Dependencies
- **@types/node, @types/react, @types/react-dom:** TypeScript definitions for Node.js and React.
- **eslint & eslint-config-next:** Tools for maintaining code quality and consistency.
- **postcss & tailwindcss:** For styling the application using Tailwind CSS.
- **typescript:** The TypeScript compiler for type-checking.

## Future Enhancements

- **Improved Autocomplete:** Enhance the accuracy and responsiveness of the autocomplete feature for a better user experience.
- **Expanded Weather Details:** Incorporate additional weather information, such as hourly forecasts and weather alerts.
- **Search History Feature:** Implement functionality to track and display the user's search history.
- **More Error handle:** More error could be handled.
