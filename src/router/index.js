import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Foo = {template: '<div><h2>Foo</h2></div>'};
const Bar = {template: '<div><h2>Bar</h2></div>'};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'foo',
          component: Foo,
          meta: {
            breadcrumb: () => `foo ${1 + 1}`
          },
          children: [
            {
              path: 'bar',
              component: Bar,
              meta: {
                breadcrumb: 'bar'
              }
            }
          ]
        }
      ]
    }
  ]
})
