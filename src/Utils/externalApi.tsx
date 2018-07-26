import axios from 'axios';
export default class ExternalApi {
    public static Api(parameters: any) {
        switch (parameters.method) {
            case 'GET' : {
                return axios.get(parameters.url);
            }
            case 'POST' : {
                return axios.post(parameters.url, parameters.parameters);
            }
            case 'DELETE' : {
                return axios.delete(parameters.url, {data: parameters.parameters});
            }
            case 'PUT' : {
                return axios.put(parameters.url, parameters.parameters);
            }
            default: {
                return;
            }
        }
    }
}