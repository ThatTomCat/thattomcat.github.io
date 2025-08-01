 /*
     * Math.sin(x)      x 的正玄值。返回值在 -1.0 到 1.0 之间；

     Math.cos(x)    x 的余弦值。返回的是 -1.0 到 1.0 之间的数；

     这两个函数中的X 都是指的“弧度”而非“角度”，弧度的计算公式为： 2*PI/360*角度；

     根据角度和半径计算 x与y坐标位置的公式

     x = sin(角度)*半径;
     y = sin(角度)*半径

     30° 角度 的弧度 = 2*PI/360*30
     * */
    var canvas_lizi = document.getElementById("lizishubiao");
    var ctx = canvas_lizi.getContext('2d');
    var wW = window.innerWidth;
    var wH = window.innerHeight;
    var COLOURS = ['#3e3c3f', '#b86c3b', '#928f8a', '#6f7488', '#6e6a78', '#9e938d','#9d4345','#ffffff','#b89a9a']; //彩色池子
    var particles = []; //粒子的家乡
    cInit();
    function cInit() {
        canvas_lizi.width = wW;
        canvas_lizi.height = wH;
        requestAnimationFrame(render); //每隔13毫秒 调用一次render
    }
    //粒子对象构造函数
    function Particle(x, y, radius) {
        this.init(x, y, radius);
    }
    //粒子对象原型方法
    Particle.prototype = {
        init: function (x, y, radius) { //粒子初始化
            this.x = x || 0.0;
            this.y = y || 0.0;
            this.radius = radius || 5;
            this.color = '#fff';
            this.theta = random(0, Math.PI * 2); //角度 0-360度
            this.force = random(0.5, 4); //半径 2-8 px
            this.vx = Math.sin(this.theta) * this.force; //横向坐标
            this.vy = Math.cos(this.theta) * this.force; //纵向坐标
			this.g = 0.9;
        },
        updata: function () { //粒子运动轨迹
            this.x += this.vx;
            this.y += this.vy;
            //沿着自己的方向向外移动
            this.vx += Math.sin(this.theta) * 0.2;
            this.vy += Math.cos(this.theta) * 0.2;
            //摩擦系数 0.9 每一次都慢一点
            this.vx *= .80;
            this.vy *= .80;
            this.radius *= .96;
        },
        draw: function (ctx) { //粒子绘制
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalCompositeOperation = 'lighter';
            //ctx.stroke();
            ctx.fill();
        }
    }
    //鼠标移动事件
    canvas_lizi.onmousemove = function (e) {
        e = e || window.event;
        var eX = e.pageX;
        var eY = e.pageY;
        for (var i = 0; i < random(0, 10); i++) {
            spawn(eX, eY);
        }
    }
    //产卵函数 ,孵化器
    function spawn(x, y) {
        var particle = new Particle();
        particle.init(x, y, random(3, 20));
        particle.color = random(COLOURS); //随机颜色
        particles.push(particle);  //粒子堆
        if (particles.length >= 800) { //处理性能,最多800个粒子
            particles.shift();
        }
    }
    //渲染引擎
    function render() {
        ctx.clearRect(0, 0, wW, wH);// 清空画布
        for (var i = 0, len = particles.length; i < len; i++) {
            particles[i].draw(ctx); //对象的绘制方法
			particles[i].updata(); //粒子更新
        }
        requestAnimationFrame(render); //每隔13毫秒 调用一次render
    }
    /*公共函数*/
    function isArray(object) {
        return Object.prototype.toString.call(object) == '[object Array]';
    }
    function random(min, max) {
        if (isArray(min)) {
            return min[Math.floor(Math.random() * min.length)];
        } else {
            return min + Math.random() * ( max - min );
        }
    }