<template>
  <div id="app" class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Top Navigation -->
      <Navbar />
      
      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto p-6" style="background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>