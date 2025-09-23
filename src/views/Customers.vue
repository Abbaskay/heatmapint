<template>
  <div class="space-y-8 p-6">
    <!-- Enhanced Page Header -->
    <div class="glass-card relative overflow-hidden animate-fade-in">
      <div class="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-500/20 to-indigo-400/20 animate-gradient-x"></div>
      
      <div class="relative z-10 p-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-white mb-2">Customer Management 👥</h1>
            <p class="text-gray-300 text-lg">Track and manage customer relationships</p>
          </div>
          
          <div class="hidden md:flex space-x-4">
            <div class="glass-card-secondary p-4 text-center animate-float">
              <div class="text-2xl font-bold text-pink-400">2,891</div>
              <div class="text-xs text-gray-300">Total Customers</div>
            </div>
            <div class="glass-card-secondary p-4 text-center animate-float" style="animation-delay: 0.2s">
              <div class="text-2xl font-bold text-purple-400">+12%</div>
              <div class="text-xs text-gray-300">Growth Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Customer Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="glass-card group hover:scale-105 transition-all duration-300 animate-slide-up" style="animation-delay: 0.1s">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-300">Growth</div>
              <div class="text-green-400 text-sm font-bold flex items-center">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L9 3.414 2.707 9.707a1 1 0 01-1.414 0z"/>
                </svg>
                +12%
              </div>
            </div>
          </div>
          <h3 class="text-lg font-medium text-gray-300 mb-2">Total Customers</h3>
          <p class="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">2,891</p>
          <p class="text-sm text-gray-400 mt-2">+347 from last month</p>
        </div>
      </div>

      <div class="glass-card group hover:scale-105 transition-all duration-300 animate-slide-up" style="animation-delay: 0.2s">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path d="M10 2C5.589 2 2 5.589 2 10s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM8 10a2 2 0 114 0 2 2 0 01-4 0z"/>
              </svg>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-300">Rate</div>
              <div class="text-cyan-400 text-sm font-bold">64%</div>
            </div>
          </div>
          <h3 class="text-lg font-medium text-gray-300 mb-2">Active This Month</h3>
          <p class="text-3xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">1,847</p>
          <p class="text-sm text-gray-400 mt-2">64% of total customers</p>
        </div>
      </div>

      <div class="glass-card group hover:scale-105 transition-all duration-300 animate-slide-up" style="animation-delay: 0.3s">
        <div class="p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <div class="text-right">
              <div class="text-sm text-gray-300">Trend</div>
              <div class="text-yellow-400 text-sm font-bold">Stable</div>
            </div>
          </div>
          <h3 class="text-lg font-medium text-gray-300 mb-2">Average Orders</h3>
          <p class="text-3xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">4.2</p>
          <p class="text-sm text-gray-400 mt-2">Per customer per month</p>
        </div>
      </div>
    </div>

    <!-- Enhanced Recent Customers -->
    <div class="glass-card overflow-hidden animate-slide-up" style="animation-delay: 0.4s">
      <div class="p-6 border-b border-white/20">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-white">Recent Customers</h2>
          <div class="flex space-x-3">
            <div class="glass-input-container">
              <input 
                type="text" 
                placeholder="Search customers..." 
                class="glass-input pl-10 pr-4"
              >
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                </svg>
              </div>
            </div>
            
            <button class="btn-secondary flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Export
            </button>
          </div>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-white/5">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Customer</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Location</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Orders</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Spent</th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/10">
            <tr 
              v-for="(customer, index) in sampleCustomers" 
              :key="customer.id"
              class="hover:bg-white/5 transition-all duration-300 group animate-slide-up"
              :style="{ 'animation-delay': (index * 0.1 + 0.5) + 's' }"
            >
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                    <span class="text-white font-bold text-lg">{{ customer.name.charAt(0) }}</span>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-white">{{ customer.name }}</div>
                    <div class="text-sm text-gray-400">ID: #{{ customer.id }}</div>
                  </div>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span class="text-sm text-gray-300">{{ customer.email }}</span>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="text-sm text-gray-300">{{ customer.location }}</span>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mr-2">
                    <span class="text-white font-bold text-xs">{{ customer.orders }}</span>
                  </div>
                  <span class="text-sm text-white font-medium">{{ customer.orders }} orders</span>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-bold text-white">₹{{ customer.totalSpent.toLocaleString() }}</div>
                <div class="text-xs text-gray-400">Total Lifetime Value</div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex space-x-2">
                  <button class="p-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </button>
                  
                  <button class="p-2 rounded-lg bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </button>
                  
                  <button class="p-2 rounded-lg bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-all duration-300 hover:scale-110">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
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
            Showing <span class="font-medium text-white">1</span> to <span class="font-medium text-white">5</span> of <span class="font-medium text-white">2,891</span> customers
          </div>
          
          <div class="flex space-x-2">
            <button class="px-3 py-2 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition-all duration-300">Previous</button>
            <button class="px-3 py-2 rounded-lg bg-purple-500/30 text-white">1</button>
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
  name: 'Customers',
  data() {
    return {
      sampleCustomers: [
        { id: 1014, name: 'Rahul Sharma', email: 'rahul.sharma@email.com', location: 'Gomti Nagar, Lucknow', orders: 12, totalSpent: 15600 },
        { id: 1015, name: 'Priya Singh', email: 'priya.singh@email.com', location: 'Hazratganj, Lucknow', orders: 8, totalSpent: 11200 },
        { id: 1016, name: 'Amit Kumar', email: 'amit.kumar@email.com', location: 'Indira Nagar, Lucknow', orders: 15, totalSpent: 18900 },
        { id: 1017, name: 'Neha Gupta', email: 'neha.gupta@email.com', location: 'Aliganj, Lucknow', orders: 6, totalSpent: 8500 },
        { id: 1018, name: 'Vikas Verma', email: 'vikas.verma@email.com', location: 'Chowk, Lucknow', orders: 9, totalSpent: 12300 }
      ]
    }
  }
}
</script>