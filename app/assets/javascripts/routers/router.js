QuiltedStory.Routers.Router = Backbone.Router.extend({

  initialize: function ($rootEl) {
    this.$rootEl = $rootEl
  },

  routes: {
    '': 'home'
  },

  home: function () {
    var homeView = new QuiltedStory.Views.Home()
    this.$rootEl.html(homeView.render().$el);
  },
})
