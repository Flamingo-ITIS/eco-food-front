import React, {useState} from "react";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Button from "@material-ui/core/Button";
import API_URL from "../API";
import {useCookies} from "react-cookie";

const UploadUserPhoto = () => {
    const [image, setImage] = useState({preview: "", raw: ""});
    const [cookies] = useCookies();

    const handleUpload = async e => {
        e.preventDefault();
        // setImage({
        //     preview: URL.createObjectURL(e.target.files[0]),
        //     raw: e.target.files[0]
        // });
        const formData = new FormData();
        formData.append("file", document.querySelector('input[type="file"]').files[0]);
        console.log(formData);
        const url = API_URL + '/profile-photo';
        const requestOptions = {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
            body: formData
        };
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                console.log(data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <form encType="multipart/form-data" action="">
            <input
                accept="image/*"
                // className={classes.input}
                style={{display: 'none'}}
                id="raised-button-file"
                multiple
                type="file"
                onChange={handleUpload}
            />
            <label htmlFor="raised-button-file">
                <Button
                    variant="raised"
                    component="span"
                    fullWidth
                >
                    <AddPhotoAlternateIcon/>
                    Загрузить фото
                </Button>
            </label>
        </form>
    )
};

export default UploadUserPhoto;