
class zoomGallery extends HTMLElement {
  constructor(){
    super();

  };
  getTemplate(){
const template = document.createElement('template');
template.innerHTML = `
<!-- carousel -->
 <div  class=" h-screen w-full z-10 bg-neutral-900/90 top-0 absolute hidden md:block"> 
    <div class="container relative top-16 max-w-max ">
      <div class="row align-items-cente justify-content-center">
        <div id="carouselExampleCaptions" class=" col-4 carousel p-0 slide w-max " data-bs-ride="carousel">
        
    <!-- main gallery -->
        <div class="relative ">
          <div class="carousel-inner relative max-w-sm overflow-hidden">

            <div class="carousel-item active relative float-left w-full">
              <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%;">
                <img src="./../images/image-product-1.jpg" class="block w-full sm:rounded-xl "/>
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixe "></div>
              </div>  
            </div>

            <div class="carousel-item relative float-left w-full">
              <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%;">
                <img src="./../images/image-product-2.jpg" class="block w-full sm:rounded-xl " />
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixe "></div>
              </div> 
            </div>

            <div class="carousel-item relative float-left w-full">
              <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%;">
                <img src="./../images/image-product-3.jpg" class="block w-full sm:rounded-xl " />
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div> 
              </div>
            </div>

            <div class="carousel-item relative float-left w-full">
              <div class="relative overflow-hidden bg-no-repeat bg-cover" style="background-position: 50%;">
                <img src="./../images/image-product-4.jpg" class="block w-full sm:rounded-xl " />
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div> 
              </div>
            </div>
          </div>
    <!-- /main gallery -->
    <!-- mini gallery -->
    <div class="carousel-indicators absolute right-0 -bottom-28 left-0 p-0 mx-0 w-auto hidden md:block md:w-9/12 ">
       <div class="flex justify-between ">  
          <div class=" rounded-xl  " style=" width:70px; height: 70px; box-sizing:border-box; background: #ffff;">
          <button 
              class="active bg-transparent"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              aria-current="true"
              data-bs-slide-to="0"
              aria-label="Slide 1"
              style=" width:70px; margin:0 ; border:none;">
              <img  src="./../images/image-product-1-thumbnail.jpg" alt="" class="hover:border-3 border-orange-500 block rounded-xl"> 
          </button>
        </div>
        <div class="rounded-xl  " style=" width:70px; height: 70px; box-sizing: border-box; background: #ffff;">
          <button 
              class="bg-transparent"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              aria-current="true"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style=" width:70px; margin:0 ; border:none;">
              <img  src="./../images/image-product-2-thumbnail.jpg" alt="" class="hover:border-3 border-orange-500 block rounded-xl"> 
          </button>
        </div>
        <div class="rounded-xl  " style=" width:70px; height: 70px; box-sizing: border-box; background: #ffff;">
          <button 
              class="bg-transparent"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              aria-current="true"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style=" width:70px; margin:0 ; border:none;">
              <img  src="./../images/image-product-3-thumbnail.jpg" alt="" class="hover:border-3 border-orange-500 block rounded-xl"> 
          </button>
        </div>
        <div class=" rounded-xl  " style=" width:70px; height: 70px; box-sizing: border-box; background: #ffff;">
          <button 
              class=" bg-transparent"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              aria-current="true"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              style=" width:70px; margin:0 ; border:none;">
              <img  src="./../images/image-product-4-thumbnail.jpg" alt="" class="hover:border-3 border-orange-500 block rounded-xl"> 
          </button>
        </div>
       </div>
      </div>
        <!-- /mini gallery -->

        
      <!--control previous - next-->
        <div class="block ">
        <button
          class="opacity-100 carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0  left-2"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
        <span class="icon-arrown flex bg-white rounded-full absolute  -left-6 pr-1">
          <svg class="w-2" width="10" height="18" xmlns="http://www.w3.org/2000/svg"><path class="hover:stroke-orange-500" d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="2.2" fill="none" fill-rule="evenodd"/></svg>
         
        </span>
        </button>
        
        <button
          class="opacity-100 carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-2"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        > <span class="icon-arrown flex bg-white  rounded-full absolute -right-6 pl-1">
          <svg class="w-3" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path class="hover:stroke-orange-500" d="m-3 0 8 8-8 8" stroke="#1D2026" stroke-width="2.2" fill="none" fill-rule="evenodd"/></svg>
          </span>
          
        </button>
        
        </div> 
      <!--/ control previous - next-->  
        
        </div>
      </div>
    </div>
</div>
 <!-- /carousel -->
 
`;
return template;
  };
  render(){
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback(){
    this.render();
  };
}
customElements.define('zoom-gallery',zoomGallery );