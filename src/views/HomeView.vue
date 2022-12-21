<template>
  <div>
    <!-- for navbar -->
    <div class="row sticky-top">
        <nav class="navbar navbar-expand-lg " style="background-color: #e3f2fd;">
          <div class="container-fluid">
            <a class="navbar-brand fw-bold ms-2" href="#">Meet & Play</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#service">Service</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#login">Login</a>
                </li>
              </ul>
              <!-- <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form> -->
            </div>
          </div>
        </nav>
    </div>
    <!-- nav end -->
    <!-- home start -->
    <div class="row">
        <div class=" justify-content-center bg-light text-center shadow" style="height:300px">
            <h2 class=" mt-5">You Can Play , You Can Meet</h2>
            <h5 class="mt-4">2D - 80z</h5>
            <h5>3D - 550z</h5>
            <h5>Dubile - 80z</h5>
            
        </div>
    </div>
    <!-- home end -->
    <!-- service start -->
    <div class="row text-center justify-content-center mt-4 p-4" id="service">
        <h2>What You can do?</h2>
        <div class="col-lg-4 col-md-4 col-12 bg-light me-3 p-5 mt-3 shadow fw-bold rounded">Small social media</div>
          <div class="col-lg-4 col-md-4 col-12 bg-light me-3 p-5 mt-3 shadow fw-bold rounded">User can post</div>
        
        <div class="col-lg-4 col-md-4 col-12 bg-light me-3 p-5 mt-3 shadow fw-bold rounded">2D (three time per day)</div>
        <div class="col-lg-4 col-md-4 col-12 bg-light me-3 p-5 mt-3 shadow fw-bold rounded">3D (one time per week)</div>
        <div class="col-lg-4 col-md-4 col-12 bg-light me-3 p-5 mt-3 shadow fw-bold rounded">Dubile (six time per day)</div>
    </div>
    <!-- service end -->
    <!-- login start -->
    <div class="row text-center justify-content-center mt-4 p-5" id="login">
        <h3>Please Login to start play</h3>
          <div class="col-lg-6 col-md-8 col-10 mt-4 shadow bg-light rounded">
            <div class="row mt-2">
              <small class="text-danger" v-if="loginStatus">Your account doesn't exist! Try again!</small>
            </div>
            <div class="mb-3 row ">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10 mt-3">
                    <input type="email" class="form-control" v-model="userData.email" placeholder="Enter email">
                </div>
              </div>
              <div class="mb-3 row ">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword" v-model="userData.password" placeholder="Enter password">
                </div>
              </div>
              <div class="row justify-content-end p-2 me-2 ms-2" >
                <button class="btn btn-primary col-lg-3 col-md-6 col-12" @click="login()">
                    Login
                  </button>
              </div>
              <div class="row">
                <small class=" text-dark">If you don't have account , Please register</small>
                <p class=" text-primary" style="cursor: pointer;" @click="registerStatus = true">
                  <a href="#register" class=" text-decoration-none">Register</a>
                </p>
              </div>
          </div>
          <!-- register -->
          <div class="row text-center justify-content-center mt-4 p-2" v-if="registerStatus" id="register">
            <div class="col-lg-7 col-md-9 col-12 mt-4 shadow bg-light rounded">
              <div class="row g-3">
                <div class="col-12">
                  <label for="inputAddress" class="form-label mt-3">Name</label>
                  <input type="text" class="form-control" v-model="userInfo.name" id="inputAddress" placeholder="Enter Name">
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" v-model="userInfo.email" id="inputEmail4">
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">Password</label>
                  <input type="password" class="form-control" v-model="userInfo.password" id="inputPassword4">
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" v-model="userInfo.address"  placeholder="Enter address">
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">Phone</label>
                  <input type="number" class="form-control" v-model="userInfo.phone"  placeholder="09xxxxxx">
                </div>
                
                <div class="col-12 mb-3 d-flex justify-content-center">
                  <button  class="btn btn-primary" @click="registerUser()">Register</button>
                  <button @click="registerStatus = false" class=" ms-4 btn btn-info" style="cursor: pointer;">cancel</button>
                </div>
              </div>
            </div>
            
          </div>
    </div>
    <!-- login end -->
    <!-- footer start -->
    <div class="row" style="background-color: #e3f2fd; height:100px">
        <h3 class="text-center my-4">You can trust ! 100% save</h3>
    </div>
    <!-- footer end -->
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapGetters } from "vuex";
  export default {
    name: 'HomeView',
    data () {
      return {
        userData:{
            email : '',
            password : ''
        },
        token:'',
        loginStatus: false,
        registerStatus : false,
        userInfo :{
          name : '',
          email : '',
          password : '',
          address : '',
          phone : ''
        }
      }
    },
    computed: {
      ...mapGetters(["storageToken","storageUserData"])
      
    },
    methods: {
        login () {
            axios.post("http://localhost:8000/api/user/login",this.userData).then((response)=>{
              if(response.data.token == null){
                this.loginStatus = true;
              }else{
                this.$store.dispatch("setToken",response.data.token),
                this.$store.dispatch("setUserData",response.data.user),
                this.homePage()
              }
            });
        },
        registerUser(){
          // console.log(this.userInfo);
          axios.post("http://localhost:8000/api/user/register",this.userInfo).then((response)=>{
            this.$store.dispatch("setToken",response.data.token),
            this.$store.dispatch("setUserData",response.data.user),
            this.homePage()
          })
        },
        homePage(){
          this.$router.push(
            {name : 'homePage'}
          )
        }
    }
  }
  
</script>



