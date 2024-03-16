<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="text-center text-2xl  pb-5">
            <h1>Zaloguj się</h1>
        </div>
        
        <form @submit.prevent="Login">
            <input type="text" placeholder="Email" v-model="email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/><br>
            <input type="password" placeholder="Password" v-model="password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/><br><br>
            <div class="flex justify-between items-baseline">
            <button type="submit" class=" bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Zaloguj się</button><br>
            <button class="text-sm text-purple-500 hover:underline" @click.prevent="resetPassword">Reset password</button>
            </div>
        </form>
    </div>
    </template>
    
    <script>
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    import { auth } from 'firebase/auth';
    import {getAuth, signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth';
    
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
            };
            const resetPassword = async () => {
                const auth = getAuth()
                sendPasswordResetEmail(auth, email.value)
                
                .then(() => {

                    window.alert("Instructions for resetting the password have been sent")  
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    window.alert('Action failed',errorCode,errorMessage)
                })
    };
            

            return{
                Login,
                email,
                password,
                resetPassword
            }
    
        }
    }
    </script>