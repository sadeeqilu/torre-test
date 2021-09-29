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
                                                    <div  v-for="job in jobs" v-bind:key="job.id">

                            <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0" >
                            <div class="col-md-4">
                            <img v-bind:src="job.picture" class="img-fluid rounded-start" alt="company image    ">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{{job.objective}}</h5>
                                <div class="card-text">{{ job.company }}</div>
                                <div class="card-text">{{ }}</div>
                                <div class="card-text">Rank : {{ job.rank }}</div>
                                <div class="card-text"><small class="text-muted">Last updated 3 mins ago</small></div>
                            </div>
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
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"jobs",
    data(){
        return {
            user:this.$store.state.auth.user,
            job:{
                objective:'',
                remote:false,
                company:'',
                description: '',
                rank:'',
                time:'',
                picture:''
            },
            jobs:[]
        }
    },
    mounted(){
        console.log('mounted')
        console.log(this.user)
        this.getJobs()
    },
    methods:{
        async getJobs(){
            await axios.get(`api/jobs`).then(response=>{
                console.log(response.data.opportunities)
                // this.jobs = response.data
                let opportunities = response.data.opportunities.results
                opportunities.forEach( job => {
                    if(job.status == 'open' && job.remote)
                        this.jobs.push({
                            id: job.id,
                            objective: job.objective,
                            remote: job.remote,
                            company: job.organizations[0].name,
                            description:'',
                            rank: job._meta.rank.position,
                            time:'',
                            picture:job. organizations[0].picture
                })
                });
              
            }).catch(error=>{
                console.log(error)
                this.jobs = []
            })
        },
    }
}
</script>