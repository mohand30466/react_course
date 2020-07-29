import React from "react";


const Season = (lat,month)=>{
    if (month > 3 && month < 12) {
        return lat > 0 ? 'winter' : 'summer' 
    }
 

}
const Display = (data) => {
    const sum_tag = 'https://previews.123rf.com/images/usbfco/usbfco1506/usbfco150600039/40914997-cartoon-sun-with-summer-word.jpg'
    const win_tag = 'data:image/jpeg;base64,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'
    const whether = Season(data,new Date().getMonth())
    const get_season = whether === 'summer' ? 'it summer time let us hit the beach':'cool let us do indoor excersize'
    
    const imgsrc = whether == 'summer'? sum_tag : win_tag

  return (
    <div className={whether}>
      <img className="rightimg"src={imgsrc}/>  
      <h1> {get_season}</h1>
      <img className="leftimg"src={imgsrc}/>
    </div>
  );
};
export default Display;
