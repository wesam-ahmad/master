import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return( 
        <main>
        <div>
          {/* Carousel */}
          <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{ marginBottom: '10px'}}>
            {/* Indicators/dots */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
              <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
              <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
            </div>
            {/* The slideshow/carousel */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/slider3.jpg" alt="Los Angeles" className="d-block" style={{width: '100%', maxHeight: '700px'}} />
                <div className="carousel-caption" style={{backgroundColor: 'rgb(254,236,236,54%)', bottom: '25%', color: 'black', borderRadius: '10px'}}>
                  <h1>WELCOME IN JO-DRESS</h1>
                  <p style={{fontSize: 'large'}}>A JO-DRESS is an online platform that allows individuals to rent designer dresses for a specific occasion or event. </p>
                  <a className="btn btn-outline-light btn-lg" href="./html/login.html" role="button" style={{textDecoration: 'none', border: 'solid black 3px'}}>Find Your Dress</a>
                </div>
              </div>    
              <div className="carousel-item">
                <img src="./images/slider1.jpg" alt="Chicago" className="d-block" style={{width: '100%', maxHeight: '700px'}} />
                <div className="carousel-caption" style={{backgroundColor: 'rgb(254,236,236,54%)', bottom: '25%', color: 'black', borderRadius: '10px'}}>
                  <h1>WELCOME IN JO-DRESS</h1>
                  <p>Now you can take advantage of your one-time used dresses and offer them for rent on our website</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/slider6.jpg" alt="New York" className="d-block" style={{width: '100%', maxHeight: '700px'}} />
                <div className="carousel-caption" style={{backgroundColor: 'rgb(254,236,236,54%)', bottom: '25%', color: 'black', borderRadius: '10px'}}>
                  <h1>WELCOME IN JO-DRESS</h1>
                  <div className="row ">
                    <div className="col-4"><hr /></div>
                    <div className="col-4 text-center" style={{fontSize: 'x-large'}}>For Any Occasion</div>
                    <div className="col-4"><hr /></div>
                  </div>
                  <p style={{fontSize: 'xx-large'}}> Dresses For Rent </p>
                </div>
              </div>
            </div>
            {/* Left and right controls/icons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
          <br />
          <br />
          <br />
          <div className=" container ftr-product">
            <div className="tab-box d-flex justify-content-between">
              <div className="sec-title">
                <h1>Items you might like</h1>
              </div>
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#all">Featured</a>
                </li>
                <li className="nav-item">
                  <a style={{color: 'gray'}} className="nav-link" data-toggle="tab" href="#elec">New arrival</a>
                </li>
                <li className="nav-item">
                  <a style={{color: 'gray'}} className="nav-link" data-toggle="tab" href="#smart">Best sellers</a>
                </li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <div style={{backgroundColor: '#FEECEC'}}>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="product-grid">
                    <div className="product-image">
                      <a href="#" className="image">
                        <img src="./images/newphoto.PNG" />
                      </a>
                      <span className="product-discount-label">-23%</span>
                      <a href className="add-to-cart">Add to Cart</a>
                    </div>
                    <div className="product-content">
                      <h3 className="title"> <Link to="/SingleProudect">Women's Dress</Link> </h3>
                      <div className="price">$53.55 <span>$68.88</span></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="product-grid">
                    <div className="product-image">
                      <a href="#" className="image">
                        <img src="./images/dress1.PNG" />
                      </a>
                      <a href className="add-to-cart">Add to Cart</a>
                    </div>
                    <div className="product-content">
                      <h3 className="title"><a href="#">Women's Dress</a></h3>
                      <div className="price">$75.55</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="product-grid">
                    <div className="product-image">
                      <a href="#" className="image">
                        <img src="./images/dress2.PNG" />
                      </a>
                      <a href className="add-to-cart">Add to Cart</a>
                    </div>
                    <div className="product-content">
                      <h3 className="title"><a href="#">Women's Dress</a></h3>
                      <div className="price">$75.55</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="product-grid">
                    <div className="product-image">
                      <a href="#" className="image">
                        <img src="./images/dress4.PNG" />
                      </a>
                      <a href className="add-to-cart">Add to Cart</a>
                    </div>
                    <div className="product-content">
                      <h3 className="title"><a href="#">Men's Jacket</a></h3>
                      <div className="price">$75.55</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="sec-title">
              <h1>Categories</h1>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="container tab-box d-flex justify-content-between">
          <div className="row g-2">
            <div className="col-md-3 col-sm-6 col-6">
              <div className="product">
                <div className="product-card"> 
                  <span className="sale">Sale</span>  <img src="./images/color1.PNG" className="rounded img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="product">
                <div className="product-card"> 
                  <span className="sale">Sale</span> 
                  <img src="./images/accessories.PNG" className="rounded img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="product">
                <div className="product-card"> 
                  <span className="sale">Sale</span>  <img src="./images/type.PNG" className="rounded img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <div className="product">
                <div className="product-card"> 
                  <span className="sale">Sale</span>  <img src="./images/accessories.PNG" className="rounded img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br /> 
        <br />
        <br />
        <br />
        <br />
        <div className="tr-product">
          <div className="container" style={{}}>
            <div className="tab-box d-flex justify-content-between">
              <div className="sec-title">
                <h1>How It Works</h1>
              </div>
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#all">Buyer</a>
                </li>
                <li className="nav-item">
                  <a style={{color: 'gray'}} className="nav-link" data-toggle="tab" href="#elec">Seller</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="container" style={{borderRadius: '20px'}}>
            <br />
            <br />
            <section style={{backgroundColor: '#f8d5d5', borderRadius: '20px', marginBottom: '20px', paddingBottom: '20px'}}>
              <div className="container ">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-12">
                    <div className="accordion" id="accordionExample" style={{marginTop: '40px'}}>
                      <div className="steps">
                        <progress id="progress" style={{backgroundColor: '#cabfbf'}} value={100} max={100} />
                        <div className="step-item">
                          <button className="step-button text-center collapsed" style={{backgroundColor: '#D9B86F'}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            1
                          </button>
                          <div className="step-title">
                            first Step
                          </div>
                        </div>
                        <div className="step-item">
                          <button className="step-button text-center collapsed" style={{backgroundColor: '#D9B86F'}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2
                          </button>
                          <div className="step-title">
                            Second Step
                          </div>
                        </div>
                        <div className="step-item">
                          <button className="step-button text-center collapsed" style={{backgroundColor: '#D9B86F'}} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3
                          </button>
                          <div className="step-title">
                            Third Step
                          </div>
                        </div>
                        <div className="step-item">
                          <button className="step-button text-center collapsed" style={{backgroundColor: '#D9B86F'}} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            4
                          </button>
                          <div className="step-title">
                            fourth Step
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 justify-content-center d-flex">
                    <i className="fas fa-sign-in fa-3x" />
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <i className="fas fa-shirt fa-3x" />
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <i className="fas fa-clipboard-check fa-3x" />
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <i className="fas fa-undo-alt fa-3x" style={{color: '#000000'}} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 justify-content-center d-flex">
                    <h5>Join-Us</h5>
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <h5>Select a Style</h5>
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <h5>Book your Outfit</h5>
                  </div>
                  <div className="col-3 justify-content-center d-flex">
                    <h5>Return It</h5>
                  </div>
                </div>
              </div>
            </section></div>
        </div></main>
    
    );
  };
  
  export default Home;