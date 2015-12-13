Comments = new Meteor.Collection('comments');
if (Meteor.isClient){
  Session.setDefault('currentcomment',0);
  
    Template.comments.events({
        "submit .new-comment":function(event){
            console.log("hello");
            event.preventDefault();
            var comment= event.target.comment.value;
            var selectedcolour = event.target.colourselected.value;
            var fontsize = event.target.fontsize.value;
            if (comment != ""){
            Comments.insert({
                datesubmitted: new Date(),
                postedcomment:comment,
                styleofcomment: 'color: ' + selectedcolour + ';' + 'font-size: ' + fontsize + 'px;'
            });
            event.target.comment.value = "";
            event.target.colourselected.value = "";
            event.target.fontsize.value = "";
            
          }
        },
            "click #comment":function(event){
                Session.set('currentcomment', this._id)
    },
        "click #deletecomment":function(event){
            event.preventDefault();
            Comments.remove(Session.get('currentcomment'));
        }
                             
    });


Template.comments.helpers({
   comments:function(){
    return Comments.find();
 }

});


}




