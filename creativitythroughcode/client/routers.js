Router.route('/about', {
onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser){
        this.render('about');
    }else {
        this.render('login');
    } 
}
});

Router.route('/gallery', {
  template: 'gallery',
    title: 'CTC - gallery'
});

Router.route('/contact', {
  template: 'contact',
    title: 'CTC - contact'
});

Router.route('/converter', {
  template: 'converter',
    title: 'CTC - converter'
});

Router.route('/', {
    template: 'login',
    title: 'CTC - login'
});


Router.route('/logout', {
     template: 'logout',
    title: 'CTC - logout'
});

Router.route('/comments', {
  template: 'comments',
    title: 'CTC - comments'
});