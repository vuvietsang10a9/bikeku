import React from 'react';
import { useState } from 'react';
import productApi from '../../../../../api/productApi';
import CreateForm from '../../components/CreateForm';

CreateABike.propTypes = {

};

function CreateABike(props) {
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (values) => {
        const newValues = { ...values, imageUrl: imageUrl }
        try {
            productApi.add(newValues);
            console.log('GOODJOB');
        } catch (error) {
            console.log('ERROR');
        }

    }

    //sang
    return (
        <>
            <div id="page-wrapper">
                <div id="page-inner">
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12">
                            {/* Advanced Tables */}

                            <div className="panel panel-default ">
                                <div className="panel-heading">
                                    Create a Bike
                                </div>
                                <div className="panel-body">
                                    <div className="table-responsive">
                                        <CreateForm setImageUrl={setImageUrl} onSubmit={handleSubmit} />
                                    </div>
                                    {/*End Advanced Tables */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateABike;