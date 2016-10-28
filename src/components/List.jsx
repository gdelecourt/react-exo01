var React = require('react');
var ListItem = require('./ListItem.jsx');
var trucs = [
    {"id":1, "text": "trucs1"},
    {"id":2, "text": "trucs2"},
    {"id":3, "text": "trucs3"},
    {"id":4, "text": "trucs4"}
];
var List = React.createClass({
    render: function () {
        var listItems = trucs.map(function (item) {
            return <ListItem key={item.id} truc={item.text}/>;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;