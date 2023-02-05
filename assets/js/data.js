let skills = [
    {
        category: "Front-end Development",
        value: [
            {
                name: 'HTML',
                value: 90
            },
            {
                name: 'CSS',
                value: 80
            },
            {
                name: 'VueJs',
                value: 80
            },
            {
                name: 'Javascript',
                value: 80
            },
            {
                name: 'AngularJs',
                value: 70
            },
        ]
    },
    {
        category: "Back-end Development",
        value: [
            {
                name: 'C#',
                value: 80
            },
            {
                name: 'NodeJS (Express)',
                value: 80
            },
            {
                name: 'SQL',
                value: 70
            },
            {
                name: 'MongoDB',
                value: 40
            },
            {
                name: 'RabbitMQ',
                value: 30
            },
            {
                name: 'AWS Cloud',
                value: 30
            },
            {
                name: 'Golang',
                value: 20
            },
        ]
    },
    {
        category: "Mobile Development",
        value: [
            {
                name: 'Flutter',
                value: 40
            },
            {
                name: 'React Native',
                value: 30
            }
        ]
    }
];


let target = 'skill-container';


let template = document.getElementById(target).innerHTML;
document.getElementById(target).innerHTML = Mustache.render(template, { skills });

let innerTemplate = document.getElementById(target).querySelector('.skills-item').innerHTML;
// console.log(innerTemplate);
let elements = '';
// for (let key in skills) {
//     elements +=
//         `<div class="content-card">
//         <h4 class="h4 skills-title">${key}</h4>
//         <ul class="skills-list">` +
//         skills[key].reduce((total, item) => {
//             total += `<li class="skills-item">
//                             <div class="title-wrapper">
//                                 <h5 class="h5">${item.name}</h5>
//                                 <data value="70">${item.value}%</data>
//                             </div>
//                             <div class="skill-progress-bg">
//                                 <div class="skill-progress-fill" style="width: ${item.value}%;"></div>
//                             </div>
//                         </li>`;
//             return total;
//         }, '')
//         + `</ul></div>`;
    // console.log(skills[key].reduce((total = '', item) => {
    //     total += `<li class="skills-item">
    //                         <div class="title-wrapper">
    //                             <h5 class="h5">${item.name}</h5>
    //                             <data value="70">${item.value}%</data>
    //                         </div>
    //                         <div class="skill-progress-bg">
    //                             <div class="skill-progress-fill" style="width: ${item.value}%;"></div>
    //                         </div>
    //                     </li>`;
    //     return total;
    // }));
// }
// document.getElementById(target).innerHTML = elements;
// });;;