## About FINDMEJOB

I built this project for the sole purpose of satisfying the requirements of the assignment given by Torre talent team for the `Software Developer Intern ` position at Torre. 

### How the journey went

*   It was around 12 am on Saturday my local time that I received the test via email as agreed with `Maria`, I read the description of the assignment and started thinking about what to implement.

*  I started testing the APIs given to see the output and how I can use it.

* I thought about the stack to use, after long thought I decided to use Laravel and vuejs.

*  I have finally decided that I will build an application that will work as self job finder. The app will have categories of job searching websites where I can link up more than just torre account with it.

* I started writing code based on this idea until I realized that I did not actually check to see if I can get to link user account with sites like LinkedIn, I started searching about how to integrate linkedIn to my application.

* After checking for sometime, I noticed that it will actually take me a lot of time to have integrations of all the job searching sites that I had in mind, so I decided to discard that idea and just focus on torre site.

* My main thought was how could I use only four APIs to build something nice and wow my reviewers at the same time. I started removing the parts of code that I had already implemented to bring it back to basically user table while I was still thinking about what to do.

* An idea pop up to me, I thought that I as a job seeker sometimes I forget about the job that I have applied for until I receive an email about it, and also I would want to apply for some jobs but then I will not be sure whether there are newly added jobs on the job site or not. 
So I decided to build an app that will allow user to be getting constant notification about newly added jobs that are solely remote and keep track of the ones that I have applied to if any.

* I began working on this idea, I updated my db schema and began coding.

* I started with authentication part, I am used to writing authentication with Laravel Passport but I realized that people are using sanctum more and more with Laravel, I decided to implement the authentication part using sanctum. It was a bit rough as I have never used it before but I was able to scale through it.

* After that I added the UI for login and registration, added vuex to handle state management also.

* I then jumped to calling the torre api using guzzle at the backend, I got the little info that I needed to show on the dashboard. 

* I built the dashboard page, there was a lot of ideas about how the whole frontend should look like but I decided to go with the basic bootstrap to save time. So when a user logs in the system will check and see if the user has once entered his username to fetch the user info directly and if not it prompts the user to enter username, then the system will check and see whether that user exists as a user on torre or not, if yes the system displays the user info and if not it shows an appropriate error.

* After the Dashboard I added the jobs part on the backend, the system will basically fetch the search api with an offset. And then display the result.

* I added the UI for this, but I left it to implement the real functionality of the system.

* I added a command that will be running every hour, this command will fetch all users and iterate over them. Each iteration will check for newly added job opportunities, each user has a column named `last_total` where the last total returned is being saved and will be used to compute the offset to use. So the system iterates over the opportunities and checking for remote jobs and `status open`, the result will be saved in an array and will eventually be sent to the user via email. After every iteration the system is set to `sleep(5)` in order not to get an email error exception.

* After this I decided to host the system because time was already running out for me, I checked the server that I have but it has expired and will take time before I can get it back, my plan A has already failed. 

* After panicking a bit, I calmed myself down and decided to checkout some free servers that I can get up and running easily, I checked netlify which I found out that it won't work for me.

* I signed up for AWS and wanted to use EC2 which I have never used before, I noticed that it will take me sometime before I can deploy something to it, and I did not have that time.

* I decided to use heroku, I noticed that it will be quite easier to use compared to AWS. I setup my application, setup db and everything.

* I deployed but it did not work, I started searching about deploying Laravel to heroku and noticed that I needed a Procfile, I added it with nginx setup, I ran again, it still did not work.

* I kept on having issues with heroku, after more than six hours I could finally see my app running. At that too there was issue with sanctum that I had to rest and come back to it before I could finally fix it to work the way it was working on my local system.

* I tried to see that cron is working on the system too, but I have to pay for that service. I checked about email too and noticed that it will be an issue to run it on free heroku server.

### Conclusion

It was a very good experience and a rough journey, but I was able to achieve quite a lot. I hope that it will be sufficient enough for me to move to the next level.


