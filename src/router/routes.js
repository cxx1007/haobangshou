const routes = [
    {
        path: '/',
        component: () => import('@/components/mainPage.vue'),
    },
    {
        path: '/tools/:name',
        component: () => import('@/components/toolTemplate.vue'),
    },{
        path:'/otherpage/whateataddpage',
        component:()=>import("@/components/otherpage/whateataddpage.vue")
    },{
        path:'/otherpage/globaladvice',
        component:()=>import("@/components/otherpage/globaladvice.vue")
    },{
        path:'/otherpage/ocrshowdata',
        component:()=>import("@/components/otherpage/ocrshowdata.vue")
    },{
        path:'/otherpage/denglu',
            component:()=>import("@/components/otherpage/denglu.vue")
    },{
        path:'/otherpage/zhuce',
            component:()=>import("@/components/otherpage/zhuce.vue")
    },{
        path:'/tools/tubiao',
            component:()=>import("@/components/tools/tubiao.vue")
    }
]
export default routes
