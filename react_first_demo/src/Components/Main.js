import { Component } from "react";


class Main extends Component
{
    constructor()
    {
        super();//its get error if we not write this super
        console.log("this is constructor");
        console.log(this.props);//this class is carrying this props if parent send this value
        this.state={
            tech1:"React",
            tech2:"Angular",
            tech3:"Vue",
            technologies:["React", "Angular", "Vue"]

        }
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("this is getDerivedStateFromProps",props);
        return{
            tech3:"js"
        }
    }
    render() {
        console.log("this is rendor");
        console.log(this.state);
        return (
        <div>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
<h2>With the state data</h2>
            <ul>
                <li>{this.state.tech1}</li>
                <li>{this.state.tech2}</li>
                <li>{this.state.tech3}</li>
            </ul>
<h2>With the state data with array</h2>
            <ul>
                {
                    this.state.technologies.length>0 && this.state.technologies.map((item,index)=><li key={index}>{item}</li>)
                }
            </ul>
    <h2>I like the {this.props.like}</h2>
            
        </div>        )
    }

    componentDidMount()
    {
        console.log("this is componentDidMount");
        //calling api 
        //after objject mounting is done
        //try to change the state of the component
        this.setState({a:"something is new"})
    }

    shouldComponentUpdate()
    {
        console.log("this is componentDidUpdate");
        return true;//expect the boolean return type if we return false from here it will not go further in updation phase
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("in getSnapshotBeforeUpdate");
        return {}
    }
    componentDidUpdate()
    {
        console.log("in componentDidUpdate");
        //call to api
    }
    componentWillUnmount()
    {
        console.log("in unmounting phase");
        
        

    }

}
export default Main;