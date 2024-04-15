<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="text-center text-2xl  pb-5">
            <h1>Zarejestruj się</h1>
        </div>
        <form @submit.prevent="Register">
            <input type="file" @change="handleFileChange" class="border w-full px-3 py-2 mt-2 hover:outline-none focus:outline-none rounded-md"/><br>
            <input type="text" placeholder="Email" v-model="registerData.email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/><br>
            <input type="password" placeholder="Password" v-model="registerData.password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/><br>
            <input type="text" placeholder="Nickname" v-model="registerData.nickname" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/><br>
            <input type="text" placeholder="Name" v-model="registerData.name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/><br>
            <input type="text" placeholder="Surname" v-model="registerData.surname" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/><br><br>
            <input type="submit" value="Zarjestruj się" class="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">
        </form>
    </div>
    </template>
    
    <script>
import { ref, reactive } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { db } from '../main.js'; // Ensure this points to your Firebase initialization
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

export default {
    data() {
        return {
            registerData: {
                email: '',
                password: '',
                nickname: '',
                name: '',
                surname: '',
                photoFile: null,
            }
        };
    },
    methods: {
        handleFileChange(event) {
            this.registerData.photoFile = event.target.files[0];
        },
        async Register() {
            const auth = getAuth();
            const storage = getStorage();
            const { email, password, nickname, name, surname, photoFile } = this.registerData;

            try {
                // Creating user with Firebase Authentication
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Uploading the photo to Firebase Storage
                const photoPath = `profilePictures/${user.uid}`;
                const photoStorageRef = storageRef(storage, photoPath);
                await uploadBytes(photoStorageRef, photoFile);
                const photoURL = await getDownloadURL(photoStorageRef);

                // Store user information along with the photo URL in Firestore
                await db.collection('users').doc(user.uid).set({
                    uid: user.uid,
                    nickname: nickname,
                    name: name,
                    surname: surname,
                    email: email,
                    photoURL: photoURL  // Store the URL of the uploaded photo
                });

                // Optional: Redirect to home page or any other page after successful registration
                this.$router.push('/home');

                // Clear form data after successful registration
                this.registerData = {
                    email: '',
                    password: '',
                    nickname: '',
                    name: '',
                    surname: '',
                    photoFile: null,
                };

                console.log("User registered successfully with UID:", user.uid);
            } catch (error) {
                console.error("Failed to register user:", error.message);
                alert("Registration failed: " + error.message);
            }
        }
    }
}
</script>


