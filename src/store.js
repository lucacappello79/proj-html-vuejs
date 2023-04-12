import { reactive } from 'vue';

export const store = reactive({

    menuItems: [

        { label: 'home', id: "jumbo" },
        { label: 'featured', id: "featured" },
        { label: 'workflow', id: "workflow" },
        { label: 'join us', id: "join" },
        { label: 'articles', id: "articles" },
        { label: 'contacts', id: "contacts" },
    ],

    featuredCards: [

        {
            img: '/img/h-2-port-img-1.jpg',
            title: 'Two big colored letters',
            description: 'Alphabet',
            color: 'white',
        },
        {
            img: '/img/h-2-port-img-2.jpg',
            title: 'Bicycles of love',
            description: 'Short story',
            color: '#d5ede0',
        },
        {
            img: '/img/h-2-port-img-3.jpg',
            title: 'An A on my book cover',
            description: 'Essay',
            color: '#f2d0c7',
        },
        {
            img: '/img/h-2-port-img-4.jpg',
            title: 'Illustrations of novels',
            description: 'Illustration',
            color: '#d5ede0',
        },
        {
            img: '/img/h-2-port-img-5.jpg',
            title: 'Ugly cellphone pictures',
            description: 'Expert Guide',
            color: 'white',
        },
        {
            img: '/img/h-2-port-img-6.jpg',
            title: 'When he writes you',
            description: 'Emotional',
            color: '#f2d0c7',
        },

    ],

    articles: [

        {
            img_path: '/img/h-2-blog-img-1.jpg',
            description: 'This way, loves: a detailed guide through new design',
            author: 'By Emily Fields',
            day: "07",
            month: "MAY '19",
        },
        {
            img_path: '/img/h-2-blog-img-2.jpg',
            description: 'I try to give people a different way of looking at art',
            author: 'By Morgan Freeman',
            day: "30",
            month: "FEB '23",
        },
        {
            img_path: '/img/h-2-blog-img-3.jpg',
            description: 'Introduce richard Laperriere of those amazing features',
            author: 'By Kawhy Lenard',
            day: "24",
            month: "JUN '20",
        },
        {
            img_path: '/img/rsz_teamwork.png',
            description: 'Join us on our daily broadcast on TNT with Ernie, Kenny and Charles',
            author: 'By The Inside Crew',
            day: "12",
            month: "DEC '22",
        },

    ],

    workflowSteps: [

        {
            img_path: '/img/work_bulb.png',
            icon: 'fa-regular fa-lightbulb',
            color: '#badac9',
            description: 'This way, loves: a detailed guide through new design',
            title: 'First there is an idea',
        },
        {
            img_path: '/img/work_chat.png',
            icon: 'fa-regular fa-comment',
            color: '#f8d12d',
            description: 'I try to give people a different way of looking at art',
            title: 'Then we talk about it',
        },
        {
            img_path: '/img/work_cloud.jpg',
            icon: 'fa-solid fa-cloud',
            color: '#80465f',
            description: 'Introduce richard Laperriere of those amazing features',
            title: 'And think about it',
        },
        {
            img_path: '/img/work_pen.webp',
            icon: 'fa-solid fa-pencil',
            color: '#eb6950',
            description: 'Introduce richard Laperriere of those amazing features',
            title: 'So we draw along',
        },

    ],

});