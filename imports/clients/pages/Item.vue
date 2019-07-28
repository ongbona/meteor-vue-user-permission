<template>
  <div>
   <q-input label="Name" v-model="form.name"/>
   <q-input label="Price" v-model="form.price"/>
    <q-btn @click="btnAdd">Submit</q-btn>
    <ItemList :items="items"  @handleDelete="handleDelete"></ItemList>
  </div>
</template>

<script>
import ItemList from './ItemList'
export default {
  components:{
  ItemList,
  },
  data() {
    return {
      items:[],
      count: 1,
      form:{
        name:'',
        price:'',
      }
    }
  },
  mounted(){
    this.getItem()
  },
  methods:{
    handleDelete(id){
      Meteor.call('deleteItem',id,(error,result)=>{
                if(result){
                    this.getItem()
                }
            })
    },
    getItem(){
            Meteor.call('findItem',(error,result)=>{
                if(result){
                    this.items=result
                    console.log(this.items)
                }
                else{
                    console.log(error)
                }
            })
        }, 

      btnAdd(){
        Meteor.call('insertItem',this.form,(error,result)=>{
          if(!error){
            console.log(result)
            this.getItem()
          }
        })
      }
  }
};
</script>

<style>
</style>
