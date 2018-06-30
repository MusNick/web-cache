<template>
  <div id="app">
    <button @click="show=!show">dddd</button>
  </div>
</template>

<script>
import vueLoading from 'vue-loading-template'
export default {
  name: 'App',
  components: {
    vueLoading
  },

  data () {
    return {
      show: true,
      testData: [
        {
          id: 1,
          name: '0:0',
          desc: '0:0',
          status: 0,
          execute_time: '2018-05-07T17:10:04.000Z',
          owner_type: 2,
          owner_id: 1,
          create_time: '2018-05-07T17:10:04.000Z',
          actions: [
            {
              type: 2,
              name: 'start',
              moment: '11:22',
              config: {
                device_id: '1222787764',
                datapoint: [{ index: 20, value: true }]
              }
            }
          ],
          timer: {
            type: 2,
            first_execute_time: '2018-06-07T17:10:04.000Z',
            last_execute_time: '2018-07-07T17:10:04.000Z',
            schedule: {
              unit: 1,
              include_weekday: [1, 2, 4, 3]
            }
          }
        },
        {
          id: 2,
          name: '0:0',
          desc: '0:0',
          status: 0,
          execute_time: '2018-05-07T17:10:04.000Z',
          owner_type: 2,
          owner_id: 1,
          create_time: '2018-05-07T17:10:04.000Z',
          actions: [
            {
              type: 2,
              name: 'start',
              moment: '11:22',
              config: {
                device_id: '1222787764',
                datapoint: [{ index: 20, value: true }]
              }
            }
          ],
          timer: {
            type: 2,
            first_execute_time: '2018-06-07T17:10:04.000Z',
            last_execute_time: '2018-07-07T17:10:04.000Z',
            schedule: {
              unit: 1,
              include_weekday: [1, 2, 4, 3]
            }
          }
        }
      ]
    }
  },
  computed: {
    a () {
      let { id } = this.testData[0]
      return id
    },
    b () {
      let { id } = this.testData[1]
      return id
    }
  },

  mounted () {
    const readFile = function (fileName) {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve(1)
        }, 1000)
      })
    }
    async function test () {
      var a = await readFile()
      if (a === 1) {
        console.log(true)
      } else {
        console.log(false)
      }
    }
    test()
    console.log('mumu')
  }
}
</script>

<style lang="stylus">
  @import 'animate.css';
  #app

    height: 100px;
    width: 100px;
    color: #2c3e50;
    background: red;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin-top: 60px;
    text-align: center;

  .item {
    height: 30px;
  }
  background-color skyblue {
    margin-bottom: 10px;
  }
  .actions {
    color: red;
    height: 100px;
    width: 200px;
  }
</style>
