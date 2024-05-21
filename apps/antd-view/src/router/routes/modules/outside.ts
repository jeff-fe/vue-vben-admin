import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout, IFrameView } from '@/layouts';

export const outsideRoutes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      title: '外部页面',
    },
    name: 'Outside',
    path: '/outside',
    redirect: '/outside/document',
    children: [
      {
        name: 'Document',
        path: 'document',
        component: IFrameView,
        meta: {
          iframeSrc: 'https://doc.vvbin.cn/',
          // keepAlive: true,
          title: '项目文档',
        },
      },
      {
        name: 'IFrameView',
        path: 'vue-document',
        component: IFrameView,
        meta: {
          iframeSrc: 'https://cn.vuejs.org/',
          keepAlive: true,
          title: 'Vue 文档(缓存)',
        },
      },
    ],
  },
];
