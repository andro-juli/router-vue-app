<template>
  <div class="signup">

      <Navbar />
        <div class="signup-body-section">
            <div class="signup-body">
                <h1 class="heading">Sign Up For An Account</h1>
                <p>We’ll like to meet you please fill in your name, email, phone number  and password</p>
            </div>
            
        <div class="form-div">
            <form>
                <label for="fullname" class="label">Fullname</label> <br>
                <input type="text" name="" id="fname" placeholder="OlogaKe Olowuni"> <br>
                <label for="Email" class="label">Email</label> <br>
                <input type="text" name="" id="Email" placeholder="gokr@gmail.com"> <br>
                <label for="phone" class="label">Phone Number</label> <br>
                <input type="text" name="" id="fname" placeholder="012345678"> <br>
                <label for="Password" class="label">Password</label> <br>
                <input type="password" name="" id="password" placeholder="password"> <br>
                <button class="register-button">Register</button><br>
                <p>Already have an account? <span>Log In</span></p>
        </form>
        </div>
        
        </div>
      
      <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'signUp',
    components:{
        Navbar,
        Footer
        }
}
</script>

<style>
    .signup-body{
        background: #FFFFFF;
        text-align: center;
        }
    .signup-body p{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        color: #3E3E3E;
        padding: 10px;
        margin-bottom: 10px;
    }
    
    .heading{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        color: #03363C;
        padding: 15px;
        }
    .form-div{ 
        background: #FFFFFF;
        width: 30%;
        margin: auto;
        justify-content: center;
        
        }

    form p{
        font-family: Mulish;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #C0C7CE;
        text-align: center;
        margin-top: 10px;
        }
    form span{
        color: #2E9EB6;
        }

    .label {
        font-family: Mulish;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #3E3E3E;
        margin-bottom: 20px;

        }
    input{   
        background: #FFFFFF;
        border: 1px solid #DFDFDF;
        box-sizing: border-box;
        border-radius: 7px;
        height: 45px;
        width: 100%;
        margin-bottom: 1.2rem;
        padding: 5px;
        }
    .register-button {
        background: #FFA010;
        border: 1px solid #FFA010;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(24, 116, 191, 0.15);
        border-radius: 7px;
        height: 45px;
        width: 100%;
        color: #FFFFFF;
        margin-bottom: 10px;
        }

</style>