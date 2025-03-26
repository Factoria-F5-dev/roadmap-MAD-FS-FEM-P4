
// Data
const bootcampData = {
    title: "Desarrollo web full stack",
    weeks: 24,
    modules: [
        { name: "Intro + Front", start: 1, end: 10 },
        { name: "Back", start: 11, end: 16 },
        { name: "fullstack", start: 17, end: 19 },
        { name: "Proyecto final", start: 20, end: 24 },
    ],
    stack: [
        // {
        //     type: "Competencia",
        //     name: "Gestionar equipos de forma eficiente",
        //     start: 1,
        //     end: 7,
        // },
        {
            type: "Proyecto",
            name: " Web estática | <i class='bi bi-person-fill'></i>",
            start: 1,
            end: 2,
        },
        {
            type: "Competencia",
            name: "Prototipado ",
            start: 1,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Maquetación ",
            start: 2,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Estilos",
            start: 2,
            end: 24,
        },
        {
            type: "Proyecto",
            name: " Web dinámica | <i class='bi bi-people-fill'></i>",
            start: 3,
            end: 5,
        },
        {
            type: "Competencia",
            name: "Control de versiones",
            start: 3,
            end: 34,
        },
        {
            type: "Competencia",
            name: "Principios de programación",
            start: 4,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Manipulación del DOM y eventos",
            start: 5,
            end: 24,

        },
        {
            type: "Proyecto",
            name: "CRUD Js vanila | <i class='bi bi-person-fill'></i>",
            start: 6,
            end: 7,
        },
        {
            type: "Competencia",
            name: " Peticiones HTTP",
            start: 6,
            end: 24,
        },
        {
            type: "Proyecto",
            name: " APP React | <i class='bi bi-people-fill'></i>",
            start: 8,
            end: 11,
        },
        {
            type: "Competencia",
            name: "Framework y librerías: Frontend",
            start: 8,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Testing: Frontend",
            start: 9,
            end: 24,

        },

        {
            type: "Proyecto",
            name: " API Express | <i class='bi bi-people-fill'></i>",
            start: 12,
            end: 16,
        },
        {
            type: "Competencia",
            name: "Diseño y gestion de bases de datos",
            start: 12,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Framework y librerías: Backend",
            start: 13,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Testing: Backend y Desarrollo con TDD",
            start: 13,
            end: 24,
        },
        {
            type: "Competencia",
            name: "Documentación de API",
            start: 14,
            end: 24,
        },
        {
            type: "Proyecto",
            name: " Fullstack | <i class='bi bi-people-fill'></i>",
            start: 17,
            end: 19,
        },
        {
            type: "Competencia",
            name: "Seguridad y Autenticación de Usuarios",
            start: 17,
            end: 24,
        },
        {
            type: "Proyecto",
            name: "Proyecto final | <i class='bi bi-people-fill'></i>",
            start: 20,
            end: 24,
        }
    ],
    links: {
        googleCalendar: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FMadrid&src=ZmFjdG9yaWEuZjVfZGV2XzFyZm",
        zoom: "https://us02web.zoom.us/j/84219607621",
        classroom: "https://classroom.google.com/",
        discord: "https://discord.gg/u54GR4D3",
        github: "https://github.com/Factoria-F5-dev"
    },
    competencies: [

       {
         name: "Prototipado web",
        metric: ["Desarrollo del Diseño de producto"],
        themes: {
            typeBasic: [
                "Introduccion al diseño y prototipado web con Figma",
                "Introduccion a UX/UI",
                "Diseño responsivo y atomic design",

            ],
            typeExtra: [
                "Estudio de usuario (UX)",
                "Accesibilidad web",
                "Prototipado interactivo",
            ],

            }
        },
        {
            name: "Maquetación y Diseño web",

            themes: {
                typeBasic: [
                    "introducción a maquetación web: HTML semántico",
                    "introducción al estilo web: Pilares de CSS",
                    "Contenedores: Flexbox y Grid",
                    "Diseño responsive: Media queries",
                ],
                typeExtra: [
                    "Preprocesadores",
                    "Tailwind",
                    "Diseño web accesible",
                ]
            }
        },
        {
            name: "Control de versiones",
            themes: {
                typeBasic: [
                    "Git bash",
                    "Github",
                    "commits, ramas, merges, pull requests",
                    "Resolución de conflictos",
                    "Issues y proyectos"
,
                ],
                typeExtra: [
                    "git flow",
                    "conventional commits",
                ]
            }

        },
        {
            name: ["Bases de programación"],
            themes: {
                typeBasic: [
                    "Introducción a JavaScript (tipos de datos, variables, operadores, estructuras de control)",
                    "Manipulación del DOM",
                    "Eventos",
                    "Funciones",
                    "Paradigma funcional",
                    "POO (Programación Orientada a Objetos)",
                    "Principios SOLID",
                    "Manejo de errores",
                    "Librerías externas",
                ],
                typeExtra: [
                    "ES6+",
                    "DRY",
                    "kiss",
                    "Legacy code",
                ]
            }
        },
        {
            name: "Peticiones HTTP",
            themes: {
                typeBasic: [
                    "Fetch y promesas: asincronia en Js",
                    "Métodos HTTP",
                    "Formato JSON",
                    "Json Server y Postman",
                    "APIs",
                ],
                typeExtra: [
                    "Axios",
                    "Cookies y localStorage",
                ]
            }
        },
        {
            name: "Testing para garantizar la calidad del software",
            themes: {
                typeBasic: [
                    "Test Unitarios (jest, vitest)",
                    "Test de Integración (supertest)",
                    "Test driven development (TDD)",
                ],
                typeExtra: [
                    "Mocking y pruebas con dependencias externas",
                    "testing E2E",
                ]
            }
        },
        {
            name: "Desarrollo de aplicaciones Frontend",
            themes: {
                typeBasic: [
                    "Introducción a React",
                    "Componentes y Props",
                    "Hooks",
                    "Router",
                    "Context",
                    "Testing",
                    "APIs",
                ],
                typeExtra: [
                    "Zustand",
                    "Next.js",
                    "Storybook",
                    "TypeScript",
                    "Librerías de estilos",
                ]
            }
        },
        {
            name: "Diseñar y gestionar bases de datos de manera eficiente",
            themes: {
                typeBasic: [
                    "Bases de datos relacionales (sql, mysql, postgresql)",
                    "ORM",
                    "Diagrama ER",
                ],
                typeExtra: [
                    "Bases de datos no relacionales (mongoDB)",
                    "Seguridad en bases de datos",
                ]
            }
        },
        {
            name: "Desarrollo de aplicaciones Backend",
            themes: {
                typeBasic: [
                    "Bases de datos relacionales",
                    "Introducción a Express",
                    "Middlewares",
                    "Rutas, Controladores, Modelos y Servicios",
                    "ORM, Validadores y manejo de errores",
                    "Testing",
                    "Documentación",
                ],
                typeExtra: [
                    "Bases de datos no relacionales",
                    "Documentación",
                    "Manejo de logs",
                ]
            },
        },
        {
            name: "Desarrollo Fullstack: Seguridad y Autenticación de Usuarios",
            themes: {
                typeBasic: [
                    "Encriptación y tokenización: bcrypt y JWT",
                    "Gestión de sesiones, Contexto Y localStorage",
                    "Variables de entorno y manejo de errores",
                    "Documentación",
                ],
                typeExtra: [
                    "Zustand",
                    "Despliegue de aplicaciones",
                    "Next.js",
                    "Storybook",
                    "TypeScript",
                    "Testing E2E",
                ]
            }

        },
        // 
        // 
        {
            name: "DevOps:Automatización de procesos",
                themes: {
                typeBasic: [
                    "Introducción a docker (contenedores, imágenes, volúmenes, redes)",
                    "Gestión de servicios : orquestación con docker-compose",
                    "Github Actions CI, CD",
                    "Integración de Docker con Github Actions",
                    "Despliegue de aplicaciones en la nube",
                ],
                typeExtra: [
                    "Mensajería y eventos: RabbitMQ, Kafka",
                    "Observabilidad y monitorización",
                ]
            }
        },

        
    ]
}

const { weeks, stack, periods, modules, links, title } = bootcampData;

//Generate the roadmap on page load
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Carga los recursos en la web
    loadSources();
});


function loadSources() {
    setTitle(title);
    setGantt();
    setLinks(links);
    generateAcordion();
}

//Generador de título de la web
function setTitle(title) {
    const titleElement = document.getElementById("nav-title");
    const titleDocument = document.querySelector("title");
    titleElement.textContent = title;
    titleDocument.textContent = title;
}

//Generador de Links
function setLinks(links) {
    const link_buttons = document.querySelectorAll("[data-link]");

    // Itera sobre los botones y asigna los enlaces dinámicamente
    link_buttons.forEach(button => {
        const linkType = button.getAttribute("data-link"); // Obtiene el valor de data-link
        const anchor = button.querySelector("a"); // Encuentra el elemento <a> dentro del botón

        if (links[linkType] && anchor) { // Si hay un enlace asociado y el <a> existe
            anchor.href = links[linkType]; // Asigna el enlace al atributo href
        }

        if (linkType === "googleCalendar") {
            button.setAttribute('src', links[linkType])
        }

    })

}

//Generador del roadmap con el stack
function setGantt() {
    // Generador roadmap dependiendo del número de semanas
    function setWeeksValue(weeksNumber) {
        const weeksInput = document.getElementById("weeks");
        weeksInput.setAttribute("value", weeksNumber);
    }

    //Generador etiquetas roadmap
    function setStackTags(stack) {

        const list_tag_stack = document.querySelector(".list-inline");
        const types = [...new Set(stack.map(item => item.type))];

        function createListItem(item) {
            const listItem = document.createElement("li");
            listItem.classList.add("list-inline-item");
            const badge = document.createElement("span");
            badge.classList.add("badge");


            if (item === "Competencia") {
                badge.classList.add("temas");
                badge.innerHTML = `<i  class="bi bi-lightbulb-fill"></i> competencia`;
            } else if (item === "Course") {
                badge.classList.add("certificate-course");
                badge.innerHTML = `<i class="bi bi-arrow-return-right"></i> <i class="bi bi-bookmark-check"></i> certificado o curso`;
            } else if (item === "Proyecto") {
                badge.classList.add("project");
                badge.innerHTML = `<i class="bi bi-briefcase-fill"></i> | <i class="bi bi-people-fill"></i> project`;
            } else if (item === "Transición") {
                badge.classList.add("transicion");
                badge.innerHTML = `<i class="bi bi-diagram-3-fill"></i> transición-flexible`
            }



            listItem.appendChild(badge);
            return listItem;
        }

        // Generar la lista dinámica
        types.forEach(item => {
            const listItem = createListItem(item);
            list_tag_stack.appendChild(listItem);
        });
    }

    setWeeksValue(bootcampData.weeks);
    setStackTags(stack);

    const weeks = document.getElementById("weeks").value;
    const table = document.getElementById("gantt-table");
    table.innerHTML = "";

    if (modules.length > 0) {
        let moduleHeaderRow = "<tr><th class=''>Módulos</th>";

        modules.forEach(module => {
            let colspan = module.end - module.start + 1;
            moduleHeaderRow += `<th colspan="${colspan}">${module.name}</th>`;
        });
        moduleHeaderRow += "</tr>";
        table.innerHTML += moduleHeaderRow;
    }

    // Meses en el roadmap
    function generateGanttMonths(weeks) {
        let monthHeaderRow = "<tr><th>Meses</th>";
        for (let i = 1; i <= weeks; i += 4) {
            const month = Math.ceil(i / 4);
            let colspan = Math.min(4, weeks - i + 1);
            monthHeaderRow += `<th colspan="${colspan}">Mes ${month}</th>`;
        }

        monthHeaderRow += "</tr>";
        table.innerHTML += monthHeaderRow;
    }
    // generateMonthsGantt(weeks);

    // Semanas en el roadmap
    function generateGanttWeeks(weeks) {
        let weekHeaderRow = "<tr><th>Semanas</th>";
        for (let i = 1; i <= weeks; i++) {
            weekHeaderRow += `<th>${i}</th>`;
        }
        weekHeaderRow += "</tr>";
        table.innerHTML += weekHeaderRow;
    }
    generateGanttWeeks(weeks);

    // Stack en el roadmap
    let lastEnd = 0;
    function generateGanttStack(stack) {
        stack.forEach((item) => {
            let colorClass = "";
            let iconoProject = '<i class="bi bi-briefcase-fill"></i>';
            let iconoCompetencia = '<i class="bi bi-lightbulb-fill"></i>';
            let iconoIntegracion = '<i class="bi bi-diagram-3-fill"></i>';
            let iconCertificate = '<i class="bi bi-arrow-return-right"></i><i class="bi bi-bookmark-check"></i>';
            let icon = '';

            if (item.type === "Proyecto") {
                colorClass = "proyecto";
                item.start = item.start ? item.start : lastEnd + 1;
                item.end = item.end ? item.end : item.start + 2;
                icon = iconoProject;
            } else if (item.type === "Competencia") {
                colorClass = "tema";
                item.start = item.start ? item.start : lastEnd + 1;
                item.end = item.end ? item.end : item.start + 2;
                icon = iconoCompetencia;
            } else if (item.type === "Transición") {
                colorClass = "transicion";
                item.start = item.start ? item.start : lastEnd + 1;
                item.end = item.end ? item.end : item.start + 2;
                icon = iconoIntegracion;

            } else if (item.type === "Course") {
                colorClass = "certificate-course";
                item.start = item.start ? item.start : lastEnd + 1;
                item.end = item.end ? item.end : item.start + 2;
                icon = iconCertificate;
            }

            lastEnd = item.end;

            let row = `<tr><td class="label ${colorClass} stack-col">${icon} ${item.name}</td>`;

            for (let i = 1; i <= weeks; i++) {
                if (i >= item.start && i <= item.end) {
                    row += `<td class="block ${colorClass}"></td>`;
                } else {
                    row += `<td class="empty"></td>`;
                }
            }

            row += "</tr>";
            table.innerHTML += row;
        });
    }
    generateGanttStack(stack);


    // Ajustar el ancho del roadmap
    table.style.width = `${weeks * 30 + 260}px`;

}

//Generador de acordeón de competencias
function generateAcordion() {
    // Obtener el contenedor del acordeón
    const accordionContainer = document.getElementById('accordion');
    // Generar dinámicamente el contenido del acordeón
    bootcampData.competencies.forEach((competency, index) => {
        const collapseId = `collapse${index}`;
        const headingId = `heading${index}`;
        const expanded = index === 0 ? 'true' : 'false';
        const showClass = index === 0 ? 'show' : '';

        console.log(competency);

        const accordionItem = `
        <div class="accordion-item">
            <h2 class="accordion-header" id="${headingId}">
                <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#${collapseId}" 
                    aria-expanded="${expanded}" 
                    aria-controls="${collapseId}">
                    <span><i class="bi bi-lightbulb-fill"></i>  ${competency.name}</span>
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${showClass}" aria-labelledby="${headingId}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul>
                        ${competency.indicator?.typeBasic?.length > 0 ? `
                        <li>
                            Básicos
                            <ul class="list-inline">
                                ${competency.indicator.typeBasic.map(criterio => `<li class="list-inline-item"><span class="badge badge-soft-success">${criterio}</span></li>`).join('')}
                            </ul>
                        </li>
                        ` : ''}
                        ${competency.indicator?.typeExtra?.length > 0 ? `
                        <li>
                            Extra
                            <ul class="list-inline">
                                ${competency.indicator.typeExtra.map(criterio => `<li class="list-inline-item"><span class="badge badge-soft-danger">${criterio}</span></li>`).join('')}
                            </ul>
                        </li>
                        ` : ''}
                    </ul>
                    ${competency.themes?.typeBasic?.length > 0 ? `<p><strong>Temas</strong></p>` : ''}
                    <ul>
                        ${competency.themes?.typeBasic?.length > 0 ? `
                        <li>
                            Básicos
                            <ul class="list-inline">
                                ${competency.themes.typeBasic.map(pildora => `<li class="list-inline-item"><span class="badge badge-soft-success">${pildora}</span></li>`).join('')}
                            </ul>
                        </li>
                        ` : ''}
                        ${competency.themes?.typeExtra?.length > 0 ? `
                        <li>
                            Extra
                            <ul class="list-inline">
                                ${competency.themes.typeExtra.map(pildora => `<li class="list-inline-item"><span class="badge badge-soft-danger">${pildora}</span></li>`).join('')}
                            </ul>
                        </li>
                        ` : ''}
                    </ul>
                </div>
            </div>
        </div>
`;


        // Insertar el elemento generado en el contenedor
        accordionContainer.innerHTML += accordionItem;
    });
}
