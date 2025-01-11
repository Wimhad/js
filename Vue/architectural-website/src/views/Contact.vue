<script setup>
import {reactive, ref} from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const toast = useToast();

const handleSubmit = async () => {
  const newMsg = {
    name: form.name,
    email: form.email,
    message: form.message,
  };
  try {
    const res = await axios.post('/api/contact', newMsg);
    toast.success('Message sent successfully!');
    form.name = ''; form.email = ''; form.message = '' ;
  } catch (error) {
    console.error('Error sending message:', error);
    toast.error('Failed to send message.');
  }
};
</script>

<template>
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto max-w-2xl">
      <h1 class="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-lg">
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2">Name</label>
          <input
              v-model="form.name"
              type="text"
              class="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-primary"
              placeholder="Your Name"
              required
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2">Email</label>
          <input
              v-model="form.email"
              type="email"
              class="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-primary"
              placeholder="Your Email"
              required
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
              v-model="form.message"
              class="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:ring-primary"
              rows="5"
              placeholder="Your Message"
              required
          ></textarea>
        </div>
        <button
            type="submit"
            class="bg-primary text-white py-2 px-6 rounded hover:bg-accent transition"
        >
          Send Message
        </button>
      </form>

      <!--      <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-md">
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Name</label>
                <input
                    v-model="form.name"
                    type="text"
                    class="w-full border rounded px-3 py-2"
                    placeholder="Your Name"
                    required
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Email</label>
                <input
                    v-model="form.email"
                    type="email"
                    class="w-full border rounded px-3 py-2"
                    placeholder="Your Email"
                    required
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                    v-model="form.message"
                    class="w-full border rounded px-3 py-2"
                    rows="5"
                    placeholder="Your Message"
                    required
                ></textarea>
              </div>
              <button
                  type="submit"
                  class="bg-primary text-white py-2 px-4 rounded hover:bg-accent"
              >
                Send Message
              </button>
            </form>-->
    </div>
  </section>
</template>
