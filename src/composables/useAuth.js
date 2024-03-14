import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function useAuth() {
  const user = ref(null);
  const auth = getAuth();

  onMounted(() => {
    onAuthStateChanged(auth, firebaseUser => {
      user.value = firebaseUser ? firebaseUser : null;
    });
  });

  return { user };
}