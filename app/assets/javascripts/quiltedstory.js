window.QuiltedStory = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize function() {
    new QuiltedStory.Routers.Router({
      $rootEl: $('#content')
    });
    Backbone.history.start();
  }
};
