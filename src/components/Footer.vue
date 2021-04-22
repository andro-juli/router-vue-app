<template>
    <div>
            <div class="footer">
                <div class="cont">
                    <div class="footer-div">
                        <p>Enter your email address to get <br> updates</p>
                        <input type="text" name="" id="footer-input" placeholder="Enter your email address"> <br>
                        <button class="footer-button">Subscribe</button>
                    </div>
                <div class="footer-div">
                    <ul>
                        <p class="list-title">enMasse</p>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Categories</li>
                        <li>About Us</li>
                        <li>Make Request</li>
                        <li>Become an Agent</li>
                    </ul>
                    
                </div>
                <div class="footer-div">
                    <ol>
                        <p class="list-title">Terms</p>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li> <br>
                        <li><div class="icons">
                        <img src="@/assets/social_icons.svg" alt="">
                    </div></li>
                    </ol>
                </div>
            </div>
                <div class="footer-line">
                
                </div>
             
                <div>
                    <p class="copyright">Copyright © 2020 enMasse. All Rights Reserved.</p>
                </div>
            </div>
            

    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
    li {
        list-style-type: none;
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 25px;
        }
    .footer{
        background: #2E9EB6;
        color: white;
        padding-top: 40px;
        margin-top: 60px;
        height: 375px;
        }

    .footer-div{
            width: 20%;
            padding-left: 50px;
            }
    .footer-div p{
        margin-bottom: 10px;
    }
    .cont {
        display: flex;
        justify-content: space-around;
        }
    #footer-input{
        background: #FFFFFF;
        border: 1px solid #828282;
        box-sizing: border-box;
        border-radius: 4px;
        height: 45px;
        width: 13rem;
        margin-bottom: 35px;
        }

    .footer-button{
        background: #FFA010;
        border-radius: 4px;
        width: 13rem ;
        height: 50px;
        color: #FFFFFF;
        } 
    .list-title {
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        
        }
    .copyright{ 
        margin-top: 40px;
        text-align: center;
        } 
    .footer-line{
        border: 0.911729px solid #FFFFFF;
        width: 100%;
        margin-top: 80px;
        margin-bottom: 20px;
        
    }

</style>