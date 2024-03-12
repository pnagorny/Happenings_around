<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="Register">
            <input type="text" placeholder="Email" v-model="email"/><br>
            <input type="text" placeholder="Password" v-model="password"/><br><br>
            <input type="submit" value="Register">
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