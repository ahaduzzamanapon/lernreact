import React, { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState({});
    const fetchData = async () => {
        const url = "http://173.212.223.213/smarthr/api/lunch";
        const options = {
            method: 'GET',
            headers: {
                'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ik1ITDUwIiwicGFzc3dvcmQiOiIkTWVyY3VyeSRfNjA2MCIsIkFQSV9USU1FIjoxNjkyMjY5NTMzfQ.A4VoPx7OWaGViCBW5RaNFK4idFSRNUvKSiYUew4bGVo',
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>API Fetching with React</h1>
            <div>{data.message && <p>{data.message}</p>}</div>
            <ul>
                {data.lunch_data_table &&
                    data.lunch_data_table.map((tableData) => (
                        <li key={tableData.id}>
                            <strong>ID:</strong> {tableData.id}
                            <br />
                            <strong>Employee ID:</strong> {tableData.emp_id}
                            <br />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default App;
