import 'core-js/stable'
import 'regenerator-runtime/runtime'
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
import '@doabit/semantic-ui-sass'
// import '@doabit/semantic-ui-sass/src/scss/semantic-ui.scss'
/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hello World from Webpacker')

function scroll_bottom() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

function submit_message() {
  $('#message_body').on('keydown', function(e) {
    if (e.keyCode == 13) {
      $('button').click();
      e.target.value = "";
    }
  })
}

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  submit_message();
  scroll_bottom();
})
