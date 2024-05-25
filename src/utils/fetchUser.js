import supabase from './supabase.js';

const fetchUser = async () => {
    let { data, error } = await supabase.auth.getUser();
    if (data.user) {
        let userID = data.user.id;
        let userData = await supabase.from('users').select('*').eq('user_Id', userID);
        return userData.data[0];
    }
    return null;
}

export default fetchUser;