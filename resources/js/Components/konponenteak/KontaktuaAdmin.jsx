import React, { useEffect, useState } from "react";

export const KontaktuaAdmin = () => {
    const [mezuak, setMezua] = useState([]);

    useEffect(() => {
        console.log('sartu da.');
        const fetchData = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/mezuak');
            const data = await response.json();
            setMezua(data);
        };
        fetchData();
    }, [])

    return (
        <div>
            <table>
                    <tr>
                        <th><h1>Bezeroen mezuak</h1></th>
                    </tr>
                    {mezuak.map((mezua, index) => (
                        <tr key={index}>
                            <td>
                                <p>{mezua.email}</p>
                                <p>{mezua.message}</p>
                            </td>
                        </tr>
                    ))}
                
            </table>
        </div>
    );
};
