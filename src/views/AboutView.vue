<template>
  <div>
    <div class="container">
      <div class="row bg-warning text-center fs-6 my-5 shadow rounded" v-if="tokenStatus" @click="loginPage()"><h2 class=" my-5 text-danger" > You need to login</h2></div>
      <div class="row mt-5" v-else id="newFeed">
        <div class="row mb-4 bg-primary rounded">
          <h5 class="text-center p-2 text-white">You can post and give advance and meet with good idea</h5>
        </div>
        <div class="col-3 ">
          <div class="list-group shadow p-2 rounded sticky-top mb-3">
            <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
              The current future
            </button>
            <button type="button" class="list-group-item list-group-item-action">News and post</button>
            <button type="button" class="list-group-item list-group-item-action" @click="playPage()">play </button>
            <button type="button" class="list-group-item list-group-item-action" @click="orderList()">Order List </button>
            <button type="button" class="list-group-item list-group-item-action mb-2" @click="logout()">logout</button>
            <a href="#newFeed" class=" text-decoration-none text-white text-start d-flex justify-content-end">
              <button class="btn btn-primary">Return top</button></a>
          </div>
          
        </div>
        <div class="col-6 ">
          <div class="row bg-primary rounded" >
            <h2 class="text-center  rounded col-8">News feed</h2>
            <div class="col-4 p-2">
              <select class="form-select " aria-label="Default select example" v-model="searchKey" @change="search()">
                <option value="" selected>Search</option>
                <option value="2D">What good at 2D?</option>
                <option value="3D">What good at 3D?</option>
                <option value="Dubile">What good at Dubile?</option>
                <option value="Football">Football preview</option>
              </select>
            </div>
            
          </div>
          <div class="row mt-4" v-if="postList.length == 0">
            <h1 class="text-center bg-light text-warning rounded p-3">There is no post here!</h1>
          </div>
          <div class="row p-3" v-else>
            <!-- new feed  -->
            <transition-group
              tag=""
              enter-active-class="animate__animated animate__backInUp"
              leave-active-class="animate__animated animate__backOutUp">
            
              <div class="col-12 shadow rounded mt-3" v-for="(post,index) in postList" :key="index">
                <div class="row mt-2">
                  <h5 class=" col-8"><i class="fa-regular fa-user me-2"></i>{{ post.name }}</h5>
                  <!-- <div class="col-4 text-end">{{ moment(post.created_at).format("DD,MM,YYYY") }}</div> -->
                  <div class="col-4 text-end">{{ readableDate(post.created_at) }}</div>
                </div>
                <h6>{{ post.title }}</h6>
                <p>{{ post.description }}</p>
                <div class="row ms-2 mb-2">
                  <button class="col-3 btn btn-sm btn-outline-dark"> see all comment -> </button>
                  <button class="col-2 btn btn-sm btn-outline-dark ms-2 " @click="commentBoxChange(post.post_id)">comment</button>
                  
                </div>
                </div>
            </transition-group>
            <!-- new feed end -->
          </div>
        </div>
        <div class="col-3 ">
          <transition
            enter-active-class="animate__animated animate__bounceIn"
            leave-active-class="animate__animated animate__bounceOut"
          >
            <div class="row col-10 bg-info mb-2 rounded text-center ms-4" @click="close()"    v-if="successUpdate" style="cursor: pointer;">
            
              <h4 class="p-2">Update Post Success</h4>
            </div>
          </transition>
          <div class="shadow rounded p-2 sticky-top">
            <label for="" class="col-12">Title</label>
            <!-- <input type="text" placeholder="enter title" class="form-control" v-model="postData.title"> -->
            <select class="form-select" aria-label="Default select example" v-model="postData.title">
              
              <option value="What good at 2D?">What good at 2D?</option>
              <option value="What good at 3D?">What good at 3D?</option>
              <option value="What good at Dubile?">What good at Dubile?</option>
              <option value="Football preview">Football preview</option>
            </select>
            <label for="" class="col-12">Description</label>
            <textarea  id="" cols="20" rows="10" class=" form-control" v-model="postData.description"></textarea>
            <button class=" btn btn-primary mt-2 text-end" @click="post()">Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { mapGetters } from 'vuex'
  import moment from 'moment';
  export default {
    name : 'AboutView',
    data () {
      return {
        tokenStatus: true,
        postData:{
          title: '',
          description: ''
        },
        postList: {},
        searchKey:'',
        moment : moment,
        successUpdate: false,
      }
    },
    computed: {
      ...mapGetters(["storageToken","storageUserData"])
    },
    methods: {
      tokenCheck () {
        if(this.storageToken != null && this.storageToken != undefined && this.storageToken != ''){
          this.tokenStatus = false
        }else{
          this.tokenStatus = true
        }
      },
      post(){
        let postDatas = {
          title: this.postData.title,
          description: this.postData.description,
          user_id: this.storageUserData.id
        }
        axios.post("http://localhost:8000/api/user/post",postDatas).then((response)=>{
          this.successUpdate = true;
          this.postList = response.data.post;
          this.postData ={};
        })
        
      },

      playPage(){
        this.$router.push(
          {name : 'playPage'}
        )
      },
      orderList(){
        this.$router.push(
          {name: 'orderPage'}
        )
      },

      loginPage(){
        this.$router.push({
          name: 'home'
        })
      },

      close(){
        this.successUpdate = false;
      },

      commentBoxChange(postId){
        // console.log(postId);
        this.$router.push({
          name: 'detailPost',
          params : {
            id : postId
          }
        })
      },
      login() {
          this.$router.push({
              name: 'home'
          })
      },

      logout() {
          this.$store.dispatch("setToken", null);
          this.login();
      },
      
      loadPostData(){
        axios.get("http://localhost:8000/api/user/getPost").then((response)=>{
          this.postList = response.data.post;
        })
      },

      search(){
        let key ={
          key : this.searchKey
        };
        axios.post("http://localhost:8000/api/post/search",key).then((response)=>{
          this.postList = response.data.post;
        })
      },

      readableDate(date){
        return (new Date(date)).toLocaleString()
      }
    },
    mounted () {
      this.tokenCheck();
      this.loadPostData();
    }
  }
</script>

