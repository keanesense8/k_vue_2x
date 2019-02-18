import _ from 'underscore'

export default{
    getMsg(state){
        return state.msg
    },
    getCount : state => state.count,
    getLists : state => state.shop_list,
    getListById: (state , id ) =>  {return _.findWhere(state.shop_list , {id : id})}
}