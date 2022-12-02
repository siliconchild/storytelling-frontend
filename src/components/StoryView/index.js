import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import { BASE_API_URL } from "../../services/Common";
import DataService from "../../services/DataService";
import styles from './styles';
const useStyles = makeStyles(styles);


const StoryView = (props) => {
    const classes = useStyles();
    let { id } = useParams();
    const location = useLocation();

    console.log("================================== StoryView ======================================");
    console.log(id);

    // Component States
    const [story, setStory] = useState({});
    const loadStory = () => {
        DataService.GetStory(id)
            .then(function (response) {
                setStory(response.data);
            })
    }


    // Setup Component
    useEffect(() => {
        loadStory();
    }, []);

    // Handlers



    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Container maxWidth="lg" className={classes.container}>
                    <div className={classes.spacer}></div>
                    <Typography variant="h3" gutterBottom>
                        {story.title}
                    </Typography>
                    <Divider className={classes.divider} />
                    <div className={classes.spacer}></div>
                    <Grid container spacing={5} className={classes.storylineContainer}>
                        <Grid item md={6} sm={12}>
                            <div className={classes.storylineText}>
                                {story.storylineTitle1}
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={story.storylineImage1 ? BASE_API_URL + "/get_image?path=" + story.storylineImage1 : "https://via.placeholder.com/700"}
                                    alt="Story image"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                    <div className={classes.spacer}></div>
                    <Divider className={classes.divider} />
                    <div className={classes.spacer}></div>
                    <Grid container spacing={5}>
                        <Grid item md={6} sm={12}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={story.storylineImage2 ? BASE_API_URL + "/get_image?path=" + story.storylineImage2 : "https://via.placeholder.com/700"}
                                    alt="Story image"
                                />
                            </Card>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <div className={classes.storylineText}>
                                {story.storylineTitle2}
                            </div>
                        </Grid>

                    </Grid>
                    <div className={classes.spacer}></div>
                    <Divider className={classes.divider} />
                    <div className={classes.spacer}></div>
                    <Grid container spacing={5}>
                        <Grid item md={6} sm={12}>
                            <div className={classes.storylineText}>
                                {story.storylineTitle3}
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={story.storylineImage3 ? BASE_API_URL + "/get_image?path=" + story.storylineImage3 : "https://via.placeholder.com/700"}
                                    alt="Story image"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                    <div className={classes.spacer}></div>
                    <Divider className={classes.divider} />
                    <div className={classes.spacer}></div>
                    <Grid container spacing={5}>
                        <Grid item md={6} sm={12}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={story.storylineImage4 ? BASE_API_URL + "/get_image?path=" + story.storylineImage4 : "https://via.placeholder.com/700"}
                                    alt="Story image"
                                />
                            </Card>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <div className={classes.storylineText}>
                                {story.storylineTitle4}
                            </div>
                        </Grid>
                    </Grid>
                    <div className={classes.spacer}></div>
                    <Divider className={classes.divider} />
                    <div className={classes.spacer}></div>
                    <Grid container spacing={5}>
                        <Grid item md={6} sm={12}>
                            <div className={classes.storylineText}>
                                {story.storylineTitle5}
                            </div>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={story.storylineImage5 ? BASE_API_URL + "/get_image?path=" + story.storylineImage5 : "https://via.placeholder.com/700"}
                                    alt="Story image"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                    <div className={classes.spacer}></div>
                    <Divider className={classes.divider} />
                    <div className={classes.spacer}></div>
                </Container>
            </main>
        </div >
    );
};

export default StoryView;