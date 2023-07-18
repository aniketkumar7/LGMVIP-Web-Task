import "./App.css";
import React, { useState } from "react";
import { Loader } from "./component/Loader";
import { Card } from './component/Card';

function App() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://reqres.in/api/users?page=1");
            const jsonData = await response.json();
            setData(jsonData.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Navbar fetchData={fetchData} />
            {isLoading && <Loader status={'true'} />}
            {!data ? <p>No users to show</p> :
                data.map((user) => (
                    <Card
                        key={user.id}
                        firstName={user.first_name}
                        lastName={user.last_name}
                        avatar={user.avatar}
                    />
                ))
            }
        </div>
    );
}

const Navbar = ({ fetchData }) => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src="https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png" alt="Logo" className="navbar-logo" />
            </div>
            <div className="navbar-right">
                <button onClick={fetchData} className="navbar-button">
                    Fetch Data
                </button>
            </div>
        </div>
    );
}

export default App;
