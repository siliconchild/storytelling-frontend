import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { BASE_API_URL } from "../../../services/Common";
import DataService from "../../../services/DataService";
import styles from './styles';
const useStyles = makeStyles(styles);


const UploadImages = (props) => {
    const classes = useStyles();
    let { id, refresh } = props;

    const inputFile = useRef(null);

    // Component States


    // Setup Component
    useEffect(() => {

    }, []);

    // Handlers
    const handleImageUploadClick = (event) => {
        inputFile.current.click();
    }
    const handleOnChange = (event) => {
        console.log(event.target.files);

        for (let i = 0; i < event.target.files.length; i++) {
            let file = event.target.files[i]
            console.log(file);
            var formData = new FormData();
            formData.append("file", file);
            DataService.UploadInputImage(id, formData, file.name)
                .then(function (response) {
                    console.log(response.data);
                    refresh();
                })
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.dropzone} onClick={(event) => handleImageUploadClick(event)}>
                <input
                    type="file"
                    accept="image/*"
                    capture="camera"
                    on="true"
                    multiple
                    tabIndex="-1"
                    autoComplete="off"
                    className={classes.fileInput}
                    ref={inputFile}
                    onChange={(event) => handleOnChange(event)}
                    onClick={(event) => event.stopPropagation()}
                />
                <div className={classes.help}>Click to take a picture or upload images.</div>
            </div>
        </div>
    );
};

export default UploadImages;