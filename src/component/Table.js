import React from 'react';

export const Table = () => {
  return (
    <div className='table-container'>
        <h1 className='heading'>responive table</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>Start Date</th>
                    <th>Start / End time</th>
                    <th>Batch Type</th>
                    <th>Training Mode</th>
                    <th>Batch Status</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                <tr className='table-primary'>
                    <td data-label="Start Date">1 jan 2021</td>
                    <td data-label="Start / End time">09:00 - 13:00 (IST)</td>
                    <td data-label="Batch Type">Weekend</td>
                    <td data-label="Training Mode">Online Training</td>
                    <td data-label="Batch Status"><span className='text_open'>[ Open ]</span></td>
                    <td data-label="#"><a href='#' className='btn btn-error d-block'>Enroll Now</a></td>
                </tr>
                <tr className='table-danger'>
                    <td data-label="Start Date">1 jan 2021</td>
                    <td data-label="Start / End time">09:00 - 13:00 (IST)</td>
                    <td data-label="Batch Type">Weekend</td>
                    <td data-label="Training Mode">Online Training</td>
                    <td data-label="Batch Status"><span className='text_open'>[ Open ]</span></td>
                    <td data-label="#"><a href='#' className='btn btn-error d-block'>Enroll Now</a></td>
                </tr>
                <tr className='table-warning'>
                    <td data-label="Start Date">1 jan 2021</td>
                    <td data-label="Start / End time">09:00 - 13:00 (IST)</td>
                    <td data-label="Batch Type">Weekend</td>
                    <td data-label="Training Mode">Online Training</td>
                    <td data-label="Batch Status"><span className='text_open'>[ Open ]</span></td>
                    <td data-label="#"><a href='#' className='btn btn-error d-block'>Enroll Now</a></td>
                </tr>
                <tr className='table-success'>
                    <td data-label="Start Date">1 jan 2021</td>
                    <td data-label="Start / End time">09:00 - 13:00 (IST)</td>
                    <td data-label="Batch Type">Weekend</td>
                    <td data-label="Training Mode">Online Training</td>
                    <td data-label="Batch Status"><span className='text_open'>[ Open ]</span></td>
                    <td data-label="#"><a href='#' className='btn btn-error d-block'>Enroll Now</a></td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};