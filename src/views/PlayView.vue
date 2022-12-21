<template>
    <div class="container">
        <div class="row bg-warning text-center fs-6 my-5 shadow rounded" v-if="tokenStatus" @click="loginPage()"><h2 class=" my-5 text-danger" > You need to login</h2></div>
          <div class="row mt-5" v-else>
            <div class="row mb-4 bg-primary rounded">
              <h5 class="text-center p-2 text-white">You can post as you like under the rules</h5>
            </div>
            <div class="col-3 ">
              <div class="list-group shadow p-2 rounded sticky-top mb-3">
                <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                  The current future
                </button>
                <button type="button" class="list-group-item list-group-item-action" @click="aboutPage()">News and post</button>
                <button type="button" class="list-group-item list-group-item-action">play </button>
                <button type="button" class="list-group-item list-group-item-action" @click="orderList()">Order List </button>
                <button type="button" class="list-group-item list-group-item-action mb-2" @click="logout()">logout</button>
              </div>
                <div class="list-group shadow p-2 rounded  mb-3">
                    <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                      Play selection
                    </button>
                    <button type="button" class="list-group-item list-group-item-action" @click="twoD()">2D</button>
                    <button type="button" class="list-group-item list-group-item-action" @click="threeD()">3D </button>
                    <button type="button" class="list-group-item list-group-item-action " @click="dubile()">dubile</button>
                    
                  </div>
            </div>
            <!-- middle  -->
            <div class="col-4 mt-2">
                <div v-if="twoStatus" class="shadow p-3 rounded">
                    <div class="row text-center justify-content-center" >
                        <h4 class=" mb-2 text-secondary">2D Number make pre-order</h4>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Type</h5>
                            <div class="col-6 mt-3 ms-2 ">
                                <select class="form-control bg-primary text-white text-center" v-model="cart.type">
                                    <option value="" selected>Select </option>
                                    <option value="2D" >2D</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Number</h5>
                            <div class="col-6 mt-3 ms-2">
                                <input type="number" class="form-control" v-model="cart.number" required>
                            </div>
                        </div>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Time</h5>
                            <div class="col-6 mt-3 ms-2 ">
                                <select class="form-control bg-primary text-white text-center" v-model="cart.time">
                                    <option value="" selected>Select</option>
                                    <option value="morning">Morning</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="evening">Evening</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Amount</h5>
                            <div class="col-6 mt-3 ms-2 ">
                                <input type="number" class="form-control" v-model="cart.amount" required>
                                
                            </div>
                        </div>
                        <div class="col-10 mt-3 ms-2  rounded">
                            <button class="btn btn-info" @click="collect()"> Pre-order</button>
                        </div>
                    </div>
                    <div class="mt-5 ms-2 border border-1 p-2 mb-4">
                        <ul>
                            <li>This is pre-order state</li>
                            <li>Only create pre-order. It isn't send to admin</li>
                            <li>If you confirm . Click confirm button</li>
                            <li>And wait Admin confirm reply</li>
                        </ul>
                    </div>
                    
                </div>
                <div v-if="threeStatus" class="shadow p-3 rounded">
                    <div class="row text-center justify-content-center" >
                        <h4 class=" mb-2 text-secondary">3D Number make pre-order</h4>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Type</h5>
                            <div class="col-6 mt-3 ms-2 ">
                                <select class="form-control bg-primary text-white text-center" v-model="cart.type">
                                    <option value="" selected>Select </option>
                                    <option value="3D" >3D</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Number</h5>
                            <div class="col-6 mt-3 ms-2">
                                <input type="number" class="form-control" v-model="cart.number">
                            </div>
                        </div>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Time</h5>
                            <div class="col-6 mt-3 ms-2 ">
                                <select class="form-control bg-primary text-white text-center" v-model="cart.time">
                                    <option value="" selected>Select</option>
                                    <option value="week">Week</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Amount</h5>
                            <div class="col-6 mt-3 ms-2 ">
                                <input type="number" class="form-control" v-model="cart.amount">
                            </div>
                        </div>
                        <div class="col-10 mt-3 ms-2  rounded">
                            <button class="btn btn-info" @click="collect()"> Pre-order</button>
                        </div>
                    </div>
                    <div class="mt-5 ms-2 border border-1 p-2 mb-4">
                        <ul>
                            <li>This is pre-order state</li>
                            <li>Only create pre-order. It isn't send to admin</li>
                            <li>If you confirm . Click confirm button</li>
                            <li>And wait Admin confirm reply</li>
                        </ul>
                    </div>
                </div>
                <div v-if="dubileStatus" class="shadow p-3 rounded">
                    <div class="row text-center justify-content-center" >
                        <h4 class=" mb-2 text-secondary">Dubile Number make pre-order</h4>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Type</h5>
                            <div class="col-6 mt-3 ms-2 ">
                                <select class="form-control bg-primary text-white text-center" v-model="cart.type">
                                    <option value="" selected>Select </option>
                                    <option value="Dubile" >Dubile</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Number</h5>
                            <div class="col-6 mt-3 ms-2">
                                <input type="number" class="form-control" v-model="cart.number">
                            </div>
                        </div>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Time</h5>
                            <div class="col-6 mt-3 ms-2 ">
                                <select class="form-control bg-primary text-white text-center" v-model="cart.time">
                                    <option value="" selected>Select</option>
                                    <option value="one">one</option>
                                    <option value="two">two</option>
                                    <option value="three">three</option>
                                    <option value="four">four</option>
                                    <option value="five">five</option>
                                    <option value="six">six</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <h5 class="col-5  mt-3 ms-2">Amount</h5>
                            <div class="col-6 mt-3 ms-2 ">
                                <input type="number" class="form-control" v-model="cart.amount">
                            </div>
                        </div>
                        <div class="col-10 mt-3 ms-2  rounded">
                            <button class="btn btn-info" @click="collect()"> Pre-order</button>
                        </div>
                    </div>
                    <div class="mt-5 ms-2 border border-1 p-2 mb-4">
                        <ul>
                            <li>This is pre-order state</li>
                            <li>Only create pre-order. It isn't send to admin</li>
                            <li>If you confirm . Click confirm button</li>
                            <li>And wait Admin confirm reply</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="col-5">
                <div class="row bg-white rounded shadow mt-2 p-3 text-center">
                    <h4 class="mb-2 text-secondary">Pre Order State</h4>
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Number</th>
                            <th>Time</th>
                            <th>Amount</th>
                            <th>Cancel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="cartList.length == 0">
                            <td colspan="6">There is no data</td>
                        </tr >
                        <transition-group
                            tag=""
                            enter-active-class="animate__animated animate__backInUp"
                            leave-active-class="animate__animated animate__backOutUp" v-else>
                         <tr v-for="(cart,index) in cartList" :key="index">
                            <td>{{ cart.name }}</td>
                            <td>{{ cart.type }}</td>
                            <td>{{ cart.number }}</td>
                            <td>{{ cart.time }}</td>
                            <td>{{ cart.amount }}</td>
                            <td>
                                <button class=" btn btn-warning" @click="cancel(index)">cancel</button>
                            </td>

                         </tr>
                        </transition-group>
                      </tbody>
                    </table>

                </div>
                <div class="row p-2" v-if="confirmState" @click="confirmStateM()">
                    <h4 class="bg-success rounded p-3">Confrim state is success</h4>
                </div>
                <div class="row mt-3 text-center shadow rounded p-3 border">
                    <h4 class=" col-8">total - {{ total }}</h4>
                    <button class="btn btn-info col-4" @click="confirm()">Confrim</button>
                </div>
            </div>
          </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { mapGetters } from 'vuex'
     export default {
        name: 'PlayView',
        data () {
            return {
                tokenStatus: true,
                twoStatus : true,
                threeStatus : false,
                dubileStatus : false,
                cart:{
                    type : '',
                    number: '',
                    time: '',
                    amount: ''
                },
                cartList : {},
                total :'',
                cartData:{},
                confirmState: false,
            }
        },
        computed: {
            ...mapGetters(["storageToken","storageUserData"])
        },
        methods: {
            twoD(){
                this.twoStatus = true;
                this.threeStatus = false;
                this.dubileStatus = false;
                
            },
            threeD(){
                this.twoStatus = false;
                this.threeStatus = true;
                this.dubileStatus = false;
                
            },
            dubile(){
                this.twoStatus = false;
                this.threeStatus = false;
                this.dubileStatus = true;
                
            },
            
            loginPage () {
                this.$router.push(
                    {name : 'home'}
                )
            },
            aboutPage(){
                this.$router.push(
                    {name : 'homePage'}
                )
            },
            orderList(){
                this.$router.push(
                    {name : 'orderPage'}
                )
            },
            logout(){
                this.$store.dispatch("setToken", null);
                  this.loginPage();
            },
            tokenCheck () {
                if(this.storageToken != null && this.storageToken != undefined && this.storageToken != ''){
                  this.tokenStatus = false
                }else{
                  this.tokenStatus = true
                }
              },
            collect(){
                let cartData = {
                    userId : this.storageUserData.id,
                    type : this.cart.type,
                    number : this.cart.number,
                    time : this.cart.time,
                    amount : this.cart.amount,
                }
                axios.post("http://localhost:8000/api/cart/create",cartData).then((response)=>{
                    this.cartList = response.data.cart;
                    this.total = response.data.total;
                })
            },
            confirmStateM(){
                this.confirmState = false;
            },
            loadCartData(){
                let userId = {
                    user_id : this.storageUserData.id,
                }
                axios.post("http://localhost:8000/api/cart/get",userId).then((response)=>{
                    this.cartList = response.data.cart;
                    this.total = response.data.total;
                })
            },
            cancel(id){
                let cartId = {
                    cart_id : this.cartList[id].cart_id,
                    user_id : this.storageUserData.id
                }
                axios.post("http://localhost:8000/api/cart/delete",cartId).then(response=>{
                    this.cartList = response.data.cart;
                    this.total = response.data.total;
                })
            },
            confirm(){
                let userId = {
                    user_id : this.storageUserData.id,
                }
                axios.post("http://localhost:8000/api/cart/confirm",userId).then((response)=>{
                    // console.log(response.data.cart);
                    this.cartData = response.data.cart;
                    let orderList = [];
                    let random  = Math.floor(Math.random() * 10000000000001);
                    for(let i = 0; i < this.cartData.length ; i++){
                        orderList.push({
                            user_id : this.cartData[i].user_id,
                            cart_id : this.cartData[i].cart_id,
                            type : this.cartData[i].type,
                            number : this.cartData[i].number,
                            time : this.cartData[i].time,
                            amount : this.cartData[i].amount,
                            'order_code' : 'KMK' + random
                        })
                    }
                    // console.log(orderList);
                    let data = Object.assign({},orderList);
                    // console.log(data);
                    axios.post("http://localhost:8000/api/cart/orderList",data).then((response)=>{
                        console.log(response.data.success);
                        this.confirmState = response.data.success;
                        this.loadCartData();
                    })
                })
            }
        },
        mounted () {
            this.tokenCheck();
            this.loadCartData();
        }
    }
</script>

