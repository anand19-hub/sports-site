import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import '../../style/PlayerPost.css';
import avatar from "../../assets/img/faces/marc.jpg";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import CardHeader from "../../components/Card/CardHeader";
import CustomInput from "../../components/CustomInput/CustomInput";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import CardFooter from "../../components/Card/CardFooter";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";
import {object} from "prop-types";
import {BASE_URL} from "../../actions";
import SearchBar from "material-ui-search-bar";
import Input from "@material-ui/core/Input/Input";
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
        if(new1){
            if(new1){
                getEvents();
            }

        }

    });
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
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
    const handleOpen = (id) => {
        setOpen(true);
        setEventId(id);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const changeMembers = (event) => {
        console.log(event.target.value);
        setState({count:parseInt(event.target.value)});
    };
    function getEvents() {
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
    }
    function postDetails() {
        console.log(teamPlayer);

    }
    function renderData() {
      return  event.map((a,index)=>{
          if(a!==null){
              return(
                  <GridContainer key={index}>
                      <GridItem xs={12} sm={12} md={12}>
                          <Card profile>
                              <CardBody profile>
                                  <h6 className={classes.cardCategory}>{a.eventName}</h6>
                                  <p xs={12} sm={12} md={4}>
                                      {a.eventDate}
                                  </p>
                                  <p xs={12} sm={12} md={4}>
                                      {a.eventLocation}
                                  </p>
                                  <p className={classes.description}>
                                      {a.eventDescription}
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
                              </CardBody>
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
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                }
            );
        if(value===''){
           setNew1(true);
        }
    }

   function handleChange(e) {
      setteamPlayer([...e.target.value]);
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
                                                                  onChange={(event) => handleChange(event)}
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
