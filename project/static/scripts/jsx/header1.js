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
        <div >
            <h1> this is a header</h1>
            <Options name={"juga"}  />
            <Options name={"jugb"} />
            <Goal/>



            <button type="submit" id='submit'> submit</button>
        </div>
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
            this.state.val.push(<Option value={i} />)
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
              <select name={this.props.name}  onChange={this.changeValue.bind(this)}>
                {this.state.val}
               </select>           )
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

           new_state.push(<Option value={this.new_goals[i]} />)
           this.setState( { value : new_state } )
       }


        console.log(this.state)

    }




    render(){

            return(
            <select name="goal"  onClick={this.getGoals.bind(this)}>
                {this.state.value}
               </select>
            )

    }

}


class Option extends React.Component{
    render(){
        return(<option>{this.props.value}</option>)
    }

}


ReactDOM.render(
    <Header/>,
    document.getElementById('options')
);

