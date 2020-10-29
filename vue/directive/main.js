new Vue({
    el: "#app",
    data: {
        path: 'http://www.web-deli.com/image/linkbanner_l.gif'
    },
    methods: {
        // マウスが画像に乗った時に表示させる画像
        onmouseenter: function() {
            this.path = 'http://www.web-deli.com/image/home_chara.gif';
        },
        //マウスが画像から離れた時に表示される画像
        onmouseleave: function() {
            this.path = 'http://www.web-deli.com/image/linkbanner_l.gif'
        },
        //エラーのときに表示される画像
        onerror: function() {
            this.path = './sample1.png'
        }
    }
})