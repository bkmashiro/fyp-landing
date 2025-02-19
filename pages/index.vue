<template>
  <div class="bg-gray-50">
    <!-- 导航栏 -->
    <header class="bg-white shadow fixed w-full z-10">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <div class="text-2xl font-bold text-indigo-600">SnapSphere</div>
        <nav class="space-x-4">
          <a href="#hero"
             class="text-gray-600 hover:text-indigo-600">Home</a>
          <a href="#overview"
             class="text-gray-600 hover:text-indigo-600">Overview</a>
          <a href="#features"
             class="text-gray-600 hover:text-indigo-600">Features</a>
          <a href="#design"
             class="text-gray-600 hover:text-indigo-600">Technology</a>
          <a href="#demo"
             class="text-gray-600 hover:text-indigo-600">Demo</a>
        </nav>
      </div>
    </header>

    <main class="pt-20">
      <!-- Hero 区域 -->
      <section id="hero"
               class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Experience AR in a New Dimension
          </h1>
          <p class="text-lg md:text-2xl mb-8">
            View, interact, and share photos in a 3D space.
          </p>
          <UButton class="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Get Started
          </UButton>
        </div>
      </section>

      <!-- Overview 区域 -->
      <section id="overview"
               class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Overview</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Goal -->
            <div>
              <h3 class="text-xl font-semibold mb-2">Goal</h3>
              <p class="mb-4">
                Develop an AR metaverse photo-sharing app enabling users to view photos in a 3D space with interactive
                features.
              </p>
              <ul class="list-disc list-inside space-y-2">
                <li>
                  <strong>Augmented Reality:</strong> Overlay digital content on the real world and interact with it.
                </li>
                <li>
                  <strong>Metaverse:</strong> Persistent, shared virtual world.
                </li>
                <li>
                  <strong>Photo-sharing:</strong> View and edit photos (position, perspective, etc.).
                </li>
              </ul>
            </div>
            <!-- Motivation -->
            <div>
              <h3 class="text-xl font-semibold mb-2">Motivation</h3>
              <ul class="list-disc list-inside space-y-2">
                <li>
                  A photo is more than just an image – it’s about perspective, atmosphere, and the story behind it.
                </li>
                <li>
                  Engage users with comments, likes, and sharing.
                </li>
                <li>
                  Encourage real-life interactions and community building.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Features 区域 -->
      <section id="features"
               class="bg-gray-100 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Features</h2>
          <div class="space-y-12">
            <!-- AR Viewing -->
            <div>
              <h3 class="text-2xl font-semibold mb-4">AR Viewing</h3>
              <p class="mb-4">
                View photos in a 3D space that remains fixed as you move your device.
                The shooting angle and position are preserved with options to filter by time, people, and location.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <!-- <span class="text-gray-600">Image Placeholder 1</span> -->
                  <NuxtImg src="/image/IMG_3243.JPG"
                           alt="Use Cloud Anchor to place a 3D object in the real world"
                           class="h-max" />
                </div>
                <div class="bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <NuxtImg src="/image/cloud-anchor-part-2.mp4_20241127_212941.428.png"
                           alt="How Cloud Anchor works"
                           class="h-max" />
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <NuxtImg src="/image/view_angle_2-v3.png"
                           alt="AR Image viewing"
                           class="h-max" />
                </div>
                <div class="bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <NuxtImg src="/image/arcore_geospatial_creator.mp4_20241127_212905.124.png"
                           alt="ARCore Geospatial Creator"
                           class="h-max" />
                </div>
              </div>
              <p class="text-right">
                <span class="text-gray-600 italic">right 2 images from
                  <a href="https://developers.google.com/ar/develop/unity/cloud-anchors/quickstart-unity-android"
                     class="text-indigo-600 hover:underline">Google ARCore</a>
                </span>
              </p>
            </div>

            <!-- Storytelling -->
            <div>
              <h3 class="text-2xl font-semibold mb-4">Storytelling</h3>
              <p>
                Enhance your photos with text, audio, video, and interactive 3D objects to craft immersive stories.
              </p>
            </div>

            <!-- Share -->
            <div>
              <h3 class="text-2xl font-semibold mb-4">Share</h3>
              <p>
                Build a vibrant community where users contribute to the AR world by sharing, selling, and buying photos.
              </p>
            </div>

            <!-- Copyright -->
            <div>
              <h3 class="text-2xl font-semibold mb-4">Copyright Protection</h3>
              <p class="mb-4">
                Photos are encrypted and embedded with copyright information using blind watermarking.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <!-- <span class="text-gray-600">Image Placeholder 5</span> -->
                  <NuxtImg src="/image/bwm.png"
                           alt="Blind watermarking"
                           class="w-max" />
                </div>
                <div class="flex items-center">
                  <p>
                    Technologies like Discrete Wavelet Transform (DWT), Singular Value Decomposition (SVD),
                    and BCH code are used to embed copyright data – invisible to the naked eye.
                  </p>
                </div>
              </div>
            </div>

            <!-- Exchange -->
            <div>
              <h3 class="text-2xl font-semibold mb-4">Exchange</h3>
              <p>
                Engage in a secure and transparent marketplace to share, sell, or buy photos.
                Mint your photos as NFTs, guaranteed by blockchain technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technology/Design 区域 -->
      <section id="design"
               class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Technology & Design</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-2">Target Platforms</h3>
              <p>iOS, Android, Web</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Client</h3>
              <p>
                Unity is used as the engine and development environment, along with AR Foundation, ARCore, ARKit, and
                WebXR for AR capabilities.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Server</h3>
              <p>
                The backend is built with Node.js using MongoDB and Postgres as databases,
                with Google Cloud Platform handling storage, database, and authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Demo 区域 -->
      <section id="demo"
               class="bg-gray-100 py-16">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8">Demo</h2>
          <p class="mb-8">
            Watch the video demonstration of our AR experience in action.
          </p>
          <div class="w-full max-w-4xl mx-auto bg-black h-64 flex items-center justify-center">
            <!-- <span class="text-white">Video Placeholder</span> -->
            <!-- https://youtu.be/CaA_pBN_4eg -->

            <iframe id="ytplayer"
                    type="text/html"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/CaA_pBN_4eg?autoplay=0"
                    frameborder="0"></iframe>
          </div>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="bg-white py-6">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-600">
          &copy; 2025 AR Metaverse App.  All Rights Reserved. Built with Nuxt & Tailwind CSS.
        </p>
        <p>
          <nuxt-link to="https://github.com/bkmashiro/fyp-demo-unity"
                     class="text-indigo-600 hover:underline">View Unity Demo Project on GitHub</nuxt-link>
        </p>
        <p>
          <nuxt-link to="https://github.com/bkmashiro/fyp-landing"
                     class="text-indigo-600 hover:underline">View Page Source Code</nuxt-link>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// 如有需要可在此引入 Nuxt UI 组件，例如：
// import { NButton } from 'nuxt-ui'
</script>
