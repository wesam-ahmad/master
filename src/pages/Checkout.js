import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
const Checkout = () => {
    return (
        <MDBContainer>
        <main>
        
        <div className="py-5 text-center">
          <h2>Checkout </h2>
        </div>
        <div className="row g-5">
         
          <div className="col-md-7 col-lg-12 ">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder defaultValue required />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder defaultValue required />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-12">
                
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="Plaza street" required />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">Country</label>
                  <select className="form-select" id="country" required>
                    <option value>Choose...</option>
                    <option>India</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">State</label>
                  <select className="form-select" id="state" required>
                    <option value>Choose...</option>
                    <option>Delhi</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="zip" placeholder required />
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="same-address" />
                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="save-info" />
                <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
              </div>
              <hr className="my-4" />
              <h4 className="mb-3">Payment</h4>
              <div className="my-3">
                <div className="form-check">
                  <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                  <label className="form-check-label" htmlFor="credit">Credit card</label>
                </div>
                {/* <div className="form-check">
                  <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="debit">Debit card</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="paypal">Paytm</label>
                </div>
                <div className="form-check">
                  <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                  <label className="form-check-label" htmlFor="paypal">Phonepe</label>
                </div> */}
              </div>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder required />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" placeholder required />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder required />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder required />
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-danger btn-lg" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>
      </main>
      <br>
      </br>
      </MDBContainer>
    );
}

export default Checkout;
