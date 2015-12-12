Posts = new Meteor.Collection('posts');


if (Meteor.isClient) {
    //counter starts at 0
    Session.setDefault('counter', 0);
    Session.setDefault('exchangedPrinciple',0);
    Session.setDefault('finalCurrency',0);
    

    
    Template.gallery.helpers({

    posts: function(){
      return Posts.find();
    }

  });
    
Template.loginButtons.rendered = function()
    {
       Accounts._loginButtonsSession.set('dropdownVisible', true);
   };
    
   Template.converter.events({
    'submit .converter':function(event){
        event.preventDefault()
        
        var cadToUsdRate = 0.75; 
        var usdToCadRate = 1.33;
        var exchangerates = [cadToUsdRate, usdToCadRate];
        
        var principleValue = event.target.principle.value;
        var rateSelected =event.target.direction.value;
        Session.set('exchangedPrinciple',exchange(principleValue,rateSelected));
    }
  
  });

    Template.converter.helpers({
         exchange:function(principle, rateSelected){
             return principle*exchangerates[ratesSelected];
         },
         returnExchanged:function(){
             var temp = Session.get('exchangedPrinciple');
             if(temp<0){
                 return "You have no money!";
             }else{
                 return temp;
             }
         }
    });
    
    
Session.setDefault('val1',0);
Session.setDefault('val2',0);
Session.setDefault('score',0);
        
    Template.math.helpers({
        assignValues:function(){
            Session.set('val1',(Math.random() * 10) +1);
            Session.set('val2',(Math.random()* 10) +1);
        },
        returnValues:function(){
            return (Session.get('val1'),Session.get('val2'))
        }

    })
        
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}