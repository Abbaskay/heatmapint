<template>
  <div class="space-y-8 p-6">
    <!-- Enhanced Page Header -->
    <div class="glass-card relative overflow-hidden animate-fade-in">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-500/20 to-pink-400/20 animate-gradient-x"></div>
      
      <div class="relative z-10 p-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-white mb-2">Settings & Configuration ⚙️</h1>
            <p class="text-gray-300 text-lg">Customize your admin panel experience</p>
          </div>
          
          <div class="hidden md:flex space-x-4">
            <div class="glass-card-secondary p-4 text-center animate-float">
              <div class="text-2xl font-bold text-indigo-400">✓</div>
              <div class="text-xs text-gray-300">All Synced</div>
            </div>
            <div class="glass-card-secondary p-4 text-center animate-float" style="animation-delay: 0.2s">
              <div class="text-2xl font-bold text-green-400">5.2.1</div>
              <div class="text-xs text-gray-300">Version</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Settings Sections -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- General Settings -->
      <div class="glass-card animate-slide-up" style="animation-delay: 0.1s">
        <div class="p-6">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/25">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 8a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white">General Settings</h2>
          </div>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Admin Name</label>
              <input type="text" value="Admin User" class="glass-input w-full">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input type="email" value="admin@hyperzod.com" class="glass-input w-full">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Time Zone</label>
              <select class="glass-input w-full">
                <option>Asia/Kolkata (IST)</option>
                <option>UTC</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Language</label>
              <select class="glass-input w-full">
                <option>English</option>
                <option>Hindi</option>
                <option>Urdu</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Notification Settings -->
      <div class="glass-card animate-slide-up" style="animation-delay: 0.2s">
        <div class="p-6">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white">Notifications</h2>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div>
                <div class="text-sm font-medium text-white">New Orders</div>
                <div class="text-xs text-gray-400">Get notified when new orders arrive</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked class="sr-only peer">
                <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
              </label>
            </div>
            
            <div class="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div>
                <div class="text-sm font-medium text-white">Payment Updates</div>
                <div class="text-xs text-gray-400">Payment confirmations and failures</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked class="sr-only peer">
                <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
              </label>
            </div>
            
            <div class="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div>
                <div class="text-sm font-medium text-white">Merchant Updates</div>
                <div class="text-xs text-gray-400">New merchant registrations</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
              </label>
            </div>
            
            <div class="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
              <div>
                <div class="text-sm font-medium text-white">System Alerts</div>
                <div class="text-xs text-gray-400">Critical system notifications</div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked class="sr-only peer">
                <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Security & Theme Settings -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Security Settings -->
      <div class="glass-card animate-slide-up" style="animation-delay: 0.3s">
        <div class="p-6">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-green-500/25">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11a1 1 0 001 1h3v-7h6v7h3a1 1 0 001-1V7l-7-5z"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white">Security</h2>
          </div>
          
          <div class="space-y-4">
            <button class="w-full btn-secondary text-left flex items-center justify-between">
              <span>Change Password</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            
            <button class="w-full btn-secondary text-left flex items-center justify-between">
              <span>Two-Factor Authentication</span>
              <div class="flex items-center">
                <span class="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full mr-2">Enabled</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
            
            <button class="w-full btn-secondary text-left flex items-center justify-between">
              <span>API Keys</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
            
            <button class="w-full btn-secondary text-left flex items-center justify-between">
              <span>Login History</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Theme & Display -->
      <div class="glass-card animate-slide-up" style="animation-delay: 0.4s">
        <div class="p-6">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-orange-500/25">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white">Theme & Display</h2>
          </div>
          
          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-3">Theme Mode</label>
              <div class="grid grid-cols-3 gap-3">
                <div class="glass-card-secondary p-3 text-center cursor-pointer border-2 border-purple-500/50">
                  <div class="w-6 h-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded mx-auto mb-2"></div>
                  <div class="text-xs text-white font-medium">Dark</div>
                </div>
                <div class="glass-card-secondary p-3 text-center cursor-pointer">
                  <div class="w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-300 rounded mx-auto mb-2"></div>
                  <div class="text-xs text-gray-300">Light</div>
                </div>
                <div class="glass-card-secondary p-3 text-center cursor-pointer">
                  <div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded mx-auto mb-2"></div>
                  <div class="text-xs text-gray-300">Auto</div>
                </div>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Sidebar Density</label>
              <select class="glass-input w-full">
                <option>Comfortable</option>
                <option>Compact</option>
                <option>Spacious</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Animation Speed</label>
              <input type="range" min="0" max="100" value="75" class="w-full accent-purple-500">
              <div class="flex justify-between text-xs text-gray-400 mt-1">
                <span>Slow</span>
                <span>Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="text-center animate-fade-in-up">
      <button class="btn-primary inline-flex items-center px-8 py-3">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Save All Settings
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings'
}
</script>