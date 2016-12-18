(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var a= "haha"
//var text={};
//var $ = require('jQuery');
//var Child = React.createClass({
//    render: function() {
//
//      return (
//            <div> {"this is a child no. " + this.props.num }</div>
//            );
//    }
// });
//
//class RealPython extends React.Component{
//
//
//    constructor(){
//
//
//
//        super();
//        this.state={children:[<Child num= {2} />,<Child num= {3} />,"paa"]}
//
//
//    }
//
//    addchild(e){
//        this.state.children.push(<Child num= {90} />)
//        var a=this.state.children
//        this.setState({children : a});
//    }
//
//    remchild(e){
//        this.state.children.pop(0)
//        var a=this.state.children
//        this.setState({children : a});
//    }
//
////    clicked(e){
////
////            $('#clicker').click(function() {
////
////
////                $.ajax({
////
////                type : "GET",
////                url : "/this",
////                contentType: 'application/json;charset=UTF-8',
////
////                success: function(result) {
////                    console.log(result);
////                }
////                });
////            });
////    }
////
//    render() {
//
//      return (
//            <div>
//                <button onClick={this.addchild.bind(this)}> Add Another Child Component </button>
//                <button onClick={this.remchild.bind(this)}> clear </button>
//                <h2>this is</h2>
//                <button   id="clicker"> click me </button>
//                {this.state.children}
//            </div>
//            );
//    }
// }
//
//ReactDOM.render(
//    React.createElement(RealPython, null),
//    document.getElementById('main')
//);
//
//
//
//
//

},{}]},{},[1]);
