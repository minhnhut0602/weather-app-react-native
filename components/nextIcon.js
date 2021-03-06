/**
 * next icon for menus
 * @module next icon
 */

'use strict';

let React = require('react');
let svg = React.createFactory(require('react-native-svg').Svg);
let path = React.createFactory(require('react-native-svg').Path);

module.exports = React.createClass({
    render() {
        return svg(
            {
                width: 32,
                height: 32,
                style: {
                    transform: [{scale: 0.5}]
                }
            },
            path({
                fill: 'white',
                viewBox: '0 0 32 32',
                d: 'M25.1 15.182l-1.484-.212L9.05 29.536l1.414 1.414 15.45-15.45-1.414-1.414-1.06 1.06h.706l-13.51-13.51v.708l.708-.707h-.707l14.217 14.217.353-.354-.132-.133.026-.185zm-.954.672l-.424.14 1.485.213.707-.707L10.99.577 9.578 1.99l14.216 14.217 1.06-1.06h-.707l.708.707v-.708L10.11 29.89h.708l-.707-.708v.707l14.036-14.036z'
            })
        );
    }
});
