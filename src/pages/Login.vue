<template>
    <div
      class="w-screen h-screen bg-[url(assets/back.svg)] bg-no-repeat bg-cover shadow sm:rounded-lg "
    >
      <div class="w-screen h-screen  flex justify-center items-center">
        <div class="h-[85vh] login w-[90vw] p-10 rounded-xl flex justify-center items-center flex-col  bg-[rgba(255,255,255,0.4)] shadow-xl shadow-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)]">
          <div>
            <img
              src="https://grupofacela.com/wp-content/uploads/2019/02/main-logo-facela-top.png"
              class="w-32"
            />
          </div>
          <div class="mt-8 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-semibold text-gray-600">Bienvenido</h1>
            <div class="w-full flex-1 mt-4">
              <div class=" text-center flex justify-center">
                
                <div
                  class="leading-none px-2 text-center inline-block text-sm text-gray-500 tracking-wide font-medium transform translate-y-1/2"
                >
                  Inicia sesion con tus datos
                </div>
               

              </div>
              <form @submit="onSubmit">
                <div class="">
                  <div class="w-full flex justify-center items-center relative">
                    <oh-vue-icon
                      class="absolute z-10 bottom-[1.2rem] text-gray-500 left-2"
                      scale="1.5"
                      name="fa-user-circle"
                    />
                    <field
                      name="email"
                      class="relative w-full px-8 pl-14 font-semibold py-4 rounded-lg bg-[rgba(255,255,255,0.5)] outline-none border h-[4rem] border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <error-message
                    name="email"
                    class="my-3 text-xs font-semibold text-red-500"
                  ></error-message>
                  <div class="w-full flex justify-center items-center relative">
                    <oh-vue-icon
                      class="absolute z-10 bottom-[1.2rem] text-gray-500 left-2"
                      scale="1.5"
                      name="fa-lock"
                    />
                    <field
                      name="password"
                      class="relative w-full px-8 pl-14 font-semibold py-4 rounded-lg bg-[rgba(255,255,255,0.5)] outline-none h-[4rem] border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Contraseña"
                    />
                  </div>
                  <error-message
                    name="password"
                    class="my-3 text-xs font-semibold text-red-500"
                  ></error-message>
                  <button
                    type="submit"
                    class="mt-5 tracking-wide font-semibold bg-gradient-to-l to-[#7F7FD5] from-[#86A8E7]  text-gray-100 w-full h-16 py-4 rounded-[0.8rem] hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span class="ml-3 text-lg">Iniciar Sesion</span>
                    <oh-vue-icon class="ml-3" scale="1.25" name="hi-login" />
                  </button>
                  <!-- <div class="py-6">
                    <p
                      class="text-xs float-right font-semibold cursor-pointer text-gray-600 text-center"
                    >
                      ¿Olvidaste tu contraseña?
                    </p>
                  </div> -->
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import OhVueIcon from "../plugins/oh-vue-icon";
  import { useForm, Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  
  const validationSchema = yup.object().shape({
    email: yup.string().required("Debes escribir tu email"),
    password: yup.string().required("Debes escribir tu contraseña"),
  });
  
  const { handleSubmit } = useForm<{ email: string; password: string }>({
    validationSchema,
  });
  
  const onSubmit = handleSubmit(() => {
  });
  </script>
  
  <style scoped>
  @media screen and (min-height: 750px) {
    .login {
      height: 70vh;
    }
  }
  </style>
  