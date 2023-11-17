# Project: Jamming 4 Screen UI Page

## Project Overview

### Project Name
Jamming 4 Screen UI Page

### Description
A web application that Show four screens to wth Video and Audio Funtionality without using webRTC

### Key Features
- Add tasks with titles and descriptions.
- Mark tasks as complete.
- Filter tasks by status (completed, active).
- Edit and delete tasks.
- Responsive design for desktop and mobile.

## Technologies Used

- ReactJS v18
- Redux Toolkit
- CSS (or a CSS framework like Bootstrap)
- JavaScript (ES6+)
- Node.js (for development)
- Git & GitHub (for version control)
- MongoDB Database

## Project Structure for reference
Jamming-4-Screen-UI-Page/
|-- public/
|   |-- index.html
|   |-- favicon.ico
|-- src/
|   |-- components/
|   |   |-- Screen.js
|   |   |-- VideoPlayer.js
|   |   |-- AudioPlayer.js
|   |   |-- ControlPanel.js
|   |-- styles/
|   |   |-- main.css
|   |-- App.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md


## Explanation:

public: This directory contains the static assets that are served as-is. The index.html is the main HTML file for your application.

src: This directory contains the source code of your application.

components: This directory contains React components. Each component file represents a part of your application's UI.

Screen.js: React component for displaying a screen.
VideoPlayer.js: React component for video playback.
AudioPlayer.js: React component for audio playback.
ControlPanel.js: React component for controlling video and audio.
styles: This directory contains stylesheets for your components. main.css is the main stylesheet.

App.js: The main React component that orchestrates the layout and logic of your application.

index.js: The entry point of your React application.

.gitignore: This file specifies intentionally untracked files that Git should ignore.

package.json: This file contains metadata about the project and its dependencies.
