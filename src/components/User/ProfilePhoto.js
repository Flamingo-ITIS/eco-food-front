import Avatar from "@material-ui/core/Avatar";
import React, {useEffect, useState} from "react";
import API_URL from "../API";
import {useCookies} from "react-cookie";

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
                    const fileReaderInstance = new FileReader();
                    fileReaderInstance.readAsDataURL(blob);
                    fileReaderInstance.onload = () => {
                        setBinaryData(fileReaderInstance.result);
                        console.log(binaryData);
                    }
                })
            });
    },[]);

    return (
        <div>
            <Avatar variant="square"
                    style={{width: '250px', height: '250px'}}
                    src={binaryData}
            />
        </div>
    )
};

export default ProfilePhoto;