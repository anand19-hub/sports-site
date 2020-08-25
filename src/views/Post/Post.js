import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Switch,useHistory,Route } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Table from "../../components/Table/Table";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import {BASE_URL} from "../../actions";
import SweetAlert from "react-bootstrap-sweetalert/dist";
import Signup from "../../screens/signup";
import Schedule from '../Schedule/Schedule';

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

export default function Post(props) {
    let history=useHistory();
    useEffect(() => {
       getEvents();
    });
    const [eName,seteName]=useState('');
    const [eLocation,seteLocation]=useState('');
    const [price,setPrice]=useState('');
    const [date,setDate]=useState('');
    const [desc,setDesc]=useState('');
    const [show,setShow]=useState(false);
    const [show2,setShow2]=useState(false);
    const [show3,setShow3]=useState(false);
    const [events,setEvents]=useState(null);
    function postDetails() {
        try{
            let org_id=1;
            if(eName!==''&&eLocation!==''&&price!==''&&desc!==''&&date!==''){
                let body=JSON.stringify({
                    org_id:org_id,
                    eventName:eName,
                    eventDate:date,
                    eventLocation:eLocation,
                    eventfees:price,
                    eventDescription:desc
                });
                return fetch(BASE_URL + "event", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: body
                }).then(response => response.json()).then((response)=>{
                    setShow(true);
                }).catch((error)=>{
                    console.log(error);
                    setShow2(true);
                })
            }else{
                console.log('cant post');
            }
        }catch (e) {
            console.log(e)
        }


    }
    function deleteEvent(id) {
        try{
            const URL = BASE_URL + "event/"+id;
            fetch(URL,{
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        setShow3(true);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                    }
                )
        }catch (e) {
            console.log(e)
        }

    }
    function editEvent(data1) {

    }
    function getEvents() {
        try {
            const URL = BASE_URL + "event";
            fetch(URL)
                .then(res => res.json())
                .then(
                    (result) => {
                        setEvents(result);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                    }
                )
        }catch (e) {
            console.log(e)
        }

    }
    function renderData() {
        return events.map((data,index)=>{
          return ([[data.eventName],[data.eventfees],[data.eventLocation],[data.eventDescription],[<i style={{marginLeft:10}} onClick={()=>{editEvent(data)}} className="fa fa-edit"/>,
              <i style={{marginLeft:10,color:'red'}} onClick={()=>{deleteEvent(data.id)}} className = "fa fa-trash" />,
              <i onClick={()=>{history.push('/admin/schedule',{id:data.id})}} style={{marginLeft:10}} className="fa fa-calendar"/>]])
        })
    }
    const classes = useStyles();

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Post</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <Input
                                        type='text'
                                        placeholder="Event Name"
                                        id='eName'
                                        name='eName'
                                        onChange={e => seteName(e.target.value)}
                                        value={eName}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <Input
                                        type='text'
                                        value={eLocation}
                                        onChange={event => seteLocation(event.target.value)}
                                        placeholder="Event Location"
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <Input
                                        type='text'
                                        placeholder="Price"
                                        value={price}
                                        onChange={event => setPrice(event.target.value)}
                                        style={{marginTop:20}}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} style={{marginTop:20}}>
                                    <TextField
                                        type='text'
                                        placeholder="Enter Description"
                                        multiline
                                        value={desc}
                                        onChange={event => setDesc(event.target.value)}
                                        rowsMax={4}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={6} style={{marginTop:30}}>
                                <InputLabel>Event Date</InputLabel>
                                <Input
                                    type='date'
                                    placeholder="Event Date"
                                    value={date}
                                    onChange={event => setDate(event.target.value)}
                                    style={{marginTop:20}}
                                />
                            </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button  type="submit" color="primary" onClick={postDetails}>Post</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <SweetAlert success title="Success!" show={show} onConfirm={()=>{setShow(false)}} onCancel={()=>{setShow(false)}}>
                Event added
            </SweetAlert>
            <SweetAlert danger title="Success!" show={show3} onConfirm={()=>{setShow3(false)}} onCancel={()=>{setShow3(false)}}>
                Event Deleted
            </SweetAlert>
            <SweetAlert danger title="Error!" show={show2} onConfirm={()=>{setShow2(false)}} onCancel={()=>{setShow2(false)}}>
                Event not added
            </SweetAlert>
            <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Post</h4>
                    </CardHeader>
                    <CardBody>
                        {events?
                            <Table
                                tableHeaderColor="success"
                                tableHead={["Event Name", "Price", "Event Location","Description","Actions",[''],['']]}
                                tableData={
                                   renderData()
                                }
                            />:
                            <Table
                                tableHeaderColor="warning"
                                tableHead={["ID", "Event Name", "Price", "Event Location"]}
                                tableData={[
                                    ['There are no data']
                                ]}
                            />
                        }


                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
            <Switch>
                <Route
                    path='/admin/schedule'
                    component={Schedule}

                />
            </Switch>
        </div>

    );
}
