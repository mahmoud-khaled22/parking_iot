# UniPark IoT - Smart Parking Dashboard

A smart parking management dashboard built with React and Tailwind CSS.

## Features

- 🚗 Real-time parking slot status display
- 🚪 Gate control system
- 📊 Parking statistics (Total/Occupied/Available)
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS

## Technologies

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing

## Installation

```bash
npm install
```

## Usage

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.jsx   # Main dashboard
│   ├── Header.jsx      # Header component
│   ├── Sidebar.jsx     # Sidebar navigation
│   ├── SlotCard.jsx    # Parking slot card
│   ├── GateControl.jsx # Gate control
│   └── DeviceStatus.jsx # Device status
├── data/               # Mock data
│   └── mockData.js     # Sample data
├── styles/             # Styles
│   └── index.css       # Main CSS
├── App.jsx             # Main component
└── main.jsx            # Entry point
```

## License

MIT
