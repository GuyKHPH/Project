<template>
  <div id="navbar">
    <nav
      class="bg-gradient-to-b from-cyan-500 to-indigo-500 text-slate-200 font-semibold py-1"
    >
      <div class="flex items-center justify-between">
        <div class="flex">
          <div class="mx-4">
            <p class="p-3"><RouterLink to="/appview">Home</RouterLink></p>
          </div>
          <div class="mx-4">
            <p class="p-3"><button @click="admin()">Admin zone</button></p>
          </div>
        </div>
        <div class="flex">
          <div class="mx-4">
            <p class="p-3" v-if="loginOnline == 1">{{ email }}</p>
          </div>
          <button class="p-3" @click="login()" v-if="loginStatus == 0">
            Login
          </button>
          <div class="mx-4">
            <button class="p-3" @click="signup()" v-if="loginStatus == 0">
              Sign up
            </button>
            <button class="p-3" @click="logout()" v-if="loginStatus == 1">
              Log out
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../plugins/firebaseInit";

export default {
  data() {

    return {
      loginStatus: 0,
      loginOnline: 0,
      image: "",
      email: "",
    };
  },
 
  mounted() {
    this.checklogin();
  },
  methods: {


    admin() {
      onAuthStateChanged(auth, (user) => {
        if (user.uid == "5qwfPsxVLWPAPRbS5iv01Hif8vY2" ||"HZ0Ykx2sHRUZBCp47ipcWzRbN6n1") {
          const uid = user.uid;
          console.log(uid); 
          alert("Go to admin zone");
          this.$router.push("/adminview");
        } else {
          alert("You are user");
        }
      });
    },
 
    checklogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.loginOnline = 1;
          this.loginStatus = 1;

          this.email = user.email;
        } else {
        }
      });
    },

    login() {
      this.$router.push("/login");
    },

    signup() {
      this.$router.push("/signup");
    },
    logout() {

      signOut(auth)
        .then(() => {
          this.loginStatus = 0;
          this.loginOnline = 0;
          // Sign-out successful.
          this.$router.replace("/");
          alert("Logout success");
        })
        .catch((error) => {
        });
    },
  },
};
</script>

<style></style>
