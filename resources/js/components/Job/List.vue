<template>
    <div class="row" style="padding:20px">
        
        <div class="col-12">
            <div class="card">
                <div class="card-header h1">
                    JOBS
                </div>

                <div class="p-3">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="" class="img-fluid rounded-start" alt="company image    ">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Job title</h5>
                                <h6 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</h6>
                                <div class="card-text">Company name.</div>
                                <div class="card-text">Company Location.</div>
                                <div class="card-text">Rank.</div>
                                <div class="card-text"><small class="text-muted">Last updated 3 mins ago</small></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="" class="img-fluid rounded-start" alt="company image    ">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Job title</h5>
                                <h6 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</h6>
                                <div class="card-text">Company name.</div>
                                <div class="card-text">Company Location.</div>
                                <div class="card-text">Rank.</div>
                                <div class="card-text"><small class="text-muted">Last updated 3 mins ago</small></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="" class="img-fluid rounded-start" alt="company image    ">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Job title</h5>
                                <h6 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</h6>
                                <div class="card-text">Company name.</div>
                                <div class="card-text">Company Location.</div>
                                <div class="card-text">Rank.</div>
                                <div class="card-text"><small class="text-muted">Last updated 3 mins ago</small></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src="" class="img-fluid rounded-start" alt="company image    ">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Job title</h5>
                                <h6 class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</h6>
                                <div class="card-text">Company name.</div>
                                <div class="card-text">Company Location.</div>
                                <div class="card-text">Rank.</div>
                                <div class="card-text"><small class="text-muted">Last updated 3 mins ago</small></div>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                <!-- <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="jobs.length > 0">
                                <tr v-for="(job,key) in jobs" :key="key">
                                    <td>{{ job.id }}</td>
                                    <td>{{ job.title }}</td>
                                    <td>{{ job.description }}</td>
                                    <td>
                                        <router-link :to='{name:"categoryEdit",params:{id:category.id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteCategory(category.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Jobs Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"jobs",
    data(){
        return {
            jobs:[]
        }
    },
    mounted(){
        this.getJobs()
    },
    methods:{
        async getJobs(){
            await this.axios.get('/api/jobs').then(response=>{
                this.jobs = response.data
            }).catch(error=>{
                console.log(error)
                this.jobs = []
            })
        },
    }
}
</script>