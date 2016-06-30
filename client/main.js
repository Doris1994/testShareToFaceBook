import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Meteor.startup(function () {
//   document.addEventListener("deviceready", onDeviceReady, false);
//   function onDeviceReady() {
//     var fbLoginSuccess = function (userData) {
//       console.log("UserInfo: ", userData);
//     }

//     facebookConnectPlugin.login(["public_profile"], fbLoginSuccess,
//       function loginError(error) {
//         console.error(error);
//       }
//     );
//   }
// })

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    console.log('button clicked!!!!!!!');
    facebookConnectPlugin.getLoginStatus(function onLoginStatus(status) {
      console.log("current status: ", status);
      facebookConnectPlugin.showDialog({
        method: "share",
        href: "http://cdcdn.tiegushi.com/posts/eTH2ryaXQpMNbJhcQ",
        description: "Much description",
        picture: 'http://data.tiegushi.com/ANAn3aCyWCGKvCjfh_1467091713595_1698342667',
        share_feedWeb: true
      }, function onShareSuccess(result) {
        console.log("Posted. ", result);
      }, function onError(error) {
        console.error("Failed: ", error);
      });
    });
    instance.counter.set(instance.counter.get() + 1);
  },
});
