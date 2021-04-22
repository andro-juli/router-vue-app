<template>
  <div class="test">
      <div class="form">
        <form class="">
          <div class="form-item">
            <label for="">Full Name</label>
            <input v-model="newUser.fullname" type="text" name="" id="name"><br>
          </div>

          <div class="form-item">
            <label for="">Email Address</label>
            <input v-model="newUser.email" type="text" name="" id="email">
          </div>

          <div class="form-item">
            <label for="">Phone Number</label>
            <input v-model="newUser.phone" type="text">
          </div>

            <button @click.prevent="onSubmit" :disabled="allDetailsEntered">send</button>
        </form>
      
        <div>
          <table>
            <thead>
              <tr>
                <th>Fullname</th>
                <th>Email Address</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in allUsers" v-bind:key="user.id">
                <td>{{ user.fullname }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
    name: 'Test',
    data (){
        return{
          newUser: {
            fullname: '',
            email: '',
            phone: ''
          },
          allUsers: [] 
        }  
    },

    computed: {
      allDetailsEntered(){
        return !this.newUser.fullname && !this.newUser.email && !this.newUser.phone
      }
    },
    methods: {
        onSubmit(){
          alert('succesfully submited')
           this.allUsers.push(this.newUser)
           this.clearForm() 
        },
        clearForm(){
          this.newUser={
            fullname:'',
            email:'',
            phone:''
          }
        }
    }

}

</script>

<style scoped>
    form{
       max-width: 375px;
       background: pink;
       padding: 2rem;
       border-radius: 8px;
       margin: 40px auto;
    }
    .form-item{
      display: block;
      max-width: 100%;
      margin-bottom: 1rem;
    }
    .form-item input{
      padding: 1rem;
      border-radius: 6px;
      font-size: 18px;
      background: #ffffff;
      color: green;
      border: 2px solid pink;
      width: 100%;
      height: 50px;
    }

    .form-item label{
      display: block;
    }
    button{
      background: black;
      padding: 1rem 3rem;
      color: #ffffff;
      cursor: pointer;
      border-radius: 0.5rem;
    }
    button:disabled,
    button[disabled] {
      cursor: not-allowed;
    }

    table{
      width: 100%;
      border:1px solid black
    }
    tbody td:hover{
      background: #ddd;
    }
    th, td {
      border: 1px solid #3333;
      padding: 1rem;
    }

    tr:nth-child(even){
      background: #c5c5c5;
    }

    
</style>