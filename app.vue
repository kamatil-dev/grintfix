<template>
  <main
    :dir="Language === 'ar' ? 'rtl' : 'ltr'"
    class="leading-normal font-sans"
  >
    <header
      :class="scrolledUP ? 'top-0' : '-top-28'"
      class="sticky drop-shadow hidden sm:block transition-all z-40"
    >
      <div class="flex justify-between bg-primary place-items-center">
        <NuxtLink
          :to="to('')"
          class="ps-20 p-5 pe-10 relative bg-white after:content-empty after:w-0 after:h-0 after:border-transparent after:border-style-solid after:border-t-[56px] after:border-b-[55px] after:border-s-[39px] after:border-s-white after:absolute after:top-0 after:end-[-42px]"
        >
          <img src="/assets/icons/logo.png" class="h-16" alt="" />
        </NuxtLink>
        <div class="flex gap-12 text-white px-20">
          <div class="flex gap-4 place-items-center">
            <img
              src="/assets/icons/solar_phone-calling-rounded-bold.png"
              class="h-10"
            />
            <a
              href="tel:07 9001 9369"
              class="group no-underline text-white flex flex-col gap-2"
            >
              <span class="font-bold text-xl">{{ t("call_us") }}</span>
              <span dir="ltr" class="group-hover:text-secondary"
                >07 9001 9369</span
              >
            </a>
          </div>
          <div class="flex gap-4 place-items-center">
            <img src="/assets/icons/email.png" class="h-10" />
            <a
              href="mailto:Info@grintfix.com"
              class="group no-underline text-white flex flex-col gap-2"
            >
              <span class="font-bold text-xl">{{ t("email_us") }}</span>
              <span dir="ltr" class="group-hover:text-secondary"
                >Info@grintfix.com</span
              >
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center bg-white px-20">
        <nav class="flex gap-8 place-items-center">
          <NuxtLink
            :to="to('')"
            class="py-5 text-primary font-bold no-underline hover:text-secondary"
          >
            {{ t("navigation.index") }}
          </NuxtLink>
          <NuxtLink
            :to="to('about-us')"
            class="py-5 text-primary font-bold no-underline hover:text-secondary"
          >
            {{ t("navigation.about_us") }}
          </NuxtLink>
          <div class="group/main" relative>
            <NuxtLink
              :to="to('services')"
              class="py-5 text-primary font-bold no-underline group-hover/main:text-secondary hover:text-secondary flex gap-2 place-items-center"
            >
              {{ t("navigation.services.index") }}
              <img src="/assets/icons/arrow-down.png" alt="" />
            </NuxtLink>
            <div
              class="hidden group-hover/main:flex flex-col mt-0 w-56 absolute z-50 bg-white"
            >
              <div class="group/children">
                <NuxtLink
                  :to="to('services/maintenance')"
                  class="text-primary font-bold no-underline flex place-items-center justify-between px-4 py-2 hover:text-secondary group-hover/children:text-secondary"
                >
                  {{ t("navigation.services.maintenance.index") }}
                  <img
                    class="-rotate-90 rtl:-scale-y-100"
                    src="/assets/icons/arrow-down.png"
                    alt=""
                  />
                </NuxtLink>
                <div
                  class="hidden group-hover/children:flex flex-col w-56 start-56 top-0 absolute z-50 bg-white"
                >
                  <NuxtLink
                    :to="to('services/maintenance/house')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                  >
                    {{ t("navigation.services.maintenance.house") }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/maintenance/heating')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.maintenance.heating")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/maintenance/electricities')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.maintenance.electricities")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/maintenance/conditioners')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.maintenance.conditioners")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/maintenance/isolation')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.maintenance.isolation")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/maintenance/wood')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{ t("navigation.services.maintenance.wood") }}</NuxtLink
                  >
                </div>
              </div>
              <div class="group/children">
                <NuxtLink
                  :to="to('services/decoration/')"
                  class="text-primary font-bold no-underline flex place-items-center justify-between px-4 py-2 hover:text-secondary group-hover/children:text-secondary"
                  >{{ t("navigation.services.decoration.index") }}
                  <img
                    class="-rotate-90 rtl:-scale-y-100"
                    src="/assets/icons/arrow-down.png"
                    alt=""
                  />
                </NuxtLink>
                <div
                  class="hidden group-hover/children:flex flex-col w-56 start-56 top-0 absolute z-50 bg-white"
                >
                  <NuxtLink
                    :to="to('services/decoration/parquet')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{ t("navigation.services.decoration.parquet") }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/decoration/curtains')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.decoration.curtains")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/decoration/wallpaper')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.decoration.wallpaper")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/decoration/gypsum')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{ t("navigation.services.decoration.gypsum") }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/decoration/painting')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.decoration.painting")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/decoration/wood')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{ t("navigation.services.decoration.wood") }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/decoration/marble')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{ t("navigation.services.decoration.marble") }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/decoration/interior_doors')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.decoration.interior_doors")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/decoration/security_doors')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.decoration.security_doors")
                    }}</NuxtLink
                  >
                </div>
              </div>
              <div class="group/children">
                <NuxtLink
                  :to="to('services/facilities/')"
                  class="text-primary font-bold no-underline flex place-items-center justify-between px-4 py-2 hover:text-secondary group-hover/children:text-secondary"
                  >{{ t("navigation.services.facilities.index") }}
                  <img
                    class="-rotate-90 rtl:-scale-y-100"
                    src="/assets/icons/arrow-down.png"
                    alt=""
                  />
                </NuxtLink>
                <div
                  class="hidden group-hover/children:flex flex-col w-56 start-56 top-0 absolute z-50 bg-white"
                >
                  <NuxtLink
                    :to="to('services/maintenance/')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.facilities.maintenance")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/facilities/cleaning')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.facilities.cleaning")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/facilities/hosting')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{ t("navigation.services.facilities.hosting") }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/facilities/gardening')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.facilities.gardening")
                    }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/facilities/pests')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{ t("navigation.services.facilities.pests") }}</NuxtLink
                  >
                  <NuxtLink
                    :to="to('services/facilities/security')"
                    class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                    >{{
                      t("navigation.services.facilities.security")
                    }}</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="group/main relative">
            <a
              href="#"
              class="py-5 text-primary font-bold no-underline group-hover/main:text-secondary hover:text-secondary flex gap-2 place-items-center"
              >{{ t("navigation.packages.index") }}
              <img src="/assets/icons/arrow-down.png" alt="" />
            </a>
            <div
              class="hidden group-hover/main:flex flex-col mt-0 w-60 absolute z-50 bg-white"
            >
              <a
                href="#"
                class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                >{{ t("navigation.packages.appartments") }}</a
              >
              <a
                href="#"
                class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                >{{ t("navigation.packages.small") }}</a
              >
              <a
                href="#"
                class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                >{{ t("navigation.packages.medium") }}</a
              >
              <a
                href="#"
                class="text-primary font-bold no-underline hover:text-secondary px-4 py-2"
                >{{ t("navigation.packages.large") }}</a
              >
            </div>
          </div>
          <a
            href="#"
            class="py-5 text-primary font-bold no-underline hover:text-secondary"
            >{{ t("navigation.customers") }}</a
          >
          <NuxtLink
            :to="to('blog')"
            class="py-5 text-primary font-bold no-underline hover:text-secondary"
            >{{ t("navigation.blog") }}</NuxtLink
          >
        </nav>
        <div class="flex gap-6">
          <NuxtLink
            @click="Language = Language === 'ar' ? 'en' : 'ar'"
            :to="to($route)"
            class="text-primary font-bold no-underline hover:text-secondary flex gap-2 place-items-center"
          >
            <span>{{ Language === "ar" ? "En" : "Ar" }}</span>
            <img
              class="w-6 h-6"
              src="/assets/icons/clarity_world-line.png"
              alt=""
            />
          </NuxtLink>
          <a
            href="tel:07 9001 9369"
            class="text-white bg-secondary font-bold no-underline hover:bg-primary py-2 px-4 flex gap-2 place-items-center"
          >
            <img
              class="w-6 h-6"
              src="/assets/icons/solar_phone-calling-rounded-bold.png"
              alt=""
            />
            <span>{{ t("click_to_call") }}</span>
          </a>
          <NuxtLink
            :to="to('contact-us')"
            class="text-white bg-secondary font-bold no-underline hover:bg-primary py-2 px-4 flex place-items-center"
          >
            <span>{{ t("order_now") }}</span>
          </NuxtLink>
        </div>
      </div>
    </header>
    <div
      :class="isMenuOpen === false ? 'h-0 ' : 'h-full'"
      class="fixed transition-height-300 overflow-hidden z-50 top-0 left-0 w-full flex bg-black flex-col gap-6 place-items-center justify-center"
    >
      <button
        @click="isMenuOpen = false"
        class="absolute top-5 end-5 bg-transparent border-0 cursor-pointer"
      >
        <img
          class="w-6 h-6"
          src="/assets/icons/solar_arrow-left-bold-duotone.png"
          alt=""
        />
      </button>
      <div class="flex flex-col gap-6 place-items-center justify-center grow">
        <NuxtLink
          @click="isMenuOpen = false"
          :to="to('')"
          class="text-white no-underline font-semibold"
          >{{ t("navigation.index") }}</NuxtLink
        >
        <NuxtLink
          @click="isMenuOpen = false"
          :to="to('about-us')"
          class="text-white no-underline font-semibold"
          >{{ t("navigation.about_us") }}</NuxtLink
        >
        <NuxtLink
          @click="isMenuOpen = false"
          :to="to('services')"
          class="text-white no-underline font-semibold"
          >{{ t("navigation.services.index") }}</NuxtLink
        >
        <NuxtLink
          @click="isMenuOpen = false"
          :to="to('packages')"
          class="text-white no-underline font-semibold"
          >{{ t("navigation.packages.index") }}</NuxtLink
        >
        <NuxtLink
          @click="isMenuOpen = false"
          :to="to('customers')"
          class="text-white no-underline font-semibold"
          >{{ t("navigation.customers") }}</NuxtLink
        >
        <NuxtLink
          @click="isMenuOpen = false"
          :to="to('blog')"
          class="text-white no-underline font-semibold"
          >{{ t("navigation.blog") }}</NuxtLink
        >
      </div>

      <div class="flex flex-col gap-4 text-white px-10 mb-6">
        <div class="flex gap-4 place-items-center">
          <img
            src="/assets/icons/solar_phone-calling-rounded-bold.png"
            class="h-10"
          />
          <div class="flex flex-col font-bold">
            <a
              href="tel:07 9001 9369"
              dir="ltr"
              class="no-underline text-white rtl:text-right"
              >07 9001 9369
            </a>
            <a href="mailto:Info@grintfix.com" class="no-underline text-white"
              >Info@grintfix.com
            </a>
          </div>
        </div>
        <div class="flex gap-4 place-items-center">
          <img
            src="/assets/icons/solar_streets-map-point-bold.png"
            class="h-10"
          />
          <div class="flex flex-col text-white font-bold">
            <span> عمان </span>
            <span>المملكة الأردنية الهاشمية</span>
          </div>
        </div>
      </div>
    </div>
    <header
      :class="scrolledUP ? 'top-0' : '-top-20'"
      class="sticky drop-shadow sm:hidden bg-white px-10 py-6 space-y-lg transition-all z-40"
    >
      <div class="flex justify-between place-items-center">
        <NuxtLink :to="to('')" class="relative">
          <img src="/assets/icons/logo.png" class="h-12" alt="" />
        </NuxtLink>
        <div class="flex gap-6">
          <NuxtLink
            @click="Language = Language === 'ar' ? 'en' : 'ar'"
            :to="to($route)"
            class="text-primary font-bold no-underline hover:text-secondary flex gap-2 place-items-center"
          >
            <span>{{ Language === "ar" ? "English" : "عربي" }}</span>
            <img
              class="w-6 h-6"
              src="/assets/icons/clarity_world-line.png"
              alt=""
            />
          </NuxtLink>
          <button
            @click="isMenuOpen = true"
            class="flex place-items-center bg-transparent cursor-pointer border-0"
          >
            <img class="w-6 h-6" src="/assets/icons/menu.png" alt="" />
          </button>
        </div>
      </div>
      <div class="flex justify-between gap-4">
        <a
          href="tel:07 9001 9369"
          class="grow justify-center text-white bg-secondary font-bold no-underline hover:bg-primary py-2 px-4 flex gap-2 place-items-center"
        >
          <img
            class="w-6 h-6"
            src="/assets/icons/solar_phone-calling-rounded-bold.png"
            alt=""
          />
          <span>{{ t("click_to_call") }}</span>
        </a>
        <NuxtLink
          :to="to('contact-us')"
          class="grow justify-center text-white bg-secondary font-bold no-underline hover:bg-primary py-2 px-4 flex place-items-center"
        >
          <span>{{ t("order_now") }}</span>
        </NuxtLink>
      </div>
    </header>

    <NuxtLoadingIndicator />
    <NuxtPage />

    <footer :class="{ 'mt-6': route.path !== '/' && route.path !== '/en' }">
      <section
        class="py-10 px-10 sm:px-20 flex flex-col sm:flex-row gap-8 justify-between place-items-center bg-gray-100"
      >
        <div class="flex gap-6">
          <img
            src="/assets/icons/eva_phone-call-fill.png"
            class="bg-secondary group-hover:bg-primary p-4 h-8"
            :style="{
              'clip-path':
                'polygon( 25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50% )',
            }"
            alt=""
          />
          <NuxtLink
            :to="to('contact-us')"
            class="flex flex-col justify-center gap-3 grow sm:grow-0 no-underline text-black"
          >
            <span class="font-bold text-2xl">{{ t("call_us_now") }}</span>
            <span
              >نمتلك القدرة على التفكير واختيار الحل الأنسب لحلول الصيانة العامة
              والديكورات</span
            >
          </NuxtLink>
        </div>

        <a
          href="tel:07 9001 9369"
          class="hidden sm:flex text-white bg-secondary font-bold no-underline hover:bg-primary py-2 px-4 gap-2 place-items-center"
        >
          <span>إضغط للإتصال</span>
          <img
            class="w-6 h-6 rtl:-scale-x-100"
            src="/assets/icons/material-symbols_double-arrow.png"
            alt=""
          />
        </a>
      </section>

      <section class="bg-primary px-10 sm:px-20 py-10 text-white">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div class="flex flex-col gap-4">
            <img
              src="/assets/icons/logo.png"
              class="h-12 w-fit filter-invert filter-brightness-0"
              alt=""
            />
            <p>
              اكثر من 24 سنة من الخبرة يمكنكم الاستفادة من أفضل الخدمات المثالية
              والمتميزة والتي تضمن تنفيذ اعمال الصيانة بدقة وإتقان تدوم لسنوات.
            </p>
          </div>

          <div class="flex flex-col gap-4 flex-wrap">
            <span
              class="text-xl border-b-secondary border-b-2 border-b-solid pb-2"
              >روابط مفيدة</span
            >
            <div class="grid grid-cols-2 gap-2">
              <a
                href="#"
                class="no-underline text-white flex place-items-center"
              >
                <img
                  class="rtl:-scale-x-100"
                  src="/assets/icons/iconamoon_arrow-up-2-light.png"
                  alt=""
                />
                الرئيسية
              </a>
              <a
                href="#"
                class="no-underline text-white flex place-items-center"
              >
                <img
                  class="rtl:-scale-x-100"
                  src="/assets/icons/iconamoon_arrow-up-2-light.png"
                  alt=""
                />
                الرئيسية
              </a>
              <a
                href="#"
                class="no-underline text-white flex place-items-center"
              >
                <img
                  class="rtl:-scale-x-100"
                  src="/assets/icons/iconamoon_arrow-up-2-light.png"
                  alt=""
                />
                الرئيسية
              </a>
              <a
                href="#"
                class="no-underline text-white flex place-items-center"
              >
                <img
                  class="rtl:-scale-x-100"
                  src="/assets/icons/iconamoon_arrow-up-2-light.png"
                  alt=""
                />
                الرئيسية
              </a>
              <a
                href="#"
                class="no-underline text-white flex place-items-center"
              >
                <img
                  class="rtl:-scale-x-100"
                  src="/assets/icons/iconamoon_arrow-up-2-light.png"
                  alt=""
                />
                الرئيسية
              </a>
              <a
                href="#"
                class="no-underline text-white flex place-items-center"
              >
                <img
                  class="rtl:-scale-x-100"
                  src="/assets/icons/iconamoon_arrow-up-2-light.png"
                  alt=""
                />
                الرئيسية
              </a>
              <a
                href="#"
                class="no-underline text-white flex place-items-center"
              >
                <img
                  class="rtl:-scale-x-100"
                  src="/assets/icons/iconamoon_arrow-up-2-light.png"
                  alt=""
                />
                الرئيسية
              </a>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <span
              class="text-xl border-b-secondary border-b-2 border-b-solid pb-2"
              >بيانات التواصل</span
            >
            <div class="flex flex-col gap-4">
              <span class="flex gap-2">
                <img src="/assets/icons/mdi_location.png" alt="" />
                عمان, الأردن
              </span>
              <span class="flex gap-2">
                <img src="/assets/icons/ion_mail.png" alt="" />
                Info@grintfix.com
              </span>
              <span class="flex gap-2">
                <img src="/assets/icons/fluent_call-24-filled.png" alt="" />
                <span dir="ltr">07 9001 9369</span>
              </span>
              <span class="flex gap-2">
                <img src="/assets/icons/ion_time.png" alt="" />
                يومياً من 8 صباحاً - 9 مساءً
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        class="bg-gray-950 relative px-10 sm:px-20 py-5 text-white text-center pt-15 sm:pt-5"
      >
        <div class="absolute ps-10 sm:ps-20 flex -top-5 start-0 bg-white">
          <a
            href="https://www.facebook.com/profile.php?id=100086029195860"
            target="_blank"
            class="bg-secondary b-e-white py-2 px-3 b-e-2 b-e-solid"
            ><img
              class="filter-invert h-6"
              src="/assets/icons/ri_facebook-f3ill.png"
              alt=""
          /></a>
          <a
            href="https://www.instagram.com/grintfix/"
            target="_blank"
            class="group hover:bg-secondary hover:b-e-white py-2 px-3 b-e-gray-300 b-e-2 b-e-solid"
            ><img
              class="group-hover:filter-invert h-6"
              src="/assets/icons/teenyicons_instagram-solid.png"
              alt=""
          /></a>
          <a
            href="https://www.youtube.com/channel/UCpO3iLYlMAC98vazi1T6EuQ"
            target="_blank"
            class="group hover:bg-secondary hover:b-e-white py-2 px-3 b-e-gray-300 b-e-2 b-e-solid"
            ><img
              class="group-hover:filter-invert h-6"
              src="/assets/icons/mdi_youtube.png"
              alt=""
          /></a>
          <a
            href="https://twitter.com/GrintFix1"
            target="_blank"
            class="group hover:bg-secondary hover:after:b-r-secondary after:b-r-white after:content-empty after:w-0 after:h-0 after:border-transparent after:border-style-solid after:border-t-[24px] after:border-b-[23px] after:border-r-[25px] after:absolute after:top-0 after:left-[-28px] py-2 px-3"
            ><img
              class="group-hover:filter-invert h-6"
              src="/assets/icons/bi_twitter.png"
              alt=""
          /></a>
        </div>
        <span>جميع الحقوق محفوظة</span>
      </section>
    </footer>
  </main>
</template>
<script setup>
const route = useRoute(),
  Language = useGlobalCookie("Language"),
  isMenuOpen = ref(false),
  scrolledUP = ref(false);
Language.value =
  Array.isArray(route.params.slug) && route.params.slug[0] === "en"
    ? "en"
    : "ar";

useLanguage({
  ar: {
    call_us: "إتصل بنا",
    email_us: "أرسل لنا بريد",
    call_us_now: "إتصل بنا الان",
    navigation: {
      index: "الرئيسية",
      about_us: "من نحن",
      services: {
        index: "خدماتنا",
        maintenance: {
          index: "خدمات الصيانة",
          house: "خدمات الصيانة المنزلية",
          heating: "صيانة التدفئة المركزية وتمديدات المياة",
          electricities: "الاعمال الكهربائية والانارة",
          conditioners: "تركيب و صيانة المكيفات",
          isolation: "اعمال التسريبات والعزل",
          wood: "اعمال النجارة والديكور",
        },
        decoration: {
          index: "خدمات الديكور",
          parquet: "باركية بأنواعة",
          curtains: "ستائر",
          wallpaper: "ورق جدران",
          gypsum: "اعمال الجبسن بورد",
          painting: "اعمال الدهان",
          wood: "بديل الخشب",
          marble: "بديل الرخام",
          interior_doors: "الابواب الداخلية",
          security_doors: "ابواب الامان",
        },
        facilities: {
          index: "ادارة المرافق والمياني",
          maintenance: "خدمات الصيانة",
          cleaning: "خدمات النظافة",
          hosting: "خدمات الضيافة",
          gardening: "خدمات البستنة وتنسيق الحدائق",
          pests: "خدمات مكافحة الأفات",
          security: "خدمات السلامة والامان",
        },
      },
      packages: {
        index: "العروض والباقات",
        appartments: "باقة الشقق والبيوت الصغيرة",
        small: "باقة المنشات الصغيرة",
        medium: "باقة المنشات المتوسطة",
        large: "باقة المنشات الكبيرة",
      },
      customers: "اهم العملاء",
      blog: "المدونة",
    },
    ago: "مضت",
    min: "دقيقة",
    sec: "ثانية",
    hour: "ساعة",
    day: "يوم",
    right_now: "قبل قليل",
    order_now: "أطلب الخدمة",
    click_to_call: "إضغط للإتصال",
  },
  en: {
    call_us: "Call us",
    email_us: "Email us",
    call_us_now: "Call us now",
    navigation: {
      index: "Home",
      about_us: "About us",
      services: {
        index: "Our Services",
        maintenance: {
          index: "Maintenance Services",
          house: "Home maintenance services",
          heating: "Maintenance of central heating and water installations",
          electricities: "Electrical and lighting works",
          conditioners: "Installation and maintenance of air conditioners",
          isolation: "Leaks and insulation works",
          wood: "Carpentry and decoration works",
        },
        decoration: {
          index: "Decoration services",
          parquet: "Parquet of all kinds",
          curtains: "Curtains",
          wallpaper: "Wallpaper",
          gypsum: "Gypsum board works",
          painting: "Painting works",
          wood: "Wood substitute",
          marble: "Marble alternative",
          interior_doors: "Interior doors",
          security_doors: "Security doors",
        },
        facilities: {
          index: "Facilities and Water Management",
          maintenance: "Maintenance Services",
          cleaning: "Cleaning services",
          hosting: "Hospitality services",
          gardening: "Gardening and landscaping services",
          pests: "Pest Control Services",
          security: "Safety and security services",
        },
      },
      packages: {
        index: "Offers and packages",
        appartments: "Apartments and small houses",
        small: "Small Establishments",
        medium: "Medium Establishments",
        large: "Large Establishments",
      },
      customers: "Our Customers",
      blog: "Blog",
    },
    ago: "ago",
    min: "min",
    sec: "sec",
    hour: "hour",
    day: "day",
    right_now: "right now",
    order_now: "Order now",
    click_to_call: "Click to call",
  },
});

onMounted(() => {
  window.addEventListener("wheel", (e) => {
    scrolledUP.value = e.deltaY < 0 ? 1 : 0 === 1;
  });
});
</script>
<style>
body {
  margin: 0;
}
</style>
