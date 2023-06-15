import React from 'react';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_JOB } from '../utils/mutations';

const JobForm = () => {

    const [ jobInfo, setJobInfo ] = useState({
        companyName: '',
        location: '',
        jobTitle: '',
        description: '',
        position: '',
        salary: '',

    });

    const [mutateJobs, { error, data }] = useMutation(ADD_JOB);
//console.log(data)
    const handleInput = async (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        console.log("did the state change?", jobInfo)
        setJobInfo({...jobInfo, [name]: value});
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await mutateJobs({
                variables: {
                    ...jobInfo
                }
            })
            // window.location.reload();
            alert("job posted");
         console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    // const postJobHandler = async (btn) => {
    //     const jobId = btn.id.split('_')[1];
    //     let companybox = document.getElementById("submitBtn").value;
    //     if (companybox) {
    //         const response = await fetch(data, {
    //             method: "POST",
    //             body: JSON.stringify({ jobId, companybox, }),
    //             headers: { "Content-Type": "application/json" }, 
    //     });

    //     if (response.ok) {
    //         alert("Job posted");
    //         const get = await response.json();
    //     } else {
    //         alert("Failed to post job")
    //     }
    //     }
    // }

const [companyName, location, jobTitle, description, position, salary ] = useState('');

    return (
        <section className="container">
            <div className="row bg-orange-200">
            <form onSubmit={handleFormSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company: </label>
                    <input defaultValue= {companyName} type="text" id="companyName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company Name" 
                    name="companyName"

                    onChange={handleInput}
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location: </label>
                    <input defaultValue= {location} type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Location" 
                    name="location"

                    onChange={handleInput}
                    required />
                </div>  
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title: </label>
                    <input defaultValue= {jobTitle} type="text" id="jobtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Title" 
                    name="jobTitle"

                    onChange={handleInput}
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description: </label>
                    <input defaultValue= {description} type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Description" 
                    name="description"

                    onChange={handleInput}
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position: </label>
                    <input defaultValue= {position} type="text" id="position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Position" 
                    name="position"

                    onChange={handleInput}
                    required />
                </div>
                <div className="mb-6">
                    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary: </label>
                    <input defaultValue= {salary} type="text" id="salary" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job Salary" 
                    name="salary"
                    
                    onChange={handleInput}
                    />
                    {error && (
                        <div>{error.message}</div>
                    )}
                </div> 
                <button
                type= "submit"
            >
              Submit
            </button>
            {/* <button
                onClick={() =>
                ({
                  type: ADD_JOB,
                  cats: {
                    name: companyName,
                    location: location,
                    title: jobTitle,
                    description: description,
                    position: position,
                    salary: salary,
                  },
                })
              }
            >
              Submit
            </button> */}
                    {/* <button type="submit" id="submitBtn" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
            </div>
            </form>
        </div>
    </section>
    );
};

export default JobForm;