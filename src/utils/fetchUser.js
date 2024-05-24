import supabase from './supabase.js';

const fetchUser = async () => {
    let { data, error } = await supabase.auth.getUser();
    if (data) {
        let userID = data.user.id;
        let userData = await supabase.from('users').select('*').eq('user_Id', userID);
        return userData.data[0];
    }
    if(error){
        console.log(error);
    }
    return null;
}

export default fetchUser;