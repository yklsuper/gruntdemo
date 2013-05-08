module.exports = function(grunt) {

  var transport = require('grunt-cmd-transport');
  var style = transport.style.init(grunt);
  var text = transport.text.init(grunt);
  var script = transport.script.init(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    transport : {
      options : {
        paths : ['.'],
        alias: '<%= pkg.spm.alias %>',
        parsers : {
            '.js'   : [script.jsParser],
            '.css'  : [style.css2jsParser],
            '.html' : [text.html2jsParser]
        }
      },
      styles : {
        options : {
            idleading : 'dist/styles/'
        },
        files : [
            {
                cwd : 'styles',
                src : '**/*',
                filter : 'isFile',
                dest : '.build/styles'
            }
        ]
      },
      app : {
          options : {
              idleading : 'dist/app/'
          },
          files : [
              {
                  cwd : 'app',
                  src : '**/*',
                  filter : 'isFile',
                  dest : '.build/app'
              }
          ]
      }
    }, 
    concat : {
      options : {
          paths : ['.'],
          include : 'relative'
      },
      styles : {
          files: [
              {
                  expand: true,
                  cwd: '.build/',
                  src: ['styles/**/*.js'],
                  dest: 'dist/',
                  ext: '.js'
              }
          ]
      },
      app : {
          options : {
              include : 'all'
          },
          files: [
              {
                  expand: true,
                  cwd: '.build/',
                  src: ['app/**/*.js'],
                  dest: 'dist/',
                  ext: '.js'
              }
          ]
      }
    },
    uglify : {
      styles : {
        files: [
            {
                expand: true,
                cwd: 'dist/',
                src: ['styles/**/*.js', '!styles/**/*-debug.js'],
                dest: 'dist/',
                ext: '.js'
            }
          ]
      },
      app : {
          files: [
              {
                  expand: true,
                  cwd: 'dist/',
                  src: ['app/**/*.js', '!app/**/*-debug.js'],
                  dest: 'dist/',
                  ext: '.js'
              }
          ]
      },
      seajs:{
        src :".build/sea-debug.js",
        dest:"dist/sea.js"
      }
    }
  });

  grunt.registerTask("merge-seajs-plugins", "merge the seajs plugins in package.json", function() {
    var plugins = grunt.config("pkg.spm.plugins")
    var seaCode = grunt.file.read("gallery/seajs/sea-debug.js");
    var codes = [seaCode];
    for(var i = 0, len = plugins.length; i < len; i++){
      (function(plug){
        codes.push(grunt.file.read("gallery/seajs/plugin-"+plug+".js"))
      })(plugins[i])
    }
    grunt.log.writeln("merge-seajs-plugins in running:" + plugins);
    grunt.file.write(".build/sea-debug.js", codes.join(";\r\n"));
  })
  
  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.loadNpmTasks('grunt-cmd-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask("build-styles", ['transport:styles','concat:styles','uglify:styles']);
  grunt.registerTask("build-app", ['transport:app','concat:app','uglify:app']);
  grunt.registerTask("build-seajs", ["merge-seajs-plugins", "uglify:seajs"]);

  grunt.registerTask("default", ["build-styles","build-app", "merge-seajs-plugins"])

}