# Admin Panel with Orders Heatmap

A comprehensive Vue 2 admin panel application with interactive map visualization for order distribution in Lucknow city.

## 🚀 Features

### Admin Panel Skeleton
- **Modern Dashboard**: Clean and responsive admin interface
- **Sidebar Navigation**: Intuitive navigation with the following sections:
  - Dashboard - Overview with key metrics and stats
  - Orders - Complete order management interface
  - **Orders Heatmap** - Interactive map visualization (main feature)
  - Merchants - Partner management system
  - Customers - Customer database interface
  - Settings - Admin configuration panel
- **Top Navigation Bar**: Clean header with admin details and notifications

### Orders Heatmap Visualization
- **Interactive Map**: Full-screen Leaflet-powered map centered on Lucknow, India
- **Real-time Data**: 33 dummy orders with realistic Lucknow coordinates
- **Dual Visualization**:
  - **Individual Markers**: Color-coded order markers by status
  - **Heatmap Layer**: Intensity visualization showing order concentration areas
- **Advanced Features**:
  - Click-to-view order details with comprehensive tooltips
  - Status-based filtering (All, Delivered, Pending, Processing, Cancelled)
  - Toggle between heatmap and marker views
  - Real-time statistics dashboard
- **Order Information**: Each order includes:
  - Order ID, Customer name, Location details
  - Order amount, Status, Timestamp
  - Precise lat/lon coordinates within Lucknow bounds

### Technical Implementation
- **Vue 2** with Vue Router for SPA navigation
- **Tailwind CSS** for modern, responsive styling
- **Leaflet Maps** for professional map visualization
- **Component Architecture**: Modular design with reusable components
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📋 Order Data Structure

```json
{
  "order_id": 101,
  "tenant_id": 1003,
  "user_id": 1014,
  "location_lat_lon": [26.8467, 80.9462],
  "city": "Lucknow",
  "area": "Hazratganj",
  "customer_name": "Rahul Sharma",
  "amount": 899,
  "status": "delivered",
  "timestamp": "2024-09-21T10:30:00Z"
}
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admin-panel-heatmap
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
# Development server
npm run serve

# Production build
npm run build

# Development with auto-reload
npm run dev
```

## 🗂️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.vue      # Top navigation bar
│   └── Sidebar.vue     # Sidebar navigation
├── views/              # Page components
│   ├── Dashboard.vue   # Main dashboard
│   ├── Orders.vue      # Orders management
│   ├── OrdersHeatmap.vue # Interactive map (main feature)
│   ├── Merchants.vue   # Merchant management
│   ├── Customers.vue   # Customer interface
│   └── Settings.vue    # Admin settings
├── router/             # Vue Router configuration
│   └── index.js        # Route definitions
├── data/               # Static data files
│   └── orders.json     # Dummy order dataset (33 orders)
├── assets/             # Static assets
│   └── css/
│       └── main.css    # Tailwind CSS imports
├── App.vue             # Main application component
└── main.js             # Application entry point
```

## 🎨 Design & Styling

- **Design System**: Professional admin panel with clean, modern aesthetics
- **Color Scheme**: Blue primary colors with status-based color coding
- **Typography**: Inter font family for optimal readability
- **Icons**: Heroicons for consistent iconography
- **Responsive**: Mobile-first design with breakpoint optimization

### Status Color Coding
- 🟢 **Delivered**: Green (`#10b981`)
- 🟡 **Pending**: Yellow (`#f59e0b`)
- 🔵 **Processing**: Blue (`#3b82f6`)
- 🔴 **Cancelled**: Red (`#ef4444`)

## 🗺️ Map Features

### Interactive Controls
- **Heatmap Toggle**: Show/hide intensity visualization
- **Marker Toggle**: Show/hide individual order markers
- **Status Filter**: Filter orders by delivery status
- **Zoom Controls**: Standard map navigation

### Order Details Popup
Clicking any marker reveals:
- Order ID and customer information
- Delivery location and area
- Order amount and current status
- Timestamp of order placement

## 📊 Dummy Data

The application includes 33 realistic dummy orders with:
- **Geographic Coverage**: Orders distributed across major Lucknow areas
- **Realistic Coordinates**: All locations within Lucknow city bounds
- **Diverse Data**: Various order amounts, statuses, and customers
- **Time Distribution**: Orders spread across recent timestamps

### Coverage Areas
- Hazratganj, Gomti Nagar, Indira Nagar
- Aliganj, Chowk, Mahanagar, Alambagh
- Jankipuram, Chinhat, Aminabad, Rajajipuram
- And 20+ more authentic Lucknow localities

## 🔧 Configuration

### Environment Variables
The application supports standard Vue CLI environment configuration.

### Map Configuration
- **Center**: Lucknow, India (26.8467°N, 80.9462°E)
- **Zoom Level**: 12 (city-wide view)
- **Tile Provider**: OpenStreetMap
- **Attribution**: Proper map attribution included

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options
- Static hosting (Netlify, Vercel, GitHub Pages)
- Traditional web servers (Apache, Nginx)
- Container deployment (Docker)

## 🔮 Future Enhancements

- Real-time order updates via WebSocket
- Advanced analytics and reporting
- Export functionality for map data
- Additional map layers (traffic, demographics)
- Multi-city support
- Advanced filtering and search capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Vue.js team for the excellent framework
- Leaflet for the mapping library
- Tailwind CSS for the styling framework
- OpenStreetMap for map tiles

---

**Built with ❤️ for Hyperzod Admin Panel**