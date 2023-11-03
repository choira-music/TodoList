# Project: ReactJS Todo List with Redux Toolkit

## Project Overview

### Project Name
ReactJS Todo List

### Description
A web application that allows users to create, manage, and track their tasks and to-do lists. The project uses ReactJS with Redux Toolkit for state management.

### Key Features
- Add tasks with titles and descriptions.
- Mark tasks as complete.
- Filter tasks by status (completed, active).
- Edit and delete tasks.
- Responsive design for desktop and mobile.

## Technologies Used

- ReactJS
- Redux Toolkit
- CSS (or a CSS framework like Bootstrap)
- JavaScript (ES6+)
- Node.js (for development)
- Git & GitHub (for version control)

## Project Structure

```
project-root/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── TaskList.js
│   │   ├── Task.js
│   │   └── ...
│   │
│   ├── reducers/
│   │   ├── tasksSlice.js
│   │   └── ...
│   │
│   ├── store.js
│   ├── index.js
│   └── ...
│
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── ...
```


## Redux Toolkit Setup

1. Install Redux Toolkit:

   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. Create a `tasksSlice` using `createSlice` for managing tasks.

3. Configure the Redux store in `store.js` and include the `tasksSlice`.

4. Use the `useSelector` and `useDispatch` hooks from `react-redux` to access and modify the store in your components.

## Features

- **Add a Task**: Users can add a new task with a title and description.

- **Edit and Delete**: Users can edit and delete tasks.

- **Mark as Complete**: Users can mark tasks as complete or active.

- **Filter Tasks**: Users can filter tasks by status (completed, active).

- **Responsive Design**: The app is responsive and works well on both desktop and mobile devices.

## Usage

1. Navigate to the app's homepage.

2. Add a new task using the "Add Task" button.

3. Edit or delete tasks by clicking the task's corresponding buttons.

4. Mark tasks as complete by clicking the checkbox.

5. Filter tasks by selecting "Active" or "Completed" at the top of the list.

## Future Enhancements

- User authentication to save tasks per user.
- Data persistence with a backend or local storage.
- Task deadlines and priorities.

## Known Issues

- Issue 1: Description of the issue and steps to reproduce.
- Issue 2: Description of the issue and steps to reproduce.
