import { users } from '../data/users';
import { profiles } from '../data/profiles';

export const getUserById = (id) => {
    return users.find((user) => user._id == id);
}

export const getProfileByUserId = (id) => {
    return profiles.find((profile) => profile.user_id == id);
}