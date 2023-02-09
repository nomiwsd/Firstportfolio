import React,{ useEffect, useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css'
function Skills({data}) {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [percentage4, setPercentage4] = useState(0);
  const [percentage5, setPercentage5] = useState(0);
  const [percentage6, setPercentage6] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (percentage1 < 85) {
        setPercentage1(percentage1 + 4);
      }
    }, 150);
  }, [percentage1]);
 
  useEffect(() => {
    setTimeout(() => {
      if (percentage2 <90) {
        setPercentage2(percentage2 + 9);
      }
    }, 150);
  }, [percentage2]);
  useEffect(() => {
    setTimeout(() => {
      if (percentage3 <80) {
        setPercentage3(percentage3 + 7);
      }
    }, 150);
  }, [percentage3]);
  useEffect(() => {
    setTimeout(() => {
      if (percentage4 < 75) {
        setPercentage4(percentage4 + 8);
      }
    }, 150);
  }, [percentage4]);
  useEffect(() => {
    setTimeout(() => {
      if (percentage5 < 70) {
        setPercentage5(percentage5 + 5);
      }
    }, 150);
  }, [percentage5]);
  useEffect(() => {
    setTimeout(() => {
      if (percentage6 < 78) {
        setPercentage6(percentage6 + 6);
      }
    }, 150);
  }, [percentage6]);
  return (
    <div className='SkillsSect' id='Skillssect'>
    <div className='container'>
    <div class="col-md-12 heading-section text-center text-white py-5">
<span class="subheading text-center">Skills</span>
<h2 class="mb-4 Mainheading">My Skills</h2>
<p className='intro'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
</div>
        <div className="d-md-flex flex-md-row overfs gap-2 py-5 d-lg-none"> 
     
     <div class="col-lg-3 col-md-4 mb-4">
<div class="rounded-lg shadow skillcard p-4">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead1}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage1} text={`${percentage1}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4 ">
<div class="rounded-lg shadow skillcard p-4">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead2}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage2} text={`${percentage2}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4 ">
<div class="rounded-lg shadow skillcard p-4">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead3}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage3} text={`${percentage3}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4 ">
<div class="rounded-lg shadow p-4 skillcard">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead4}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage4} text={`${percentage4}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4 ">
<div class="rounded-lg shadow p-4 skillcard">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead5}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage5} text={`${percentage5}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>


</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4">
<div class="rounded-lg shadow skillcard p-4">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead6}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage6} text={`${percentage6}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
</div>
<div className='row d-none d-md-none d-lg-flex justify-content-center align-items-center gap-4 py-5'>
<div class="col-lg-3 col-md-4 mb-4 p-0">
<div class="rounded-lg shadow p-4 skillcard">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead1}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage1} text={`${percentage1}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4 p-0">
<div class="rounded-lg shadow skillcard p-4">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead2}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage2} text={`${percentage2}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4  p-0 ">
<div class="rounded-lg shadow skillcard p-4">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead3}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage3} text={`${percentage3}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4 p-0">
<div class="rounded-lg shadow skillcard p-4">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead4}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage4} text={`${percentage4}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4  p-0">
<div class="rounded-lg shadow skillcard p-4">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead5}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage5} text={`${percentage5}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
<div class="col-lg-3 col-md-4 mb-4 p-0">
<div class="rounded-lg shadow p-4 skillcard">
<h2 class="h5 font-weight-bold text-center mb-4 cardhead">{data.cardhead6}</h2>
<div className='d-flex justify-content-center align-items-center'>
        <CircularProgressbar className='percentagediv' value={percentage6} text={`${percentage6}%`} strokeWidth={5}/>
      </div>
<div class="row text-center mt-4">
<div class="col-6 border-right">
<div class="h4 font-weight-bold mb-0">{data.text1}</div><span class="small text-gray">{data.text3}</span>
</div>
<div class="col-6">
<div class="h4 font-weight-bold mb-0">{data.text2}</div><span class="small text-gray">{data.text4}</span>
</div>
</div>

</div>
</div> 
</div>
    </div>
    </div>
  )
}

export default Skills
