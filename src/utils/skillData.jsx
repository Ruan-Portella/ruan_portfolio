import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaFigma, FaNodeJs } from 'react-icons/fa'
import {SiJavascript, SiReactrouter, SiTestinglibrary, SiRedux, SiStyledcomponents, SiJest, SiMysql, SiNextdotjs, SiTypescript, SiExpress, SiSequelize, SiJsonwebtokens, SiMocha, SiCircle} from 'react-icons/si'
import {DiTrello} from 'react-icons/di'

export const SkillData = [
    {
        id: 0,
        type: 'FrontEnd',
        stacks: [ 
            {
                name: 'HTML 5',
                image:  <FaHtml5 size={25} />,
            },
            {
                name: 'CSS 3',
                image:  <FaCss3Alt size={25} />,
            },
            {
                name: 'JavaScript',
                image:  <SiJavascript size={25} />,
            },
            {
                name: 'React',
                image:  <FaReact size={25} />,
            },
            {
                name: 'React Router',
                image:  <SiReactrouter size={25} />,
            },
            {
                name: 'Redux',
                image:  <SiRedux size={25} />,
            },
            {
                name: 'Styled Components',
                image:  <SiStyledcomponents size={25} />,
            },
            {
                name: 'Next.js',
                image:  <SiNextdotjs size={25} />,
            },
            {
                name: 'TypeScript',
                image: <SiTypescript size={25} />
            }
            ],
    },
    {
        id: 1,
        type: 'BackEnd',
        stacks: [ 
            {
                name: 'Docker',
                image: <FaDocker size={25}/>
            },
            {
                name: 'My SQL',
                image:  <SiMysql size={25} />,
            },
            {
                name: 'JavaScript',
                image:  <SiJavascript size={25} />,
            },
            {
                name: 'TypeScript',
                image: <SiTypescript size={25} />
            },
            {
                name: 'Node.js',
                image:  <FaNodeJs size={25} />,
            },
            {
                name: 'Express',
                image:  <SiExpress size={25} />,
            },
            {
                name: 'Sequelize',
                image: <SiSequelize size={25} />
            },
            {
                name: 'JWT',
                image: <SiJsonwebtokens size={25} />
            },
            ],
    },
    {
        id: 2,
        type: 'Testes',
        stacks: [ 
            {
                name: 'React Testing Library',
                image:  <SiTestinglibrary size={25} />,
            },
            {
                name: 'Jest',
                image:  <SiJest size={25} />,
            },
            {
                name: 'Mocha.js',
                image:  <SiMocha size={25} />,
            }, 
            {
                name: 'Chai.js',
                image:  <SiMocha size={25} />,
            },
            {
                name: 'Sinon.js',
                image:  <SiCircle size={25} />,
            }
            ],
    },
    {
        id: 3,
        type: 'Outros',
        stacks: [ 
            {
                name: 'Git',
                image: <FaGitAlt size={25}/>
            },
            {
                name: 'Trello',
                image:  <DiTrello size={25} />,
            },
            {
                name: 'Figma',
                image:  <FaFigma size={25} />,
            },
            ],
    }
];