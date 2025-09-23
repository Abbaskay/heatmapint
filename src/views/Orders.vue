<template>
  <div class="space-y-8 p-6">
    <!-- Enhanced Page Header -->
    <div class="glass-card relative overflow-hidden animate-fade-in">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-teal-400/20 animate-gradient-x"></div>
      
      <div class="relative z-10 p-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-white mb-2">Orders Management 📦</h1>
            <p class="text-gray-300 text-lg">Track and manage all customer orders efficiently</p>
          </div>
          
          <div class="hidden md:flex space-x-4">
            <div class="glass-card-secondary p-4 text-center animate-float">
              <div class="text-2xl font-bold text-cyan-400">1,247</div>
              <div class="text-xs text-gray-300">Total Orders</div>
            </div>
            <div class="glass-card-secondary p-4 text-center animate-float" style="animation-delay: 0.2s">
              <div class="text-2xl font-bold text-green-400">24</div>
              <div class="text-xs text-gray-300">New Today</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filter and Search Section -->
    <div class="glass-card animate-slide-up">
      <div class="p-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div class="flex space-x-4">
            <select class="glass-input">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            
            <select class="glass-input">
              <option>All Locations</option>
              <option>Gomti Nagar</option>
              <option>Hazratganj</option>
              <option>Indira Nagar</option>
              <option>Aliganj</option>
            </select>
          </div>
          
          <div class="flex space-x-3">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search orders..." 
                class="glass-input pl-10 pr-4"
              >
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                </svg>
              </div>
            </div>
            
            <button class="btn-primary flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Export
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Orders Table -->
    <div class="glass-card overflow-hidden animate-slide-up" style="animation-delay: 0.2s">
      <div class="p-6 border-b border-white/20">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-white">Recent Orders</h2>
          <div class="flex items-center space-x-2 text-sm text-gray-300">
            <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span>Live updates enabled</span>
          </div>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-white/5">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Order ID</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Customer</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Location</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/10">
            <tr 
              v-for="(order, index) in sampleOrders" 
              :key="order.id"
              class="hover:bg-white/5 transition-all duration-300 group animate-slide-up"
              :style="{ 'animation-delay': (index * 0.1) + 's' }"
            >
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-white font-bold text-xs">#</span>
                  </div>
                  <span class="text-sm font-medium text-white">{{ order.id }}</span>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-3">
                    <span class="text-white font-bold text-xs">{{ order.customer.charAt(0) }}</span>
                  </div>
                  <span class="text-sm text-gray-200">{{ order.customer }}</span>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="text-sm text-gray-300">{{ order.location }}</span>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="getStatusClass(order.status)" class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full backdrop-blur-sm border">
                  <div class="w-2 h-2 rounded-full mr-2 animate-pulse" :class="getStatusDotClass(order.status)"></div>
                  {{ order.status.charAt(0).toUpperCase() + order.status.slice(1) }}
                </span>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-white">₹{{ order.amount.toLocaleString() }}</div>
                <div class="text-xs text-gray-400">INR</div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex space-x-2">
                  <button class="p-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </button>
                  
                  <button class="p-2 rounded-lg bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-all duration-300 hover:scale-110">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                  </button>
                  
                  <button class="p-2 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-all duration-300 hover:scale-110">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Pagination -->
      <div class="px-6 py-4 border-t border-white/20">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-300">
            Showing <span class="font-medium text-white">1</span> to <span class="font-medium text-white">5</span> of <span class="font-medium text-white">1,247</span> results
          </div>
          
          <div class="flex space-x-2">
            <button class="px-3 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300">Previous</button>
            <button class="px-3 py-2 rounded-lg bg-blue-500/30 text-white">1</button>
            <button class="px-3 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300">2</button>
            <button class="px-3 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300">3</button>
            <button class="px-3 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  data() {
    return {
      sampleOrders: [
        { id: 1001, customer: 'Rahul Sharma', location: 'Gomti Nagar, Lucknow', status: 'delivered', amount: 899 },
        { id: 1002, customer: 'Priya Singh', location: 'Hazratganj, Lucknow', status: 'pending', amount: 1299 },
        { id: 1003, customer: 'Amit Kumar', location: 'Indira Nagar, Lucknow', status: 'processing', amount: 649 },
        { id: 1004, customer: 'Neha Gupta', location: 'Aliganj, Lucknow', status: 'delivered', amount: 1899 },
        { id: 1005, customer: 'Vikas Verma', location: 'Chowk, Lucknow', status: 'cancelled', amount: 749 }
      ]
    }
  },
  methods: {
    getStatusClass(status) {
      const classes = {
        delivered: 'bg-green-500/20 text-green-300 border-green-500/30',
        pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
        processing: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        cancelled: 'bg-red-500/20 text-red-300 border-red-500/30'
      }
      return classes[status] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    },
    getStatusDotClass(status) {
      const classes = {
        delivered: 'bg-green-400',
        pending: 'bg-yellow-400',
        processing: 'bg-blue-400',
        cancelled: 'bg-red-400'
      }
      return classes[status] || 'bg-gray-400'
    }
  }
}
</script>