import React, { Component } from 'react';
import InfoCard from './components/InfoCard'
import SearchBar from './components/SearchBar'
// import Employee from './utils/Employee'
import './App.css'

class App extends Component {

  state = {
    Emplist: [{
      "id": 1,
      "first_name": "Vi",
      "last_name": "Gadney",
      "email": "vgadney0@virginia.edu",
      "gender": "Female"
    }, {
      "id": 2,
      "first_name": "Leon",
      "last_name": "Proger",
      "email": "lproger1@alibaba.com",
      "gender": "Male"
    }, {
      "id": 3,
      "first_name": "Eugen",
      "last_name": "Sambles",
      "email": "esambles2@blogtalkradio.com",
      "gender": "Male"
    }, {
      "id": 4,
      "first_name": "Lea",
      "last_name": "Delaney",
      "email": "ldelaney3@apple.com",
      "gender": "Female"
    }, {
      "id": 5,
      "first_name": "Durant",
      "last_name": "Warner",
      "email": "dwarner4@theatlantic.com",
      "gender": "Male"
    }, {
      "id": 6,
      "first_name": "Eugenia",
      "last_name": "Dishmon",
      "email": "edishmon5@nydailynews.com",
      "gender": "Female"
    }, {
      "id": 7,
      "first_name": "Engracia",
      "last_name": "Lyte",
      "email": "elyte6@comsenz.com",
      "gender": "Female"
    }, {
      "id": 8,
      "first_name": "Roseanne",
      "last_name": "Alexandre",
      "email": "ralexandre7@jalbum.net",
      "gender": "Female"
    }, {
      "id": 9,
      "first_name": "Lynsey",
      "last_name": "Johnsey",
      "email": "ljohnsey8@cafepress.com",
      "gender": "Female"
    }, {
      "id": 10,
      "first_name": "Yardley",
      "last_name": "Filipchikov",
      "email": "yfilipchikov9@arstechnica.com",
      "gender": "Male"
    }, {
      "id": 11,
      "first_name": "Nolly",
      "last_name": "Hubbucke",
      "email": "nhubbuckea@opensource.org",
      "gender": "Male"
    }, {
      "id": 12,
      "first_name": "Dorise",
      "last_name": "Di Franceshci",
      "email": "ddifranceshcib@vistaprint.com",
      "gender": "Female"
    }, {
      "id": 13,
      "first_name": "Camel",
      "last_name": "Lude",
      "email": "cludec@flickr.com",
      "gender": "Female"
    }, {
      "id": 14,
      "first_name": "Matty",
      "last_name": "Boni",
      "email": "mbonid@weebly.com",
      "gender": "Male"
    }, {
      "id": 15,
      "first_name": "Ivar",
      "last_name": "Janczewski",
      "email": "ijanczewskie@shutterfly.com",
      "gender": "Male"
    }, {
      "id": 16,
      "first_name": "Celie",
      "last_name": "Dodshon",
      "email": "cdodshonf@msu.edu",
      "gender": "Female"
    }, {
      "id": 17,
      "first_name": "Odell",
      "last_name": "Crassweller",
      "email": "ocrasswellerg@independent.co.uk",
      "gender": "Male"
    }, {
      "id": 18,
      "first_name": "Federica",
      "last_name": "O'Hollegan",
      "email": "foholleganh@yale.edu",
      "gender": "Female"
    }, {
      "id": 19,
      "first_name": "Aymer",
      "last_name": "Mayo",
      "email": "amayoi@hostgator.com",
      "gender": "Male"
    }, {
      "id": 20,
      "first_name": "Karine",
      "last_name": "Bullerwell",
      "email": "kbullerwellj@google.nl",
      "gender": "Female"
    }],
    Emp: {},
    id: '',



  }

  handleInputChange = ({ target }) => {
    // console.log(target)
    this.setState({ [target.name]: target.value })
  }
  handleSearchEmp = event => {
    event.preventDefault()
    let Emplist = JSON.parse(JSON.stringify(this.state.Emplist))
    let Emp = Emplist.find(({id})=>
     id===JSON.parse(this.state.id)
    )
    this.setState({Emp, id:''})
   }

  render() {
    return (
      <>
        {/* <Employee.Provider value={this.state} > */}
        <div className="jumbotron jumbotron-fluid text-white bg-info mb-3">
          <div className="container">
            <h1 className="display-4 font-weight-bold">Employee Directory</h1>
            <p className="lead font-weight-bold">Please search your employee by id.</p>
          </div>
        </div>


        <div className="row row-cols-1 row-cols-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Employee List As Follows:</h5>
              <div className="card-text">
                <ul className="list-group">
                  {
                    this.state.Emplist.map((Emp, i) => (
                      <li key={i} className="list-group-item ">
                        ID: {Emp.id}  <br /> Name: {Emp.first_name} {Emp.last_name}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className="card ">
            <div className="h-10">
              <form className="form-inline card-title">
                <div className="form-group mx-sm-3 mb-2">
                  <label htmlFor="id">ID number: </label>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="id"
                    value={this.state.id}
                  />
                </div>
                <button 
                className="btn btn-primary mb-2"
                onClick={this.handleSearchEmp} >
                  Search
                </button>
              </form>
            </div>
            {this.state.Emp.id ? (<div className="card">
              <div className="card-body">
                <h5 className="card-title">ID: {this.state.Emp.id}</h5>
                <h6>First Name: {this.state.Emp.first_name}</h6>
                <h6>Last Name: {this.state.Emp.last_name}</h6>
                <h6>Email: {this.state.Emp.email}</h6>
                <h6>Gender: {this.state.Emp.gender}</h6>
              </div>
            </div>) : null}
            
          </div>

          
          {/* <SearchBar />
          <InfoCard /> */}

        </div>

      </>

      // </Employee.Provider>
    );
  }
}
export default App;
