import { AppSyncResolverEvent } from "aws-lambda";
import axios from 'axios';

export const handler = async (event: AppSyncResolverEvent<object, any>) => {
    try {
        // console.log(event)
        const response = await axios.post('http://localhost:4000/dev/api/handle_graphql', event);
        console.log(response.data)
        return response.data
      
    } catch (error: any) {
        console.log("first")
        console.error('Error in fetchData:', error.message);
        throw new Error('Error fetching data');
    }
}

