//determine which sign-in/sign-out buttons appear in index.html
myApp.controller('IndexController', function($scope, $window, Auth) {

  angular.extend($scope, Auth);

  $scope.auth = { signin: true, signout: false };
  $scope.categories = [
    'Programming',
    'Language',
    'Design',
    'Music',
    'Wellness',
    'Cooking'
  ];
  $scope.userId = undefined;

  $scope.$on('loggedIn', function(){
    $scope.auth.signin = false;
    $scope.auth.signout = true;
    $scope.userId = Auth.getUserId();
  });

  $scope.signout = function(){
    Auth.signout();
    Auth.setLoggedIn(false);
    $scope.auth.signin = true;
    $scope.auth.signout = false;
  };

// initialized materialize js when view is loaded
  $scope.$on('$viewContentLoaded', function(){
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    });

    $("body").on('click', '.register-link', function() {
      console.log('register link clicked');
      $('body').animate({scrollTop: 0});
    });

    var cardImageSize = function () {
      var cardWidth = $('.sessionTile').width();
      $('.card-image img').css({height: cardWidth * 0.6});
      setTimeout(cardImageSize, 100);
    };

    var videoCardSize = function () {
      var cardWidth = $('.video-card').width();
      $('#remote-video').css({height: cardWidth * 0.75 - 4});
    };

    $(cardImageSize);
    $(window).resize(cardImageSize);
    setTimeout(videoCardSize, 1000);
    $(window).resize(videoCardSize);

    $('select').material_select();

  });

});
