new Vue({
    el: '#app',
    data:{
        title: 'Hello World',
        link: 'http://google.com',
        htmlTag: '<a href="http://google.com">Google</a>'
    },
    methods:{
        changeTitle: function(e){
            this.title=e.target.value;
        },
        sayHello: function (){
            return this.title
        }
    }
})
new Vue({
    el:'#counter',
    data:{
        counter: 0,

    },
    methods:{
        increment: function(countby){
           
            this.counter += countby
        },
        alertMe: function(){
            alert('Alert')
        }
    }
})
new Vue({
    el:'#dynamicCSS',
    data: {
        attachedRed: false,
        color: 'green',
        width: 100
    },
    computed:{
        divClasses: function (){
            return{
                red: this.attachedRed,
                blue: !this.attachedRed
            }
        },
        myStyle: function (){
            return{
                backgroundColor: this.color,
                width: this.width + "px"
            }
        }
    }
})
new Vue({
    el:'#conditions',
    data:{
        show: true,
        ingredients: ['meat', 'salt', 'parsley', 'cucumber']
    }
})