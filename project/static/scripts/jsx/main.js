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
