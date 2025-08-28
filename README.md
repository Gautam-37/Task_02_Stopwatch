# ChronoMaster ⏱️

A sleek, professional-grade stopwatch application built with vanilla JavaScript and modern CSS. Features a dark theme interface with glassmorphism effects, keyboard shortcuts, and advanced lap timing functionality.

![ChronoMaster Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![Version](https://img.shields.io/badge/Version-1.0.0-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Precision Timing**: Accurate to centiseconds (10ms intervals)
- **Modern UI**: Dark theme with glassmorphism effects and smooth animations
- **Keyboard Shortcuts**: Full keyboard control for efficient operation
- **Lap Tracking**: Record multiple laps with split time analysis
- **Performance Indicators**: Automatic detection of fastest/slowest laps
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Status Indicators**: Visual feedback with animated status dots
- **Professional Typography**: Clean, monospace fonts for precision display

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/chrono-master) *(Replace with your GitHub Pages URL)*

## 🎮 Controls

### Mouse Controls
- **Start/Pause**: Click the green/yellow button
- **Lap**: Click the blue "Lap" button (only when running)
- **Reset**: Click the red "Reset" button

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `SPACE` | Start/Pause timer |
| `L` | Record lap (when running) |
| `R` | Reset timer |

## 📱 Screenshots

### Main Interface
The clean, professional interface with the timer display and controls.

### Lap Tracking
Advanced lap tracking with performance indicators:
- ⚡ **Lightning bolt**: Fastest lap
- 🐌 **Snail**: Slowest lap
- **Numbers**: Regular laps

### Responsive Design
Fully responsive layout that adapts to any screen size.

## 🛠️ Installation

### Option 1: Download ZIP
1. Click the green "Code" button above
2. Select "Download ZIP"
3. Extract the files
4. Open `index.html` in your browser

### Option 2: Clone Repository
```bash
git clone https://github.com/your-username/chrono-master.git
cd chrono-master
```

### Option 3: Use with Live Server (Recommended for Development)
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
chrono-master/
├── index.html          # Main HTML file with embedded styles and scripts
├── styles.css          # External CSS (optional - use if separating files)
├── script.js           # External JavaScript (optional - use if separating files)
└── README.md           # This file
```

## 🎨 Customization

### Color Scheme
The app uses CSS custom properties for easy theme customization:

```css
:root {
    --bg-primary: #0d1117;
    --accent-blue: #58a6ff;
    --accent-purple: #bc8cff;
    --accent-green: #56d364;
    --accent-orange: #f85149;
    --accent-yellow: #d29922;
}
```

### Fonts
- **Display Text**: Rajdhani (Google Fonts)
- **Timer/Code**: JetBrains Mono (Google Fonts)

## 🔧 Technical Details

### Built With
- **HTML5**: Semantic structure
- **CSS3**: Modern features including CSS Grid, Flexbox, and CSS Custom Properties
- **Vanilla JavaScript**: No frameworks or dependencies
- **Google Fonts**: Rajdhani and JetBrains Mono

### Browser Support
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (limited support)

### Performance
- **Lightweight**: No external dependencies
- **Smooth**: 60fps animations with hardware acceleration
- **Responsive**: Instant startup time

## 🚀 Deployment

### GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch
5. Your app will be available at: `https://your-username.github.io/chrono-master`

### Other Platforms
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **Surge.sh**: Use the command line tool

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -am 'Add some feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

### Suggested Improvements
- [ ] Sound effects for button clicks
- [ ] Export lap times to CSV
- [ ] Multiple timer sessions
- [ ] Custom time formats
- [ ] Themes/color schemes
- [ ] PWA support for offline usage

## 📋 Changelog

### v1.0.0 (Current)
- Initial release
- Basic stopwatch functionality
- Lap timing with performance indicators
- Responsive design
- Keyboard shortcuts
- Modern glassmorphism UI

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Name](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Inspired by modern stopwatch applications
- Google Fonts for typography
- CSS-Tricks for advanced CSS techniques
- MDN Web Docs for JavaScript references

## 📞 Support

If you have any questions or run into issues, please [open an issue](https://github.com/your-username/chrono-master/issues) on GitHub.

---

⭐ **If you found this project helpful, please give it a star!** ⭐
