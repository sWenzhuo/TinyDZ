const pk ={
    state(){
        return{
            opponent_username:null,
            opponent_userphoto:null,
            opponent_userintroduction:null,
            status:"start-matching",
            socket:null,

        };
    },
    mutations:{
        UpdateSocket(state,socket)
        {
            state.socket = socket;

        },
        UpdateOpponent(state,username,userphoto,userintroduction)
        {
            state.opponent_username=username;
            state.opponent_userphoto=userphoto;
            state.opponent_userintroduction = userintroduction;
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