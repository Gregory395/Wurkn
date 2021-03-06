// define variables
const btn = document.querySelector('#btn');
// inputs
// const jobs = document.querySelector('#job');
// const city = document.querySelector('#location');

// const API_KEY = 'f3949be83bb6df9c8ce6f1ed94bd50a4'; // ${API_KEY} need to set no-CORS first to fetch
// const DEFAULT_PER_PAGE = 10; // ${DEFAULT_PER_PAGE} need to set no-CORS first to fetch
// const DEFAULT_START_PAGE = 1; // ${DEFAULT_START_PAGE} need to set no-CORS first to fetch

const API_URL = 'https://api.adzuna.com/v1/api/jobs/us/search/10?app_id=dabae806&app_key=c69199ecada596ab4689db49581ca121&results_per_page=5';
const job = '&title_only=';
const loc = '&where=';

const form = document.querySelector('#form');
const resultsDataSection = document.querySelector('#my-job-result')

const categorySelect = document.querySelector('#filter-category')
const locationSelect = document.querySelector('#filter-location')


form.addEventListener('submit', (event)=> {

    const jobResults = categorySelect.value;
    const locResults = locationSelect.value;
    const selectedOptions = API_URL+job+jobResults+loc+locResults;

    console.log(selectedOptions);

    event.preventDefault();

    if(categorySelect.value.trim() === '') {
        alert('Please select a job');
        return false;
    } else if (locationSelect.value.trim() === '') {
        alert('Please select a location');
        return false;
    } else {
        fetch(selectedOptions) // my promise
            .then(response => response.json())
            .then(result => {

                const apiData = result.results;


                resultsDataSection.innerHTML = "";

                apiData.forEach(aResult => {

                    // Start: create the single div (component)
                    const resultsInnerDiv = document.createElement('div')


                    resultsInnerDiv.innerHTML =
                        `<div class="flex flex-col justify-center w-2/3 h-40 ml-10 mb-2 p-1 text-black text-sm border-2">
                                    <h4 class="text-sm font-bold">${aResult['title']}</h4>
                                    <p>${aResult['company']['display_name']}</p>
                                    <p>${aResult['location']['display_name']}</p>
                                    <p>${aResult['created']}</p>
                
                                    <p class="text-red-500 mb-2">
                                        <a href="mailto:?subject=Interested in the ${aResult['title']} position
                                        &body=I want to applied to the position.">Email a Friend</a>
                                    </p>
                                    <p><input class="mr-1" id="${aResult['index']}-btn" type="radio" value="Save">Save</input></p>
                                </div>`

                    resultsDataSection.appendChild(resultsInnerDiv)
                    // End component
                })
                console.log(apiData);
            });
        return true;
    }
});
