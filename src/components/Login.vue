<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="Login">
            <input type="text" placeholder="Email" v-model="email"/><br>
            <input type="text" placeholder="Password" v-model="password"/><br><br>
            <input type="submit" value="Login">
        </form>
    </div>
    </template>
    
    <script>
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
    
    export default{
        setup() {
            const email = ref("");
            const password = ref("");
            const route = useRouter() //reference to vue router
    
            const Login = () => {
                    const auth = getAuth()
                    signInWithEmailAndPassword(auth, email.value, password.value)
                    .then((data) => {
                        console.log("Successfully logged in!")
                        route.push('/home')
                    })
                    .catch((error) => {
                        console.log(error.code);
                        switch (error.code) {
                            case 'auth/invalid-email':
                                window.alert("No user found with this email")
                                break;
                            case 'auth/user-not-found':
                                window.alert("No user found with this email")
                                break;
                            case 'auth/invalid-credential':
                                window.alert("Email or password is incorrect")
                                break;
                            case 'auth/missing-password':
                                window.alert("Enter your password")
                                break;
                            case 'auth/email-already-exists':
                                window.alert("User with this email arleady exists")
                                break;
                        }
                    });
            }
            return{
                Login,
                email,
                password
            }
    
        }
    }
    </script>
    
    <style>
    
    </style>