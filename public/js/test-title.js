var CommentBox = React.createClass({
  displayName: 'CommentBox',

  render: function () {
    return React.createElement(
      'div',
      null,
      'This is an CommentBox KUY.'
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('main'));