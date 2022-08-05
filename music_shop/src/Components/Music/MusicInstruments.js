import React, { Component } from 'react'
import { connect } from 'react-redux'
import json from '../../JSON/MusicProducts.json'
import MusicItem  from './MusicItem'
import Loading from './Loading';
//import fetch_products from '../../Actions/MusicProductsAction'
import {fetchProductsBegin} from '../../Actions/MusicProductsAction'

 class MusicInstruments extends Component {
  // constructor()
  // {
  //   super();
  //   this.state={
  //       products:json.products,
  //       productsdata:[],
  //   }
    
  // }//commented  because we are now subscribing
  componentDidMount(){

    // fetch(' http://localhost:5501/products',{method:'GET'})

    // .then(resp=>resp.json())

    // .then(data=>this.setState({productsdata:data}))
    this.props.fetchProducts();



  }

  
    render() {
      
    return (
      <div >
         <Loading />
        {
         
             //this.state.products.length > 0 && this.state.products.map((item,index)=><span key={index}>{item.name}</span>)
              //this.state.productsdata.length > 0 && this.state.productsdata.map((item,index)=><MusicItem key={index} item={item}></MusicItem>)
             //this.state.products.length > 0 && this.state.products.map((item,index)=><MusicItem key={index} item={item}></MusicItem>) 
              this.props.products?.length > 0 && this.props.products.map((item,index)=><MusicItem key={index} item={item}></MusicItem>)
              
        }
      </div>
    )
  }
}

const mapStateToProps=(state)=>
{
  //it will return the props for this particualr component
  return{
    //products:state.preducer//for synchronous
    products:state.preducer.items//for saga
  }
}
const mapDispatchToProps=(dispatch)=>
{
return{
  fetchProducts:()=>dispatch(fetchProductsBegin())
}
}


//2 mthods for connect which we need to define
export default connect(mapStateToProps, mapDispatchToProps)(MusicInstruments)
