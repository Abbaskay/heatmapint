<template>
  <div class="space-y-8 p-6">
    <!-- Page Header with Enhanced Design -->
    <div class="glass-card relative overflow-hidden">
      <!-- Animated background -->
      <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-cyan-400/20 animate-gradient-x"></div>
      
      <div class="relative z-10 p-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-white mb-2 animate-fade-in">
              Welcome back, Admin! 👋
            </h1>
            <p class="text-gray-300 text-lg animate-fade-in-up">
              Here's what's happening with your business today
            </p>
          </div>
          
          <div class="hidden md:flex space-x-4">
            <div class="glass-card-secondary p-4 text-center animate-float">
              <div class="text-2xl font-bold text-white">24</div>
              <div class="text-xs text-gray-300">Hours Uptime</div>
            </div>
            <div class="glass-card-secondary p-4 text-center animate-float" style="animation-delay: 0.2s">
              <div class="text-2xl font-bold text-green-400">98.5%</div>
              <div class="text-xs text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="glass-card group hover:scale-105 transition-all duration-300 animate-slide-up" style="animation-delay: 0.1s">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <div class="flex items-center space-x-1">
              <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span class="text-xs text-green-400 font-medium">Live</span>
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium text-gray-300 mb-1">Total Orders</h3>
            <p class="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">1,247</p>
            <div class="flex items-center text-xs">
              <span class="text-green-400 font-medium">↗ +12.5%</span>
              <span class="text-gray-400 ml-1">from last week</span>
            </div>
          </div>
        </div>
      </div>

      <div class="glass-card group hover:scale-105 transition-all duration-300 animate-slide-up" style="animation-delay: 0.2s">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </div>
            <div class="flex items-center space-x-1">
              <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span class="text-xs text-green-400 font-medium">Active</span>
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium text-gray-300 mb-1">Active Merchants</h3>
            <p class="text-3xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">156</p>
            <div class="flex items-center text-xs">
              <span class="text-green-400 font-medium">↗ +8.3%</span>
              <span class="text-gray-400 ml-1">from last month</span>
            </div>
          </div>
        </div>
      </div>

      <div class="glass-card group hover:scale-105 transition-all duration-300 animate-slide-up" style="animation-delay: 0.3s">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <div class="flex items-center space-x-1">
              <div class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
              <span class="text-xs text-yellow-400 font-medium">Growing</span>
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium text-gray-300 mb-1">Total Customers</h3>
            <p class="text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">2,891</p>
            <div class="flex items-center text-xs">
              <span class="text-green-400 font-medium">↗ +15.7%</span>
              <span class="text-gray-400 ml-1">from last month</span>
            </div>
          </div>
        </div>
      </div>

      <div class="glass-card group hover:scale-105 transition-all duration-300 animate-slide-up" style="animation-delay: 0.4s">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div class="flex items-center space-x-1">
              <div class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span class="text-xs text-blue-400 font-medium">Local</span>
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium text-gray-300 mb-1">Lucknow Orders</h3>
            <p class="text-3xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">847</p>
            <div class="flex items-center text-xs">
              <span class="text-green-400 font-medium">↗ +22.1%</span>
              <span class="text-gray-400 ml-1">from last week</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Quick Actions -->
    <div class="glass-card animate-fade-in-up">
      <div class="p-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl font-bold text-white mb-2">Quick Actions</h2>
            <p class="text-gray-300">Access frequently used features</p>
          </div>
          
          <div class="hidden md:block">
            <div class="flex items-center space-x-2 text-sm text-gray-300">
              <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <router-link to="/orders-heatmap" class="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/20 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative z-10 text-center">
              <div class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">View Orders Heatmap</h3>
              <p class="text-sm text-gray-300">Visualize order distribution across Lucknow</p>
            </div>
          </router-link>
          
          <router-link to="/orders" class="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/20 hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
            <div class="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative z-10 text-center">
              <div class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">Manage Orders</h3>
              <p class="text-sm text-gray-300">View and manage all customer orders</p>
            </div>
          </router-link>
          
          <router-link to="/merchants" class="group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-white/20 hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative z-10 text-center">
              <div class="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">View Merchants</h3>
              <p class="text-sm text-gray-300">Manage merchant accounts and stores</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Recent Activity Section -->
    <div class="glass-card animate-fade-in-up">
      <div class="p-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-white">Recent Activity</h2>
          <button class="text-sm text-gray-300 hover:text-white transition-colors duration-300">View All</button>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
              <span class="text-white font-semibold text-sm">O</span>
            </div>
            <div class="flex-1">
              <p class="text-white font-medium">New order #12847 received</p>
              <p class="text-gray-300 text-sm">Customer: John Doe • Amount: ₹1,299</p>
            </div>
            <span class="text-gray-400 text-sm">2 min ago</span>
          </div>
          
          <div class="flex items-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
              <span class="text-white font-semibold text-sm">M</span>
            </div>
            <div class="flex-1">
              <p class="text-white font-medium">New merchant registered</p>
              <p class="text-gray-300 text-sm">Store: Fresh Fruits Corner • Location: Gomti Nagar</p>
            </div>
            <span class="text-gray-400 text-sm">15 min ago</span>
          </div>
          
          <div class="flex items-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
              <span class="text-white font-semibold text-sm">C</span>
            </div>
            <div class="flex-1">
              <p class="text-white font-medium">Customer support ticket resolved</p>
              <p class="text-gray-300 text-sm">Ticket #4521 • Response time: 8 minutes</p>
            </div>
            <span class="text-gray-400 text-sm">1 hr ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>