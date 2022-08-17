import React, { useState } from 'react';
import axios from 'axios';

export const CustomerForm = (props) => {
    const [id, setId] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/get', {
            packageId: id,
        }).then(res => {
            // console.log('res', res.data)
            props.dataCallback(res.data)
            setId('')
        })
    }
    return (
        <div>
            <h2>Customer Package Lookup </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    PackageId:
                </label>
                <input type='text' name='packageId' onChange={(e) => setId(e.target.value)} value={id} />
                <input type='submit' value='Submit' />
            </form>
        </div>

    )
}