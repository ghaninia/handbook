# Software Development Handbook (Persian Edition)

A comprehensive React SSR (Server-Side Rendering) application built with Next.js, providing a Persian localized version of the Software Development Handbook with complete RTL (Right-to-Left) design.

## 🔗 Live Preview

**[View Live Demo →](http://ghaninia-handbook.vercel.app/)**

## 🌟 Features

- 🌙 **Dark & Light Theme** - Seamless theme switching with persistent user preference
- 🎨 **Smooth Animations** - Beautiful page transitions powered by Framer Motion
- ↔️ **Full RTL Support** - Complete right-to-left layout for Persian language
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Server-Side Rendering** - Enhanced performance and SEO optimization
- 🎯 **Comprehensive Content** - Complete Persian translation of all handbook sections
- 🔍 **Search Functionality** - Advanced search capabilities across all content
- ♿ **Accessibility** - WCAG compliant design with keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/ghaninia/handbook.git

# Navigate to project directory
cd handbook

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start

# Or preview the build locally
npm run preview
```

## 📁 Project Structure

```
handbook/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout component
│   │   ├── page.tsx              # Home page
│   │   ├── globals.css           # Global styles
│   │   ├── providers.tsx         # Context providers
│   │   ├── about/                # About page
│   │   ├── search/               # Search functionality
│   │   ├── design-patterns/      # Design Patterns section
│   │   │   ├── page.tsx          # Patterns overview
│   │   │   ├── [slug]/           # Dynamic pattern pages
│   │   │   ├── singleton/        # Singleton pattern
│   │   │   ├── factory-method/   # Factory Method pattern
│   │   │   ├── observer/         # Observer pattern
│   │   │   ├── strategy/         # Strategy pattern
│   │   │   ├── adapter/          # Adapter pattern
│   │   │   ├── decorator/        # Decorator pattern
│   │   │   ├── facade/           # Facade pattern
│   │   │   ├── proxy/            # Proxy pattern
│   │   │   ├── builder/          # Builder pattern
│   │   │   ├── abstract-factory/ # Abstract Factory pattern
│   │   │   ├── chain-of-responsibility/ # Chain of Responsibility
│   │   │   ├── mediator/         # Mediator pattern
│   │   │   ├── memento/          # Memento pattern
│   │   │   ├── state/            # State pattern
│   │   │   ├── specification/    # Specification pattern
│   │   │   ├── repository/       # Repository pattern
│   │   │   ├── unit-of-work/     # Unit of Work pattern
│   │   │   ├── cqrs/             # CQRS pattern
│   │   │   ├── domain-events/    # Domain Events pattern
│   │   │   ├── outbox/           # Outbox pattern
│   │   │   ├── strangler-fig/    # Strangler Fig pattern
│   │   │   ├── null-object/      # Null Object pattern
│   │   │   ├── object-mother/    # Object Mother pattern
│   │   │   ├── guard-clause/     # Guard Clause pattern
│   │   │   ├── rules-engine/     # Rules Engine pattern
│   │   │   └── repr/             # Repr pattern
│   │   ├── principles/           # SOLID & other principles
│   │   ├── practices/            # Best practices
│   │   ├── antipatterns/         # Anti-patterns to avoid
│   │   ├── code-smells/          # Code smell identification
│   │   ├── values/               # Software development values
│   │   ├── domain-driven-design/ # DDD concepts
│   │   ├── tools/                # Development tools
│   │   ├── terms/                # Terminology glossary
│   │   ├── testing/              # Testing methodologies
│   │   ├── laws/                 # Software engineering laws
│   │   └── architecture/         # Architecture patterns
│   ├── components/               # Reusable React components
│   │   ├── Header.tsx            # Main navigation header
│   │   ├── Sidebar.tsx           # RTL navigation sidebar
│   │   ├── Footer.tsx            # Site footer
│   │   └── PageTransition.tsx    # Page transition animations
│   └── contexts/                 # React Context providers
│       └── ThemeContext.tsx      # Theme management
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind CSS configuration
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.js             # PostCSS configuration
└── package.json                  # Project dependencies
```

## 🛠️ Technology Stack

### Core Technologies
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Libraries & Tools
- **Framer Motion** - Animation library
- **next-themes** - Theme management
- **Vazirmatn** - Persian web font
- **Remix Icon** - Icon library
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📚 Content Sections

### Design Patterns
Comprehensive collection of software design patterns with Persian explanations:
- **Creational Patterns**: Singleton, Factory Method, Abstract Factory, Builder
- **Structural Patterns**: Adapter, Decorator, Facade, Proxy
- **Behavioral Patterns**: Observer, Strategy, Chain of Responsibility, Mediator, Memento, State
- **Domain Patterns**: Repository, Unit of Work, Specification, Domain Events
- **Architecture Patterns**: CQRS, Outbox, Strangler Fig
- **Utility Patterns**: Null Object, Object Mother, Guard Clause, Rules Engine

### Software Principles
Fundamental principles for clean, maintainable code:
- SOLID Principles (SRP, OCP, LSP, ISP, DIP)
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple, Stupid)
- YAGNI (You Aren't Gonna Need It)
- Composition over Inheritance
- Explicit Dependencies Principle

### Best Practices
Industry-standard development practices:
- Code organization and structure
- Testing strategies and methodologies
- Version control workflows
- Code review guidelines
- Documentation standards
- Performance optimization techniques

### Anti-patterns & Code Smells
Common pitfalls and how to avoid them:
- Identifying problematic code patterns
- Refactoring techniques
- Technical debt management
- Code quality metrics

## 🎨 Theming System

The application features a sophisticated theme management system:

### Theme Features
- **Automatic Detection**: Respects user's system preference
- **Manual Toggle**: Easy switching between light and dark modes
- **Persistent Storage**: User preference saved in localStorage
- **Smooth Transitions**: Animated theme changes

### Implementation
```typescript
// Theme context usage
const { theme, setTheme } = useTheme()

// Toggle theme
const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
```

## 🌐 RTL (Right-to-Left) Implementation

Complete RTL support for Persian language:

### RTL Features
- **Layout Direction**: All components use RTL layout
- **Text Alignment**: Proper text flow for Persian content  
- **Navigation**: RTL-optimized sidebar and navigation
- **Icons & Images**: Proper positioning for RTL context
- **Animations**: RTL-aware transition animations

### Tailwind RTL Configuration
```css
/* RTL-specific utilities */
.rtl .text-right { text-align: right; }
.rtl .float-right { float: right; }
.rtl .border-r { border-right-width: 1px; }
```

## 🔍 Search Functionality

Advanced search capabilities across all content:

### Search Features
- **Full-text Search**: Search across all documentation content
- **Category Filtering**: Filter results by content type
- **Keyboard Shortcuts**: Quick search with ⌘K (Mac) or Ctrl+K (Windows)
- **Instant Results**: Real-time search suggestions
- **Persian Support**: Full Persian text search capability

## 📱 Responsive Design

Mobile-first approach with breakpoint optimization:

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

### Features
- Collapsible sidebar on mobile
- Touch-optimized navigation
- Readable typography scaling
- Optimized image loading

## ⚡ Performance Optimizations

### Next.js Optimizations
- **Server-Side Rendering**: Improved initial page load
- **Static Generation**: Pre-built pages for better performance
- **Image Optimization**: Automatic image compression and lazy loading
- **Code Splitting**: Automatic bundle optimization
- **Prefetching**: Intelligent page prefetching

### Bundle Analysis
```bash
# Analyze bundle size
npm run analyze

# Performance audit
npm run lighthouse
```

## 🧪 Testing Strategy

### Testing Framework
- **Jest**: Unit and integration testing
- **React Testing Library**: Component testing
- **Cypress**: End-to-end testing
- **MSW**: API mocking for tests

### Running Tests
```bash
# Unit tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Deployment Platforms
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Alternative deployment option
- **Docker**: Containerized deployment

### Build Commands
```bash
# Production build
npm run build

# Start production server
npm start

# Export static files
npm run export
```

## 📊 Analytics & Monitoring

### Performance Monitoring
- **Web Vitals**: Core web vitals tracking
- **Lighthouse**: Performance auditing
- **Bundle Analyzer**: Bundle size monitoring

### User Analytics
- **Google Analytics**: User behavior tracking
- **Error Tracking**: Application error monitoring
- **Performance Metrics**: Real user monitoring

## 🔧 Development Guidelines

### Code Standards
- **ESLint**: Enforced code quality rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict type checking
- **Commit Convention**: Conventional commits

### Git Workflow
```bash
# Feature branch workflow
git checkout -b feature/new-feature
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

## 🤝 Contributing

We welcome contributions from the community!

### How to Contribute
1. **Fork the Repository**: Create your own fork
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Make Changes**: Implement your feature or fix
4. **Add Tests**: Ensure your changes are tested
5. **Commit Changes**: `git commit -m 'feat: add amazing feature'`
6. **Push Branch**: `git push origin feature/amazing-feature`
7. **Open Pull Request**: Submit your changes for review

### Development Setup
```bash
# Fork and clone
git clone https://github.com/your-username/handbook.git
cd handbook

# Install dependencies
npm install

# Start development
npm run dev

# Run tests
npm test
```

### Contribution Guidelines
- Follow existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR
- Use meaningful commit messages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Original Handbook**: Inspired by the software development handbook
- **Persian Community**: Thanks to the Persian developer community
- **Contributors**: All contributors who help improve this project
- **Open Source**: Built with amazing open source technologies

## 📞 Support & Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/ghaninia/handbook/issues)
- **Discussions**: [Community discussions](https://github.com/ghaninia/handbook/discussions)
- **Website**: [ghaninia.ir](https://ghaninia.ir)

## 🗺️ Roadmap

### Current Version (v1.0)
- ✅ Complete RTL implementation
- ✅ Dark/Light theme support
- ✅ Responsive design
- ✅ Search functionality
- ✅ All major design patterns

### Future Versions
- 🔄 Advanced search with filters
- 🔄 User bookmarks and favorites
- 🔄 Interactive code examples
- 🔄 Multi-language support
- 🔄 Offline support (PWA)
- 🔄 Community contributions system

---

**Made with ❤️ for the Persian developer community**

*If you find this project helpful, please consider giving it a ⭐ on GitHub!*
