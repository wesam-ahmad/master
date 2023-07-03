import React from 'react';
import './css/addProduct.css';

const AddProudect = () => {
    
    return (

<div className="container mt-2">
  <div className="row flex-lg-nowrap">
   
    <div className="col">
      <div className="row">
        <div className="col mb-3">
          <div className="card">
            <div className="card-body">
              <div className="e-profile">
                <div className="row">
                  <div className="col-12 col-sm-auto mb-3">
                    <div className="mx-auto" style={{ width: 140 }}>
                      <div
                        className="d-flex justify-content-center align-items-center rounded"
                        style={{
                          height: 140,
                          backgroundColor: "rgb(233, 236, 239)"
                        }}
                      >
                        <span
                          style={{
                            color: "rgb(166, 168, 170)",
                            fontWeight: "bold",
                            fontSize: "8pt"
                          }}
                        >
                          140x140
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                    <div className="text-center text-sm-start mb-2 mb-sm-0">
                      <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                        John Smith
                      </h4>
                      <p className="mb-0">@johnny.s</p>
                      <div className="text-muted">
                        <small>Last seen 2 hours ago</small>
                      </div>
                      <div className="mt-2">
                      <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      Style="display: none;"
                      aria-describedby="inputGroupFileAddon01"
                      required
                    />
                    <label
                      className="custom-file-label btn btn-primary"
                      htmlFor="inputGroupFile01"
                    >
                          <i className="fa fa-fw fa-camera me-1" />
                          <span>Chose Photo</span>
                        </label>
                      </div>
                    </div>
           
                  </div>
                </div>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      Add Dress
                    </a>
                  </li>
                </ul>
                <div className="tab-content pt-3">
                  <div className="tab-pane active">
                    <form className="form" noValidate="">
                      <div className="row">
                        <div className="col-8">
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="name"> Title</label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Title"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col mb-3">
                              <div className="form-group">
                                <label htmlFor="describetion">Describetion</label>
                                <textarea
                                  className="form-control"
                                  id="describetion"
                                  name="describetion"
                                  rows={5}
                                  placeholder="Describetion"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="category"> Category</label>
                            
                                <select
  className="form-control form-select"
  aria-label=".form-select-sm example"
>
  <option selected="">Select Category</option>
  <option value={1}>One</option>
  <option value={2}>Two</option>
  <option value={3}>Three</option>
  <option value={4}>Four</option>
</select>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="price"> Price</label>
                                <input
                                  className="form-control"
                                  type="number"
                                  id="price"
                                  name="price"
                                  placeholder="Price"
                                />
                              </div>
                            </div>
                          </div>


                          <div className="row">
                            <div className="col">
                            <div className="form-group">
                                <label htmlFor="color"> Color</label>
                            
                                <select
  className="form-control form-select"
  aria-label=".form-select-sm example"

>
  <option selected="" >Select Color</option>
  <option value="red" Style="background-color: red;box-shadow: 0 0 0px 0px red inset;">Red</option>
  <option value="Yellow" Style="background-color: Yellow;">Yellow</option>
  <option value="Orange" Style="background-color: Orange;">Orange</option>
  <option value="Green" Style="background-color: Green;">Green</option>
  <option value="Blue" Style="background-color: Blue;">Blue</option>

</select>
                              </div>

                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="size"> Size</label>
                            
                                <select
  className="form-control form-select"
  aria-label=".form-select-sm example"
>
  <option selected="">Select Size</option>
  <option value='small'>Small</option>
  <option value='medium'>Medium</option>
  <option value='lagre'>Large</option>
  <option value='x-lagre'>X-Large</option>
</select>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col d-flex justify-content-end">
                          <button className="btn btn-primary" type="submit">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  </div>
</div>




    );
}

export default AddProudect;
