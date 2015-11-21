PictureGallery = new Meteor.Collection('picturesgallery')
if (Meteor.isClient) {

  Template.about.rendered = new WOW().init()

}