import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";
import '../../App.css'
import '../../index.css'


const columns = ["ID", "Category", "Department", "Main Description", "Entity Name", "Start Date", "End Date", "Completed?"];



const data = [
  [ "Education", "", "Full Stack Development", "York University", "Jan 2020", "Dec 2020"],
  [ "Education", "", "AWS Cloud Architect", "AWS", "April 2020", "April 2020"],
//   [03, "Education", "", "Digital Marketing", "University of Toronto", "2013"],
//   [04, "Education", "", "Bachelor of Arts, Pyschology and Health Major", "University of British Columbia", "Sept 2006", "May 2011"],
//   [05, "Work Experience", "Channels", "Platform Lead", "BMO", "2017", "2019"],
//   [06, "Work Experience", "Channels", "Business Consultant", "BMO", "2014", "2017"],
//   [07, "Work Experience", "Consulting and Solutions", "Business Analyst", "BMO", "2011", "2014"],
//   [09, "Portfolio", "", "URL?", "QSquare Photography", "", "", "No"],
//   [10, "Portfolio", "", "URL?", "Moon Intro", "", "", "No"],
//   [11, "Portfolio", "", "UR?", "Company ABC", "", "", "Yes"],
//   [12, "Portfolio", "", "UR?", "Company TBD", "", "", "Yes"],


];

const TableEditablePage = props => {
  return (
    <MDBCard>
      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        Table Editable
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default TableEditablePage;






// const Listings = () => {
//     let history = useHistory();
    
//     // let user = ""
//     const [user, setUser] = useState("")
//     const token = sessionStorage.getItem('token')
    
    
//     const [listing, setListing] = useState([])
//     const logout = event => {
//         event.preventDefault()
//         redirectLogin()
//     }
//     const admin = event => {
//         event.preventDefault()
//         // redirectAdmin()
//     }
//     const redirectLogin = useCallback(() =>{
//         sessionStorage.removeItem('token')
//         history.push("/login")
//     },[history])

//     const retrieveCred = useCallback((tok) => {
//         if (tok === undefined) {
//             console.log('token does not exist...')
//             return undefined
//         } else {
//             const cred = parseJwt(tok)        
//             if (cred === false) {
//                 console.log('parsing token failed...')
//                 return undefined
//             } else {
//                 let now = new Date()
//                 if (cred.exp < now.getTime() / 1000) {
//                     console.log(`token expired at ${cred.exp}`)
//                     return undefined
//                 } else {
//                     return cred
//                 }
//             }
//         }
         
//     },[])
    
//     useEffect(() => {
//         const getData = async () => {
//             const response = await fetch('http://localhost:4000/contact_forms/entries', {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             })
//             const data = await response.json()
//             setListing(data)
//         }

//         let cred = retrieveCred(token)
        
//         if (undefined === cred) {
//             console.log('token invalid... redirecting to login')
//             redirectLogin()
//         } else {
//             console.log('token valid... try fetch data')
//             setUser(cred.name)
//             getData()
//         }
//     }, [token, retrieveCred, redirectLogin])
//     return (
//         <Container>
//              <div className="row">
//              <div className="column">
//             <Row>
//                 <h1>Contact List</h1>
//                 <br/>
                
//             </Row>
//             <Table responsive>
//                 <thead>
//                     <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Subject</th>
//                     <th>Message</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {listing.length === 0 &&
//                         <tr><td colSpan="4" className="text-center"><i>No clients found</i></td></tr>
//                     }
//                     {listing.length > 0 &&
//                         listing.map(entry => <tr><td>{entry.name}</td><td>{entry.email}</td><td>{entry.phoneNumber}</td><td>{entry.content}</td></tr>)
//                     }
//                 </tbody>
//             </Table>
//         <Row className="my-5">
//             <Button onClick={logout} color="primary">Logout</Button>
//             <Button onCLick={admin} color="secondary">Admin</Button>
//         </Row>



//         </div>
//         </div>

//         </Container>
//     )
// }

// export default Listings