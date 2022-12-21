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
                <button type="button" class="list-group-item list-group-item-action" @click="aboutPage()">News and post</button>
                <button type="button" class="list-group-item list-group-item-action" @click="playPage()">play </button>
                <button type="button" class="list-group-item list-group-item-action">Order List </button>
                <button type="button" class="list-group-item list-group-item-action mb-2" @click="logout()">logout</button>
              </div>
          
            </div>

            <!-- order Section -->
            <div class="col-5  ">
               <div class="row text-center">
                <h3 class=" bg-secondary rounded p-2">Order List</h3>
               </div>
               <div class="row shadow rounded">
                <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order Code</th>
                        <th scope="col">total</th>
                        <th scope="col">State</th>
                      </tr>
                    </thead>
                    <tbody class="table-group-divider">
                      <tr v-for="(order,index) in orderList" :key="index">
                        <th scope="row">{{ order.order_id }}</th>
                        <td class="text-danger " style="cursor: pointer;" @click="getDetail(order.order_code)">{{ order.order_code }}</td>
                        <td>{{ order.total }}</td>
                        <td>
                          <button class="btn btn-warning" v-if="order.state == 0">Pending</button>
                          <button class="btn btn-success" v-if="order.state == 1">Confirm</button>
                          <button class="btn btn-danger" v-if="order.state == 2">Reject....</button>
                        </td>
                      </tr>
                    </tbody>
                </table>
               </div>
            </div>

            <!-- contact section -->
            <div class="col-4 text-center">
              <h3  class="p-2 text-center">Detail <small class="text-warning">(click order code)</small></h3>
              <small class="text-secondary text-center"  v-if="orderDetail.length == 0">Click order code to know detail</small>
              <div class="mb-2 d-flex justify-content-center" v-else v-for="(odetail,index) in orderDetail" :key="index">
                <div class="card shadow" style="width: 18rem;">
                  <div class="card-header">
                    Order Detail
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Name - {{ odetail.name }}</li>
                    <li class="list-group-item">OrderCode - {{ odetail.order_code }}</li>
                    <li class="list-group-item">Number - {{ odetail.number }}</li>
                    <li class="list-group-item">Type - {{ odetail.type }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import { mapGetters } from 'vuex'
    export default {
        name: 'OrderView',
        data () {
            return {
                tokenStatus: true,
                orderList: {},
                orderDetail : {}
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
          playPage(){
            this.$router.push(
              {name : 'playPage'}
            )
          },
          loginPage(){
            this.$router.push({
              name: 'home'
            })
          },
          aboutPage(){
              this.$router.push(
                  {name : 'homePage'}
              )
          },
          logout(){
              this.$store.dispatch("setToken", null);
                this.loginPage();
          },
          getDetail(code){
            let codeN = {
              order_code : code
            }
            axios.post("http://localhost:8000/api/order/detail",codeN).then((response)=>{
              // console.log(response.data.orderList);
              this.orderDetail = response.data.orderList;
            })
          },
          loadData(){
            let data = {
              user_id : this.storageUserData.id,
            }
            axios.post("http://localhost:8000/api/order/get",data).then((response)=>{
              this.orderList = response.data.order;
            })
          }
        },
        mounted () {
          this.tokenCheck();
          this.loadData();
        }
    }
    
</script>

