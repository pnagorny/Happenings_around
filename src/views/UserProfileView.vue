<template>
  <HeaderLoggedIn/>
  <div class="flex justify-center mt-10">
    <div v-if="user" class="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
      <div class="text-center mb-6">
        <img :src="user.photoURL || 'https://via.placeholder.com/150'" alt="Profile Photo" class="mx-auto rounded-full h-32 w-32 object-cover">
        <h1 class="text-xl font-semibold text-gray-900 mt-4">{{ user.name }} {{ user.surname }}</h1>
        <p class="text-sm text-gray-600">{{ user.nickname }}</p>
      </div>
      <div class="space-y-3">
        <div class="flex items-center">
          <h2 class="text-gray-600 font-medium">Email:</h2>
          <p class="text-gray-800">{{ user.email }}</p>
        </div>
        <!-- Additional fields can be added here if needed -->
      </div>
    </div>
    <div v-else class="text-center">
      <p>Loading user profile or user not found...</p>
    </div>
  </div>
  <FooterLoggedIn/>
</template>


<script>
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import FooterLoggedIn from '@/components/FooterLoggedIn.vue';
import { getAuth } from 'firebase/auth';
import { onMounted, ref } from 'vue';
import { db } from '../main.js'; // Ensure this points to your Firebase initialization

export default {
  components: { HeaderLoggedIn, FooterLoggedIn },
  setup() {
    const user = ref(null);

    onMounted(async () => {
      const auth = getAuth();
      const userAuth = auth.currentUser;
      if (userAuth) {
        const docRef = db.collection('users').doc(userAuth.uid);
        const doc = await docRef.get();
        if (doc.exists) {
          user.value = doc.data();
        } else {
          console.log("User document does not exist!");
        }
      } else {
        console.log("No user is signed in.");
      }
    });

    return { user };
  }
}
</script>

