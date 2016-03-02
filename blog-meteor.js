if (Meteor.isClient) {

    // counter starts at 0
    Session.setDefault('counter', 0);

    /**
    * hello's helpers
    * helper란 무엇인가?
    *
    */
    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    // hello's events
    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
} // End Client Code


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
        console.info('[info] server starting...');
    });



} // End Server Code
