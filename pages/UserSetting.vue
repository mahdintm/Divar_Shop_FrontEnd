<template>
    <div class="D_Content">
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="4"><div style="background-color:#ffffff ;width:100%;height: 500px;border-radius: 15px;">asd</div></b-col>
                <b-col style="background-color:#ffffff ;width:100%;height: 500px;border-radius: 15px;" cols="8"><b-form @submit="onSubmit">
                    <div class="UserST_header">تنظیمات حساب کاربری</div>
                    <div class="UserST_Item">

                        <span>ایمیل</span>
                    <b-form-group id="input-group-1" label-for="input-1">
                        <b-form-input id="input-1" type="email"  placeholder="Enter email" required></b-form-input></b-form-group>
                    </div>
                    

                </b-form></b-col>
  </b-row>
</b-container>
      </div>
      
    </template>
    
    <script>
    export default {
      data() {
        return {
          
        }
      },
      async mounted() {
       
      },
    }
    </script>
    <style>
    
    @import url(@/static/css/content.css);

    *{
        text-align: right !important;
    }
    .UserST_header{
        padding: 4% 0px 4% 0% !important;
    }
    .UserST_Item{
        padding: 0 2% 0 2% !important;
    }
    </style>
    