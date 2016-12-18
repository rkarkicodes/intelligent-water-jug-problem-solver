(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var _juga=0;
var _jugb=0;

class Header extends React.Component{





    changeOption(e){
        console.log(e.target.value)
    }

    clicked(e){
            $('#submit').click( function() {

                console.log("lol")
                 $.ajax({
                type : "POST",
                url : "/this_one",
                contentType: 'application/json;charset=UTF-8',
                success: function(result) {
                    console.log(result);
                }
                });
            });


    }


    render(){
        return(
        React.createElement("div", null, 
            React.createElement("h1", null, " this is a header"), 
            React.createElement(Options, {name: "juga"}), 
            React.createElement(Options, {name: "jugb"}), 
            React.createElement(Goal, null), 



            React.createElement("button", {type: "submit", id: "submit"}, " submit")
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
        for (var i=1;i<11; i++){
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
            return(
              React.createElement("select", {name: this.props.name, onChange: this.changeValue.bind(this)}, 
                this.state.val
               )           )
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

//    componentWillMount(){
//        this.state.value=[];
//        var new_state=[];
//        this.new_goals= this.valid_goals(parseInt(_juga), parseInt(_jugb));
//        for (var i in this.new_goals ){
//            new_state.push(<Option value={this.new_goals[i]} />)
//        };
//
//        this.forceUpdate( { value : new_state } )
//        console.log("ha")
//    }

    getGoals(){
       this.new_goals= this.valid_goals(parseInt(_juga), parseInt(_jugb));
       var new_state=[];

       for (var i in this.new_goals ){

           console.log(_juga,_jugb);

           new_state.push(React.createElement(Option, {value: this.new_goals[i]}))
           this.setState( { value : new_state } )
       }


        console.log(this.state)

    }




    render(){

            return(
            React.createElement("select", {name: "goal", onClick: this.getGoals.bind(this)}, 
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
    React.createElement(Header, null),
    document.getElementById('options')
);

},{}]},{},[1]);
