import React, { useEffect, useState } from "react";
import { Button, Card, Icon} from 'semantic-ui-react';
import Link from "next/link";
function Dashboard() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://online-education-react.vercel.app/api/forms", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((r) => {
			//	console.log(r);
				setData(r);
			});
	}, []);

	return (
		<div>
			
			<h1>Dashboard</h1>
			

			<Card.Group>
			<Card
			style={{
				height: "200px",
			   width : "400px",
				backgroundSize: "cover",
				margin: "25px",
				display : "flex"
			  }}>

					<Card.Content
				style={{
					
						margin: "25px",
						
					  }}>
			<Link href='/createform'>
				<a>
					<h2 style={{
					
					
					textAlign: "center",
					verticalAlign: "middle",
				  }} >Create a new form</h2>
					<p style={{
					
					fontSize: "80px",
					textAlign: "center",
					verticalAlign: "middle",
				  }} >+</p>
				</a>
				
			</Link>

			
			
			</Card.Content>
				</Card>

			{data.length ? (
				data.map((form, i) => {
					
					return (
						
						<Card        style={{
            height: "200px",
           width : "400px",
            backgroundSize: "cover",
			margin: "25px",
			display : "flex"
          }}>
						<Card.Content style={{
            
			margin: "25px",
			
          }}>	  
						<Link href={`/editform/${form._id}`}>
							<a>
							<Card.Meta>	
								<h4 key={form._id}>form {form._id} </h4>

								</Card.Meta>
								<Button style={{
           margin: "30px",
           backgroundColor : "#318CE7",
		   color : "white",
		   fontSize : "16px",
		   textAlign: "center",
			verticalAlign: "middle",
          }}><p key={form._id + 1}>Edit form</p> </Button>
							</a>
							
               
                
						</Link>
						<Link href={`/displayform/${form._id}`}>
						
						<Button   style={{
           margin: "30px",
		   backgroundColor : "#01D758",
		   color : "white",
		   fontSize : "16px",
		   textAlign: "center",
			verticalAlign: "middle",
          }}><p>Display the form</p> </Button>
							</Link>

						</Card.Content>
				</Card>
				
					);
				})
				
			) : (
				<h2>forms loading</h2>
			)}
		
		</Card.Group>

		

		</div>
	);
}

export default Dashboard;
