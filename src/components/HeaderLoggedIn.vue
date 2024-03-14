<template>
    <header class="bg-2_color py-8  shadow-2xl">
  <div class="container mx-auto flex justify-between items-center">
    <div class="flex justify-start items-center space-x-8">
      <a href="#" class="text-white text-2xl font-mono font-bold ">placeholder</a>
    </div>
    <div class="flex justify-end items-center space-x-8">
      <nav class="hidden md:flex space-x-8">
        <button @click="$router.push('/')" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Home</button>
        <a href="#" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Events</a>
        <button @click="$router.push('about')" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">About us</button>
        <a href="#" class="text-white font-mono text-xl hover: hover:bg-1_color hover:rounded-lg px-4 py-1 transition-all">Profile</a>
      </nav>
      <ModalComponentParent/>
    </div>
  </div>
</header>
</template>
<script>

</script>