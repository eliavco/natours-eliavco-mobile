import axios from 'axios';
import uniqid from './uniqid';
import Info from '../constants/Info';

class API {
    constructor() {
        this.info = Info;
    }

    getAllTours(cb) {
        axios(
            `${Info.websiteHost}/api/${Info.apiVersion}/tours?fields=name,id,imageCover,duration,price`
        )
            .then(res => {
                cb(res.data.data.documents);
            })
            .catch(err => {
                cb([{ id: uniqid('error-'), error: err, }]);
            });
    }

    getTour(id, cb) {
        axios(
            `${Info.websiteHost}/api/${Info.apiVersion}/tours/${id}`
        )
            .then(res => {
                cb(res.data.data.doc);
            })
            .catch(err => {
                cb({ id: uniqid('error-'), error: err, });
            });
    }
}

export default new API();
