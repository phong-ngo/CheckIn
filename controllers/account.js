import { v4 as uuidv4 } from 'uuid';
import Account from '../models/accounts';

export default {
    async  getUsers(req,res) {
        const id = uuidv4();
        const message = {
          id,
        };
      let all = await Account.find({});
      return all;
    }
}
