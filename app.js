//what are you lookin for input//
//where you want to wurk input//
// lAST 48 HR OF postin"

http://api.adzuna.com/v1/api/jobs/gb/version?app_id={app_id}&app_key={api_key}&&content-type=application/json//

https://api.adzuna.com/v1/api/jobs/gb/jobsworth?app_id=&app_key=&title=Javascript%20developer&description=Backbone,HTML5,CSS3&content-type=application/json//

// --getwurk is my job result
const myJobForm = document.getElementById('my-job-form')
const jobSearch = document.getElementById('job-name')
const resultsDom = document.getElementById('results')

const jobData = [{
    jobTitle: 'My Job Title 1',
    description:
}{
    jobTitle: '',
    description:
}{
    jobTitle: 'My Job Title 1',
    description:
}]

myJobForm.addEventListener('submit', async function (event) {
   event.preventDefault()
    resultsDom.innerHTML=''
    const

        title, created, display_name, id, tag, redirect_url} =


const API_URL = 'http://api.adzuna.com/v1/api/jobs/gb/jobsworth?app_id=&app_key=&title=Javascript%20developer&description=Backbone,HTML5,CSS3&content-type=application/json';


        const response = await fetch(API_URL);
        const data = await result.json();
        return data

       forEach(singlejob => {
           console.log(singlejob)
           div = document.createElement(`div`)
           div.innerHTML =
               <h3>${job.title} </h3>
           <p>${job.description}</p>


       })


console.log(wurk)

        catch (err)  {
            console.log(err)
        }
    }

        document.getElementById(`wurk`).textContent = wurk;
        document.getElementById(`description`).textContent = description;
        document.getElementById(`title`).textContent = title;
        document.getElementById(`created`).textContent = created;
        document.getElementById(`display_name`).textContent = display_name;
        document.getElementById(`id`).textContent = id;
        document.getElementById(`tag`).textContent = tag;
        document.getElementById(`redirect_url`).textContent = redirect_url;


        resultsDom.append(div);
    })
    console.log(getWurkn);
});
<hr