import React, { useState, useEffect } from 'react';



const App = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?pagl-3&resultl-3&seed=abc');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                setUserData(data.results[0]);

                console.log(data.results[0])

            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="bg-slate-600 h-screen flex items-center justify-center">
                <div className='flex items-center justify-center p-6 sm:flex-col'>
                    {userData ? (
                        <div className='border-2 flex flex-row '>
                            <div className="mr-4 m-4">
                                <img src={userData.picture.large} alt="" />
                            </div>
                            <div className="m-4 text-white text-xl">
                                <p>Name: <sapn className="ml-3 text-black font-bold "> {userData.name.first} {userData.name.last}</sapn></p>
                                <p>Email:<sapn className="ml-3 text-black font-bold ">{userData.email}</sapn> </p>
                                <p>Phone: <sapn className="ml-3 text-black font-bold ">{userData.phone}</sapn></p>
                                <p>Age:   <sapn className="ml-3 text-black font-bold ">{userData.dob.age}</sapn></p>
                                <p>Gender: <sapn className="ml-3 text-black font-bold ">{userData.gender}</sapn></p>
                            </div>

                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>



        </>

    )
}

export default App
