<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import utils from "@/index";
@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  mounted () {
    // const result: Array<Array<number>> =  new Array<Array<number>>();
    const obj111 = Object.create({ a: 1 })
    Object.defineProperty(obj111, 'c', {   
      writable:false,   
      value: 2
    })
    console.log(utils._get({a: {b: {c: 1}}}, 'a.b.c', 333))
    console.log(utils.deepClone(obj111), 'deepClone === ')
    const result: Array<Array<number>> =  [[0,1,2],[1,2,3]]
    console.log(utils.getParamValues(1,result))
    console.log('返回制定二维数组制定列')
    const num = 0
    console.log(utils.reverseNum(num))
    console.log(utils.verifyHttp('https://www.baidu.com'))
    console.log('0 1互换')
    const obj = '1234'
    const obj1 = 11343
    const obj2 = true
    const obj3 = []
    const obj4 = {}
    console.log(utils.getObjectType(obj))
    console.log(utils.getObjectType(obj1))
    console.log(utils.getObjectType(obj2))
    console.log(utils.getObjectType(obj3))
    console.log(utils.getObjectType(obj4))
    console.log('检测数据类型')
    const repeatArray = [{name: '24',id: 1,status: 'success'},{name: '张三',id: 2,status: 'success'},{name: '李四', id: 1, status: 'false'}]
    console.log(utils.noRepeatArray(repeatArray,'id'))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
