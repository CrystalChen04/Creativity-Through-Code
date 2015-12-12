Comments = new Meteor.Collection('comments');

if (Meteor.isClient){
    
    Template.comments.events({
        "submit .new-comment":function(event){
            event.preventDefault();
            var comment= event.target.comment.value;
            Comments.insert({
                  datesubmitted: new Date(),
                postedcomment:comment
            });
            event.target.comment.value = "";
        }
        
    });


Template.comments.helpers({
   comments:function(){
    return Comments.find();
 }

});


}




