import { reactive } from 'vue';

export const store = reactive({

    menuItems: [

        { label: 'home' },
        { label: 'pages' },
        { label: 'portfolio' },
        { label: 'blog' },
        { label: 'shop' },
        { label: 'elements' },
    ],

    imagePaths: [
        '/img/h-2-port-img-1.jpg',
        '/img/h-2-port-img-2.jpg',
        '/img/h-2-port-img-3.jpg',
        '/img/h-2-port-img-4.jpg',
        '/img/h-2-port-img-5.jpg',
        '/img/h-2-port-img-6.jpg',
    ],

    articles: [
        {
            img_path: '/img/h-2-blog-img-1.jpg',
            description: 'This way, loves: a detailed guide through new design',
            author: 'By Emily Fields',
        },
        {
            img_path: '/img/h-2-blog-img-2.jpg',
            description: 'I try to give people a different way of looking at art',
            author: 'By Morgan Freeman',
        },
        {
            img_path: '/img/h-2-blog-img-3.jpg',
            description: 'Introduce richard Laperriere of those amazing features',
            author: 'Kawhy Lenard',
        },

    ],

    workflowSteps: [
        {
            img_path: '/img/work_bulb.png',
            icon: 'fa-regular fa-lightbulb',
            color: 'red',
            description: 'This way, loves: a detailed guide through new design',
            title: 'First there is an idea',
        },
        {
            img_path: '/img/work_chat.png',
            icon: 'fa-regular fa-comment',
            color: 'blue',
            description: 'I try to give people a different way of looking at art',
            title: 'Then we talk about it',
        },
        {
            img_path: '/img/work_cloud.jpg',
            icon: 'fa-solid fa-cloud',
            color: 'purple',
            description: 'Introduce richard Laperriere of those amazing features',
            title: 'And think about it',
        },
        {
            img_path: '/img/work_pen.webp',
            icon: 'fa-solid fa-pencil',
            color: 'pink',
            description: 'Introduce richard Laperriere of those amazing features',
            title: 'So we draw along',
        },

    ],



});