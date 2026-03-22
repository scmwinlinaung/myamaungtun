# Dino Atelier Portfolio Website

A modern, responsive portfolio website for Dino Atelier - a professional videographer specializing in lifestyle content, short films, and automotive media.

## 🚀 Features

- **Modern UI/UX Design**: Clean, minimalist design with smooth animations
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Interactive Portfolio**: Video showcase with category filtering
- **Image Gallery**: Lightbox functionality with navigation
- **Smooth Animations**: Powered by Framer Motion
- **Social Media Integration**: Instagram, Facebook, and contact options
- **Fast Performance**: Built with Vite for optimal loading times
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/myamaungtun.git
cd myamaungtun
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages

The project is configured for automatic deployment to GitHub Pages. Push to the `main` branch to trigger deployment.

## 📁 Project Structure

```
myamaungtun/
├── public/
│   └── images/           # Portfolio images
├── src/
│   ├── components/       # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  # Portfolio content data
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .github/
│   └── workflows/        # GitHub Actions CI/CD
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/data/portfolioData.js` to update:
- Video links and thumbnails
- Gallery images
- Social media links
- Services and descriptions

### Modify Styling

Customize colors and fonts in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a1a1a',
      secondary: '#2a2a2a',
      accent: '#f59e0b',
    }
  }
}
```

## 🚦 CI/CD Pipeline

The project includes GitHub Actions workflows for:

1. **CI Pipeline** (`.github/workflows/ci.yml`)
   - Runs on every push and PR
   - Lints code
   - Builds project
   - Reports build size

2. **Deploy Pipeline** (`.github/workflows/deploy.yml`)
   - Triggers on push to main
   - Runs tests
   - Builds production bundle
   - Deploys to GitHub Pages

## 📱 Sections

1. **Hero**: Eye-catching introduction with animated background
2. **About**: Personal story and expertise overview
3. **Services**: Detailed service offerings
4. **Portfolio**: Video showcase with filtering
5. **Gallery**: Image gallery with lightbox
6. **Contact**: Social links and contact information

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Dino Mg** - Dino Atelier

- Portfolio: [dinoatelier.com](https://dinoatelier.com)
- Instagram: [@ddinonick](https://www.instagram.com/ddinonick)
- Facebook: [Dino Atelier](https://www.facebook.com/share/17w1JEuT3g/)

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Animations by Framer Motion
- Icons from React Icons
