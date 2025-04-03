# Sentiment Analysis Application

This application allows users to analyze the sentiment of text using the Hugging Face Inference API.

## Features

- Text input with validation (empty check and 500 character limit)
- Sentiment analysis using Hugging Face API
- Display of results in a modal with appropriate icons
- Loading, error, and success states
- Responsive design

## Technologies Used

- **TypeScript** - For type safety and better developer experience
- **React** - UI library for building the interface
- **SCSS** - For styling components
- **Vite** - For fast development and building
- **Vitest & Testing Library** - For unit testing
- **ESLint & Prettier** - For code quality and formatting
- **Husky** - For pre-commit hooks

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SebastianJedrak/huggingface.git
   cd huggingface
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your Hugging Face API token:
   ```
   VITE_HUGGING_FACE_TOKEN=your_api_token_here
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Running Tests

To run the tests:

```bash
npm run test
# or
yarn test
```

## Challenges and Solutions

### State Management

**Challenge**: Managing the different states of the application (loading, error, success) in a clean way.

**Solution**: Utilized React's useState hook and created a custom useHuggingFace hook and huggingFaceApi to encapsulate the API call logic and state management.

### Code Quality

**Challenge**: Maintaining high code quality standards across the project.

**Solution**: Implemented ESLint, Prettier, and Husky to enforce code style before commits.

### Undefined Interface Language
**Challenge**: The project requirements did not specify the interface language. The presence of a button labeled "Analizuj" suggested Polish, while the API returned results in English.

**Solution**: Communicated with the client to clarify their expectations and ensure consistency in language usage across the interface and API responses.

### API Non-availability
**Challenge**: The API occasionally returned a 500 status error, which was beyond my control.

**Solution**: Implemented a UI component to handle errors gracefully, displaying a "Failed to fetch" message when such an issue occurs.

### Unspecified "NEUTRAL" Status
**Challenge**: The project requirements mentioned a "NEUTRAL" status, but the API did not return such a value.

**Solution**: Defined a threshold (NEUTRAL_THRESHOLD = 0.35), considering a result neutral if the absolute difference between the positive and negative scores was below this value.

### Unit Testing in TypeScript
**Challenge**: Writing unit tests in TypeScript presented challenges, particularly with type errors in certain cases.

**Solution**: Focused testing on validation and error handling in huggingFaceApi.test.ts. Used @ts-expect-error to temporarily suppress TypeScript errors where necessary. While test coverage could be improved, individual component testing was not prioritized.

### Global Styles in React
**Challenge**: Styles in React are global, which can lead to conflicts and unintended overrides.

**Solution**: Used SCSS to minimize the risk of style conflicts. Created a _variables.scss file to manage the application's design consistently across components.

## Future Improvements

- Add GraphQL support for API communication
- Add more comprehensive test coverage
- Add config file to avoid "magic numbers"