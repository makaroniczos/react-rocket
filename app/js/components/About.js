'use strict';

var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');

var AboutPage = React.createClass({


  render: function() {
    return (
        <div className="about-page">
        <div className="slide-div"/>
        <div className="text-div"/>
        </div>
    );
  }

});

module.exports = AboutPage;