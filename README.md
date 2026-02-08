![Vue](https://img.shields.io/badge/Vue-2-green?logo=vue.js)
![Leaflet](https://img.shields.io/badge/Leaflet-Map-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss)
![Dashboard](https://img.shields.io/badge/Admin-Dashboard-black)
# Enhanced Vue 2 Admin Panel with Interactive Heatmap# Admin Panel with Orders Heatmap



A professional, enterprise-level admin panel built with Vue 2, featuring an advanced interactive heatmap for visualizing Lucknow orders data. This project showcases modern web development practices with a beautiful dark theme and comprehensive data visualization capabilities.A comprehensive Vue 2 admin panel application with interactive map visualization for order distribution in Lucknow city.



## 🌟 Features## 🚀 Features



### Core Admin Panel### Admin Panel Skeleton

- **Professional Dark Theme**: Sleek glassmorphism design with high contrast accessibility- **Modern Dashboard**: Clean and responsive admin interface

- **Responsive Layout**: Optimized for desktop and mobile devices- **Sidebar Navigation**: Intuitive navigation with the following sections:

- **Modern Navigation**: Sidebar and top navigation with smooth transitions  - Dashboard - Overview with key metrics and stats

- **Dashboard Overview**: Key metrics and performance indicators  - Orders - Complete order management interface

  - **Orders Heatmap** - Interactive map visualization (main feature)

### Advanced Heatmap Visualization  - Merchants - Partner management system

- **6 Dynamic Color Schemes**: Heat, Cool, Rainbow, Viridis, Plasma, and Inferno  - Customers - Customer database interface

- **Real-time Data Simulation**: Live updates with smooth animations  - Settings - Admin configuration panel

- **Interactive Clustering**: Smart grouping of nearby data points- **Top Navigation Bar**: Clean header with admin details and notifications

- **Advanced Filtering**: Filter by date range, order value, and delivery status

- **Export Capabilities**: Download heatmap as PNG image### Orders Heatmap Visualization

- **Custom Popups**: Detailed order information on hover/click- **Interactive Map**: Full-screen Leaflet-powered map centered on Lucknow, India

- **Responsive Controls**: Intuitive toggle switches and sliders- **Real-time Data**: 33 dummy orders with realistic Lucknow coordinates

- **Dual Visualization**:

### Technical Highlights  - **Individual Markers**: Color-coded order markers by status

- **Vue 2.7.14**: Latest Vue 2 with Composition API support  - **Heatmap Layer**: Intensity visualization showing order concentration areas

- **Leaflet Integration**: Professional mapping with heatmap plugin- **Advanced Features**:

- **Tailwind CSS**: Utility-first styling with custom dark theme  - Click-to-view order details with comprehensive tooltips

- **Component Architecture**: Modular, reusable components  - Status-based filtering (All, Delivered, Pending, Processing, Cancelled)

- **Performance Optimized**: Efficient rendering and data handling  - Toggle between heatmap and marker views

  - Real-time statistics dashboard

## 🚀 Live Demo- **Order Information**: Each order includes:

  - Order ID, Customer name, Location details

Experience the admin panel with all its features:  - Order amount, Status, Timestamp

1. Navigate through different sections using the sidebar  - Precise lat/lon coordinates within Lucknow bounds

2. Explore the interactive heatmap with various visualization options

3. Toggle real-time simulation to see live data updates### Technical Implementation

4. Test different color schemes and filtering options- **Vue 2** with Vue Router for SPA navigation

- **Tailwind CSS** for modern, responsive styling

## 🛠️ Installation & Setup- **Leaflet Maps** for professional map visualization

- **Component Architecture**: Modular design with reusable components

### Prerequisites- **Responsive Design**: Works seamlessly on desktop and mobile devices

- Node.js 18+ 

- npm or yarn## 📋 Order Data Structure



### Installation Steps```json

{

1. **Clone the repository**  "order_id": 101,

   ```bash  "tenant_id": 1003,

   git clone https://github.com/yourusername/enhanced-admin-panel.git  "user_id": 1014,

   cd enhanced-admin-panel  "location_lat_lon": [26.8467, 80.9462],

   ```  "city": "Lucknow",

  "area": "Hazratganj",

2. **Install dependencies**  "customer_name": "Rahul Sharma",

   ```bash  "amount": 899,

   npm install  "status": "delivered",

   ```  "timestamp": "2024-09-21T10:30:00Z"

}

3. **Start development server**```

   ```bash

   npm run serve## 🛠️ Installation & Setup

   ```

### Prerequisites

4. **Open in browser**- Node.js (v14 or higher)

   ```- npm (v6 or higher)

   http://localhost:8080

   ```### Quick Start



## 📁 Project Structure1. **Clone the repository**

   ```bash

```   git clone <repository-url>

src/   cd admin-panel-heatmap

├── components/          # Reusable UI components   ```

│   ├── Navbar.vue      # Top navigation bar

│   └── Sidebar.vue     # Side navigation menu2. **Install dependencies**

├── views/              # Page components   ```bash

│   ├── Dashboard.vue   # Main dashboard overview   npm install

│   ├── OrdersHeatmap.vue # Advanced heatmap visualization   ```

│   ├── Orders.vue      # Orders management

│   ├── Customers.vue   # Customer management3. **Start development server**

│   ├── Merchants.vue   # Merchant management   ```bash

│   └── Settings.vue    # Application settings   npm run serve

├── data/               # Static data files   ```

│   └── orders.json     # Sample Lucknow orders data

├── assets/             # Static assets4. **Open in browser**

│   └── css/           # Global styles   Navigate to `http://localhost:8080`

└── router/             # Vue Router configuration

```### Available Scripts



## 🎨 Heatmap Features```bash

# Development server

### Color Schemesnpm run serve

- **Heat**: Classic red-yellow gradient

- **Cool**: Blue-cyan gradient for cool visualizations# Production build

- **Rainbow**: Full spectrum for maximum differentiationnpm run build

- **Viridis**: Perceptually uniform color scale

- **Plasma**: High contrast purple-pink gradient# Development with auto-reload

- **Inferno**: Dark background with bright highlightsnpm run dev

```

### Interactive Controls

- **Intensity Slider**: Adjust heatmap intensity (0.1 - 2.0)## 🗂️ Project Structure

- **Radius Control**: Modify point radius (10-50 pixels)

- **Blur Effect**: Smooth gradient transitions (5-25 pixels)```

- **Real-time Toggle**: Enable/disable live data simulationsrc/

- **Clustering**: Group nearby points for better visualization├── components/          # Reusable UI components

- **Export Function**: Save heatmap as high-quality PNG│   ├── Navbar.vue      # Top navigation bar

│   └── Sidebar.vue     # Sidebar navigation

### Data Visualization├── views/              # Page components

- **Order Distribution**: Visualize order density across Lucknow│   ├── Dashboard.vue   # Main dashboard

- **Value Mapping**: Color intensity based on order values│   ├── Orders.vue      # Orders management

- **Status Filtering**: Filter by delivery status (Pending, Delivered, Cancelled)│   ├── OrdersHeatmap.vue # Interactive map (main feature)

- **Date Range**: Time-based filtering for historical analysis│   ├── Merchants.vue   # Merchant management

- **Interactive Popups**: Detailed order information on interaction│   ├── Customers.vue   # Customer interface

│   └── Settings.vue    # Admin settings

## 🛡️ Technologies Used├── router/             # Vue Router configuration

│   └── index.js        # Route definitions

- **Frontend Framework**: Vue 2.7.14├── data/               # Static data files

- **Mapping Library**: Leaflet 1.9.4 with HeatLayer plugin│   └── orders.json     # Dummy order dataset (33 orders)

- **CSS Framework**: Tailwind CSS 3.4.0├── assets/             # Static assets

- **Build Tool**: Vue CLI with Webpack│   └── css/

- **Package Manager**: npm│       └── main.css    # Tailwind CSS imports

- **Version Control**: Git├── App.vue             # Main application component

└── main.js             # Application entry point

## 🎯 Use Cases```



- **Business Intelligence**: Analyze order patterns and distribution## 🎨 Design & Styling

- **Logistics Planning**: Optimize delivery routes based on order density

- **Market Analysis**: Identify high-demand areas for business expansion- **Design System**: Professional admin panel with clean, modern aesthetics

- **Performance Monitoring**: Track real-time order processing- **Color Scheme**: Blue primary colors with status-based color coding

- **Data Visualization**: Present complex data in an intuitive format- **Typography**: Inter font family for optimal readability

- **Icons**: Heroicons for consistent iconography

## 🔧 Customization- **Responsive**: Mobile-first design with breakpoint optimization



### Adding New Color Schemes### Status Color Coding

```javascript- 🟢 **Delivered**: Green (`#10b981`)

// In OrdersHeatmap.vue- 🟡 **Pending**: Yellow (`#f59e0b`)

colorSchemes: {- 🔵 **Processing**: Blue (`#3b82f6`)

  yourScheme: {- 🔴 **Cancelled**: Red (`#ef4444`)

    name: 'Your Custom Scheme',

    gradient: {## 🗺️ Map Features

      0.0: 'your-start-color',

      1.0: 'your-end-color'### Interactive Controls

    }- **Heatmap Toggle**: Show/hide intensity visualization

  }- **Marker Toggle**: Show/hide individual order markers

}- **Status Filter**: Filter orders by delivery status

```- **Zoom Controls**: Standard map navigation



### Modifying Data Sources### Order Details Popup

Replace `src/data/orders.json` with your own data following the same structure:Clicking any marker reveals:

```json- Order ID and customer information

{- Delivery location and area

  "orders": [- Order amount and current status

    {- Timestamp of order placement

      "id": "unique-id",

      "latitude": 26.8467,## 📊 Dummy Data

      "longitude": 80.9462,

      "value": 1250,The application includes 33 realistic dummy orders with:

      "status": "Delivered",- **Geographic Coverage**: Orders distributed across major Lucknow areas

      "customerName": "Customer Name",- **Realistic Coordinates**: All locations within Lucknow city bounds

      "orderDate": "2024-01-15",- **Diverse Data**: Various order amounts, statuses, and customers

      "deliveryAddress": "Full Address"- **Time Distribution**: Orders spread across recent timestamps

    }

  ]### Coverage Areas

}- Hazratganj, Gomti Nagar, Indira Nagar

```- Aliganj, Chowk, Mahanagar, Alambagh

- Jankipuram, Chinhat, Aminabad, Rajajipuram

## 📱 Responsive Design- And 20+ more authentic Lucknow localities



The admin panel is fully responsive and works seamlessly across:## 🔧 Configuration

- **Desktop**: Full-featured experience with sidebar navigation

- **Tablet**: Optimized layout with collapsible sidebar### Environment Variables

- **Mobile**: Touch-friendly interface with mobile-first designThe application supports standard Vue CLI environment configuration.



## 🚀 Performance Features### Map Configuration

- **Center**: Lucknow, India (26.8467°N, 80.9462°E)

- **Lazy Loading**: Components loaded on demand- **Zoom Level**: 12 (city-wide view)

- **Optimized Rendering**: Efficient Vue rendering with computed properties- **Tile Provider**: OpenStreetMap

- **Memory Management**: Proper cleanup of map instances and event listeners- **Attribution**: Proper map attribution included

- **Smooth Animations**: Hardware-accelerated CSS transitions

- **Responsive Images**: Optimized assets for different screen sizes## 🚀 Deployment



## 🤝 Contributing### Production Build

```bash

1. Fork the repositorynpm run build

2. Create a feature branch (`git checkout -b feature/amazing-feature`)```

3. Commit your changes (`git commit -m 'Add amazing feature'`)

4. Push to the branch (`git push origin feature/amazing-feature`)The build artifacts will be stored in the `dist/` directory.

5. Open a Pull Request

### Deployment Options

## 📄 License- Static hosting (Netlify, Vercel, GitHub Pages)

- Traditional web servers (Apache, Nginx)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.- Container deployment (Docker)



## 🙏 Acknowledgments## 🔮 Future Enhancements



- Vue.js team for the excellent framework- Real-time order updates via WebSocket

- Leaflet community for the mapping library- Advanced analytics and reporting

- Tailwind CSS for the utility-first CSS framework- Export functionality for map data

- OpenStreetMap for the map data- Additional map layers (traffic, demographics)

- Multi-city support

## 📞 Contact- Advanced filtering and search capabilities



For questions, suggestions, or collaboration opportunities, please reach out through GitHub issues or contact the repository owner.## 🤝 Contributing



---1. Fork the repository

2. Create a feature branch

**Built with ❤️ using Vue 2, Leaflet, and modern web technologies**3. Commit your changes
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
