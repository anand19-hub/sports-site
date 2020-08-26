import React ,{useEffect,useState}from "react";
import { BrowserRouter as Router,Switch,useHistory,Route } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import {
    MuiPickersUtilsProvider,
        KeyboardTimePicker,
        KeyboardDatePicker,
} from '@material-ui/pickers';
import avatar from "../../assets/img/faces/marc.jpg";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Table from "../../components/Table/Table";
import {BASE_URL} from "../../actions";
import SweetAlert from "react-bootstrap-sweetalert/dist";
import Input from "@material-ui/core/Input";

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
    },
    formControl: {
        minWidth: 120,
    },
};

const useStyles = makeStyles(styles);

export default function Schedule(props) {
    const [id,setIds]=useState(1);
    const [firstTeam,setFirstteam]=useState('');
    const [secoundTeam,setSecoundteam]=useState('');
    const [eDate,setEdate]=useState('');
    const [eTime,setEtime]=useState('');
    const [eLocation,setLocation]=useState('');
    const [teams,setTeams]=useState(null);
    const [show,setShow]=useState(false);
    const [show2,setShow2]=useState(false);
    const [schdule,setSchdule]=useState(false);
    let history=useHistory();

    useEffect(() => {
        if(props.location.state.id!==undefined){
            setIds(props.location.state.id);
        }else{

            setIds(1);
        }
        getEvents();
        getSchdule();

    });
    async function postDetails() {
        console.log(id,firstTeam,secoundTeam,eDate,eTime,eLocation);
        let body=JSON.stringify({
            event_id:id,
            first_team:firstTeam,
            second_team:secoundTeam,
            eventDate:eDate,
            eventtime:eTime,
            eventLocation:eLocation
        });
       return await fetch(BASE_URL + "schedule", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        }).then(response => response.json()).then((response)=>{
            setShow(true);
            console.log(response);
        }).catch((error)=>{
            console.log(error);
            setShow2(true);
        })
    }
    function getEvents() {
        const URL = BASE_URL + "event/"+1+"/team";
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                   setTeams(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                }
            )
    }
    function getSchdule() {
        const URL = BASE_URL + "schedule";
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setSchdule(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error)
                }
            )
    }
    const classes = useStyles();

    function deleteEvent(id) {
        
    }

    function editEvent(data) {
        
    }

    function renderData() {
        return schdule.map((data,index)=>{
            return ([[data.first_team],[data.second_team],[data.eventDate],[data.eventtime],[data.eventLocation],[<i style={{marginLeft:10}} onClick={()=>{editEvent(data)}} className="fa fa-edit"/>,
                <i style={{marginLeft:10,color:'red'}} onClick={()=>{deleteEvent(data.id)}} className = "fa fa-trash" />
            ]])
        })
    }
   function renderOption(){
       if(teams){
           return  teams.map((a,index)=>{
               if(a!=null){
                   return(<option key={index} value={a.id}>{a.teamName}</option>)
               }else{
                   return(<option key={index} value={0}>{'no team available'}</option>)
               }
           })
       }

    }
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="info">
                            <h4 className={classes.cardTitleWhite}>Schedule</h4>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="grouped-native-select">Team A</InputLabel>
                                        <Select native defaultValue="" id="grouped-native-select"  onChange={(event)=>setFirstteam(event.target.value)}>
                                            <option aria-label="None" value="" />
                                            {renderOption()}
                                        </Select>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="grouped-native-select">Team B</InputLabel>
                                        <Select native defaultValue="" id="grouped-native-select" onChange={(event)=>setSecoundteam(event.target.value)}>
                                            <option aria-label="None" value="" />
                                            {renderOption()}
                                        </Select>
                                    </FormControl>
                                </GridItem>
                            </GridContainer>
                            <br/>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        id="date"
                                        label="Event Date"
                                        type="date"
                                        defaultValue="2020-05-24"
                                        className={classes.textField}
                                        onChange={(event => {setEdate(event.target.value)})}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        id="time"
                                        label="Event Time"
                                        type="time"
                                        defaultValue="07:30"
                                        className={classes.textField}
                                        onChange={(event => {setEtime(event.target.value)})}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <InputLabel htmlFor="grouped-native-select">Event Location</InputLabel>
                                    <TextField
                                        labelText="Event Location"
                                        id="first-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        onChange={(event => {setLocation(event.target.value)})}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="info" onClick={()=>postDetails()}>Submit</Button>
                        </CardFooter>
                        <SweetAlert success title="Success!" show={show} onConfirm={()=>{setShow(false)}} onCancel={()=>{setShow(false)}}>
                            Schedule added
                        </SweetAlert>
                        <SweetAlert danger title="Error!" show={show2} onConfirm={()=>{setShow2(false)}} onCancel={()=>{setShow2(false)}}>
                            Schedule not added
                        </SweetAlert>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 className={classes.cardTitleWhite}>Post</h4>
                        </CardHeader>
                        <CardBody>
                            {schdule?
                                <Table
                                    tableHeaderColor="success"
                                    tableHead={["First team", "Secound team", "Event Date","Event Time",'Event Location',"Actions",[''],['']]}
                                    tableData={
                                        renderData()
                                    }
                                />:
                                <Table
                                    tableHeaderColor="warning"
                                    tableHead={["first team", "Price", "Event Location"]}
                                    tableData={[
                                        ['There are no data']
                                    ]}
                                />
                            }


                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
