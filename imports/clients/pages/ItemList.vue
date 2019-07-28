<template>
  <div  >
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Name</th>
          <th class="text-left">Price</th>
        </tr>
      </thead>
      
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td class="text">{{item._id}}</td>
          <td class="text">{{item.name}}</td>
          <td class="text">{{item.price}} $</td>
          <td class="text">
              <q-btn label="Delete" @click="btnDelete(item._id)"/>
          </td>
          
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
export default {
  props:['items'],
    data(){
        return{
           
        }
    },
  
    methods:{
        btnDelete(id){
           this.$emit('handleDelete',id)
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
        }
    }
}
</script>
