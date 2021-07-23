//what are you lookin for input//
//where you want to wurk input//
// lAST 48 HR OF postin"

//http://api.adzuna.com/v1/api/jobs/gb/version?app_id={app_id}&app_key={api_key}&&content-type=application/json//

//https://api.adzuna.com/v1/api/jobs/gb/jobsworth?app_id=&app_key=&title=Javascript%20developer&description=Backbone,HTML5,CSS3&content-type=application/json//


nse: = await fetch (BASE_URL);
const data = response.json();
const {description,title,created,display_name,id,tag,redirect_url} = data;

document.getElementById(`description`).textContent = description;
document.getElementById(`title`).textContent = title;
document.getElementById(`created`).textContent = created;
document.getElementById(`display_name`).textContent = display_name;

}

getWurkn();
