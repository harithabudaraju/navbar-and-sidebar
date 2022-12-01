
  import Imgone from './img/image4.jpeg';
 import Imgtwo from  './img/image5.jpeg';
 import Imgthree from './img/image12.jpeg';
 import Imgfour from './img/image11.jpeg';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import React from 'react';
 

const Sidebar =() =>{
    const Menus =[
        {title : "Dashboard" },
        {title : "Pages"},
        {title : "Media"},
        {title : "Contact",},
        {title : "orders"},
        {title : "Moveup"},
        {title : "Signout",spacing:true},

    ];
    return(
        <div>
        <div className="flex ">
            <div className="bg-white h-screen-full p-5 pt-8 w-72 border ">
                <div>
                    <ul className="pt-2">
                        {Menus.map((menu, index) => (
                            <>
                                <li key={index} className="text-black-300 text-sm flex items-center gap-x-4 cursor-pointer
                                p-2 hover:bg-purple-600 rounded-md mt-2">
                                    <span >{menu.title}</span>
                                </li>
                            </>
                        ))}

                    </ul>
                </div>
            </div>
            
            <div >
                <div className="py-10">
                    <div className='flex'>
                    <div className ="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white ml-6" style={{backgroundImage:"url('https://www.gstatic.com/webp/gallery/3.webp')"}}>

                        <h1>This is heading</h1>
                        <p className='text-white'>
                            This is a text here, which brings the content to the center.This is a text here, which brings the content to the center
                            
                        </p>
                        <input type={"text"} placeholder='search here'></input>
                        
                       
                    </div>
                    </div>
                
                    <div >
                        <div className='ml-6 border-bottom '>
                            <ul className='list-group list-group-horizontal justify-content-between border-0 '>
                                <li className='list-group-item border-0 fw-bold'> matching</li>
                                <li className='list-group-item border-0 fw-bold'> survey</li>
                                <li className='list-group-item border-0 fw-bold'> Animation</li>
                                
                            </ul>
                        </div>
                        <h4 className='ml-6 mt-3 lead'>Select a Template</h4>
                        <div className="flex">
                        

                            <div className='row mt-3 ' >
                                <div className='col ml-6 '>
                                    <div class="card border-0" >
                                        <img src={Imgone} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">first Mobile</h5>
                                            {/* <p class="card-text">Get the best mood reflected on your face.</p>
                                            <a href="#" class="btn btn-primary">Buy here </a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className='col ml-2 '>
                                    <div class="card border-0" >
                                        <img src={Imgtwo} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">second Mobile</h5>
                                            {/* <p class="card-text">Get the best mood reflected on your face.</p>
                                            <a href="#" class="btn btn-primary">Buy here </a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className='col ml-2'>
                                    <div class="card border-0" >
                                        <img src={Imgthree} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Third Mobile</h5>
                                            {/* <p class="card-text">Get the best mood reflected on your face.</p>
                                            <a href="#" class="btn btn-primary">Buy here </a> */}
                                        </div>
                                    </div>
                                </div>

                                <div className='col ml-2'>
                                    <div class="card border-0" >
                                        <img src={Imgfour} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Fourth Mobile</h5>
                                            {/* <p class="card-text">Get the best mood reflected on your face.</p>
                                            <a href="#" class="btn btn-primary">Buy here </a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                <div className='row mt-3'>
                                <div className='col ml-6'>
                                    <div class="card border-0" >
                                        <img src={Imgfour} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Fifth Mobile</h5>
                                            {/* <p class="card-text">Get the best mood reflected on your face.</p>
                                            <a href="#" class="btn btn-primary">Buy here </a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='col ml-3'>
                                    <div class="card border-0 " >
                                        <img src={Imgthree} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Sixth Mobile</h5>
                                            {/* <p class="card-text">Get the best mood reflected on your face.</p>
                                            <a href="#" class="btn btn-primary">Buy here </a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='col ml-2'>
                                    <div class="card border-0" >
                                        <img src={Imgtwo} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Seventh Mobile</h5>
                                            {/* <p class="card-text">Get the best mood reflected on your face.</p>
                                            <a href="#" class="btn btn-primary">Buy here </a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='col ml-2'>
                                    <div class="card border-0" >
                                        <img src={Imgone} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Eighth Mobile</h5>
                                            {/* <p class="card-text">Get the best mood reflected on your face.</p>
                                            <a href="#" class="btn btn-primary">Buy here </a> */}
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
            
        </div>
        <div>

            
            
            
        </div>
        </div>
        
        
    );

}
export default Sidebar;