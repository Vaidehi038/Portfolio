# Vaidehi Gandhi - Portfolio Website

A modern, responsive portfolio website showcasing my education, skills, experience, and projects.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Interactive Elements**: Hover effects and transitions throughout
- **React-based**: Built with React and Vite for optimal performance

## 🛠️ Technologies Used

- React 18
- Vite
- React Icons
- CSS3 (Custom styling with modern design patterns)

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 Deployment

This portfolio can be deployed to various platforms:

### Vercel
1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Netlify
1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run deploy`

## 📝 Customization

To customize the portfolio:

1. **Update personal information**: Edit the component files in `src/components/`
2. **Modify colors**: Update CSS variables in `src/index.css`
3. **Add/remove sections**: Modify `src/App.jsx` and create new components
4. **Update styling**: Edit the corresponding CSS files for each component

## 📧 Contact

- **Email**: vaidehigandhi870@gmail.com
- **Phone**: +1 (669) 499-8327
- **LinkedIn**: [linkedin.com/in/vaidehigandhi](https://linkedin.com/in/vaidehigandhi)
- **GitHub**: [github.com/Vaidehi038](https://github.com/Vaidehi038)

## 📄 License

This project is open source and available under the MIT License.

