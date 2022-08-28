import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <form className="bg-white w-[30%] mr-10  shadow-lg p-10 rounded-lg gap-4 mb-2 flex flex-col justify-between  items-center">
            <h1 className='text-gray-900 text-xl font-bold'>Connectez-vous</h1>
                <div className='flex flex-col text-xl gap-4 text-black w-full'>
                    <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  w-full' placeholder='shakokinyamba201@gmail.com'/>
                    <input type="password" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  w-full' placeholder='**********'/>
                   
                   <button className='bg-green-500 text-gray-100 font-semibold  border border-gray-300 p-2.5 rounded-lg'>Connexion</button>
                </div>
                
                <div className='bg-blue-400 text-gray-100 font-semibold  border border-gray-300 p-2.5 rounded-lg'>

                </div>
            </form> 
        </div>
    );
};

export default Login;