<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3> {{ profile.name ? profile.name : user.first_name + user.last_name }}</h3>
                    </div>
                    <div class="card-body" v-if="user_account">
                        <div class="mt-5">
                            <div class="image-container text-center">
                                <img v-bind:src="profile.picture" class="border border-1 rounded-circle" alt="profile name">
                            </div>
                            <dl class="row">
                                <dt class="col-sm-3">Name</dt>
                                <dd class="col-sm-9">{{ profile.name }}</dd>

                                <dt class="col-sm-3 text-truncate">Headline</dt>
                                <dd class="col-sm-9">{{ profile.professionalHeadline }}</dd>

                                <dt class="col-sm-3">Biography</dt>
                                  <dd class="col-sm-9">
                                    <p>{{ profile.bio }}</p>
                                    <p><a href="https://accounts.torre.co/user/" target="_blank" >click here to see more.</a></p>
                                  </dd>

                            </dl>
                        </div>
                        </div>
                    <div v-else>
                            <form action="javascript:void(0)" @submit="update" class="row" method="post" style="padding:20px">
                                <div class="form-group col-12">
                                    <label for="email" class="font-weight-bold">Please Enter Your Torre Account Username</label>
                                    <input type="text" name="email" v-model="user.username" id="username" placeholder="Enter Your Torre Account username" class="form-control" required>
                                </div>
                                <div class="col-12 mb-2">
                                        <button type="submit" :disabled="processing" class="btn btn-primary btn-block">
                                            {{ processing ? "Please wait" : "Save" }}
                                        </button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            
        </div>
       
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"dashboard",
    data(){
        return {
            user:this.$store.state.auth.user,
            profile:{
                picture: '',
                name: '',
                bio: '',
                professionalHeadline: ''
            },
            user_account:false,
            processing: false,
        }
    },
    mounted(){
        console.log("data",this.user)
        if(this.user.username != null){
            this.user_account = true
            this.getUser()
        }
    },
    methods:{
        ...mapActions({
            updateUser:'auth/login'
        }),
        async update(){
            this.processing = true
            await axios.patch(`api/user/${this.user.id}`,this.user).then(response=>{
                console.log(response)
                this.profile.picture = response.data.user.person.picture
                this.profile.name = response.data.user.person.name
                this.profile.bio = response.data.user.person.summaryOfBio
                this.profile.professionalHeadline = response.data.user.person.professionalHeadline
                this.user_account = true

                this.updateUser()

            }).catch(({response:{data}})=>{
                console.log(data)
                alert(data.message)
            }).finally(()=>{
                this.processing = false
            })
        },
        async getUser(){
             await axios.get(`api/user/${this.user.id}`).then(response=>{
                // console.log(response)
                this.profile.picture = response.data.user.person.picture
                this.profile.name = response.data.user.person.name
                this.profile.bio = response.data.user.person.summaryOfBio
                this.profile.professionalHeadline = response.data.user.person.professionalHeadline
                // this.signIn()
            }).catch(({response:{data}})=>{
                console.log(data)
                alert(data.message)
            }).finally(()=>{
                this.processing = false
            })
        }
    }
}
</script>