import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { BASE_API_URL } from "../../services/Common";
import UploadImages from './UploadImages';
import DataService from "../../services/DataService";
import styles from './styles';
const useStyles = makeStyles(styles);


const StoryIndex = (props) => {
    const classes = useStyles();
    const navigate = useNavigate();

    console.log("================================== StoryIndex ======================================");

    // Component States
    const [add, setAdd] = useState(false);
    const [index, setIndex] = useState(true);
    const [editId, setEditId] = useState(null);
    const [stories, setStories] = useState([]);
    const loadStories = () => {
        DataService.GetStories()
            .then(function (response) {
                setStories(response.data);
            })
    }
    const [title, setTitle] = useState('');
    const [titlePrompt, setTitlePrompt] = useState('');
    const [titleImage, setTitleImage] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [characterClass, setCharacterClass] = useState('');
    const [promptStyle, setPromptStyle] = useState('');

    const [storylineTitle1, setStorylineTitle1] = useState('');
    const [storylinePrompt1, setStorylinePrompt1] = useState('');
    const [storylineImage1, setStorylineImage1] = useState('');
    const [storylineTitle2, setStorylineTitle2] = useState('');
    const [storylinePrompt2, setStorylinePrompt2] = useState('');
    const [storylineImage2, setStorylineImage2] = useState('');
    const [storylineTitle3, setStorylineTitle3] = useState('');
    const [storylinePrompt3, setStorylinePrompt3] = useState('');
    const [storylineImage3, setStorylineImage3] = useState('');
    const [storylineTitle4, setStorylineTitle4] = useState('');
    const [storylinePrompt4, setStorylinePrompt4] = useState('');
    const [storylineImage4, setStorylineImage4] = useState('');
    const [storylineTitle5, setStorylineTitle5] = useState('');
    const [storylinePrompt5, setStorylinePrompt5] = useState('');
    const [storylineImage5, setStorylineImage5] = useState('');

    const [inputImages, setInputImages] = useState([]);
    const [titleImages, setTitleImages] = useState([]);
    const [storylineImages1, setStorylineImages1] = useState([]);
    const [storylineImages2, setStorylineImages2] = useState([]);
    const [storylineImages3, setStorylineImages3] = useState([]);
    const [storylineImages4, setStorylineImages4] = useState([]);
    const [storylineImages5, setStorylineImages5] = useState([]);

    const imgTagLookup = {
        0: "A",
        1: "B",
        2: "C"
    }
    const resetForm = () => {
        setTitle('');
        setTitlePrompt('');
        setTitleImage('');
        setCharacterName('');
        setCharacterClass('');
        setPromptStyle('');
        setStorylineTitle1('');
        setStorylinePrompt1('');
        setStorylineImage1('');
        setStorylineTitle2('');
        setStorylinePrompt2('');
        setStorylineImage2('');
        setStorylineTitle3('');
        setStorylinePrompt3('');
        setStorylineImage3('');
        setStorylineTitle4('');
        setStorylinePrompt4('');
        setStorylineImage4('');
        setStorylineTitle5('');
        setStorylinePrompt5('');
        setStorylineImage5('');

        setInputImages([]);
        setTitleImages([]);
        setStorylineImages1([]);
        setStorylineImages2([]);
        setStorylineImages3([]);
        setStorylineImages4([]);
        setStorylineImages5([]);
        setEditId(null);
    };
    const loadStory = (id) => {
        DataService.GetStory(id)
            .then(function (response) {
                let story = response.data;
                setTitle(story.title);
                setTitlePrompt(story.titlePrompt);
                setTitleImage(story.titleImage);
                setCharacterName(story.characterName);
                setCharacterClass(story.characterClass);
                setPromptStyle(story.promptStyle);
                setStorylineTitle1(story.storylineTitle1);
                setStorylinePrompt1(story.storylinePrompt1);
                setStorylineImage1(story.storylineImage1);
                setStorylineTitle2(story.storylineTitle2);
                setStorylinePrompt2(story.storylinePrompt2);
                setStorylineImage2(story.storylineImage2);
                setStorylineTitle3(story.storylineTitle3);
                setStorylinePrompt3(story.storylinePrompt3);
                setStorylineImage3(story.storylineImage3);
                setStorylineTitle4(story.storylineTitle4);
                setStorylinePrompt4(story.storylinePrompt4);
                setStorylineImage4(story.storylineImage4);
                setStorylineTitle5(story.storylineTitle5);
                setStorylinePrompt5(story.storylinePrompt5);
                setStorylineImage5(story.storylineImage5);

                setAdd(false);
                setIndex(false);
            });
        DataService.GetStoryInputImages(id)
            .then(function (response) {
                setInputImages(response.data)
            });
        DataService.GetStoryTitleImages(id)
            .then(function (response) {
                setTitleImages(response.data)
            });

        DataService.GetStorylineImages(id, 1)
            .then(function (response) {
                setStorylineImages1(response.data)
            });
        DataService.GetStorylineImages(id, 2)
            .then(function (response) {
                setStorylineImages2(response.data)
            });
        DataService.GetStorylineImages(id, 3)
            .then(function (response) {
                setStorylineImages3(response.data)
            });
        DataService.GetStorylineImages(id, 4)
            .then(function (response) {
                setStorylineImages4(response.data)
            });
        DataService.GetStorylineImages(id, 5)
            .then(function (response) {
                setStorylineImages5(response.data)
            });
    }
    const refreshInputImages = () => {
        DataService.GetStoryInputImages(editId)
            .then(function (response) {
                setInputImages(response.data)
            });
    }

    // Setup Component
    useEffect(() => {
        loadStories();
    }, []);

    // Handlers
    const handleAddClick = () => {
        setAdd(true);
        setIndex(false);
    };
    const handleCancelClick = () => {
        setAdd(false);
        setIndex(true);
        resetForm();
    };
    const buildSaveData = () => {
        // Build the story object
        var obj = {
            "title": title,
            "titlePrompt": titlePrompt,
            "titleImage": titleImage,
            "characterName": characterName,
            "characterClass": characterClass,
            "promptStyle": promptStyle,
            "storylineTitle1": storylineTitle1,
            "storylinePrompt1": storylinePrompt1,
            "storylineImage1": storylineImage1,
            "storylineTitle2": storylineTitle2,
            "storylinePrompt2": storylinePrompt2,
            "storylineImage2": storylineImage2,
            "storylineTitle3": storylineTitle3,
            "storylinePrompt3": storylinePrompt3,
            "storylineImage3": storylineImage3,
            "storylineTitle4": storylineTitle4,
            "storylinePrompt4": storylinePrompt4,
            "storylineImage4": storylineImage4,
            "storylineTitle5": storylineTitle5,
            "storylinePrompt5": storylinePrompt5,
            "storylineImage5": storylineImage5
        }
        return obj;
    }
    const handleSaveClick = () => {

        let obj = buildSaveData();
        // Save data
        if (add) {
            DataService.CreateStory(obj)
                .then(function (response) {
                    let story = response.data;
                    setAdd(false);
                    setIndex(true);
                    resetForm();

                    loadStories();
                })
        } else {
            DataService.UpdateStory(editId, obj)
                .then(function (response) {
                    let story = response.data;
                    setIndex(true);
                    resetForm();

                    loadStories();
                })
        }


        setAdd(false);
        setIndex(true);
    };
    const checkIfSaved = () => {


        if (add) {
            console.log("********************************************")
            setAdd(false);
            let obj = buildSaveData();
            DataService.CreateStory(obj)
                .then(function (response) {
                    let story = response.data;
                    setAdd(false);
                    setEditId(story["id"]);
                })
        }
    }
    const goToViewStory = (row) => {
        navigate("/story/" + row.id)
    }
    const editStory = (row) => {
        loadStory(row.id)
        setEditId(row.id)
    }


    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Container maxWidth={false} className={classes.container}>
                    <Toolbar>
                        <Typography variant="h5" gutterBottom>
                            Stories
                        </Typography>
                        <div className={classes.grow} />
                        {index &&
                            <IconButton
                                aria-label="add"
                                size="large"
                                onClick={() => handleAddClick()}
                            >
                                <Icon>add_circle</Icon>
                            </IconButton>
                        }
                    </Toolbar>
                    <Divider className={classes.divider} />
                    <div className={classes.spacer}></div>
                    {index && stories.length == 0 &&
                        <div className={classes.message}>
                            <Typography gutterBottom>
                                No data to display
                            </Typography>
                        </div>
                    }

                    {index &&
                        <Grid container spacing={7}>
                            {stories && stories.map((story, index) =>
                                <Grid item md={4} sm={12} key={index}>
                                    <Card className={classes.card}>
                                        <CardHeader
                                            title={story.title}
                                            onClick={() => goToViewStory(story)}
                                        >
                                        </CardHeader>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={story.titleImage ? BASE_API_URL + "/get_image?path=" + story.titleImage : "https://via.placeholder.com/700"}
                                            alt="Story image"
                                            onClick={() => goToViewStory(story)}
                                        />
                                    </Card>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <IconButton
                                            aria-label="edit"
                                            onClick={() => editStory(story)}
                                        >
                                            <Icon>edit</Icon>
                                        </IconButton>
                                        <IconButton aria-label="edit">
                                            <Icon>favorite</Icon>
                                        </IconButton>
                                    </CardActions>
                                </Grid>
                            )}
                        </Grid>
                    }
                    {!index &&
                        <div className={classes.formContainer}>
                            <form noValidate autoComplete="off">
                                <Toolbar>
                                    <Typography gutterBottom>
                                        Add/Edit Story
                                    </Typography>
                                    <div className={classes.grow} />
                                    <Button size="medium" variant="contained" onClick={(event) => handleSaveClick()}>Save</Button>
                                    &nbsp;&nbsp;
                                    <Button size="medium" variant="contained" color="secondary" onClick={(event) => handleCancelClick()}>Cancel</Button>
                                </Toolbar>
                                <Divider className={classes.divider} />
                                <div className={classes.inputContainer}>
                                    <TextField
                                        label="Title"
                                        placeholder="Title of Story"
                                        multiline
                                        fullWidth
                                        margin="normal"
                                        className={classes.textField}
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <TextField
                                        label="Title Prompt"
                                        placeholder="Title prompt"
                                        multiline
                                        fullWidth
                                        margin="normal"
                                        className={classes.textField}
                                        value={titlePrompt}
                                        onChange={(e) => setTitlePrompt(e.target.value)}
                                    />
                                    {titleImages && titleImages.length > 0 &&
                                        <div>
                                            <ImageList cols={5}>
                                                {titleImages && titleImages.map((item, index) =>
                                                    <ImageListItem key={item}>
                                                        <img
                                                            src={BASE_API_URL + "/get_image?path=" + item}
                                                            loading="lazy"
                                                        />
                                                    </ImageListItem>
                                                )}
                                            </ImageList>
                                            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                                                <InputLabel>Select</InputLabel>
                                                <Select
                                                    label="Image"
                                                    className={classes.textField}
                                                    value={titleImage}
                                                    onChange={(e) => setTitleImage(e.target.value)}
                                                >
                                                    <MenuItem value="" key={-1}>
                                                        <em>-None-</em>
                                                    </MenuItem>
                                                    {titleImages && titleImages.map((item, index) =>
                                                        <MenuItem value={item} key={index}>{"Image: " + imgTagLookup[index]}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    }


                                    <Typography gutterBottom>
                                        Storylines:
                                    </Typography>
                                    <Box
                                        className={classes.storyLine}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '55ch' },
                                        }}
                                    >
                                        <TextField
                                            label={"Storyline 1:"}
                                            placeholder="Storyline"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylineTitle1}
                                            onChange={(e) => setStorylineTitle1(e.target.value)}
                                        />
                                        <TextField
                                            label={"Prompt 1:"}
                                            placeholder="Prompt"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylinePrompt1}
                                            onChange={(e) => setStorylinePrompt1(e.target.value)}
                                        />

                                    </Box>
                                    {storylineImages1 && storylineImages1.length > 0 &&
                                        <div>
                                            <ImageList cols={5}>
                                                {storylineImages1 && storylineImages1.map((item, index) =>
                                                    <ImageListItem key={item}>
                                                        <img
                                                            src={BASE_API_URL + "/get_image?path=" + item}
                                                            loading="lazy"
                                                        />
                                                    </ImageListItem>
                                                )}
                                            </ImageList>
                                            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                                                <InputLabel>-None-</InputLabel>
                                                <Select
                                                    label="Image"
                                                    className={classes.textField}
                                                    value={storylineImage1}
                                                    onChange={(e) => setStorylineImage1(e.target.value)}
                                                >
                                                    <MenuItem value="" key={-1}>
                                                        <em>Select</em>
                                                    </MenuItem>
                                                    {storylineImages1 && storylineImages1.map((item, index) =>
                                                        <MenuItem value={item} key={index}>{"Image: " + imgTagLookup[index]}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    }

                                    <Box
                                        className={classes.storyLine}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '55ch' },
                                        }}
                                    >
                                        <TextField
                                            label={"Storyline 2:"}
                                            placeholder="Storyline"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylineTitle2}
                                            onChange={(e) => setStorylineTitle2(e.target.value)}
                                        />
                                        <TextField
                                            label={"Prompt 2:"}
                                            placeholder="Prompt"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylinePrompt2}
                                            onChange={(e) => setStorylinePrompt2(e.target.value)}
                                        />
                                    </Box>
                                    {storylineImages2 && storylineImages2.length > 0 &&
                                        <div>
                                            <ImageList cols={5}>
                                                {storylineImages2 && storylineImages2.map((item, index) =>
                                                    <ImageListItem key={item}>
                                                        <img
                                                            src={BASE_API_URL + "/get_image?path=" + item}
                                                            loading="lazy"
                                                        />
                                                    </ImageListItem>
                                                )}
                                            </ImageList>
                                            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                                                <InputLabel>-None-</InputLabel>
                                                <Select
                                                    label="Image"
                                                    className={classes.textField}
                                                    value={storylineImage2}
                                                    onChange={(e) => setStorylineImage2(e.target.value)}
                                                >
                                                    <MenuItem value="" key={-1}>
                                                        <em>Select</em>
                                                    </MenuItem>
                                                    {storylineImages2 && storylineImages2.map((item, index) =>
                                                        <MenuItem value={item} key={index}>{"Image: " + imgTagLookup[index]}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    }
                                    <Box
                                        className={classes.storyLine}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '55ch' },
                                        }}
                                    >
                                        <TextField
                                            label={"Storyline 3:"}
                                            placeholder="Storyline"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylineTitle3}
                                            onChange={(e) => setStorylineTitle3(e.target.value)}
                                        />
                                        <TextField
                                            label={"Prompt 3:"}
                                            placeholder="Prompt"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylinePrompt3}
                                            onChange={(e) => setStorylinePrompt3(e.target.value)}
                                        />
                                    </Box>
                                    {storylineImages3 && storylineImages3.length > 0 &&
                                        <div>
                                            <ImageList cols={5}>
                                                {storylineImages3 && storylineImages3.map((item, index) =>
                                                    <ImageListItem key={item}>
                                                        <img
                                                            src={BASE_API_URL + "/get_image?path=" + item}
                                                            loading="lazy"
                                                        />
                                                    </ImageListItem>
                                                )}
                                            </ImageList>
                                            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                                                <InputLabel>-None-</InputLabel>
                                                <Select
                                                    label="Image"
                                                    className={classes.textField}
                                                    value={storylineImage3}
                                                    onChange={(e) => setStorylineImage3(e.target.value)}
                                                >
                                                    <MenuItem value="" key={-1}>
                                                        <em>Select</em>
                                                    </MenuItem>
                                                    {storylineImages3 && storylineImages3.map((item, index) =>
                                                        <MenuItem value={item} key={index}>{"Image: " + imgTagLookup[index]}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    }
                                    <Box
                                        className={classes.storyLine}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '55ch' },
                                        }}
                                    >
                                        <TextField
                                            label={"Storyline 4:"}
                                            placeholder="Storyline"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylineTitle4}
                                            onChange={(e) => setStorylineTitle4(e.target.value)}
                                        />
                                        <TextField
                                            label={"Prompt 4:"}
                                            placeholder="Prompt"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylinePrompt4}
                                            onChange={(e) => setStorylinePrompt4(e.target.value)}
                                        />
                                    </Box>
                                    {storylineImages4 && storylineImages4.length > 0 &&
                                        <div>
                                            <ImageList cols={5}>
                                                {storylineImages4 && storylineImages4.map((item, index) =>
                                                    <ImageListItem key={item}>
                                                        <img
                                                            src={BASE_API_URL + "/get_image?path=" + item}
                                                            loading="lazy"
                                                        />
                                                    </ImageListItem>
                                                )}
                                            </ImageList>
                                            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                                                <InputLabel>-None-</InputLabel>
                                                <Select
                                                    label="Image"
                                                    className={classes.textField}
                                                    value={storylineImage4}
                                                    onChange={(e) => setStorylineImage4(e.target.value)}
                                                >
                                                    <MenuItem value="" key={-1}>
                                                        <em>Select</em>
                                                    </MenuItem>
                                                    {storylineImages4 && storylineImages4.map((item, index) =>
                                                        <MenuItem value={item} key={index}>{"Image: " + imgTagLookup[index]}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    }
                                    <Box
                                        className={classes.storyLine}
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '55ch' },
                                        }}
                                    >
                                        <TextField
                                            label={"Storyline 5:"}
                                            placeholder="Storyline"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylineTitle5}
                                            onChange={(e) => setStorylineTitle5(e.target.value)}
                                        />
                                        <TextField
                                            label={"Prompt 5:"}
                                            placeholder="Prompt"
                                            multiline
                                            margin="dense"
                                            className={classes.storyLineText}
                                            value={storylinePrompt5}
                                            onChange={(e) => setStorylinePrompt5(e.target.value)}
                                        />
                                    </Box>
                                    {storylineImages5 && storylineImages5.length > 0 &&
                                        <div>
                                            <ImageList cols={5}>
                                                {storylineImages5 && storylineImages5.map((item, index) =>
                                                    <ImageListItem key={item}>
                                                        <img
                                                            src={BASE_API_URL + "/get_image?path=" + item}
                                                            loading="lazy"
                                                        />
                                                    </ImageListItem>
                                                )}
                                            </ImageList>
                                            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                                                <InputLabel>-None-</InputLabel>
                                                <Select
                                                    label="Image"
                                                    className={classes.textField}
                                                    value={storylineImage5}
                                                    onChange={(e) => setStorylineImage5(e.target.value)}
                                                >
                                                    <MenuItem value="" key={-1}>
                                                        <em>Select</em>
                                                    </MenuItem>
                                                    {storylineImages5 && storylineImages5.map((item, index) =>
                                                        <MenuItem value={item} key={index}>{"Image: " + imgTagLookup[index]}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </div>
                                    }
                                    <TextField
                                        label="Character Name"
                                        placeholder="Character Name"
                                        multiline
                                        fullWidth
                                        margin="normal"
                                        className={classes.textField}
                                        value={characterName}
                                        onChange={(e) => setCharacterName(e.target.value)}
                                    />
                                    <TextField
                                        label="Character Class"
                                        placeholder="Character Class"
                                        multiline
                                        fullWidth
                                        margin="normal"
                                        className={classes.textField}
                                        value={characterClass}
                                        onChange={(e) => setCharacterClass(e.target.value)}
                                    />
                                    <TextField
                                        label="Prompt Style"
                                        placeholder="Prompt Style"
                                        multiline
                                        fullWidth
                                        margin="normal"
                                        className={classes.textField}
                                        value={promptStyle}
                                        onChange={(e) => setPromptStyle(e.target.value)}
                                    />
                                    <div className={classes.spacer}></div>
                                    <Divider className={classes.divider} />
                                    <div className={classes.spacer}></div>
                                    <Typography gutterBottom>
                                        Input/Training Images
                                    </Typography>
                                    <ImageList cols={15}>
                                        {inputImages && inputImages.map((item, index) =>
                                            <ImageListItem key={item}>
                                                <img
                                                    src={BASE_API_URL + "/get_image?path=" + item}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        )}
                                    </ImageList>
                                    <div onClick={() => checkIfSaved()}>
                                        <UploadImages id={editId} refresh={refreshInputImages}></UploadImages>
                                    </div>
                                    <div className={classes.spacer}></div>
                                    <Divider className={classes.divider} />
                                </div>
                                <div className={classes.buttonContainer}>
                                    <Button size="medium" variant="contained" onClick={(event) => handleSaveClick()}>Save</Button>
                                    &nbsp;&nbsp;
                                    <Button size="medium" variant="contained" color="secondary" onClick={(event) => handleCancelClick()}>Cancel</Button>
                                </div>
                            </form>
                        </div>
                    }
                </Container >
            </main >
        </div >
    );
};

export default StoryIndex;