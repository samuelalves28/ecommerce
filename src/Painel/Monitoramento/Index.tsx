import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

interface SystemData {
    cpuUsage: number;
    memoryUsagePercentage: number;
    timestamp: string;
}

const SystemMonitor: React.FC = () => {
    const [data, setData] = useState<SystemData>({ cpuUsage: 0, memoryUsagePercentage: 0, timestamp: "" });

    useEffect(() => {
        const connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5229/systemmonitorhub", {
                accessTokenFactory: () => localStorage.getItem("token") || ""
            })
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(() => {
                console.log("Conectado ao SignalR");

                connection.on("ReceiveSystemData", (newData: SystemData) => {
                    setData(newData);
                    console.log('data', data)
                });
            })
            .catch((err) => console.error("Erro ao conectar ao SignalR:", err));

        return () => {
            connection.stop();
        };
    }, []);

    return (
        <div>
            <h1>System Monitor</h1>
            <p>CPU Usage: {data.cpuUsage}%</p>
            <p>Memory Available: {data.memoryUsagePercentage} MB</p>
            <p>Timestamp: {new Date(data.timestamp).toLocaleTimeString()}</p>
        </div>
    );
};

export default SystemMonitor;