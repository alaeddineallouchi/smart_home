import { INFO_USER } from "../constants";


const initialState={
userId:'',
firstName:'',
lastName:'',
profilImage:'',
num:'',
jour:'',
mois:'',
annee:'',
}
export const userInfoReducer=(state=initialState,action)=>{

    switch (action.type) {
        case INFO_USER:
            return{
                userId:action.infos.userId,
                firstName:action.infos.firstName,
                lastName:action.infos.lastName,
                profilImage:action.infos.profilImage,
                num:action.infos.num,
                jour:action.infos.jour,
                mois:action.infos.mois,
                annee:action.infos.annee,
                
            }
            
            
    
        default:
            return state;
    }


} 

export default userInfoReducer;