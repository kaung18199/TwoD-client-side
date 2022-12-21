<template>
    <div>
        <div class="row justify-content-center mt-5"  id="top">
            <div class=" shadow rounded col-5 p-4" style="background-color: #e3f2fd;">
                <div class="row text-end sticky-top" style="cursor:pointer">
                    <h6 @click="back()">Back</h6>
                    <a href="#top " class=" text-decoration-none text-dark"><h6>Top go</h6></a>
                </div>
                <div class="row ">
                    <h3>{{ post.name }}</h3>
                </div>
                <div class="row mb-3">
                    <h6 class="mt-3 border-bottom col-4 p-2 ms-5 ">{{ post.title }}</h6>
                    <p class="col-4 offset-2 mt-4 ">{{ readableDate(post.created_at) }}</p>
                    <p class="ms-5 mt-2 fw-bold fs-4">{{ post.description }}</p>
                </div>
                <div class="row">
                    <p class="ms-5">CommentCount - {{commentList.length}}</p>
                </div>
                <div class="row ">
                    <div class=" col-8">
                        <input type="text" name="" id="" v-model="comment" class=" rounded ms-4 form-control" placeholder="enter comment" required>
                    </div>
                    <button class=" btn btn-primary offset-1 col-2" @click="createComment()">Comment</button>
                </div>
                <div class="row mt-3">
                    <div class="col-10 ms-5  rounded p-2">
                        <transition-group
                            tag=""
                            enter-active-class="animate__animated animate__backInUp"
                            leave-active-class="animate__animated animate__backOutUp">
                            <div class="row shadow-sm rounded bg-light mt-2" v-for="(comment,index) in commentList" :key="index">
                                <h6 class="col-6">{{ comment.name }}</h6><small class="col-5">{{ readableDate(post.created_at) }}</small>
                                <p class=" ms-3">{{ comment.comment }}</p>
                            </div>
                        </transition-group>
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
        name : 'DetailPost',
        data () {
            return {
                postId:0,
                post:{},
                comment:'',
                commentList:{}
            }
        },
        computed: {
            ...mapGetters(["storageToken","storageUserData"])
        },
        methods: {
            postDetail (id) {
                let postID = {
                    'postId' : id
                }
                axios.post("http://localhost:8000/api/post/detail",postID).then((response)=>{
                    this.post = response.data.post;
                })
            },
            readableDate(date){
                return (new Date(date)).toLocaleString()
            },
            back(){
                this.$router.push({
                    name: 'homePage'
                })
            },
            createComment(){
                let create = {
                    user_id: this.storageUserData.id,
                    post_id: this.postId,
                    comment : this.comment 
                }
                axios.post("http://localhost:8000/api/comment/create",create).then((response)=>{
                    this.commentList = response.data.comment;       
                })
            },
            reloadComment(id){
                let postId ={
                    post_id : id
                }
                axios.post("http://localhost:8000/api/comment/get",postId).then((response)=>{
                    this.commentList = response.data.comment
                })
            }
        },
        mounted () {
            this.postId = this.$route.params.id;
            this.postDetail(this.postId);
            this.reloadComment(this.postId);
        }
    }
</script>

