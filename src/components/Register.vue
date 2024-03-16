<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="text-center text-2xl  pb-5">
            <h1>Zarejestruj się</h1>
        </div>
        <form @submit.prevent="Register">
            <input type="text" placeholder="Email" v-model="email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/><br>
            <input type="password" placeholder="Password" v-model="password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/><br><br>
            <input type="submit" value="Zarjestruj się" class="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">
        </form>
    </div>
    </template>
    
    <script>
    import {ref} from 'vue';
    import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
    import {useRouter} from 'vue-router';

    export default{
        setup() {
            const email = ref("");
            const password = ref("");
            const route = useRouter();
        
            const Register = () => {
                let auth = getAuth()
                createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((data) => {
                    console.log("Successfully registered!")
                    route.push('/home')
                })
                .catch(err => alert(err.message));
            }
    
            return {
                Register,
                email,
                password
            }
        }
    
    
    }
    </script>