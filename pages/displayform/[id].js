
import React from "react";
import ReactDOM from "react-dom";
import { ReactFormGenerator } from "react-form-builder2";
//import "react-form-builder2/dist/app.css";

const displayform = ({ data }) => {
  

  const onSubmit=(datas)=> {
  
    
    
    window.location.href = '../comfrimation';
     
 
    return false;
  }
 

console.log(data);
return (
  
<div>
<div>
<div className='modal-dialog modal-lg'>
<div className='modal-content'>
<div className='modal-body'>
<ReactFormGenerator
 
download_path=''
answer_data={{}}
//back_action='/'
//back_name='Back'
onSubmit={onSubmit}
read_only={false}
data={data}

/>
</div>
</div>
</div>
</div>
</div>
);
};

displayform.getInitialProps = async ({ query }) => {
const { id } = query;
const res = await fetch(`https://online-education-react.vercel.app/findform/${id}`);
const json = await res.json();
return { data: json };
};
export default displayform;

 
 
