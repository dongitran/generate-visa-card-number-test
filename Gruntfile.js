module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      preparePublish: {
        files: [
          // Thêm các tệp cần thiết vào thư mục publish/
          { expand: true, src: ['*'], dest: 'publish/', filter: 'isFile' },
        ]
      }
    },

    bump: {
      options: {
        files: ['package.json'], // File chứa phiên bản
        commitFiles: ['-a'], // Commit phiên bản đã tăng
        pushTo: 'origin' // Push commit lên remote repository
      }
    },

    exec: {
      npmPublish: {
        cmd: 'npm publish publish/'
      }
    }
  });

  // Load các plugin cần thiết cho Grunt
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-exec');

  // Đăng ký các task bạn muốn chạy
  grunt.registerTask('default', ['copy:preparePublish', 'bump', 'exec:npmPublish']);
};
