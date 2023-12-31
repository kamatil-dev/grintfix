<template>
  <div
    class="flex sm:flex-row flex-col gap-16 place-items-center px-10 sm:px-20"
  >
    <form class="sm:basis-2/3 w-full flex flex-col gap-6">
      <h2>أرسل لنا رسالة</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-22 gap-y-6">
        <div class="relative z-0 overflow-hidden group">
          <input
            type="text"
            name="full_name"
            id="full_name"
            class="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            placeholder=" "
            required
          />
          <label
            for="full_name"
            class="text-gray-500 absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 right-2 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-secondary peer-focus:right-2 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
            >الإسم الكامل</label
          >
        </div>
        <div class="relative z-0 overflow-hidden group">
          <input
            type="email"
            name="email"
            id="email"
            class="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            placeholder=" "
            required
          />
          <label
            for="email"
            class="text-gray-500 absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 right-2 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-secondary peer-focus:right-2 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
            >البريد الإلكتروني</label
          >
        </div>
        <div class="relative z-0 overflow-hidden group">
          <input
            type="text"
            name="phone"
            id="phone"
            class="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            placeholder=" "
            required
          />
          <label
            for="phone"
            class="text-gray-500 absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 right-2 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-secondary peer-focus:right-2 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
            >رقم الهاتف</label
          >
        </div>
        <div class="relative z-0 overflow-hidden group">
          <input
            type="text"
            name="title"
            id="title"
            class="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            placeholder=" "
            required
          />
          <label
            for="title"
            class="text-gray-500 absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 right-2 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-secondary peer-focus:right-2 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
            >عنوان الرسالة</label
          >
        </div>
      </div>
      <div class="relative z-0 overflow-hidden group">
        <textarea
          rows="6"
          name="message"
          id="message"
          class="block p-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          placeholder=" "
          required
        ></textarea>
        <label
          for="message"
          class="text-gray-500 absolute text-sm duration-300 transform scale-75 top-3 right-2 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-secondary peer-focus:right-2 peer-focus:font-medium peer-focus:scale-75 peer-focus:-translate-y-6"
          >محتوى الرسالة</label
        >
      </div>
      <a
        href="#"
        class="w-fit place-self-end text-white bg-secondary font-bold no-underline hover:bg-primary py-2 px-4 flex gap-2 place-items-center"
      >
        <span>إضغط للإتصال</span>
        <img
          class="w-6 h-6 rtl:-scale-x-100"
          src="/assets/icons/material-symbols_double-arrow.png"
          alt=""
        />
      </a>
    </form>
    <div class="sm:basis-1/3 w-full flex flex-col gap-6">
      <div
        class="py-4 border-solid border-2 border-gray-300 flex flex-col place-items-center justify-center"
      >
        <img src="/assets/icons/ion_time.png" class="h-10" alt="" />
        <h4 class="text-2xl mb-0">ساعات العمل</h4>
        <span class="text-gray-500">يومياً من 8 صباحاً - 9 مساءً</span>
      </div>

      <div
        class="py-4 border-solid border-2 border-gray-300 flex flex-col place-items-center justify-center"
      >
        <img src="/assets/icons/ion_mail.png" class="h-10" alt="" />
        <h4 class="text-2xl mb-0">بريدنا</h4>
        <span class="text-gray-500">Info@grintfix.com</span>
      </div>
      <div
        class="py-4 border-solid border-2 border-gray-300 flex flex-col place-items-center justify-center"
      >
        <img
          src="/assets/icons/fluent_call-24-filled.png"
          class="h-10"
          alt=""
        />
        <h4 class="text-2xl mb-0">هاتفنا</h4>
        <span class="text-gray-500" dir="ltr">07 9001 9369</span>
      </div>
    </div>
  </div>
</template>
