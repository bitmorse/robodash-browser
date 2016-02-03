var fs = require('fs');
var path = require('path');
var buildDirPath = '';

module.exports = {
  name: 'link-after-build',

  preBuild: function() {

  },

  // link additional assets after build
  postBuild: function(result) {

    if (process.env.EMBER_ENV === 'development') {


      buildDirPath = result.directory;

      try{
        var srcpath = path.resolve("/Users/sam/ROBODASH/visualizer/build");
        var dstpath = path.resolve(buildDirPath + "/assets/visualizer-build");
        //fs.symlinkSync(srcpath,dstpath);
      } catch (_){
        console.log("link-after-build: not symlinking visualizer");
      }

      return true;


    }
  }

};
