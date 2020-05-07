import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import API_URL from "../API";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";


const SettingsPage = () => {
    const [cookies] = useCookies();
    const [user, setUser] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
        };
        const username = localStorage.getItem("username");
        const url = API_URL + '/' + username + '/users';
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response.json();

                setIsLoaded(true);
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setUser(data);
            })
            .catch(error => {
                history.push('/login');
                setError(error);
                console.error('There was an error!', error);
            });
    });

    async function handleDelete(event) {
        event.preventDefault();
        const json = JSON.stringify(user);
        const url = API_URL + "/delete-user";

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
            body: json
        };
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                // history.push('/profile')
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <Paper>
            <Button
                variant="outlined"
                style={{color: "red"}}
                onClick={handleDelete}
            >
                Удалить профиль
            </Button>
        </Paper>
    );
};

export default SettingsPage;