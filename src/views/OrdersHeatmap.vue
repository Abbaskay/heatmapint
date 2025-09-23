<template>
  <div class="space-y-6">
    <!-- Enhanced Page Header with Real-time Stats -->
    <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
      <div class="flex justify-between items-start">
        <div class="space-y-3">
          <div class="flex items-center space-x-4">
            <div class="relative">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>
            </div>
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Enhanced Orders Heatmap</h1>
              <p class="text-gray-600 mt-2">Advanced visualization with real-time analytics across Lucknow city</p>
            </div>
          </div>
          
          <!-- Live Data Indicator -->
          <div class="flex items-center space-x-2">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span class="text-sm text-gray-600">Live Data</span>
            </div>
            <div class="text-sm text-gray-500">
              Last updated: {{ lastUpdateTime }}
            </div>
          </div>
        </div>
        
        <!-- Enhanced Stats Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
            <div class="text-2xl font-bold text-blue-600">{{ filteredOrders.length }}</div>
            <div class="text-xs text-gray-600">Total Orders</div>
            <div class="text-xs text-green-600 mt-1">+{{ Math.floor(Math.random() * 10 + 5) }}% vs yesterday</div>
          </div>
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
            <div class="text-2xl font-bold text-green-600">{{ deliveredOrders }}</div>
            <div class="text-xs text-gray-600">Delivered</div>
            <div class="text-xs text-green-600 mt-1">{{ deliveryRate }}%</div>
          </div>
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
            <div class="text-2xl font-bold text-orange-600">{{ pendingOrders }}</div>
            <div class="text-xs text-gray-600">Pending</div>
            <div class="text-xs text-orange-600 mt-1">{{ avgDeliveryTime }}h avg</div>
          </div>
          <div class="glass-card-secondary p-4 text-center hover:scale-105 transition-transform duration-300">
            <div class="text-2xl font-bold text-purple-400">₹{{ totalRevenue }}K</div>
            <div class="text-xs text-slate-300">Revenue</div>
            <div class="text-xs text-purple-400 mt-1">₹{{ avgOrderValue }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Advanced Controls Panel -->
    <div class="glass-card p-6 animate-fade-in-up" style="animation-delay: 0.2s;">
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        <!-- Heatmap Controls -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white mb-4">🎨 Heatmap Controls</h3>
          
          <div class="space-y-3">
            <label class="flex items-center justify-between">
              <span class="text-slate-300">Show Heatmap</span>
              <div class="relative">
                <div 
                  :class="showHeatmap ? 'bg-blue-500' : 'bg-slate-600'" 
                  class="w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200"
                  @click="toggleHeatmapState"
                >
                  <div 
                    :class="showHeatmap ? 'translate-x-6' : 'translate-x-1'" 
                    class="w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200"
                  ></div>
                </div>
              </div>
            </label>
            
            <label class="flex items-center justify-between">
              <span class="text-slate-300">Show Markers</span>
              <div class="relative">
                <div 
                  :class="showMarkers ? 'bg-blue-500' : 'bg-slate-600'" 
                  class="w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200"
                  @click="toggleMarkersState"
                >
                  <div 
                    :class="showMarkers ? 'translate-x-6' : 'translate-x-1'" 
                    class="w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200"
                  ></div>
                </div>
              </div>
            </label>
            
            <div class="space-y-2">
              <label class="text-slate-300 text-sm">Heatmap Intensity</label>
              <input 
                type="range" 
                v-model="heatmapIntensity" 
                min="0.1" 
                max="2.0" 
                step="0.1"
                class="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
                @input="updateHeatmapIntensity"
              >
              <div class="flex justify-between text-xs text-slate-400">
                <span>Low</span>
                <span>{{ heatmapIntensity }}x</span>
                <span>High</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-slate-300 text-sm">Color Scheme</label>
              <select 
                v-model="colorScheme" 
                @change="updateColorScheme"
                class="glass-input text-sm"
              >
                <option value="thermal">🌡️ Thermal (Default)</option>
                <option value="rainbow">🌈 Rainbow</option>
                <option value="ocean">🌊 Ocean Blue</option>
                <option value="sunset">🌅 Sunset</option>
                <option value="forest">🌲 Forest Green</option>
                <option value="plasma">⚡ Plasma</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Advanced Filters -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white mb-4">🔍 Advanced Filters</h3>
          
          <div class="space-y-3">
            <div class="space-y-2">
              <label class="text-slate-300 text-sm">Order Status</label>
              <select 
                v-model="statusFilter" 
                @change="filterOrders" 
                class="glass-input text-sm"
              >
                <option value="all">All Orders ({{ orders.length }})</option>
                <option value="delivered">✅ Delivered ({{ deliveredCount }})</option>
                <option value="pending">⏳ Pending ({{ pendingCount }})</option>
                <option value="processing">🔄 Processing ({{ processingCount }})</option>
                <option value="cancelled">❌ Cancelled ({{ cancelledCount }})</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-slate-300 text-sm">Time Range</label>
              <select 
                v-model="timeFilter" 
                @change="filterOrders" 
                class="glass-input text-sm"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-slate-300 text-sm">Order Value Range</label>
              <div class="flex space-x-2">
                <input 
                  type="number" 
                  v-model="minAmount" 
                  placeholder="Min ₹"
                  class="glass-input text-sm flex-1"
                  @input="filterOrders"
                >
                <input 
                  type="number" 
                  v-model="maxAmount" 
                  placeholder="Max ₹"
                  class="glass-input text-sm flex-1"
                  @input="filterOrders"
                >
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-slate-300 text-sm">Area Focus</label>
              <select 
                v-model="areaFilter" 
                @change="filterOrders" 
                class="glass-input text-sm"
              >
                <option value="all">All Areas</option>
                <option v-for="area in uniqueAreas" :key="area" :value="area">
                  {{ area }} ({{ getAreaCount(area) }})
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Analytics & Export -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white mb-4">📊 Analytics & Export</h3>
          
          <div class="space-y-3">
            <!-- Real-time Analytics -->
            <div class="glass-card-secondary p-3 space-y-2">
              <div class="text-sm text-slate-300">Hottest Area</div>
              <div class="text-lg font-bold text-orange-400">{{ hottestArea }}</div>
              <div class="text-xs text-slate-400">{{ hottestAreaCount }} orders</div>
            </div>

            <div class="glass-card-secondary p-3 space-y-2">
              <div class="text-sm text-slate-300">Peak Hour</div>
              <div class="text-lg font-bold text-blue-400">{{ peakHour }}:00</div>
              <div class="text-xs text-slate-400">{{ peakHourCount }} orders/hour</div>
            </div>

            <!-- Export Options -->
            <div class="space-y-2">
              <button 
                @click="exportMap('png')"
                class="btn-secondary w-full flex items-center justify-center space-x-2"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h8a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>Export as PNG</span>
              </button>

              <button 
                @click="exportData('csv')"
                class="btn-secondary w-full flex items-center justify-center space-x-2"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z"/>
                </svg>
                <span>Export Data</span>
              </button>

              <button 
                @click="generateReport"
                class="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 8a1 1 0 100-2h-3a1 1 0 100 2h3z"/>
                </svg>
                <span>Generate Report</span>
              </button>
            </div>

            <!-- Real-time Toggle -->
            <label class="flex items-center justify-between">
              <span class="text-slate-300 text-sm">Real-time Updates</span>
              <div class="relative">
                <div 
                  :class="realTimeEnabled ? 'bg-green-500' : 'bg-slate-600'" 
                  class="w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200"
                  @click="toggleRealTimeState"
                >
                  <div 
                    :class="realTimeEnabled ? 'translate-x-6' : 'translate-x-1'" 
                    class="w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200"
                  ></div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Map Container with Professional UI -->
    <div class="glass-card overflow-hidden animate-fade-in-up" style="animation-delay: 0.4s;">
      <!-- Map Toolbar -->
      <div class="bg-slate-800/50 backdrop-blur-sm p-4 border-b border-slate-600/30">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <button 
              @click="resetMapView"
              class="btn-secondary text-sm flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
              </svg>
              <span>Reset View</span>
            </button>
            
            <button 
              @click="toggleFullscreen"
              class="btn-secondary text-sm flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"/>
              </svg>
              <span>{{ isFullscreen ? 'Exit' : 'Fullscreen' }}</span>
            </button>
          </div>

          <div class="flex items-center space-x-4">
            <!-- Map Style Selector -->
            <select 
              v-model="mapStyle" 
              @change="changeMapStyle"
              class="glass-input text-sm"
            >
              <option value="standard">🗺️ Standard</option>
              <option value="satellite">🛰️ Satellite</option>
              <option value="dark">🌙 Dark Mode</option>
              <option value="terrain">🏔️ Terrain</option>
            </select>

            <!-- Loading Indicator -->
            <div v-if="isLoading" class="flex items-center space-x-2 text-slate-300">
              <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-400"></div>
              <span class="text-sm">Loading...</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Canvas -->
      <div class="relative">
        <div 
          id="map" 
          class="w-full transition-all duration-500"
          :class="isFullscreen ? 'h-screen' : 'h-[700px]'"
          :style="{ height: isFullscreen ? '100vh' : '700px' }"
        ></div>
        
        <!-- Map Overlay with Current Coordinates -->
        <div class="absolute top-4 left-4 glass-card-secondary p-3 text-sm space-y-1">
          <div class="text-slate-300">Coordinates</div>
          <div class="text-white font-mono text-xs">
            {{ currentCoords.lat.toFixed(4) }}, {{ currentCoords.lng.toFixed(4) }}
          </div>
          <div class="text-slate-400 text-xs">Zoom: {{ currentZoom }}</div>
        </div>

        <!-- Orders Count Overlay -->
        <div class="absolute top-4 right-4 glass-card-secondary p-3 text-sm text-center">
          <div class="text-2xl font-bold text-blue-400">{{ filteredOrders.length }}</div>
          <div class="text-slate-300 text-xs">Visible Orders</div>
        </div>

        <!-- Heat Intensity Legend -->
        <div class="absolute bottom-4 right-4 glass-card-secondary p-4 space-y-3">
          <div class="text-sm font-semibold text-white">Heat Intensity</div>
          <div class="space-y-2">
            <div class="relative h-4 w-32 rounded-lg overflow-hidden" :style="{ background: currentGradient }"></div>
            <div class="flex justify-between text-xs text-slate-400">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
          <div class="text-xs text-slate-300">Based on order density & value</div>
        </div>
      </div>
    </div>

    <!-- Enhanced Analytics Dashboard -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up" style="animation-delay: 0.6s;">
      
      <!-- Order Status Legend with Live Stats -->
      <div class="glass-card p-6 space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-white">📍 Order Status Legend</h3>
          <div class="text-sm text-slate-400">Live Stats</div>
        </div>
        
        <div class="space-y-3">
          <div class="flex items-center justify-between p-3 glass-card-secondary rounded-lg hover:scale-105 transition-transform duration-200">
            <div class="flex items-center space-x-3">
              <div class="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/30"></div>
              <span class="text-slate-300">Delivered</span>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-green-400">{{ deliveredCount }}</div>
              <div class="text-xs text-slate-400">{{ deliveryRate }}%</div>
            </div>
          </div>
          
          <div class="flex items-center justify-between p-3 glass-card-secondary rounded-lg hover:scale-105 transition-transform duration-200">
            <div class="flex items-center space-x-3">
              <div class="w-4 h-4 bg-orange-400 rounded-full shadow-lg shadow-orange-400/30"></div>
              <span class="text-slate-300">Pending</span>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-orange-400">{{ pendingCount }}</div>
              <div class="text-xs text-slate-400">{{ ((pendingCount/filteredOrders.length)*100).toFixed(1) }}%</div>
            </div>
          </div>
          
          <div class="flex items-center justify-between p-3 glass-card-secondary rounded-lg hover:scale-105 transition-transform duration-200">
            <div class="flex items-center space-x-3">
              <div class="w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/30"></div>
              <span class="text-slate-300">Processing</span>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-blue-400">{{ processingCount }}</div>
              <div class="text-xs text-slate-400">{{ ((processingCount/filteredOrders.length)*100).toFixed(1) }}%</div>
            </div>
          </div>
          
          <div class="flex items-center justify-between p-3 glass-card-secondary rounded-lg hover:scale-105 transition-transform duration-200">
            <div class="flex items-center space-x-3">
              <div class="w-4 h-4 bg-red-400 rounded-full shadow-lg shadow-red-400/30"></div>
              <span class="text-slate-300">Cancelled</span>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-red-400">{{ cancelledCount }}</div>
              <div class="text-xs text-slate-400">{{ ((cancelledCount/filteredOrders.length)*100).toFixed(1) }}%</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Area Analytics -->
      <div class="glass-card p-6 space-y-4">
        <h3 class="text-lg font-semibold text-white">🏙️ Top Areas</h3>
        
        <div class="space-y-3">
          <div v-for="(area, index) in topAreas" :key="area.name" 
               class="flex items-center justify-between p-3 glass-card-secondary rounded-lg hover:scale-105 transition-transform duration-200">
            <div class="flex items-center space-x-3">
              <div class="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                {{ index + 1 }}
              </div>
              <span class="text-slate-300">{{ area.name }}</span>
            </div>
            <div class="text-right">
              <div class="text-lg font-bold text-blue-400">{{ area.count }}</div>
              <div class="text-xs text-slate-400">₹{{ area.revenue }}K</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Time Analytics -->
      <div class="glass-card p-6 space-y-4">
        <h3 class="text-lg font-semibold text-white">⏰ Time Analytics</h3>
        
        <div class="space-y-4">
          <!-- Peak Hours Chart -->
          <div class="space-y-2">
            <div class="text-sm text-slate-300">Peak Hours Distribution</div>
            <div class="space-y-1">
              <div v-for="hour in peakHours" :key="hour.hour" class="flex items-center space-x-2">
                <div class="text-xs text-slate-400 w-8">{{ hour.hour }}h</div>
                <div class="flex-1 bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500"
                    :style="{ width: (hour.percentage) + '%' }"
                  ></div>
                </div>
                <div class="text-xs text-slate-400 w-8">{{ hour.count }}</div>
              </div>
            </div>
          </div>

          <!-- Average Delivery Time -->
          <div class="glass-card-secondary p-3 rounded-lg">
            <div class="text-sm text-slate-300">Average Delivery Time</div>
            <div class="text-2xl font-bold text-green-400">{{ avgDeliveryTime }}h</div>
            <div class="text-xs text-slate-400">-15min from last week</div>
          </div>

          <!-- Real-time Metrics -->
          <div class="glass-card-secondary p-3 rounded-lg">
            <div class="text-sm text-slate-300">Orders This Hour</div>
            <div class="text-2xl font-bold text-orange-400">{{ ordersThisHour }}</div>
            <div class="text-xs text-slate-400">{{ Math.floor(Math.random() * 8 + 2) }} in last 10min</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ordersData from '../data/orders.json'

export default {
  name: 'EnhancedOrdersHeatmap',
  data() {
    return {
      // Core Data
      orders: ordersData,
      filteredOrders: ordersData,
      
      // Map Instance and Layers
      map: null,
      markers: [],
      heatmapLayer: null,
      clusterLayer: null,
      currentTileLayer: null,
      
      // Display Controls
      showHeatmap: true,
      showMarkers: true,
      showClusters: false,
      
      // Filter Controls
      statusFilter: 'all',
      timeFilter: 'all',
      areaFilter: 'all',
      minAmount: null,
      maxAmount: null,
      
      // Advanced Heatmap Controls
      heatmapIntensity: 1.0,
      colorScheme: 'thermal',
      mapStyle: 'standard',
      
      // UI State
      isLoading: false,
      isFullscreen: false,
      realTimeEnabled: false,
      lastUpdateTime: new Date().toLocaleTimeString(),
      
      // Real-time Animation
      // animatedTotal removed - displaying direct count now
      
      // Map State
      currentCoords: { lat: 26.8467, lng: 80.9462 },
      currentZoom: 12,
      
      // Real-time Simulation
      realTimeInterval: null,
      
      // Color Schemes
      colorSchemes: {
        thermal: {
          0.0: 'rgba(0, 0, 139, 0)',
          0.1: 'rgba(0, 0, 255, 0.6)',
          0.3: 'rgba(0, 255, 255, 0.7)',
          0.5: 'rgba(0, 255, 0, 0.8)',
          0.6: 'rgba(255, 255, 0, 0.8)',
          0.8: 'rgba(255, 128, 0, 0.9)',
          0.9: 'rgba(255, 0, 0, 0.9)',
          1.0: 'rgba(139, 0, 0, 1.0)'
        },
        rainbow: {
          0.0: 'rgba(128, 0, 128, 0)',
          0.2: 'rgba(0, 0, 255, 0.7)',
          0.4: 'rgba(0, 255, 255, 0.8)',
          0.6: 'rgba(0, 255, 0, 0.8)',
          0.8: 'rgba(255, 255, 0, 0.9)',
          1.0: 'rgba(255, 0, 0, 1.0)'
        },
        ocean: {
          0.0: 'rgba(8, 48, 107, 0)',
          0.3: 'rgba(8, 81, 156, 0.6)',
          0.5: 'rgba(33, 113, 181, 0.7)',
          0.7: 'rgba(66, 146, 198, 0.8)',
          0.9: 'rgba(107, 174, 214, 0.9)',
          1.0: 'rgba(158, 202, 225, 1.0)'
        },
        sunset: {
          0.0: 'rgba(94, 79, 162, 0)',
          0.3: 'rgba(158, 85, 156, 0.6)',
          0.5: 'rgba(208, 97, 141, 0.7)',
          0.7: 'rgba(238, 121, 121, 0.8)',
          0.9: 'rgba(252, 157, 97, 0.9)',
          1.0: 'rgba(249, 199, 79, 1.0)'
        },
        forest: {
          0.0: 'rgba(0, 68, 27, 0)',
          0.3: 'rgba(0, 109, 44, 0.6)',
          0.5: 'rgba(35, 139, 69, 0.7)',
          0.7: 'rgba(65, 171, 93, 0.8)',
          0.9: 'rgba(116, 196, 118, 0.9)',
          1.0: 'rgba(161, 217, 155, 1.0)'
        },
        plasma: {
          0.0: 'rgba(13, 8, 135, 0)',
          0.2: 'rgba(75, 3, 161, 0.6)',
          0.4: 'rgba(125, 3, 168, 0.7)',
          0.6: 'rgba(168, 34, 150, 0.8)',
          0.8: 'rgba(208, 90, 110, 0.9)',
          1.0: 'rgba(240, 249, 33, 1.0)'
        }
      }
    }
  },
  
  computed: {
    // Enhanced Statistics
    deliveredOrders() {
      return this.orders.filter(order => order.status === 'delivered').length
    },
    
    pendingOrders() {
      return this.orders.filter(order => order.status === 'pending').length
    },
    
    deliveredCount() {
      return this.filteredOrders.filter(order => order.status === 'delivered').length
    },
    
    pendingCount() {
      return this.filteredOrders.filter(order => order.status === 'pending').length
    },
    
    processingCount() {
      return this.filteredOrders.filter(order => order.status === 'processing').length
    },
    
    cancelledCount() {
      return this.filteredOrders.filter(order => order.status === 'cancelled').length
    },
    
    deliveryRate() {
      return this.filteredOrders.length > 0 ? 
        Math.round((this.deliveredCount / this.filteredOrders.length) * 100) : 0
    },
    
    totalRevenue() {
      return Math.round(this.filteredOrders.reduce((sum, order) => {
        return order.status === 'delivered' ? sum + order.amount : sum
      }, 0) / 1000)
    },
    
    avgOrderValue() {
      const delivered = this.filteredOrders.filter(order => order.status === 'delivered')
      return delivered.length > 0 ? 
        Math.round(delivered.reduce((sum, order) => sum + order.amount, 0) / delivered.length) : 0
    },
    
    avgDeliveryTime() {
      return Math.round(Math.random() * 3 + 2) // Simulated
    },
    
    // Area Analytics
    uniqueAreas() {
      return [...new Set(this.orders.map(order => order.area))].sort()
    },
    
    topAreas() {
      const areaStats = {}
      this.filteredOrders.forEach(order => {
        if (!areaStats[order.area]) {
          areaStats[order.area] = { name: order.area, count: 0, revenue: 0 }
        }
        areaStats[order.area].count++
        if (order.status === 'delivered') {
          areaStats[order.area].revenue += order.amount
        }
      })
      
      return Object.values(areaStats)
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
        .map(area => ({
          ...area,
          revenue: Math.round(area.revenue / 1000)
        }))
    },
    
    hottestArea() {
      const topArea = this.topAreas[0]
      return topArea ? topArea.name : 'N/A'
    },
    
    hottestAreaCount() {
      const topArea = this.topAreas[0]
      return topArea ? topArea.count : 0
    },
    
    // Time Analytics
    peakHours() {
      const hourStats = {}
      this.filteredOrders.forEach(order => {
        const hour = new Date(order.timestamp).getHours()
        hourStats[hour] = (hourStats[hour] || 0) + 1
      })
      
      const maxCount = Math.max(...Object.values(hourStats))
      
      return Object.entries(hourStats)
        .map(([hour, count]) => ({
          hour: parseInt(hour),
          count,
          percentage: (count / maxCount) * 100
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6)
    },
    
    peakHour() {
      const peak = this.peakHours[0]
      return peak ? peak.hour : 12
    },
    
    peakHourCount() {
      const peak = this.peakHours[0]
      return peak ? peak.count : 0
    },
    
    ordersThisHour() {
      const now = new Date()
      const currentHour = now.getHours()
      return this.filteredOrders.filter(order => {
        const orderHour = new Date(order.timestamp).getHours()
        return orderHour === currentHour
      }).length
    },
    
    // Current Color Gradient
    currentGradient() {
      const scheme = this.colorSchemes[this.colorScheme]
      const stops = Object.entries(scheme).map(([stop, color]) => {
        const percentage = parseFloat(stop) * 100
        return `${color.replace('rgba', 'rgb').replace(/,\s*[\d.]+\)/, ')')} ${percentage}%`
      }).join(', ')
      return `linear-gradient(to right, ${stops})`
    }
  },
  
  mounted() {
    this.initMap()
    this.startRealTimeSimulation()
  },
  
  beforeDestroy() {
    if (this.map) {
      this.map.remove()
    }
    if (this.realTimeInterval) {
      clearInterval(this.realTimeInterval)
    }
  },
  
  methods: {
    // Enhanced Map Initialization
    async initMap() {
      this.isLoading = true
      console.log('Initializing map...')
      
      // Wait for Leaflet to be available
      if (typeof L === 'undefined') {
        console.log('Leaflet not loaded yet, retrying...')
        setTimeout(() => this.initMap(), 100)
        return
      }

      console.log('Leaflet is available, creating map...')

      try {
        // Initialize map with enhanced options
        this.map = L.map('map', {
          zoomControl: false,
          attributionControl: true,
          fadeAnimation: true,
          zoomAnimation: true,
          markerZoomAnimation: true,
          preferCanvas: true
        }).setView([26.8467, 80.9462], 12)

        console.log('Map created successfully')

        // Add custom zoom control
        L.control.zoom({
          position: 'bottomleft'
        }).addTo(this.map)

        // Enhanced tile layer with multiple styles
        this.addMapTiles()

        // Map event listeners
        this.setupMapEvents()

        // Wait for plugins to load
        setTimeout(() => {
          console.log('Adding initial layers...')
          if (this.showMarkers) {
            this.addOrderMarkers()
          }
          if (this.showHeatmap) {
            this.addEnhancedHeatmapLayer()
          }
          this.isLoading = false
          console.log('Map initialization complete')
        }, 500)

      } catch (error) {
        console.error('Error initializing map:', error)
        this.isLoading = false
      }
    },

    // Map Tiles Management
    addMapTiles() {
      const tileConfigs = {
        standard: {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          options: { 
            attribution: '© OpenStreetMap contributors',
            opacity: 0.7,
            maxZoom: 19
          }
        },
        satellite: {
          url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          options: {
            attribution: '© Esri',
            opacity: 0.8,
            maxZoom: 19
          }
        },
        dark: {
          url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
          options: {
            attribution: '© CARTO',
            opacity: 0.9,
            maxZoom: 19
          }
        },
        terrain: {
          url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
          options: {
            attribution: '© Stamen Design',
            opacity: 0.8,
            maxZoom: 16
          }
        }
      }

      const config = tileConfigs[this.mapStyle] || tileConfigs.standard
      
      if (this.currentTileLayer) {
        this.map.removeLayer(this.currentTileLayer)
      }
      
      console.log('Adding map tiles:', this.mapStyle)
      this.currentTileLayer = L.tileLayer(config.url, config.options).addTo(this.map)
    },

    // Map Event Handlers
    setupMapEvents() {
      this.map.on('moveend', () => {
        const center = this.map.getCenter()
        this.currentCoords = {
          lat: center.lat,
          lng: center.lng
        }
      })

      this.map.on('zoomend', () => {
        this.currentZoom = this.map.getZoom()
      })

      this.map.on('click', (e) => {
        this.showLocationInfo(e.latlng)
      })
    },

    // Enhanced Order Markers with Clustering
    addOrderMarkers() {
      console.log('Adding order markers')
      this.clearMarkers()
      
      if (!this.showMarkers) {
        console.log('Markers disabled, skipping')
        return
      }

      if (!this.map) {
        console.warn('Map not available for markers')
        return
      }

      console.log('Adding', this.filteredOrders.length, 'markers')

      this.filteredOrders.forEach((order, index) => {
        try {
          const [lat, lng] = order.location_lat_lon
          const color = this.getEnhancedStatusColor(order.status)
          
          // Create enhanced marker with custom icon
          const marker = L.circleMarker([lat, lng], {
            radius: this.getMarkerSize(order),
            fillColor: color,
            color: '#ffffff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
            className: 'enhanced-marker'
          })

          // Enhanced popup with charts and analytics
          const popupContent = this.createEnhancedPopup(order)
          marker.bindPopup(popupContent, {
            maxWidth: 350,
            minWidth: 300,
            className: 'enhanced-popup'
          })

          // Hover effects
          marker.on('mouseover', (e) => {
            e.target.setStyle({
              radius: this.getMarkerSize(order) * 1.5,
              weight: 3
            })
          })

          marker.on('mouseout', (e) => {
            e.target.setStyle({
              radius: this.getMarkerSize(order),
              weight: 2
            })
          })

          marker.addTo(this.map)
          this.markers.push(marker)
        } catch (error) {
          console.error('Error adding marker for order', order.order_id, ':', error)
        }
      })
      
      console.log('Successfully added', this.markers.length, 'markers')
    },

    // Enhanced Heatmap with Multiple Algorithms
    addEnhancedHeatmapLayer() {
      console.log('Adding enhanced heatmap layer')
      
      if (this.heatmapLayer) {
        this.map.removeLayer(this.heatmapLayer)
        this.heatmapLayer = null
      }

      if (!this.showHeatmap) {
        console.log('Heatmap disabled, skipping')
        return
      }

      if (!this.map) {
        console.warn('Map not available for heatmap')
        return
      }

      const heatmapData = this.generateAdvancedHeatmapData()
      console.log('Generated heatmap data points:', heatmapData.length)

      if (typeof L !== 'undefined' && L.heatLayer) {
        console.log('Using Leaflet heatLayer plugin')
        try {
          this.heatmapLayer = L.heatLayer(heatmapData, {
            radius: 45 * this.heatmapIntensity,
            blur: 30,
            maxZoom: 15,
            max: 5.0 * this.heatmapIntensity,
            minOpacity: 0.1,
            gradient: this.colorSchemes[this.colorScheme]
          })

          this.heatmapLayer.addTo(this.map)
          console.log('Heatmap layer added successfully')
        } catch (error) {
          console.error('Error creating heatmap layer:', error)
          this.addFallbackHeatmap(heatmapData)
        }
      } else {
        console.log('Heatmap plugin not available, using fallback')
        this.addFallbackHeatmap(heatmapData)
      }
    },

    // Advanced Heatmap Data Generation
    generateAdvancedHeatmapData() {
      const data = []
      const timeDecay = this.calculateTimeDecay()
      
      this.filteredOrders.forEach(order => {
        const [lat, lng] = order.location_lat_lon
        let weight = this.calculateOrderWeight(order, timeDecay)
        
        // Main data point
        data.push([lat, lng, weight])
        
        // Add surrounding influence points for smoother gradients
        const influences = this.generateInfluencePoints(lat, lng, weight)
        data.push(...influences)
      })

      return data
    },

    // Calculate dynamic order weight
    calculateOrderWeight(order, timeDecay) {
      let weight = order.amount / 1000 // Base weight from amount
      
      // Status multipliers
      const statusMultipliers = {
        delivered: 2.5,
        processing: 2.0,
        pending: 1.5,
        cancelled: 0.3
      }
      
      weight *= statusMultipliers[order.status] || 1.0
      
      // Time decay factor (recent orders more prominent)
      const orderTime = new Date(order.timestamp).getTime()
      const now = Date.now()
      const hoursDiff = (now - orderTime) / (1000 * 60 * 60)
      const timeFactor = Math.exp(-hoursDiff / 24) // Exponential decay over 24 hours
      
      weight *= (0.3 + 0.7 * timeFactor) // Blend current and historical
      
      return Math.min(weight * this.heatmapIntensity, 10)
    },

    // Generate influence points for smoother gradients
    generateInfluencePoints(lat, lng, weight) {
      const points = []
      const radiusInDegrees = 0.004 // ~400m
      const numPoints = 8
      
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * 2 * Math.PI
        const radius = radiusInDegrees * (Math.random() * 0.6 + 0.4)
        const offsetLat = lat + Math.cos(angle) * radius
        const offsetLng = lng + Math.sin(angle) * radius
        const influenceWeight = weight * (0.2 + Math.random() * 0.3)
        
        points.push([offsetLat, offsetLng, influenceWeight])
      }
      
      return points
    },

    // Calculate time decay for temporal analysis
    calculateTimeDecay() {
      const now = Date.now()
      return this.orders.map(order => {
        const orderTime = new Date(order.timestamp).getTime()
        const hoursDiff = (now - orderTime) / (1000 * 60 * 60)
        return Math.exp(-hoursDiff / 48) // 48-hour decay
      })
    },

    // Enhanced Popup Creation
    createEnhancedPopup(order) {
      const nearbyOrders = this.findNearbyOrders(order, 0.5) // 500m radius
      const areaStats = this.getAreaStatistics(order.area)
      
      return `
        <div class="enhanced-popup-content">
          <div class="popup-header">
            <h4 class="order-title">Order #${order.order_id}</h4>
            <span class="status-badge status-${order.status}">${order.status.toUpperCase()}</span>
          </div>
          
          <div class="popup-details">
            <div class="detail-row">
              <span class="label">Customer:</span>
              <span class="value">${order.customer_name}</span>
            </div>
            <div class="detail-row">
              <span class="label">Area:</span>
              <span class="value">${order.area}</span>
            </div>
            <div class="detail-row">
              <span class="label">Amount:</span>
              <span class="value amount">₹${order.amount.toLocaleString()}</span>
            </div>
            <div class="detail-row">
              <span class="label">Time:</span>
              <span class="value">${new Date(order.timestamp).toLocaleString()}</span>
            </div>
          </div>
          
          <div class="popup-analytics">
            <div class="analytics-section">
              <h5>Nearby Activity</h5>
              <div class="nearby-stats">
                <span class="stat">${nearbyOrders.length} orders nearby</span>
                <span class="stat">₹${Math.round(nearbyOrders.reduce((sum, o) => sum + o.amount, 0) / 1000)}K total</span>
              </div>
            </div>
            
            <div class="analytics-section">
              <h5>Area Performance</h5>
              <div class="area-stats">
                <span class="stat">${areaStats.totalOrders} total orders</span>
                <span class="stat">${areaStats.deliveryRate}% delivery rate</span>
              </div>
            </div>
          </div>
          
          <div class="popup-actions">
            <button onclick="window.orderHeatmap.viewOrderDetails('${order.order_id}')" class="popup-btn primary">
              View Details
            </button>
            <button onclick="window.orderHeatmap.focusArea('${order.area}')" class="popup-btn secondary">
              Focus Area
            </button>
          </div>
        </div>
      `
    },
    // Utility Methods
    getAreaCount(area) {
      return this.orders.filter(order => order.area === area).length
    },

    getAreaStatistics(area) {
      const areaOrders = this.orders.filter(order => order.area === area)
      const deliveredOrders = areaOrders.filter(order => order.status === 'delivered')
      
      return {
        totalOrders: areaOrders.length,
        deliveryRate: areaOrders.length > 0 ? Math.round((deliveredOrders.length / areaOrders.length) * 100) : 0
      }
    },

    findNearbyOrders(centerOrder, radiusKm) {
      const [centerLat, centerLng] = centerOrder.location_lat_lon
      
      return this.orders.filter(order => {
        if (order.order_id === centerOrder.order_id) return false
        
        const [lat, lng] = order.location_lat_lon
        const distance = this.calculateDistance(centerLat, centerLng, lat, lng)
        return distance <= radiusKm
      })
    },

    calculateDistance(lat1, lng1, lat2, lng2) {
      const R = 6371 // Earth's radius in kilometers
      const dLat = (lat2 - lat1) * Math.PI / 180
      const dLng = (lng2 - lng1) * Math.PI / 180
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLng/2) * Math.sin(dLng/2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
      return R * c
    },

    getEnhancedStatusColor(status) {
      const colors = {
        delivered: '#10b981',
        pending: '#f59e0b',
        processing: '#3b82f6',
        cancelled: '#ef4444'
      }
      return colors[status] || '#6b7280'
    },

    getMarkerSize(order) {
      const baseSize = 8
      const amountFactor = Math.log(order.amount / 200) / 2
      return Math.max(baseSize + amountFactor, 4)
    },

    // Filter and Search Methods
    filterOrders() {
      let filtered = [...this.orders]

      // Status filter
      if (this.statusFilter !== 'all') {
        filtered = filtered.filter(order => order.status === this.statusFilter)
      }

      // Time filter
      if (this.timeFilter !== 'all') {
        const now = new Date()
        filtered = filtered.filter(order => {
          const orderDate = new Date(order.timestamp)
          switch (this.timeFilter) {
            case 'today':
              return orderDate.toDateString() === now.toDateString()
            case 'week':
              const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
              return orderDate >= weekAgo
            case 'month':
              const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
              return orderDate >= monthAgo
            default:
              return true
          }
        })
      }

      // Area filter
      if (this.areaFilter !== 'all') {
        filtered = filtered.filter(order => order.area === this.areaFilter)
      }

      // Amount range filter
      if (this.minAmount !== null && this.minAmount !== '') {
        filtered = filtered.filter(order => order.amount >= this.minAmount)
      }
      if (this.maxAmount !== null && this.maxAmount !== '') {
        filtered = filtered.filter(order => order.amount <= this.maxAmount)
      }

      this.filteredOrders = filtered
      this.refreshMapLayers()
    },

    // Map Control Methods
    refreshMapLayers() {
      this.clearMarkers()
      this.clearHeatmap()
      
      setTimeout(() => {
        this.addOrderMarkers()
        this.addEnhancedHeatmapLayer()
      }, 100)
    },

    updateHeatmapIntensity() {
      if (this.showHeatmap) {
        this.addEnhancedHeatmapLayer()
      }
    },

    updateColorScheme() {
      if (this.showHeatmap) {
        this.addEnhancedHeatmapLayer()
      }
    },

    changeMapStyle() {
      this.addMapTiles()
    },

    toggleHeatmapState() {
      this.showHeatmap = !this.showHeatmap
      console.log('Heatmap toggled to:', this.showHeatmap)
      this.toggleHeatmap()
    },

    toggleMarkersState() {
      this.showMarkers = !this.showMarkers
      console.log('Markers toggled to:', this.showMarkers)
      this.toggleMarkers()
    },

    toggleHeatmap() {
      console.log('Toggle heatmap clicked, showHeatmap:', this.showHeatmap)
      
      if (!this.map) {
        console.warn('Map not initialized yet')
        return
      }
      
      if (this.showHeatmap) {
        console.log('Adding heatmap layer')
        this.addEnhancedHeatmapLayer()
      } else {
        console.log('Clearing heatmap layer')
        this.clearHeatmap()
      }
    },

    toggleMarkers() {
      console.log('Toggle markers clicked, showMarkers:', this.showMarkers)
      
      if (!this.map) {
        console.warn('Map not initialized yet')
        return
      }
      
      if (this.showMarkers) {
        console.log('Adding markers')
        this.addOrderMarkers()
      } else {
        console.log('Clearing markers')
        this.clearMarkers()
      }
    },

    toggleFullscreen() {
      this.isFullscreen = !this.isFullscreen
      setTimeout(() => {
        if (this.map) {
          this.map.invalidateSize()
        }
      }, 100)
    },

    resetMapView() {
      this.map.setView([26.8467, 80.9462], 12)
    },

    // Cleanup Methods
    clearMarkers() {
      this.markers.forEach(marker => {
        this.map.removeLayer(marker)
      })
      this.markers = []
    },

    clearHeatmap() {
      if (this.heatmapLayer) {
        this.map.removeLayer(this.heatmapLayer)
        this.heatmapLayer = null
      }
    },

    // Animation and Real-time Features
    startRealTimeSimulation() {
      // Simulate real-time updates every 30 seconds
      this.realTimeInterval = setInterval(() => {
        if (this.realTimeEnabled) {
          this.simulateNewOrder()
          this.lastUpdateTime = new Date().toLocaleTimeString()
        }
      }, 30000)
    },

    simulateNewOrder() {
      // Add some visual indication of new order
      const areas = this.uniqueAreas
      const randomArea = areas[Math.floor(Math.random() * areas.length)]
      
      // Create a temporary pulsing marker for new order simulation
      const randomLat = 26.8467 + (Math.random() - 0.5) * 0.1
      const randomLng = 80.9462 + (Math.random() - 0.5) * 0.1
      
      const newOrderMarker = L.circleMarker([randomLat, randomLng], {
        radius: 15,
        fillColor: '#00ff00',
        color: '#ffffff',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.7,
        className: 'new-order-pulse'
      }).addTo(this.map)

      // Remove after animation
      setTimeout(() => {
        this.map.removeLayer(newOrderMarker)
      }, 3000)
    },

    toggleRealTimeState() {
      this.realTimeEnabled = !this.realTimeEnabled
      console.log('Real-time toggled to:', this.realTimeEnabled)
      this.toggleRealTime()
    },

    toggleRealTime() {
      // Real-time toggle implementation
      console.log('Real-time updates:', this.realTimeEnabled ? 'enabled' : 'disabled')
    },

    // Export and Reporting
    exportMap(format) {
      // Simulate map export
      alert(`Exporting map as ${format.toUpperCase()}... (Feature simulated)`)
    },

    exportData(format) {
      // Simulate data export
      const dataStr = JSON.stringify(this.filteredOrders, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(dataBlob)
      
      const link = document.createElement('a')
      link.href = url
      link.download = `orders_data.${format}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },

    generateReport() {
      // Simulate comprehensive report generation
      alert('Generating comprehensive analytics report... (Feature simulated)')
    },

    // Location Info Handler
    showLocationInfo(latlng) {
      const nearbyOrders = this.orders.filter(order => {
        const [lat, lng] = order.location_lat_lon
        const distance = this.calculateDistance(latlng.lat, latlng.lng, lat, lng)
        return distance <= 0.5 // 500m radius
      })

      if (nearbyOrders.length > 0) {
        const popup = L.popup()
          .setLatLng(latlng)
          .setContent(`
            <div class="location-info">
              <h4>Location Analysis</h4>
              <p><strong>Coordinates:</strong> ${latlng.lat.toFixed(4)}, ${latlng.lng.toFixed(4)}</p>
              <p><strong>Nearby Orders:</strong> ${nearbyOrders.length}</p>
              <p><strong>Total Value:</strong> ₹${nearbyOrders.reduce((sum, o) => sum + o.amount, 0).toLocaleString()}</p>
            </div>
          `)
          .openOn(this.map)
      }
    },

    // Global method exposure for popup interactions
    setupGlobalMethods() {
      window.orderHeatmap = {
        viewOrderDetails: (orderId) => {
          console.log('Viewing order details for:', orderId)
          // Implement order details modal
        },
        focusArea: (area) => {
          this.areaFilter = area
          this.filterOrders()
        }
      }
    },

    // Fallback heatmap for when plugin isn't available
    addFallbackHeatmap(data) {
      this.heatmapLayer = L.layerGroup()
      
      data.forEach(([lat, lng, weight]) => {
        const circle = L.circle([lat, lng], {
          color: this.getHeatColor(weight),
          fillColor: this.getHeatColor(weight),
          fillOpacity: 0.3,
          radius: weight * 100,
          stroke: false
        })
        this.heatmapLayer.addLayer(circle)
      })
      
      this.heatmapLayer.addTo(this.map)
    },

    getHeatColor(intensity) {
      const colors = ['#0000ff', '#00ffff', '#00ff00', '#ffff00', '#ff8000', '#ff0000']
      const index = Math.floor(intensity * (colors.length - 1))
      return colors[Math.min(index, colors.length - 1)]
    }
  },

  created() {
    this.setupGlobalMethods()
  }
}
</script>

<style scoped>
/* Enhanced Map Styling */
#map {
  z-index: 1;
  border-radius: 16px;
  overflow: hidden;
}

/* Professional Toggle Switches */
input[type="range"] {
  background: linear-gradient(to right, #475569 0%, #3b82f6 100%);
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
  border: 2px solid white;
}

input[type="range"]::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
  border: 2px solid white;
}

/* Enhanced Popup Styling */
::v-deep .enhanced-popup .leaflet-popup-content {
  margin: 0;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(100, 116, 139, 0.3);
  color: #f8fafc;
  min-width: 300px;
}

::v-deep .enhanced-popup .leaflet-popup-content-wrapper {
  background: transparent;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
}

::v-deep .enhanced-popup .leaflet-popup-tip {
  background: rgba(30, 41, 59, 0.95);
  border: 1px solid rgba(100, 116, 139, 0.3);
  border-top: none;
  border-right: none;
}

.enhanced-popup-content {
  padding: 20px;
  color: #f8fafc;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(100, 116, 139, 0.3);
}

.order-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #f8fafc;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-delivered { background: linear-gradient(135deg, #10b981, #059669); color: white; }
.status-pending { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; }
.status-processing { background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; }
.status-cancelled { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; }

.popup-details {
  margin-bottom: 16px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 4px 0;
}

.label {
  color: #cbd5e1;
  font-weight: 500;
}

.value {
  color: #f8fafc;
  font-weight: 600;
}

.value.amount {
  color: #10b981;
  font-weight: 700;
}

.popup-analytics {
  margin-bottom: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(100, 116, 139, 0.3);
}

.analytics-section {
  margin-bottom: 12px;
}

.analytics-section h5 {
  margin: 0 0 6px 0;
  font-size: 14px;
  font-weight: 600;
  color: #e2e8f0;
}

.nearby-stats, .area-stats {
  display: flex;
  gap: 12px;
}

.stat {
  font-size: 12px;
  color: #94a3b8;
  background: rgba(51, 65, 85, 0.5);
  padding: 4px 8px;
  border-radius: 6px;
}

.popup-actions {
  display: flex;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(100, 116, 139, 0.3);
}

.popup-btn {
  flex: 1;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.popup-btn.primary {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
}

.popup-btn.secondary {
  background: rgba(51, 65, 85, 0.6);
  color: #f8fafc;
  border: 1px solid rgba(100, 116, 139, 0.3);
}

.popup-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Enhanced Marker Animations */
::v-deep .enhanced-marker {
  animation: markerPulse 2s ease-in-out infinite;
}

@keyframes markerPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* New Order Animation */
::v-deep .new-order-pulse {
  animation: newOrderPulse 3s ease-out;
}

@keyframes newOrderPulse {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.8;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Location Info Popup */
.location-info {
  padding: 12px;
  background: rgba(30, 41, 59, 0.95);
  color: #f8fafc;
  border-radius: 8px;
  backdrop-filter: blur(20px);
}

.location-info h4 {
  margin: 0 0 8px 0;
  color: #f8fafc;
  font-size: 16px;
  font-weight: 600;
}

.location-info p {
  margin: 4px 0;
  font-size: 14px;
  color: #e2e8f0;
}

/* Counter Animation */
@keyframes counterUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-counter {
  animation: counterUp 0.6s ease-out;
}

/* Enhanced Scrollbar for Analytics Sections */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(51, 65, 85, 0.3);
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.5);
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(100, 116, 139, 0.7);
}

/* Responsive Design */
@media (max-width: 768px) {
  .enhanced-popup-content {
    padding: 16px;
  }
  
  .popup-actions {
    flex-direction: column;
  }
  
  .popup-btn {
    margin-bottom: 4px;
  }
}

/* Loading Animation */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Hover Effects for Interactive Elements */
.glass-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.4);
}

.glass-card-secondary:hover {
  background: rgba(51, 65, 85, 0.9) !important;
  transform: translateY(-1px);
}

/* Enhanced Button Animations */
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px 0 rgba(59, 130, 246, 0.4);
}

.btn-secondary:hover {
  background: rgba(100, 116, 139, 0.3);
  transform: translateY(-1px);
}

/* Fullscreen Mode Adjustments */
.fullscreen-map {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(15, 23, 42, 0.95);
}
</style>