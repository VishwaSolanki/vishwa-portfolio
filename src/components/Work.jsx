import ProjectCard from "./ProjectCard";


const works = [
    {
      imgSrc: '/src/assets/images/project-1.png',
      title: 'Property Website',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      projectLink: 'https://splendorous-unicorn-20292c.netlify.app/'
    },
    {
      imgSrc: '/src/assets/images/project-2.png',
      title: 'Personal Portfolio',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      projectLink: ''
    },
    {
      imgSrc: '/src/assets/images/project-3.png',
      title: 'E-Commerce fashion website',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      projectLink: 'https://e-commerce-fashionhub.netlify.app/'
    },
    {
      imgSrc: '/src/assets/images/project-4.png',
      title: 'Weather App',
      tags: ['HTML', 'CSS', 'JavaScript'],
      projectLink: 'https://weather-forcasting1.netlify.app/'
    },
    {
      imgSrc: '/src/assets/images/project-5.png',
      title: 'CRUD Application',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      projectLink: 'https://react-ultimate-crud-app.netlify.app/'
    },
    {
      imgSrc: '/src/assets/images/project-6.jpg',
      title: 'Blog API',
      tags: ['MERN','JWT'],
      projectLink: 'https://github.com/VishwaSolanki/Blog-API.git'
    },
];



const Work=()=>{
    return(
        <section className="section" id="work">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Work