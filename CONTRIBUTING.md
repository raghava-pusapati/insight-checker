# Contributing to Insight Checker

First off, thank you for considering contributing to Insight Checker! 🎉

## Code of Conduct

By participating in this project, you agree to maintain a respectful and collaborative environment.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, Node version, browser)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please include:

- **Clear use case** - Why is this enhancement needed?
- **Proposed solution** - How would it work?
- **Alternatives considered** - What other approaches did you think about?

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes** following our code style
4. **Test your changes**: `npm run build` and `npm run lint`
5. **Commit with clear messages** - Use present tense ("Add feature" not "Added feature")
6. **Push to your fork** and submit a pull request

### Development Workflow

```bash
# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build
```

## Style Guide

### TypeScript

- Use TypeScript for all new files
- Define proper types/interfaces
- Avoid `any` types
- Use functional components with hooks

### Component Structure

```typescript
import React from 'react';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title, onAction }) => {
  // Component logic
  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ContentAnalysisPanel.tsx`)
- **Files**: kebab-case for utilities, PascalCase for components
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use shadcn/ui components when possible
- Keep custom CSS minimal

### Git Commit Messages

- Use clear, descriptive commit messages
- Start with a verb in present tense
- Reference issue numbers when applicable

Examples:
```
Add user authentication feature
Fix dashboard layout on mobile devices
Update documentation for API endpoints
Refactor content analysis logic (#123)
```

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   └── ...          # Feature components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── types/           # TypeScript type definitions
```

## Testing

Currently, the project uses ESLint for code quality. When adding new features:

- Ensure code passes lint checks
- Test in multiple browsers
- Verify responsive behavior
- Check accessibility

## Questions?

Feel free to open an issue for any questions or clarifications.

---

Thank you for contributing! 🚀
