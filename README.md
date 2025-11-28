# MRISA CyberNexus

The official website for MRISA (Information Security Association) Club - a premier student-led cybersecurity organization dedicated to fostering a community passionate about information security.

## 🛡️ About

MRISA is dedicated to bridging the gap between academic theory and industry reality through hands-on training, competitions, and real-world cybersecurity experience. Founded in 2018, we've grown from a small study group to one of the most active technical organizations, consistently placing in national Capture The Flag competitions.

## ✨ Features

- **Modern Tech Stack**: Built with React, TypeScript, and Vite for blazing-fast performance
- **Responsive Design**: Fully responsive design with shadcn/ui components
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Express Backend**: Robust server-side implementation with Express.js
- **Database Integration**: Neon PostgreSQL with Drizzle ORM
- **Cyber-themed UI**: Custom cyber-styled components including GlitchText and CyberCard

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MrisaCyberNexus
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with necessary configuration.

4. Push database schema:
```bash
npm run db:push
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at **http://localhost:5000**

### Production Build

Build the application for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run dev:client` | Start Vite dev server only (port 5000) |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run check` | Run TypeScript type checking |
| `npm run db:push` | Push database schema changes |

## 🏗️ Project Structure

```
MrisaCyberNexus/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── layout/   # Layout components (Navbar, etc.)
│   │   │   ├── ui/       # UI components (shadcn/ui)
│   │   │   └── utils/    # Utility components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and configs
│   │   └── App.tsx       # Main app component
│   └── index.html
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── vite.ts           # Vite middleware
│   └── storage.ts        # Storage utilities
├── shared/               # Shared code between client/server
│   └── schema.ts         # Database schema
├── script/              # Build scripts
└── package.json
```

## 🎨 Key Pages

- **Home**: Landing page with club introduction and features
- **About**: Detailed information about MRISA and our mission
- **Team**: Meet the club leadership and team members
- **Events**: Upcoming workshops, CTFs, and training sessions
- **Resources**: Learning materials and club documentation
- **Join**: Membership information and application

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Wouter** - Lightweight routing
- **TanStack Query** - Data fetching and caching
- **Framer Motion** - Animations
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Styling
- **Radix UI** - Headless UI primitives

### Backend
- **Express** - Web framework
- **TypeScript** - Type safety
- **Drizzle ORM** - Database ORM
- **Neon PostgreSQL** - Database

### DevOps
- **tsx** - TypeScript execution
- **cross-env** - Cross-platform environment variables
- **esbuild** - Fast JavaScript bundler

## 🎯 Core Features

### Offensive Security
Master ethical hacking, penetration testing, and vulnerability assessment in state-of-the-art labs.

### Defensive Operations
Learn enterprise-grade blue team tactics, threat hunting, and incident response protocols.

### Research & Analysis
Contribute to open-source security tools and publish research on emerging threats and zero-day vulnerabilities.

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📝 License

MIT License - see LICENSE file for details.

## 📧 Contact

For more information about MRISA Club, visit our website or reach out to our team members.

---

© 2025 MRISA Club. All rights reserved.
