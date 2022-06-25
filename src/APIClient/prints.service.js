import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
// page size constant. Can be any integer from 1 to 100
const PAGE_SIZE = 10;

export const fetchPrintsPage = (page) => {
    const uri = `${baseUrl}/graphql`;
    return new Promise((resolve, reject) => {
        const query = {
            query: `{prints (page: ${page}, pageSize: ${PAGE_SIZE}) {title division dated medium number totalNumber provenance images{ baseimageurl }}}`,
        };

        axios.post(uri, query).then(resolve, reject);
    });
};
