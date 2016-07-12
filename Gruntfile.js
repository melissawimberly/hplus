module.exports = function (grunt) {
	grunt.initConfig({
		sass:{
			options: {
				ouptputStyle:'expanded'
			},
			dist:{
				files: [{
					expand: true,
					cwd: 'assets/sass/',
					src: '**/*.scss',
					dest: 'assets/css',
					ext: '.css'
				}]
			}
		},
		watch:{
			files: 'assets/sass/**/*.scss',
			tasks: 'sass'
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass','watch']);

};