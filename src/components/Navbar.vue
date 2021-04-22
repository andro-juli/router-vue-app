<template>
<div>
    <nav>
      <p class="logo"> En masse</p>
      <div class="links">
        
          <router-link :to="{ name:'home'}">Home</router-link>
          <router-link :to="{ name:'categories'}">Categories</router-link>
          <router-link :to="{ name:'FAQ'}">FAQ</router-link>
          <router-link :to="{ name:'BecomeAnAgent'}">Become an Agent</router-link>
      </div>
      <div class="button">
          <button class="sign-in">Sign In</button>
          <router-link :to="{ name:'signUp'}" class="sign-up">
            <button class="sign-up">Sign Up</button>
          </router-link>
          
      </div>
  </nav>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #FFFFFF;
        padding: 0.5px;
        box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
        width: 100%; 
        height: 50px; 
        margin-bottom: 60px; 
}

     .logo {
        font-family: Mulish;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.5px;
        text-transform: capitalize;
        color: #363154;
        
        }
    .links a {
        font-style: normal;
        font-size: 18px;
        line-height: 19px;
        color: #4F4F4F;
        margin-right: 3.5rem;
        text-decoration: none;
        } 
     .button .sign-in{
        font-family: Montserrat;
        font-style: normal;
        text-transform: capitalize;
        color: #363154;
        background: none;
        margin: 5px;
        border: none;
        cursor: pointer;
        }
    .button .sign-up{
        font-family: Montserrat;
        font-style: normal;
        text-transform: capitalize;
        color: white;
        background: #FFA010;
        border-radius: 8px;
        padding: 5px;
        margin: 5px;
        border: none;
        cursor: pointer;
        } 
    

</style>