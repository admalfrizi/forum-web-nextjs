import { getTags } from '@/lib/actions/tag.action';
import React from 'react';

const Tags = async () => {

    const { success, data, error } = await getTags({
        page: 1,
        pageSize: 10,
        query: "react"
    }) 

    const { tags } = data || {};
    console.log("Tags", JSON.stringify(tags, null, 2));

    return (
        <div>
            <h1>Tags</h1>
        </div>
    );
};

export default Tags;