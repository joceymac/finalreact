import React, { useEffect, useState, useCallback } from 'react'
import { Container, Row, Table, Button } from 'reactstrap'
import parseJwt from '../../helpers/authHelper'
import { useHistory } from "react-router-dom";
import '../../App.css'
import '../../index.css'

const Listings = () => {
    let history = useHistory();
    
    // let user = ""
    const [user, setUser] = useState("")
    const token = sessionStorage.getItem('token')
    
    
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        redirectLogin()
    }
    const admin = event => {
        event.preventDefault()
        // redirectAdmin()
    }
    const redirectLogin = useCallback(() =>{
        sessionStorage.removeItem('token')
        history.push("/login")
    },[history])

    


    const retrieveCred = useCallback((tok) => {
        if (tok === undefined) {
            console.log('token does not exist...')
            return undefined
        } else {
            const cred = parseJwt(tok)        
            if (cred === false) {
                console.log('parsing token failed...')
                return undefined
            } else {
                let now = new Date()
                if (cred.exp < now.getTime() / 1000) {
                    console.log(`token expired at ${cred.exp}`)
                    return undefined
                } else {
                    return cred
                }
            }
        }
         
    },[])
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/contact_forms/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        }

        let cred = retrieveCred(token)
        
        if (undefined === cred) {
            console.log('token invalid... redirecting to login')
            redirectLogin()
        } else {
            console.log('token valid... try fetch data')
            setUser(cred.name)
            getData()
        }
    }, [token, retrieveCred, redirectLogin])
    return (
        <Container>
             <div className="row">
             <div className="column">
            <Row>
                <h1>Contact List</h1>
                <br/>
                
            </Row>
            <Table responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr><td colSpan="4" className="text-center"><i>No clients found</i></td></tr>
                    }
                    {listing.length > 0 &&
                        listing.map(entry => <tr><td>{entry.name}</td><td>{entry.email}</td><td>{entry.phoneNumber}</td><td>{entry.content}</td></tr>)
                    }
                </tbody>
            </Table>
        <Row className="my-5">
            <Button onClick={logout} color="primary">Logout</Button> {' '}

            <Button onCLick={admin} color="secondary">Admin</Button>
        </Row>

        </div>
        </div>

        </Container>
    )
}

export default Listings