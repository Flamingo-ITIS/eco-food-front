import Avatar from "@material-ui/core/Avatar";
import React, {useEffect, useState} from "react";
import API_URL from "../API";
import {useCookies} from "react-cookie";
import Loader from "react-loader-spinner";

const ProfilePhoto = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [binaryData, setBinaryData] = useState();
    const [cookies] = useCookies();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
        };
        const photoURL = API_URL + '/profile-photo';
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
        ;
    }, []);


    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>
            <Loader
                type="ThreeDots"
                color="primary"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
    } else {
        return (
            <div>
                <Avatar variant="square"
                        style={{width: '250px', height: '250px'}}
                        src={binaryData}
                />
            </div>
        )
    }
};

export default ProfilePhoto;