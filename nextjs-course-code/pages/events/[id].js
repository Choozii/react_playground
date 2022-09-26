import React from 'react';
import {useRouter} from 'next/router';

const EventDetail = () => {
    const router = useRouter();
    return (
        <h1>
        {router.query.id}
        </h1>
    );
};

export default EventDetail;