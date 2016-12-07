/* gulp的主文件 用于注册任务*/

/*此处代码 都是由node执行*/

//载入Gulp
var gulp = require('gulp');
//载入less
var less = require('gulp-less')
//载入css 文件压缩
var cssnano = require('gulp-cssnano')

//注册一个任务
 gulp.task('copy',function(){
 	//当gulp执行这个say任务时会自动执行该函数
 	//console.log('hello world');

 	//复制文件
 	//gulp.src 取一个文件
 	gulp.src('src/index.html')
 	  .pipe(gulp.dest('dist/'));//pipe相当于一个管道将src的index传到dest
 });
   
   //监视操作的方法
  gulp.task('dist',function(){
 	
 	//gulp.watch 监视index的复制文件这个操作
 	gulp.watch('src/index.html',['copy']);
 	//
 	gulp.watch('src/style/*.less',['style'])
 	  
 });


//用less写一个style文件
gulp.task('style',function(){
	gulp.src('src/style/*.less')
	 .pipe(less())
	 .pipe(cssnano())
	 .pipe(gulp.dest('dist/css/'));
})
