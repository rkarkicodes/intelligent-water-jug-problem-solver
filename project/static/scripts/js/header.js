(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _juga=0;
var _jugb=0;
var result={};
//var $ = require('jQuery');

class Step extends React.Component{
            render(){

            var divStyle={
                    display: "inline-block",
                    padding: 10,
                    justifyContent: "space-between",
                    width: 300,
                    minHeight: 60,
                    backgroundColor:"#0a50b4",
                    margin:"10px",
                    color:"black",
                    textAlign:"center",
                    fontFamily:'Courier New',
                    fontWeight: 600,

                      };

            var spanStyle={

                    display: "inline-block"

            }
                    return(
                    React.createElement("div", null, 
                            React.createElement("div", {style: divStyle}, " ", this.props.steps)
                    )

                    )
            }
}

function body(result){
console.log(result)
class Body extends React.Component{

        constructor(){
            super();
            this.state={value:[React.createElement(Step, {steps: result['steps'][0]})],counter:1}
        }

        clicked(e){
            console.log(e.value)
            var stat=this.state.value
            var counter=this.state.counter+1
            if (counter==result['steps'].length){
                stat.push(React.createElement(Step, {steps: "You have reached you goal!"}))
                this.setState({value:stat, counter: counter})

            }else if (counter<result['steps'].length){
                stat.push(React.createElement(Step, {steps: result['steps'][this.state.counter]}))
                this.setState({value:stat, counter: counter})
                console.log(this.state.value)

            }

        }


        render(){

           return(
            React.createElement("div", null, 

                this.state.value, 
                React.createElement("button", {class: "btn btn-default btn-lg", onClick: this.clicked.bind(this)}, " Next step ")
            )
            )

         }

}
        ReactDOM.render(
            React.createElement(Body, null),
            document.getElementById('main')
        );


}




class Header extends React.Component{

    clicked(e){
                $.ajax({
                type : "POST",
                url : "/result",
                data:JSON.stringify({
                    jug_a: $('select[name="juga"]').val(),
                    jug_b: $('select[name="jugb"]').val(),
                    goal: $('select[name="goal"]').val()
                }),
                contentType: 'application/json;charset=UTF-8',
                success: function(result) {
                    body(result.result);
                }
                });
                $('#this *').prop('disabled',true);

    }

    render(){
        var divStyle={
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: 450,
                      };


        return(
        React.createElement("div", {id: "this", style: divStyle}, 

                React.createElement("label", null, " JUG A "), 
                React.createElement(Options, {name: "juga"}), 

                " " + ' ' +
                " ", 

                React.createElement("label", null, " JUG B "), 
                React.createElement(Options, {name: "jugb"}), 

                " " + ' ' +
                " ", 

                React.createElement("label", null, " GOAL "), 
                React.createElement(Goal, {name: "goal"}), 
                " ", 

            React.createElement("button", {onClick: this.clicked.bind(this), id: "click_me"}, " Submit me ")
        )
        )
    }
}

class Options extends React.Component{

    constructor(){
        super();
        this.state={val:[]};
    }


    componentWillMount(){
        for (var i=1;i<13; i++){
            this.state.val.push(React.createElement(Option, {value: i}))
          };
    }

    changeValue(e){
        if  (e.target.name==="juga"){
            _juga=e.target.value
        }else{
            _jugb=e.target.value
        }
    }

    render(){
//        var style_it ={
//                border: "1 none",
//                fontSize: 20,
//                fontWeight: "bold",
//                width: 60,
//                height: 40,
//                textAlign: "center"
//
//            }


        return(
              React.createElement("select", {class: "opt", name: this.props.name, onChange: this.changeValue.bind(this)}, 
                this.state.val
               ))
    }

}


class Goal extends React.Component{

    constructor(){
        super();
        this.new_goals=[];
        this.state={value:[]};
    }


    check_validity( jug_a, jug_b){

        if (jug_b===0){
                return jug_a;
        }
        else{
            return this.check_validity(jug_b,jug_a%jug_b);
       }

     }

    valid_goals(jug_a,jug_b){
        var res=[]

        if (jug_a<jug_b){

            i=jug_a;
            jug_a=jug_b;
            jug_b=i;
            console.log(jug_a,jug_b)
		}
        if (this.check_validity(jug_a,jug_b)!=1){
            var gcd= this.check_validity(jug_a,jug_b)
            for (var i=1; i<=jug_a+1;i++){
                if (i%gcd===0){
                    res.push(i)}}
            return res

        }else{
            res=[...Array(jug_a+1).keys()]
            res=res.slice(1,res.length-1)
            return res
        }
    }


    getGoals(){
       this.new_goals= this.valid_goals(parseInt(_juga), parseInt(_jugb));

       var new_state=[];
       for (var i in this.new_goals ){
           new_state.push(React.createElement(Option, {value: this.new_goals[i]}))
           this.setState( { value : new_state } )
       }
    }

    render(){

            return(
            React.createElement("select", {class: "opt", name: "goal", onClick: this.getGoals.bind(this)}, 
                React.createElement("option", null), 
                this.state.value
               )
            )
    }

}


class Option extends React.Component{
    render(){
        return(React.createElement("option", null, this.props.value))
    }
}


ReactDOM.render(
    React.createElement(Header, null),document.getElementById('optionPanel')
);

},{}]},{},[1]);
