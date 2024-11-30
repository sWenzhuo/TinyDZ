const pk ={
    state(){
        return{
            opponent_username:null,
            opponent_userphoto:null,
            status:"start-matching",
            socket:null,

        };
    },
    mutations:{
        UpdateSocket(state,socket)
        {
            state.socket = socket;

        },
        UpdateOpponent(state,username)
        {
            state.opponent_username=username;
        },

        UpdateStatus(state,status)
        {
            state.status = status;
        }
    },

    actions:{

    },
    getters:{
    }
};
export default pk;