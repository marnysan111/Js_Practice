new Vue({
    el: '#app',
    data: {
        Message: 'Hello'
    },
    computed: {
        reverseMessage: function() {
            return this.Message.split('').reverse().join('')
        }
    }
})

new Vue({
    el: '#app2',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
        fullName: {
            // getter 関数
            get: function () {
              return this.firstName + ' ' + this.lastName
            },
            // setter 関数
            set: function (newValue) {
              var names = newValue.split(' ')
              this.firstName = names[0]
              this.lastName = names[names.length - 1]
            }
          }
    }
  })

  var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'I cannot give you an anser until you ask a question!'
    },
    watch: {
      // この関数は question が変わるごとに実行されます。
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waitting gor you to stop typing...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1 ) {
          this.answer = 'Question usually contain a question mark. :-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' * error
        })
      }
    }
  })

  new Vue({
    el: '#app3',
    // ここから追加 ②
    data: {
      classObject: {
        active: true,
      },
      styleObject: {
        fontSize: '50px',
      }
    },
  })

/*
  new Vue({
    el: '#app4',
    data: {},
    methods: {
      doEnter: function (name) {
        if (name == null) {
          alert("XSS");
          return false
        } else {
          alert("aaa");
          return true
        }
      }
    },
    computed: {
      canEnter: function () {
      }
    }
  })
*/
  new Vue({
    el: '#app5',
    data: {
      name: '',
      pass: ''
    },
    computed: {
      canEnter1: function() {
        if(this.name !== '') {
          return true
        } else {
          return false
        }
      }
    },
  })