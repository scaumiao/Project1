// angular.module('searchModule', [])
//   .controller('myCtrl', function() {
//     var addList = this;
//           addList.lists = [{
//               'mainSeletes': ['标题', '关键词', '作者', '摘要'],
//               'conditional': ['精确', '模糊'],
//               'logic': ['与', '或', '非']
//           },
//           {
//               'mainSeletes': ['标题', '关键词', '作者', '摘要'],
//               'conditional': ['精确', '模糊'],
//               'logic': ['与', '或', '非']
//           }];
//           addList.add = function() {
//               addList.lists.push({
//                   'mainSeletes': ['标题', '关键词', '作者', '摘要'],
//                   'conditional': ['精确', '模糊'],
//                   'logic': ['与', '或', '非']
//               });
//               setTimeout(function () {
//                 //手动使其加载样式
//                 $('.selectpicker').selectpicker();
//               }, 10);
//
//           };
//
//   });



  // (function() {
  var app = angular.module('searchModule', []);
  app.controller('addCtrl', function() {
      var addList = this;
      addList.lists = [{
          'mainSeletes': ['标题', '关键词', '作者', '摘要'],
          'conditional': ['精确', '模糊'],
          'logic': ['与', '或', '非']
      }, {
          'mainSeletes': ['标题', '关键词', '作者', '摘要'],
          'conditional': ['精确', '模糊'],
          'logic': ['与', '或', '非']
      }];
      addList.add = function() {
        if (addList.lists.length >= 5) {
          alert('无法继续添加');
          return;
        }
          addList.lists.push({
              'mainSeletes': ['标题', '关键词', '作者', '摘要'],
              'conditional': ['精确', '模糊'],
              'logic': ['与', '或', '非']
          });
          setTimeout(function() {
              //手动使其加载样式
              $('.selectpicker').selectpicker();
          }, 10);

      };
      // $scope.mainSeletes = ['标题','关键词','作者','摘要'];
      // $scope.conditional = ['精确','模糊'];
  });

      // app.controller('add', function($scope) {
      //     $scope.count = 0;
      // });
  // }());

  //搜索模式转换
  app.controller('changeMode', function() {
      var modeChange = this;
      modeChange.rightMode = true;
      modeChange.title = '高级搜索';
      modeChange.rightChange = function() {
          modeChange.rightMode = !modeChange.rightMode;
          modeChange.title = modeChange.rightMode ? '高级搜索' : '普通搜索';
      };
      //较笨的方法解决点击后颜色变化，改变class来实现css更换
      modeChange.selectCol = true;
      modeChange.select1 = 'checked';
      modeChange.select2 = 'unchecked';
      modeChange.leftChange1 = function() {
          modeChange.selectCol = true;
          modeChange.select1 = modeChange.selectCol ? 'checked':'unchecked';
          modeChange.select2 = modeChange.selectCol ? 'unchecked':'checked';
      };
      modeChange.leftChange2 = function() {
          modeChange.selectCol = false;
          modeChange.select1 = modeChange.selectCol ? 'checked':'unchecked';
          modeChange.select2 = modeChange.selectCol ? 'unchecked':'checked';
      };
  });
