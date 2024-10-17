const pk ={
    state(){
        return{
            opponent_username:null,
            opponent_userphoto:null,
            status:"match",
            socket:null,

        };
    },
    mutations:{
        UpdateSocket(state,socket)
        {
            state.socket = socket;

        },
        UpdateOpponent(state,username,userphoto)
        {
            state.opponent_username=username;
            state.opponent_userphoto=userphoto;
        },

        UpdateStatus(state,status)
        {
            state.status = status
        }


    },

    actions:{

    },
    getters:{
    }
};
export default pk;