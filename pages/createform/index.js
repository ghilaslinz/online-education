import React, { useEffect, useState } from "react";
import FormBuilder from "react-form-builder2";
import DemoBar from "../../components/demobar";

// Form Data

function Index({ id }) {
	const postUrl = `/api/findform/${id}`;
	var items = [{
		key: 'Header',
		name: 'Title form',
		icon: 'fas fa-heading',
		static: false,
		content: 'Placeholder Text...',
		canHavePageBreakBefore : false,
		canHaveAlternateForm : false,
	   
	  },
	
	  {
		
		key: 'TextArea',
		canHaveAnswer: true,
		name: 'Multi-line Input',
		label: 'Placeholder Label',
		icon: 'fas fa-text-height',
		field_name: 'text_area_',
		static: false,
	  read_only:false,
	canHaveAlternateForm : false,
	  canHavePageBreakBefore : false,
	   
	   
	  },
		{
		key: 'Checkboxes',
		canHaveAnswer: true,
		name: 'Checkboxes',
		icon: 'far fa-check-square',
		label: 'Placeholder Label',
		field_name: 'checkboxes_',
		static:false,
		canHaveDisplayHorizontal : false,
		options: [],
		canHavePageBreakBefore : false,
	  canHaveAlternateForm : false,
	  canPopulateFromApi : false,
		
	  },
	  {
		key: 'RadioButtons',
		canHaveAnswer: true,
		name: 'Multiple Choice',
		icon: 'far fa-dot-circle',
		label: 'Placeholder Label',
		field_name: 'radiobuttons_',
		static: false,
		options: [],
		canHaveDisplayHorizontal : false,
		canHavePageBreakBefore : false,
	   canHaveAlternateForm : false,
	   canPopulateFromApi : false,
		
	  },
	 ];
	return (
		<div>
			<DemoBar postUrl={postUrl} />
			<FormBuilder.ReactFormBuilder saveUrl={postUrl}
			 toolbarItems={items}
			  />
		</div>
	);
}
Index.getInitialProps = async (ctx) => {
	const dummy = {
		tools: [{}],
	};
	const res = await fetch("https://online-education-react.vercel.app/api/createform", {
		method: "POST",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify(dummy.tools),
	});
	const json = await res.json();
	console.log(json);
	return { id: json };
};

export default Index;
