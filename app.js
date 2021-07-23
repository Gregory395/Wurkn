//what are you lookin for input//
//where you want to wurk input//
// lAST 48 HR OF postin"

//http://api.adzuna.com/v1/api/jobs/gb/version?app_id={app_id}&app_key={api_key}&&content-type=application/json//

//https://api.adzuna.com/v1/api/jobs/gb/jobsworth?app_id=&app_key=&title=Javascript%20developer&description=Backbone,HTML5,CSS3&content-type=application/json//

Form.addEventListener('submit', async function (event) {
    event.preventDefault()


const BASE_URL = 'http://api.adzuna.com/v1/api/jobs/gb/jobsworth?app_id=&app_key=&title=Javascript%20developer&description=Backbone,HTML5,CSS3&content-type=application/json';

    async function  getWurkn() {
        const response = await fetch(BASE_URL);
        const data = response.json();
        const {description, title, created, display_name, id, tag, redirect_url} = wurk;

        jobResultTag.innerHTML=
            <h1 class= "text-2xl" >" The kind of Wurk your looking for ${jobTitle} in Massachusetts</h1>

       wurk.forEach(function (job){
 const div = document.createElement( `div`)
           div.innerHTML=
               <p class = ${job.title} </p>






        }


        document.getElementById(`wurk`).textContent = wurk;
        document.getElementById(`description`).textContent = description;
        document.getElementById(`title`).textContent = title;
        document.getElementById(`created`).textContent = created;
        document.getElementById(`display_name`).textContent = display_name;
        document.getElementById(`id`).textContent = id;
        document.getElementById(`tag`).textContent = tag;
        document.getElementById(`redirect_url`).textContent = redirect_url;


        jobResultTag.getWurkn(div);
    })
})