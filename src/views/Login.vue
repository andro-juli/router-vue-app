<template>

  <div class="login">
      <Navbar />
      <div class="login-body-section">
          <div class="login-body">
              <h1 class="heading">Welcome Back</h1>
              <p>Login to your account</p>
          </div>
          <div>
              <form class="form-div">
                  <label for="email" class="label">Email</label><br>
                  <input type="text" name="" id="email" placeholder="gokr@gmail.com"><br>
                  <label for="password" class="label">Password</label><br>
                  <input type="password" name="" id="" placeholder="password" >
                  <button class="login-button">Log In</button><br>
                  <p>New to enMasse? <span>Sign up</span></p>
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
    name: 'LogIn',
    components:{
        Navbar,
        Footer
        }
}
</script>

<style>

    .heading{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        color: #03363C;
        }

    .login-body{
        background: #FFFFFF;
        text-align: center;
        }
    .login-body p{
        font-family: Montserrat;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #3E3E3E;
        padding: 15px;
    }
    .login-body-section{
        height: 500px;
    }
    .form-div{ 
        background: #FFFFFF;
        width: 20%;
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
        }
    form span{
        color: #2E9EB6;
        }

    .label{
        font-family: Mulish;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #3E3E3E;
        margin-bottom: 20px;
    }
    .login-button {
        background: #FFA010;
        border: 1px solid #FFA010;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px rgba(24, 116, 191, 0.15);
        border-radius: 7px;
        height: 45px;
        width: 100%;
        color: #FFFFFF;
        }

</style>