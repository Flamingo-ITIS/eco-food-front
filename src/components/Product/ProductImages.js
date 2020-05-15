import CardMedia from "@material-ui/core/CardMedia";
import React, {useEffect, useState} from "react";
import UploadProductImages from "./UploadProductImages";
import {useCookies} from "react-cookie";
import API_URL from "../API";
import Loader from "react-loader-spinner";
import not_found from '../../images/exceptions/not_found.jpg';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    media: {
        height: 200,
        width: 250,
        borderRadius: "12px",
        margin: "0 auto"
    },
}));

const ProductImages = ({images}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [image, setImage] = useState({});
    const [binaryData, setBinaryData] = useState(not_found);
    const [cookies] = useCookies();

    const classes = useStyles();

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + cookies.auth_token
        },
    };

    function get_image(image_name) {
        let photoURL = API_URL + '/media/' + image_name;
        fetch(photoURL, requestOptions, [])
            .then(async response => {
                response.blob().then(blob => {
                    setIsLoaded(true);
                    if (!response.ok) {
                        // get error message from body or default to response status
                        const error = (blob && blob.message) || response.status;
                        return Promise.reject(error);
                    }

                    const fileReaderInstance = new FileReader();
                    fileReaderInstance.readAsDataURL(blob);
                    fileReaderInstance.onload = () => {
                        setBinaryData(fileReaderInstance.result);
                    }
                })
            })
            .catch(error => {
                setError(error);
                console.error('There was an error!', error);
            });
    }

    useEffect(() => {
        // images.forEach(image => setBinaryData(get_image(image.name)));
        if (images && images.length > 0) {
            get_image(images[0].name);
        }
    });
    if (error) {
        return (
            <CardMedia
                className={classes.media}
            >
                <div>Ошибка: {error.message}</div>
            </CardMedia>
        );
    } else return (
        <CardMedia
            className={classes.media}
            image={binaryData}
        >
            {/*{!isLoaded ? (<Loader*/}
            {/*    type="ThreeDots"*/}
            {/*    color="primary"*/}
            {/*    height={100}*/}
            {/*    width={100}*/}
            {/*    timeout={3000}//3 secs*/}
            {/*    />) : (<div>done</div>)*/}
            {/*}*/}
        </CardMedia>
    )
};
export default ProductImages;