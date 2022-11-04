// Vue instance
const main = Vue.createApp({


    
})

// Create a new Vue component
main.component('nav-component', {

    
    template: `


    <body >
    <nav class="navbar navbar-expand-lg sticky-nav " style='background: #dbe6da; position:sticky '>
        <div class="container-fluid" >
            <ul class=" list-unstyled navbar my-1 mx-3 my-lg-0 ">

                <li>
                    <img src="/images/logo.png" style="width: 300px" alt="">
                </li>
                </ul>
            <div>
            
            </div>
         
            <ul class=" list-unstyled navbar my-1 mx-3 my-lg-0 ">

            <li class="nav-item text-center mx-5 ">
                <a class="nav-link" href="/register,login/register.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="black" class="bi bi-person-fill" viewBox="0 0 16 16" >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                
                </a>
                Profile
            </li>
                <li class="nav-item text-center">
                    <a class="nav-link" href="/home.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="44" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                            </svg>
                    </a>
                    Homepage
                    </li>
            </ul>     
        </div>
        </nav>

    <!-- <hr> -->
    <nav class="navbar navbar-expand-lg position-sticky " style='background:#dbe6da; '>
      <div class="container-fluid">
        <ul class="list-unstyled navbar my-1 mx-3 my-lg-0 d-flex">
          <li class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" fill="currentColor" class="bi bi-pin-map px-2" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
              <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
            </svg>
            <input class="form-control me-2  bg-opacity-25" style="border-radius: 30px;"type="search" placeholder="Location" aria-label="Location">
          </li>
          <li class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" fill="currentColor" class="bi bi-search px-2" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <input class="form-control me-2 w-100 bg-opacity-25" style="border-radius: 30px;" type="search" placeholder="Search" aria-label="Search">
          </li>
          <li>
            <form>
              <button type="button" class="btn form-control  me-2 bg-opacity-25" style="border-radius: 30px;"  type="submit" style="background-color:#67aa94; color:white">Go</button>
            </form>
          </li>
        </ul>

      </div>
        
      <div class="row">

        <div class="d-flex">
          
          <a class="nav-link" href="/home.html">
            <button type="button" class="btn  px-5   h-30" style='border-radius:30px; background-color:#67aa94 ;color:white' > +Listing  </button>
            

            </a>
        <div class="d-flex">
          
          <a class="nav-link" href="/home.html">
            <button type="button" class="btn  px-5 w-100  h-30" style='border-radius:30px; background-color:#67aa94; color:white'   white-space: nowrap;
            text-align: center;> +Roomie  </button>
            

            </a>

        <form class="search" role="menu" >

        

        <ul class="navbar-nav  mb-2 mb-lg-2 container-fluid">
           
            <li class="nav-item dropdown">
                <span class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="35" fill="black" class="bi bi-sliders2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
                    </svg>
                </span>

                <ul class="dropdown-menu dropdown-menu-lg-end">
                <div class="pe-5 ps-3">
                <li><h4>Roomies</h4></li>
                <li><h6>Cleanliness</h6></li>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">1</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">2</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio3">3</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio4">4</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio5">5</label>
                  </div>


                <li><h6>Overnight Stay</h6></li>
                <li>
                    
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                        <label class="form-check-label" for="inlineRadio1"> I'm okay!                            </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">                              Not really...
                        </label>
                      </div>
                     
                </li>
                <li><hr class="dropdown-divider"></li>
                <li><h4>Accomodation</h4></li>
                <li><h6>Price per month</h6></li>

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                  <label class="form-check-label" for="inlineRadio1"> &lt;1000</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                  <label class="form-check-label" for="inlineRadio2">1000&lt;1500</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                  <label class="form-check-label" for="inlineRadio3">1500&lt;2000</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                  <label class="form-check-label" for="inlineRadio4">2000-2500</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                  <label class="form-check-label" for="inlineRadio5">&gt;2500</label>
                </div>



                <li><h6>Number of Rooms</h6></li>
                <li>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                        <label class="form-check-label" for="inlineRadio1">1</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">2</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio3">3</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio4">4</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio5">5</label>
                      </div>



                </li>

                <li class="py-2">
                <form>
                <button type="button" class="btn form-control  me-2  bg-success bg-opacity-25" style="border-radius: 30px;"  type="submit">Go</button>
                </form>
                </li>
                
                
                </div>

                

                </ul>
          </li>
        </form>
        </div>
      </div>
          

      </nav>
    
  </body>
    `,
    


})

// Link this Vue instance with <div id="main">
main.mount("#main")