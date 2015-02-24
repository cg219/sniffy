module.exports = function(grunt){

	var sourceScripts = ["src/*.js"];

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			options: {
				mangle: true,
				compress: true
			},
			minify: {
				files:{
					"dist/sniffy.min.js" : sourceScripts
				}
			}
		},
		watch: {
			options: {
				spawn: false
			},
			scripts: {
				files: ["src/*.js"],
				tasks: ["uglify"]
			}
		}
	})

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["watch"]);
}