# Variable Autosuggest NPM

A React component that provides variable autosuggestion functionality with a rich text editor-like interface. This component allows users to type variables within curly braces `{{}}` and get intelligent suggestions based on predefined variables.

## Features

- 🔍 Real-time variable suggestions as you type
- 🎯 Smart variable detection within curly braces
- 💡 Tooltip display for variable details on hover
- ⌨️ Keyboard navigation support (Arrow Up/Down, Enter)
- 📋 Copy-paste support with variable preservation
- 🎨 Customizable styling
- 📱 Responsive design
- 🔒 Disable mode support

## Installation

```bash
npm install env-autosuggest
```

## Usage

```jsx
import React, { useRef } from 'react';
import AutoSuggest from 'variable-autosuggest-npm';

function App() {
  const contentEditableDivRef = useRef(null);
  
  const suggestions = {
    "apiKey": {
      "initialValue": "",
      "currentValue": "",
      "scope": "Global"
    },
    "userToken": {
      "initialValue": "token12345abcdef",
      "currentValue": "token67890ghijkl",
      "scope": "Private"
    },
    "apiUrl": {
      "initialValue": "https://api.example.com",
      "currentValue": "https://api.tech.com",
      "scope": "Global"
    },
    "username": {
      "initialValue": "user_one",
      "currentValue": "user_two",
      "scope": "Global"
    },
    "password": {
      "initialValue": "pass1234",
      "currentValue": "securePass5678",
      "scope": "Private"
    },
    "sessionToken": {
      "initialValue": "sdfg6789asdf1234",
      "currentValue": "qwerty1234uiop5678",
      "scope": "Private"
    }
  };

  const handleValueChange = () => {
    // Handle value changes here
    console.log(contentEditableDivRef.current.innerText);
  };

  return (
    <AutoSuggest
      suggestions={suggestions}
      contentEditableDivRef={contentEditableDivRef}
      initial=""
      handleValueChange={handleValueChange}
      disable={false}
      placeholder="Type {{ to see suggestions"
    />
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `suggestions` | Object | Yes | Object containing variable suggestions with their metadata (initialValue, currentValue, scope) |
| `contentEditableDivRef` | Ref | Yes | React ref for the content editable div |
| `initial` | String | No | Initial content of the editor |
| `handleValueChange` | Function | No | Callback function triggered on content change |
| `disable` | Boolean | No | Disables the editor when true |
| `placeholder` | String | No | Placeholder text when editor is empty |

## Suggestion Format

The suggestions object should follow this structure:

```javascript
{
  "variableName": {
    "initialValue": string,    // Original/default value
    "currentValue": string,    // Current/modified value
    "scope": string           // Scope of the variable (e.g., "Global", "Private")
  }
}
```

### Example Suggestion Object
```javascript
{
  "apiKey": {
    "initialValue": "",
    "currentValue": "",
    "scope": "Global"
  },
  "userToken": {
    "initialValue": "token12345abcdef",
    "currentValue": "token67890ghijkl",
    "scope": "Private"
  }
}
```

## Features in Detail

### Variable Suggestions
- Type `{{` to trigger suggestions
- Use arrow keys to navigate through suggestions
- Press Enter to select a suggestion
- Suggestions are filtered based on what you type after `{{`
- Each suggestion shows its scope and current value in the tooltip

### Variable Display
- Variables are displayed within curly braces
- Hover over variables to see their details in a tooltip
- Variables are preserved during copy-paste operations
- Tooltip shows:
  - Variable name
  - Current value
  - Initial value
  - Scope

### Keyboard Navigation
- ↑ (Arrow Up): Navigate to previous suggestion
- ↓ (Arrow Down): Navigate to next suggestion
- Enter: Select current suggestion
- Type to filter suggestions

## Styling

The component comes with default styles but can be customized using CSS classes:

- `.parent-div`: Main container
- `.main__div`: Editor container
- `.__custom-autosuggest-block__`: Content editable area
- `.placeholder-editable-div`: Placeholder container
- `.disable-div`: Applied when editor is disabled
- `.__suggestions__container__`: Suggestions dropdown container
- `.suggestion-item-div`: Individual suggestion item
- `.__main__suggestion__container__`: Main suggestions list container

## Author

👨‍💻 **Idris Bohra**

- LinkedIn: [idris-bohra](https://linkedin.com/in/idris-bohra)
- GitHub: [idris-bohra](https://github.com/idris-bohra)

Feel free to connect with me for any questions, suggestions, or collaboration opportunities!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
