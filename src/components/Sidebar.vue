<template>
  <aside class="w-64 glass-card h-full relative">
    <!-- Background gradient animation -->
    <div class="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-cyan-400/20 opacity-50 animate-pulse-slow rounded-lg"></div>
    
    <div class="flex flex-col h-full relative z-10">
      <!-- Logo/Brand -->
      <div class="flex items-center justify-center py-8 px-6 border-b border-white/20">
        <div class="text-center group cursor-pointer">
          <div class="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
            <span class="text-white font-bold text-lg">H</span>
          </div>
          <h2 class="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">Hyperzod</h2>
          <p class="text-xs text-gray-300 opacity-75">Admin Portal</p>
        </div>
      </div>
      
      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-6 space-y-3 overflow-y-auto custom-scrollbar">
        <div class="mb-4">
          <p class="text-xs font-semibold text-gray-300 uppercase tracking-wider px-3 mb-3">Navigation</p>
        </div>
        
        <router-link 
          v-for="(item, index) in menuItems" 
          :key="item.name"
          :to="item.path"
          class="sidebar-item group relative"
          :class="{ 'active': $route.path === item.path }"
          :style="{ '--animation-delay': (index * 0.1) + 's' }"
        >
          <!-- Hover background -->
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <!-- Icon with glow effect -->
          <div class="relative flex items-center">
            <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 mr-3 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
              <svg class="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path :d="item.icon"></path>
              </svg>
            </div>
            
            <div class="flex-1">
              <span class="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">{{ item.name }}</span>
              <div v-if="item.badge" class="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white ml-2 animate-pulse">
                {{ item.badge }}
              </div>
            </div>
            
            <!-- Active indicator -->
            <div v-if="$route.path === item.path" class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 ml-auto animate-pulse"></div>
          </div>
          
          <!-- Active state background -->
          <div v-if="$route.path === item.path" class="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-400/30 rounded-lg"></div>
        </router-link>
        
        <!-- Quick Actions Section -->
        <div class="mt-8 pt-6 border-t border-white/20">
          <p class="text-xs font-semibold text-gray-300 uppercase tracking-wider px-3 mb-3">Quick Actions</p>
          
          <button class="w-full flex items-center px-3 py-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 hover:from-green-500/30 hover:to-emerald-500/30 hover:text-green-200 transition-all duration-300 group">
            <svg class="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2L3 7v11a1 1 0 001 1h3v-7h6v7h3a1 1 0 001-1V7l-7-5z"/>
            </svg>
            <span class="text-sm font-medium">Export Data</span>
          </button>
        </div>
      </nav>
      
      <!-- Footer with stats -->
      <div class="px-4 py-4 border-t border-white/20">
        <div class="glass-card-secondary p-3 rounded-lg mb-3">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs text-gray-300">Server Status</span>
            <div class="flex items-center">
              <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-1"></div>
              <span class="text-xs text-green-400 font-medium">Online</span>
            </div>
          </div>
          <div class="text-xs text-gray-400">
            <div class="flex justify-between">
              <span>Uptime:</span>
              <span class="text-white">99.9%</span>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-between">
          <p class="text-xs text-gray-400">© 2024 Hyperzod</p>
          <div class="flex space-x-1">
            <div class="w-1 h-1 rounded-full bg-purple-400 animate-pulse"></div>
            <div class="w-1 h-1 rounded-full bg-blue-400 animate-pulse" style="animation-delay: 0.2s"></div>
            <div class="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" style="animation-delay: 0.4s"></div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      menuItems: [
        {
          name: 'Dashboard',
          path: '/',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z'
        },
        {
          name: 'Orders',
          path: '/orders',
          icon: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
          badge: '24'
        },
        {
          name: 'Orders Heatmap',
          path: '/orders-heatmap',
          icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
          badge: 'Live'
        },
        {
          name: 'Merchants',
          path: '/merchants',
          icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
        },
        {
          name: 'Customers',
          path: '/customers',
          icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
        },
        {
          name: 'Settings',
          path: '/settings',
          icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
        }
      ]
    }
  }
}
</script>