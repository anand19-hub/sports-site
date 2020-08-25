import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import '../../style/PlayerPost.css';
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import CardHeader from "../../components/Card/CardHeader";
import CardFooter from "../../components/Card/CardFooter";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import {BASE_URL} from "../../actions";
import SearchBar from "material-ui-search-bar";
import Input from "@material-ui/core/Input/Input";
import SweetAlert from "react-bootstrap-sweetalert/dist";
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

const useStyles = makeStyles(styles);


export default function PlayerPost(props) {

    useEffect(() => {
        getSchdule();
        if(new1){
            if(new1){
                getEvents();

            }

        }

    });
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [state, setState] = React.useState({
        count: 0,
    });
    const [event,setEvents]=useState([null]);
    const [eventId,setEventId]=useState('');
    const [eventSearch,setEventSearch]=useState('');
    const [new1,setNew1]=useState(true);
    const [teamName, setteamName] = React.useState('');
    const [capName, setcapName] = React.useState('');
    const [vcapName, setvcapName] = React.useState('');
    const [teamCNumber, setteamCNumber] = React.useState('');
    const [teamPlayer, setteamPlayer] = React.useState([]);
    const [show,setShow]=useState(false);
    const [show2,setShow2]=useState(false);
    const handleOpen = (id) => {
        setOpen(true);
        setEventId(id);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const [schdule,setSchdule]=useState('');
    const changeMembers = (event) => {
        console.log(event.target.value);
        setState({count:parseInt(event.target.value)});
    };
    function getEvents() {
        try {
            const URL = BASE_URL + "event";
            fetch(URL)
                .then(res => res.json())
                .then(
                    (result) => {
                        setEvents(result);
                    },
                    (error) => {
                    }
                )
        }catch (e) {
            console.log(e)
        }

    }
    function postDetails() {
        try{
            let body=JSON.stringify({
                event_id:eventId,
                teamName:teamName,
                captianName:capName,
                viceCaptianName:vcapName,
                teamContactNumber:teamCNumber,
                otherPlayers:teamPlayer.toString()
            });
            return fetch(BASE_URL + "event/"+1+"/team", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            }).then(response => response.json()).then((response)=>{
                console.log(response);
                setShow(true);
                setOpen(false);
            }).catch((error)=>{
                console.log(error);
                setShow2(true);
                setOpen(false);
            })

        }catch (e) {
            console.log(e)
        }

    }
    function renderData() {
      return  event.map((a,index)=>{
          if(a!==null){
              return(
                  <GridContainer key={index}>
                      <GridItem xs={12} sm={12} md={12}>
                          <Card profile>
                              <CardBody profile>
                                  <h6 className={classes.cardCategory}>Event Name:{a.eventName}</h6>
                                  <p xs={12} sm={12} md={4}>
                                     Event Date: {a.eventDate}
                                  </p>
                                  <p xs={12} sm={12} md={4}>
                                      Event Location:   {a.eventLocation}
                                  </p>
                                  <p className={classes.description}>
                                      Event Description:    {a.eventDescription}
                                  </p>
                                  <Button color="#2196f3" className='join' onClick={()=>handleOpen(a.id)} round>
                                      Join
                                  </Button>
                                  <Button color="secondary" className='comments' round>
                                      Comments
                                  </Button>
                                  <Button color="primary" className='share' round>
                                      Share
                                  </Button>
                                  <Button color="info" className='share' round onClick={()=>{setOpen2(true)}}>
                                      Schedule
                                  </Button>
                              </CardBody>
                              <SweetAlert success title="Success!" show={show} onConfirm={()=>{setShow(false)}} onCancel={()=>{setShow(false)}}>
                                  Team joined
                              </SweetAlert>
                              <SweetAlert danger title="sorry!" show={show2} onConfirm={()=>{setShow2(false)}} onCancel={()=>{setShow2(false)}}>
                                  Team not joined
                              </SweetAlert>
                          </Card>
                      </GridItem>
                  </GridContainer>
              )
          }else{
             return (  <GridContainer key={index}>
                 <GridItem xs={12} sm={12} md={12}>
                     <Card profile>
                         <CardBody profile>
                             <h6 className={classes.cardCategory}>{'There are no posts here'}</h6>
                         </CardBody>
                     </Card>
                 </GridItem>
             </GridContainer>)
          }

      })

    }
    function renderS() {
        if(schdule){
            return  schdule.map((a,index)=>{
                if(a!==null){
                    return(
                        <GridContainer key={index}>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card profile>
                                    <CardBody profile>
                                        <h6 className={classes.cardCategory}>First Team:{a.first_team}</h6>
                                        <h6 className={classes.cardCategory}>Second Team:{a.second_team}</h6>
                                        <p xs={12} sm={12} md={4}>
                                            Event Date: {a.eventDate}
                                        </p>
                                        <p xs={12} sm={12} md={4}>
                                            Event Location:   {a.eventDate}
                                        </p>
                                        <p className={classes.description}>
                                            Event Description:    {a.eventtime}
                                        </p>
                                        <p className={classes.description}>
                                            Event Description:    {a.eventLocation}
                                        </p>
                                    </CardBody>
                                    <SweetAlert success title="Success!" show={show} onConfirm={()=>{setShow(false)}} onCancel={()=>{setShow(false)}}>
                                        Team joined
                                    </SweetAlert>
                                    <SweetAlert danger title="sorry!" show={show2} onConfirm={()=>{setShow2(false)}} onCancel={()=>{setShow2(false)}}>
                                        Team not joined
                                    </SweetAlert>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    )
                }else{
                    return (  <GridContainer key={index}>
                        <GridItem xs={12} sm={12} md={12}>
                            <Card profile>
                                <CardBody profile>
                                    <h6 className={classes.cardCategory}>{'There are no schedule here'}</h6>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>)
                }

            })
        }else{
            return (  <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card profile>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>{'There are no schedule here'}</h6>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>)
        }


    }
    function getSchdule() {
        try{
            const URL = BASE_URL + "schedule";
            fetch(URL)
                .then(res => res.json())
                .then(
                    (result) => {
                        setSchdule(result);
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }catch (e) {
            console.log(e)
        }

    }
    function searchValue(value) {
        setNew1(false);
        setEventSearch(value);
        const URL = BASE_URL + "event";
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setEvents(result.filter((data)=>{
                        return value.toLocaleLowerCase()===data.eventName.toLocaleLowerCase() || value.toLocaleLowerCase() ===data.eventLocation.toLocaleLowerCase()
                    }));
                },
                (error) => {
                }
            );
        if(value===''){
           setNew1(true);
        }
    }

   function handleChange(e,i) {
        setteamPlayer([...teamPlayer,e.target.value]);
   }

    return (
        <div>
            <SearchBar
                value={eventSearch}
                onChange={(newValue) => searchValue(newValue)}
            />
            {renderData()}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open2}>
                    <div className='joinTeam'>
                {renderS()}
                    </div></Fade>
            </Modal>
            <div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className='joinTeam'>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card>
                                    <CardHeader color="primary">
                                        <h4 className={classes.cardTitleWhite}>Add Team</h4>
                                    </CardHeader>
                                    <CardBody>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <GridContainer>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <Input
                                                            type='text'
                                                            placeholder="Team Name"
                                                            id='eName'
                                                            name='eName'
                                                            onChange={event => setteamName(event.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <Input
                                                            type='text'
                                                            placeholder="Captain Name"
                                                            onChange={event => setcapName(event.target.value)}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                                <GridContainer>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <Input
                                                            type='text'
                                                            placeholder="Team Contact Number"
                                                            id='eName'
                                                            name='eName'
                                                            onChange={event => setteamCNumber(event.target.value)}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={6}>
                                                        <Input
                                                            type='text'
                                                            placeholder="Vice Captain Name"
                                                            onChange={event => setvcapName(event.target.value)}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                                <FormControl className={classes.formControl} style={{marginTop:10}}>
                                                    <NativeSelect
                                                        value={state.count}
                                                        onChange={changeMembers}
                                                    >
                                                        <option aria-label="None" value={0}>Team Members</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                        <option value={4}>Four</option>
                                                        <option value={5}>Five</option>
                                                        <option value={6}>Six</option>
                                                        <option value={7}>Seven</option>
                                                        <option value={8}>Eight</option>
                                                        <option value={9}>Nine</option>
                                                        <option value={10}>Ten</option>
                                                    </NativeSelect>
                                                    <FormHelperText>Enter number of members</FormHelperText>
                                                </FormControl>
                                            </GridItem>
                                            {[...Array(state.count)].map((x, i) =>
                                              <div key={i}>
                                                  <CardBody >
                                                      <GridContainer>
                                                          <GridItem xs={6} sm={6} md={6}>
                                                              <Input
                                                                  labelText={'Player '+(i+1)+' Name'}
                                                                  id="Player name"
                                                                  onBlur={(event) => handleChange(event,i)}
                                                              />
                                                          </GridItem>
                                                      </GridContainer>
                                                  </CardBody>
                                              </div>
                                            )
                                            }

                                        </GridContainer>
                                    </CardBody>
                                    <CardFooter>
                                        <Button color="primary" onClick={()=>{postDetails()}}>Add</Button>
                                        <Button className='closeModel' onClick={handleClose}>Cancel</Button>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Fade>
            </Modal>

        </div>
    );

}
