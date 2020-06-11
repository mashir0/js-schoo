

 var app = new Vue({
  el: '#app',
  data: {
    aaa: 'Hello Vue!',
    obj: null 
  }, 

  methods: { 
    test () {
        let ary = [0, 1, 10, 100, 1000,100];
        console.log("ary: ", ary[3]);

        let json = {name: '太郎', age: 33};
        console.log('name: ', json.name );

        let aaa = [] 
        console.log(aaa + " is " +Boolean(aaa))

        // return `ary:${ary[3]}  name:${json.name}`
    }
  }
})