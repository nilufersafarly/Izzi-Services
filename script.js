
import { app_data } from "./data.js";
console.log(app_data);

async function getInfo(){
    // let result = await fetch('./data.json').then((res) => res.json());
    let container = document.querySelector(".container_all");
    let services = app_data.data.services;
    for(let i = 0; i < services.length; i++){
        let newService = document.createElement("div");
        newService.classList.add("container");
        newService.innerHTML = `
            <div class="container_image">
                <img src="${services[i].cover_img.publicUrl}" alt="">
            </div>
            <div class="about">
                <p class="job">${services[i].title_en}</p>
                <p class="salary"><img src="photos/money.png" alt="">Starts from 11$/h</p>
            </div>
        `;

        let subServices = services[i].subServices;
        let newSubService = document.createElement("div");
        newSubService.classList.add("details")
        for (let j = 0; j < subServices.length; j++) {
            let newP = document.createElement("p");
            newP.innerHTML = `
                ${subServices[j].title_en}            
            `;
            newSubService.appendChild(newP);
        }
        newService.appendChild(newSubService);
        container.appendChild(newService);
    }
}
getInfo();
