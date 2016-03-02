if (Meteor.isClient) {

    // counter starts at 0
    Session.setDefault('counter', 0);

    /**
     * hello's helpers
     * helper란 데이터를 전달할 수도 혹은 데이터를 조작하는 함수를 작성할 수도 있다
     * 템플릿 단위로 설정을 기본적으로 템플릿 단위로 설정을 하게 된다
     *
     */
    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        },
        people: [{ name: "Bob" }, { name: "Frank" }, { name: "Alice" }]
        //username: function () {
        //    return Meteor.user() && Meteor.user().username;
        //}
    });

    // hello's events
    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });

    Template.login.events({
        'click #facebook-login': function (event) {
            Meteor.loginWithFacebook({}, function (err) {
                if (err) {
                    throw new Meteor.Error("Facebook login failed");
                }
            });
        },

        'click #logout': function (event) {
            Meteor.logout(function (err) {
                if (err) {
                    throw new Meteor.Error("Logout failed");
                }
            });
        }
    });
} // End Client Code

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
        console.info('[info] server starting...');
    });
} // End Server Code

//# sourceMappingURL=blog-meteor-compiled.js.map