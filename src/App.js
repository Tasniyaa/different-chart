import React from 'react';
import './scss/_theme.scss';
import { useState } from 'react';

import { FramerSlider } from './component/FramerSlider';
import { SlickSlider } from './component/slickSlider';
import { Table } from './component/Table';
import { BarChart } from './component/BarChart';
import { PieChart } from './component/PieChart';
import { LineChart } from './component/LineChart';
import { DoughnutChart } from './component/DoughnutChart';



const App= ()=> {
 
  const [ value , setValue ] = useState("16");
  
  function update(event) {
      let prev = value;
      let recent = event.target.value;
      let change = parseFloat(recent-prev);
      console.log("prev"+prev, "recent"+recent , "change"+change);
      setValue(event.target.value);
      var select = document.getElementById('font');
      var option = select.options[select.selectedIndex];
      let ids =["#h", "#p"];
      
      ids.forEach(id=>{
          let el = document.querySelector(id);
          let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");
          fontSize = parseFloat(fontSize);
          let b = parseFloat(option.text);
          el.style.fontSize = (fontSize+change)+"px";
      });
      
    }

  return (
    <div className='m-4'>
 
   {/* <Table/> */}

    <BarChart/>
    <PieChart/>
    <LineChart/>
    <DoughnutChart/>

      {/* <h1 className="h1">Fluid </h1>
      <h2 className="h2">
       make a button component
      </h2>
      <div className='primary d-flex justify-content-around'>
        <div className='primary part-1'>
                 <div className=''>
                    <button type="button" class="btn btn-primary-light py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-light btn-back dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-light dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-light btn-back py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-light btn-back py-2 px-4 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-primary py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary btn-back dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary btn-back py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary btn-back py-2 px-4 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-primary-dark py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-dark btn-back dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-dark dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-dark btn-back py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-dark btn-back py-2 px-4 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-primary-blur py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-blur btn-back dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-blur dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-blur btn-back py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-primary-blur btn-back py-2 px-4 m-1"></button>
                  </div>
        </div>
        <div className='primary part-2'>
                 <div className=''>
                    <button type="button" class="btn btn-primary-light py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-light btn-back dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-light dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-light btn-back py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-light btn-back py-1 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-primary py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary btn-back dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary btn-back py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary btn-back py-1 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-primary-dark py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-dark btn-back dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-dark dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-dark btn-back py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-dark btn-back py-1 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-primary-blur py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-blur btn-back dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-blur dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-blur btn-back py-1 m-1">Text</button>
                    <button type="button" class="btn btn-primary-blur btn-back py-1 m-1"></button>
                  </div>
        </div>        
      </div>
      <div className='error d-flex justify-content-around'>
        <div className='error part-1'>
                 <div className=''>
                    <button type="button" class="btn btn-error-light py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-light btn-back dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-light dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-light btn-back py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-light btn-back py-2 px-4 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-error py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error btn-back dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error btn-back py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error btn-back py-2 px-4 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-error-dark py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-dark btn-back dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-dark dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-dark btn-back py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-dark btn-back py-2 px-4 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-error-blur py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-blur btn-back dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-blur dropdown-toggle py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-blur btn-back py-2 px-4 m-1">Text</button>
                    <button type="button" class="btn btn-error-blur btn-back py-2 px-4 m-1"></button>
                  </div>
        </div>
        <div className='error part-2'>
                 <div className=''>
                    <button type="button" class="btn btn-error-light py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-light btn-back dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-light dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-light btn-back py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-light btn-back py-1 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-error py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error btn-back dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error btn-back py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error btn-back py-1 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-error-dark py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-dark btn-back dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-dark dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-dark btn-back py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-dark btn-back py-1 m-1"></button>
                  </div>
                  <div className=''>
                    <button type="button" class="btn btn-error-blur py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-blur btn-back dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-blur dropdown-toggle py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-blur btn-back py-1 m-1">Text</button>
                    <button type="button" class="btn btn-error-blur btn-back py-1 m-1"></button>
                  </div>
        </div>        
      </div>
      <div className='m-5'>
        <p class="fs--2">.fs -2 text</p>
        <p class="fs--1">.fs -1 text</p>
        <p class="fs-0">.fs 0 text</p>
        <p class="fs-1">.fs 1 text</p>
        <p class="fs-2">.fs 2 text</p>
        <p class="fs-3">.fs 3 text</p>
        <p class="fs-4">.fs 4 text</p>
        <p class="fs-5">.fs 5 text</p>
        <p class="fs-6">.fs 6 text</p>
        <p class="fs-7">.fs 7 text</p>
        <p class="fs-8">.fs 8 text</p>
      </div>
      <div className='m-5'>
        <select id="font" value={value} onChange={update} className="px-5 mb-3">
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="22">22</option>
          <option value="24">24</option>
        </select>
        <h4 id="h">changing the font size</h4>
        <p id='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <h1>Slider</h1>
      <FramerSlider/>
      <SlickSlider/> */}


    </div> 
  );
}

export default App;





















