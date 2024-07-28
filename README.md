# Notify Kit

Notify Kit is a simple and customizable notification system for React applications. It provides a flexible way to display notifications in your app with various styles and animations.

## Installation

You can install Notify Kit via npm:

```bash
npm install notify-kit
```


## Usage

### Importing and Using Notify Kit

First, import Notify Kit components and styles in your React application:

```bash
# App.tsx
import {
  NotificationProvider,
  useNotification,
} from "notify-kit";

const NotificationButtons: React.FC = () => {
  const { addNotification } = useNotification();

  return (
    <div>
      <button onClick={() => addNotification("Success message", "success")}>
        Show Success
      </button>
      <button onClick={() => addNotification("Error message", "error")}>
        Show Error
      </button>
      <button onClick={() => addNotification("Info message", "info")}>
        Show Info
      </button>
      <button onClick={() => addNotification("Warning message", "warning")}>
        Show Warning
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <div className="App">
        <h1>Notification System Example</h1>
        <NotificationButtons />
      </div>
    </NotificationProvider>
  );
};

export default App;
```

### Notification Types

Notify Kit supports different types of notifications:

- Success
- Error
- Info
- Warning

### Custom Styles

You can customize the notification styles by overriding the default CSS classes in Notification.css.

### Example

jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

## Development

### Building the Package

To build the package, run the following command:

bash
npm run build

This will generate the build files in the dist directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Acknowledgements

- [React](https://reactjs.org/)
- [Rollup](https://rollupjs.org/)
- [TypeScript](https://www.typescriptlang.org/)