# 🔍 Insight Checker

> A powerful AI-driven platform for content analysis, fact-checking, and misinformation detection

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚀 Features

- **🔎 Advanced Content Analysis** - Analyze text, images, and multimedia content for authenticity
- **📊 Real-Time Fact Checking** - Verify claims against multiple trusted sources
- **🌐 Misinformation Network Mapping** - Visualize the spread of false information
- **🤖 Explainable AI** - Transparent AI decision-making with detailed explanations
- **📈 Viral Prediction Analytics** - Predict content virality and spread patterns
- **🎯 Threat Level Assessment** - Evaluate potential impact of misinformation
- **📡 Live Data Feeds** - Monitor real-time information streams

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite 5.4+ for lightning-fast development
- **UI Components**: shadcn/ui + Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM v6
- **Charts & Visualization**: Recharts
- **Form Handling**: React Hook Form + Zod validation
- **Theming**: next-themes for dark/light mode

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or bun package manager

### Setup Steps

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd insight-checker

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development environment
npm run build:dev

# Run ESLint for code quality
npm run lint

# Preview production build
npm run preview
```

## 📂 Project Structure

```
insight-checker/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components (shadcn/ui)
│   │   ├── Dashboard.tsx # Main dashboard
│   │   ├── ContentAnalysisPanel.tsx
│   │   ├── FactCheckResults.tsx
│   │   ├── ExplainableAI.tsx
│   │   ├── MisinformationNetwork.tsx
│   │   ├── ViralPrediction.tsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── ...
```

## 🎨 Key Components

### Dashboard
Central hub displaying real-time analytics, threat levels, and content verification stats.

### Content Analysis Panel
Upload and analyze various content types with AI-powered insights.

### Fact Check Results
Display verification results with source attribution and confidence scores.

### Explainable AI
Transparent AI decision-making with visual explanations and reasoning chains.

### Misinformation Network
Interactive network visualization showing information spread patterns.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_API_KEY=your_api_key
```

### Customization

- **Theme**: Modify `tailwind.config.js` for custom colors and design tokens
- **Components**: Update shadcn/ui components in `src/components/ui/`
- **Routes**: Configure routes in `src/App.tsx`

## 🚀 Deployment

### Deploy to Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The `dist/` directory contains the production-ready application.

### Deployment Platforms

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployments
- **Lovable**: One-click deployment via the Lovable platform

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Quality

This project follows:
- ESLint configuration for code consistency
- TypeScript strict mode for type safety
- Component-based architecture
- Responsive design principles
- Accessibility standards (WCAG)

## 🔐 Security

- No sensitive data stored in the codebase
- Environment variables for API keys
- Input validation with Zod schemas
- Secure API communication

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@raghava-pusapati](https://github.com/raghava-pusapati)
- Project Link: [https://github.com/raghava-pusapati/insight-checker](https://github.com/raghava-pusapati/insight-checker)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide Icons](https://lucide.dev/) for icon system
- [Recharts](https://recharts.org/) for data visualization
- [Lovable](https://lovable.dev/) for the development platform

## 📊 Project Status

🚧 **Active Development** - This project is actively maintained and regularly updated.

---

<div align="center">
  <p>Built with ❤️ using React and TypeScript</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
