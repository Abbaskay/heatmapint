<template>
  <aside class="w-64 bg-gray-900 h-full">
    <div class="flex flex-col h-full">
      <!-- Logo/Brand -->
      <div class="flex items-center justify-center py-6 px-6 border-b border-gray-800">
        <div class="text-center">
          <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-600 flex items-center justify-center">
            <span class="text-white font-bold text-lg">⚡</span>
          </div>
          <h2 class="text-lg font-bold text-white">Hyperzod</h2>
          <p class="text-xs text-gray-400">Admin Portal</p>
        </div>
      </div>
      
      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-6 space-y-2">
        <div class="mb-4">
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">Navigation</p>
        </div>
        
        <router-link 
          v-for="item in menuItems" 
          :key="item.name"
          :to="item.path"
          class="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
          :class="{ 'bg-blue-600 text-white': $route.path === item.path }"
        >
          <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path :d="item.icon"></path>
          </svg>
          <span>{{ item.name }}</span>
          <div v-if="item.badge" class="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-blue-500 text-white">
            {{ item.badge }}
          </div>
        </router-link>
      </nav>
      
      <!-- Footer -->
      <div class="px-4 py-4 border-t border-gray-800">
        <div class="bg-gray-800 rounded-lg p-3">
          <div class="text-sm text-white font-medium">AUTOZOD</div>
          <div class="text-xs text-gray-400">Autonomous order assignment</div>
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