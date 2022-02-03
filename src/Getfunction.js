

// class Getfunction extends React.Component{
//     constructor(){
//         super();
//         this.state={
//         user:[],
//         name:'',
//         capital:'',
//         Region:'',
        
//         };
//     }

// async componentDidMount(){
//     var response= await axios.get(
        // 'http://api.countrylayer.com/v2/all?access_key=bdadcb627bcc30b276cd2fbfa0d03d60'
//     );
//     this.setState({user: response.data});


// }

// render(){
//     return(
//         <>
//         <h3>Table</h3>
//         <table border="1">
//           <thead>
//             <tr>
//               <td> <b>name</b></td>
//               <td> <b>capital</b></td>
//               <td><b> Region</b></td>
              
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.user.map((data) => (
//               <tr key={data.name}>
//                 <td> {data.name} </td>
//                 <td> {data.capital} </td>
//                 <td> {data.region} </td>
                
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         </>
//     )
// }
// }
// export default Getfunction;

import axios from "axios";
import { useEffect, useState } from "react";




export default function Getfunction() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get('http://api.countrylayer.com/v2/all?access_key=a3b598c0c88b0a12ef88580f6a7b5105').then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  

  return (
    <div>
        <h3>Country Details</h3>
      <table border="1">
          <thead>
            <tr>
              
              
              <td> <b>name</b></td>
              <td> <b>capital</b></td>
              <td> <b>region</b></td>
            </tr>
          </thead>
          <tbody>
            {post.map((data) => (
              <tr key={data.name}>
                
                <td> {data.name} </td>
                <td> {data.capital} </td>
                <td> {data.region} </td>
                
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}