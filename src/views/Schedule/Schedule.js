import React from "react";
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

export default function Schedule() {
    const classes = useStyles();
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
                                        <Select native defaultValue="" id="grouped-native-select">
                                            <option aria-label="None" value="" />
                                                <option value={1}>Option 1</option>
                                                <option value={2}>Option 2</option>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="grouped-native-select">Team B</InputLabel>
                                        <Select native defaultValue="" id="grouped-native-select">
                                            <option aria-label="None" value="" />
                                                <option value={1}>Option 1</option>
                                                <option value={2}>Option 2</option>
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
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                        id="time"
                                        label="Event Time"
                                        type="time"
                                        defaultValue="07:30"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Event Location"
                                        id="first-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="info">Submit</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 className={classes.cardTitleWhite}>Schedule</h4>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="warning"
                                tableHead={["ID", "Team A", "Team B", "Event Date","Event Time","Event Location"]}
                                tableData={[
                                    ["1", "Dakota Rice", "$36,738", "Niger","12.20AM","Colombo"],
                                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
