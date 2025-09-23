<template>
  <header class="navbar-glass sticky top-0 z-50 animate-slide-up">
    <div class="flex items-center justify-between px-8 py-4">
      <!-- Left side - Enhanced Title with Animation -->
      <div class="flex items-center space-x-4">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse-soft"></div>
          <div class="relative w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
            </svg>
          </div>
        </div>
        <div>
          <h1 class="text-2xl font-bold text-white">Admin Portal</h1>
          <p class="text-sm text-slate-300 font-medium">Hyperzod Management Suite</p>
        </div>
      </div>
      
      <!-- Center - Search Bar -->
      <div class="hidden md:flex flex-1 max-w-lg mx-8">
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search orders, customers, merchants..." 
            class="glass-input pl-10 pr-4"
            style="background: rgba(51, 65, 85, 0.8) !important; color: #f8fafc !important; border: 1px solid rgba(100, 116, 139, 0.4) !important;"
          >
        </div>
      </div>
      
      <!-- Right side - Enhanced User Actions -->
      <div class="flex items-center space-x-6">
        <!-- Real-time Stats -->
        <div class="hidden lg:flex items-center space-x-6 text-sm">
          <div class="text-center">
            <div class="text-lg font-bold text-green-400">847</div>
            <div class="text-xs text-slate-300">Active Orders</div>
          </div>
          <div class="w-px h-8 bg-slate-600"></div>
          <div class="text-center">
            <div class="text-lg font-bold text-blue-400">₹2.4M</div>
            <div class="text-xs text-slate-300">Today's Revenue</div>
          </div>
        </div>

        <!-- Enhanced Notifications -->
        <div class="relative">
          <button class="relative p-3 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl hover:bg-slate-700/50 transition-all duration-200 group">
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span class="absolute -top-1 -right-1 flex h-5 w-5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-5 w-5 bg-gradient-to-r from-red-400 to-red-600 text-white text-xs items-center justify-center font-bold">3</span>
            </span>
          </button>
        </div>

        <!-- Settings Gear -->
        <button class="p-3 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl hover:bg-slate-700/50 transition-all duration-200 group">
          <svg class="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </button>
        
        <!-- Enhanced User Profile -->
        <div class="flex items-center space-x-3 bg-slate-700/50 backdrop-blur-sm rounded-2xl p-2 hover:bg-slate-600/50 transition-all duration-200 cursor-pointer group">
          <div class="text-right hidden sm:block">
            <p class="text-sm font-semibold text-white group-hover:text-slate-100 transition-colors">Admin User</p>
            <p class="text-xs text-slate-300">admin@hyperzod.com</p>
          </div>
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200">
              <span class="text-white text-sm font-bold">A</span>
            </div>
            <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Progress Bar for loading states -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>