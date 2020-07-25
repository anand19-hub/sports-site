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


import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

import avatar from "../../assets/img/faces/marc.jpg";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import BugReport from "@material-ui/core/SvgIcon/SvgIcon";
import Tasks from "../../components/Tasks/Tasks";
import {bugs, server, website} from "../../variables/general";
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
    }
};

const useStyles = makeStyles(styles);

export default function Post() {
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
                                    <CustomInput
                                        labelText="Event Name"
                                        id="first-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Event Location"
                                        id="last-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Price"
                                        id="city"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <InputLabel style={{ color: "#AAAAAA" }}>Description</InputLabel>
                                    <CustomInput
                                        labelText="Add Description Here"
                                        id="about-me"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            multiline: true,
                                            rows: 5
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Post</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
                <Card>
                    <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Post</h4>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="warning"
                            tableHead={["ID", "Event Name", "Price", "Event Location"]}
                            tableData={[
                                ["1", "Dakota Rice", "$36,738", "Niger"],
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
