<template>
  <div class="space-y-8 p-6">
    <!-- Enhanced Page Header -->
    <div class="glass-card relative overflow-hidden animate-fade-in">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-500/20 to-cyan-400/20 animate-gradient-x"></div>
      
      <div class="relative z-10 p-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-white mb-2">Merchant Partners 🏪</h1>
            <p class="text-gray-300 text-lg">Manage and oversee all merchant partnerships</p>
          </div>
          
          <div class="hidden md:flex space-x-4">
            <div class="glass-card-secondary p-4 text-center animate-float">
              <div class="text-2xl font-bold text-emerald-400">156</div>
              <div class="text-xs text-gray-300">Active Merchants</div>
            </div>
            <div class="glass-card-secondary p-4 text-center animate-float" style="animation-delay: 0.2s">
              <div class="text-2xl font-bold text-cyan-400">89%</div>
              <div class="text-xs text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="glass-card animate-slide-up">
      <div class="p-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div class="flex space-x-4">
            <select class="glass-input">
              <option>All Categories</option>
              <option>Restaurants</option>
              <option>Retail</option>
              <option>Grocery</option>
              <option>Electronics</option>
            </select>
            
            <select class="glass-input">
              <option>All Locations</option>
              <option>Gomti Nagar</option>
              <option>Hazratganj</option>
              <option>Indira Nagar</option>
              <option>Aliganj</option>
            </select>
          </div>
          
          <button class="btn-primary flex items-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            Add Merchant
          </button>
        </div>
      </div>
    </div>

    <!-- Enhanced Merchants Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(merchant, index) in sampleMerchants" 
        :key="merchant.id" 
        class="glass-card group hover:scale-105 transition-all duration-300 animate-slide-up"
        :style="{ 'animation-delay': (index * 0.1) + 's' }"
      >
        <div class="p-6">
          <!-- Merchant Header -->
          <div class="flex items-center space-x-4 mb-6">
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-110">
                <span class="text-white font-bold text-xl">{{ merchant.name.charAt(0) }}</span>
              </div>
              <div class="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
            </div>
            
            <div class="flex-1">
              <h3 class="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">{{ merchant.name }}</h3>
              <p class="text-sm text-gray-300 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ merchant.category }}
              </p>
            </div>
          </div>
          
          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="glass-card-secondary p-3 text-center">
              <div class="text-lg font-bold text-white">{{ merchant.orders }}</div>
              <div class="text-xs text-gray-300">Total Orders</div>
            </div>
            
            <div class="glass-card-secondary p-3 text-center">
              <div class="text-lg font-bold text-emerald-400">₹{{ merchant.revenue.toLocaleString() }}</div>
              <div class="text-xs text-gray-300">Revenue</div>
            </div>
          </div>
          
          <!-- Rating and Location -->
          <div class="space-y-3 mb-6">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">Rating:</span>
              <div class="flex items-center">
                <div class="flex">
                  <svg v-for="i in 5" :key="i" :class="i <= merchant.rating ? 'text-yellow-400' : 'text-gray-600'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span class="text-white font-medium ml-2">{{ merchant.rating }}.0</span>
              </div>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-300">Location:</span>
              <span class="text-sm text-white flex items-center">
                <svg class="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {{ merchant.location }}
              </span>
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex space-x-2">
            <button class="flex-1 btn-secondary text-sm py-2">
              View Details
            </button>
            <button class="px-3 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all duration-300">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Add more merchants button -->
    <div class="text-center animate-fade-in-up">
      <button class="btn-primary inline-flex items-center">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        Load More Merchants
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Merchants',
  data() {
    return {
      sampleMerchants: [
        { id: 1, name: 'Lucknow Sweets', category: 'Food & Beverages', orders: 234, revenue: 125000, status: 'active' },
        { id: 2, name: 'Fashion Hub', category: 'Clothing', orders: 189, revenue: 89000, status: 'active' },
        { id: 3, name: 'Electronics Store', category: 'Electronics', orders: 156, revenue: 234000, status: 'active' },
        { id: 4, name: 'Book Corner', category: 'Books', orders: 78, revenue: 45000, status: 'active' },
        { id: 5, name: 'Home Decor', category: 'Furniture', orders: 92, revenue: 178000, status: 'inactive' },
        { id: 6, name: 'Grocery Mart', category: 'Groceries', orders: 445, revenue: 156000, status: 'active' }
      ]
    }
  }
}
</script>