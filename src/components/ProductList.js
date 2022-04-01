import React, { Component } from 'react'
import Product from "./Product"
import './ProductList.css'
import Title from './Title'
import { ProductConsumer } from './Components'
import { Link } from 'react-router-dom'

export default class Product_list extends Component {
   

  render() {
    return (
      //<Product/>
      <React.Fragment>
        <div className='page__1'>
          <div>
              <h1 className='page__1h'>New <br/> Monitor<br/> Electronics</h1>
              <Link to="/cart">
              <p className='nav_1'>Products</p>
              </Link>
              <Link to="/contact">
              <p className='nav_2'>Contact</p>
              </Link>
              <img src={'./tra.png'} alt="store" className='image1'/>
              <img src={'./tra.png'} alt="store" className='image2'/>
              <img src={'./tra.png'} alt="store" className='image3'/>
              <img src={'./tra.png'} alt="store" className='image4'/>
              <img src={'./tra.png'} alt="store" className='image5'/>
              <img src={'./tra.png'} alt="store" className='image6'/>
              <img src={'./tra.png'} alt="store" className='image7'/>
              <img src={'./tra.png'} alt="store" className='image8'/>
              <img src={'./tra.png'} alt="store" className='image9'/>
              <img src={'./tra.png'} alt="store" className='image10'/>
              <p className='para_1'>
              We are a leadingManufacturer of <br/>
              Power Control Switch, HT Control <br/>
              Switch,LT Control Switch,Automatic <br/>
              Control Switch, Touch Remote Switch<br/>
              and Wireless Module Remote Switch <br/>
              from Ahmednagar, India.
              </p>
              <h2 className='page__2h' >Company Vision</h2>

              <p className='para_2'>
              Company is focused on developing <br/>
              industrial products that will <br/>
              benefit the socitey.Company mainly<br/>
              focused on developing agro related <br/>
              products that will make the work<br/>
              of the farmer easy 
              </p>

              <p className='para_3'>The Company also develop systems<br/>
                and products on the user requirment.<br/>
                New Mart Electronics focuses on <br/>
                developing world class product and<br/>
                 give the best services.</p>
          </div>
        </div>


        
          

          {/* Slide 4 */}
      <div className='productlist__ba'>
        <div className='productlist__main'>
            <div className='productlist__container'>
              <Title name='Product' title='Store' />
              <div className='row'>
                <ProductConsumer>
                  {(value)=>{
                    return value.products.map( product =>{
                      return<Product
                      key={product.id}
                      product={product}

                      />
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
        </div>
      </div>

      {/*SLide 3 */}
      <div className='footer'>
        <h3 className='f__1'>Email:mulikadi001@gmail.com</h3>
        <h3 className='f__2'>Contacts:9423701609</h3>
        <h3 className='f__3'>Address:New Monitor Electronics<br/>
            Savedi, Ahmednagar, Maharashtra</h3>
      </div>
          
      </React.Fragment>
    )
  }
}
