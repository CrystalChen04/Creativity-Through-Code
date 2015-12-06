Router.route('/', {
onBeforeAction: function(){
        this.render('about');
    }
});

Router.route('/gallery', {
onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser){
        this.render('gallery');
    }else {
        this.render('loginpage');
    } 
}
});

Router.route('/contact', {
onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser){
        this.render('contact');
    } else {
        this.render('loginpage');
    } 
}
});

Router.route('/messages', {
onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser){
        this.render('messages');
    }else {
        this.render('loginpage');
    } 
}
});

Router.route('/converter', {
onBeforeAction: function(){
    var currentUser = Meteor.userId();
    if(currentUser){
        this.render('converter');
    }else {
        this.render('loginpage');
    } 
}
});

Router.route('/loginpage', {
    template: 'loginpage',
    title: 'CTC - loginpage'
});
