<template>
  <div id="appview">
    <header>
      <NavbarTab />
    </header>
    <section>
      <div class="">
        <div
          class="h-72 flex justify-center items-center bg-[url('/src/assets/head.jpg')] bg-cover bg-center"
          id="contentheader"
        >
          <div class="text-center">
            <p class="text-6xl font-semibold uppercase">Tour Warshington State</p>
          </div>
        </div>
        <div class="text-center pt-10">
          <div class="text-5xl uppercase">
            <p>Warshington state</p>
          </div>
          <div class="flex justify-center items-center pt-10 text-xl">
            <div class="text-center mx-5">
              <button
                class="bg-slate-200 rounded w-36 h-36 shadow-2xl hover:shadow-cyan-200/100"
              >
                <img
                  src="/src/assets/mtrainer.jpg"
                  class="rounded w-36 h-36"
                />
              </button>
              <p>Mt.Rainer</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded w-36 h-36 shadow-2xl hover:shadow-pink-200/100"
              >
                <img
                  src="/src/assets/seattle.jpg"
                  class="rounded w-36 h-36"
                />
              </button>
              <p>Sesttle</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded w-36 h-36 shadow-2xl hover:shadow-pink-200/100"
              >
                <img
                  src="https://www.popsci.com/uploads/2020/05/08/UUKT3F7KJRACLBWFN7IM6RKHZM.jpg?auto=webp.jpg"
                  class="rounded w-36 h-36"
                />
              </button>
              <p>Mout St. Helens</p>
            </div>
            <div class="text-center mx-5">
              <button
                class="bg-slate-400 rounded w-36 h-36 shadow-2xl hover:shadow-green-200/100"
              >
                <img
                  src="/src/assets/olympic.jpg"
                  alt=""
                  class="rounded w-36 h-36"
                />
              </button>
              <p>Olympic Mountains</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <div>
          <div class="text-center text-3xl">Tour package</div>
          <div class="flex justify-center mt-4 text-2xl font-semibold">
            <button
              @click="readData()"
              class="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-green-500 font-semibold rounded-3xl hover:shadow-xl shadow p-3 ]"
            >
              Packagee
            </button>
          </div>
          <table class="mt-3 justify-center m-auto">
            <tr class="border-b bg-blue-100 border-blue-200 max-w-3xl">
              <th class="py-2 px-7 text-center">Time</th>
              <th class="py-2 px-5 text-center">Date</th>
              <th class="py-2 px-5 text-center">From</th>
              <th class="py-2 px-5 text-center">To</th>
              <th class="py-2 px-5 text-center">Price</th>
              <th class="py-2 px-5 text-center">Status</th>
            </tr>
            <tr
              v-for="(item, index) in ticketshow"
              :key="index"
              class="border-b bg-green-100 border-green-200 max-w-3xl"
            >
              <td class="py-2 px-7 text-center">{{ item.dateTicket }}</td>
              <td class="py-2 px-5 text-center">{{ item.timeTicket }}</td>
              <td class="py-2 px-5 text-center">{{ item.fromTicket }}</td>
              <td class="py-2 px-5 text-center">{{ item.toTicket }}</td>
              <td class="py-2 px-5 text-center">{{ item.priceTicket }}</td>
              <td
                class="py-2 px-5 text-center hover:bg-purple-500 ease-in-out duration-700"
              >
                <button @click="addCart(item, index)">Buy</button>
              </td>
            </tr>
          </table>
          <div class="mt-10">
            <div class="text-center text-3xl">My package tours</div>
            <div class="text-center font-semibold text-3xl">
              <p>
                Total {{ total() }} ฿
                <button
                  @click="deleteTicket2(item)"
                  class="py-1 px-3 text-center rounded-3xl bg-indigo-200 hover:bg-indigo-400 duration-700"
                >
                  Payment
                </button>
              </p>
            </div>
            <table class="mt-3 justify-center m-auto">
              <tr class="border-b bg-blue-100 border-blue-200 max-w-3xl">
                <th class="py-2 px-7 text-center">Time</th>
                <th class="py-2 px-5 text-center">Date</th>
                <th class="py-2 px-5 text-center">From</th>
                <th class="py-2 px-5 text-center">To</th>
                <th class="py-2 px-5 text-center">Price</th>
                <th class="py-2 px-5 text-center">Status</th>
              </tr>
              <tr
                v-for="(item, index) in cartPurchase"
                :key="index"
                class="border-b bg-green-100 border-green-200 max-w-3xl"
              >
                <td class="py-2 px-7 text-center">{{ item.cartTime }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartDate }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartFrom }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartTo }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartAirline }}</td>
                <td class="py-2 px-5 text-center">{{ item.cartPrice }}</td>
                <td>
                  <button
                    @click="deleteTicket1(index)"
                    class="py-2 px-5 text-center hover:bg-red-400 duration-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
    <footer
      class="text-center text-white mt-10"
      style="background-color: #0000"
    >
 

      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2050 Copyright:
        <a class="text-white" href="https://tailwind-elements.com/"
          >Khadawut Phonmueang</a
        >
      </div>
    </footer>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../plugins/firebaseInit";
import NavbarTab from "@/components/NavbarTab.vue";
export default {
  components: {
    NavbarTab,
  },
  data() {
    return {
      ticketshow: [],
      cartPurchase: [],
      status: 0,
    };
  },

  
  methods: {
    async readData() {
      const querySnapshot = await getDocs(collection(db, "location"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.ticketshow.push(doc.data());
      });
    },
    addCart(item) {
      this.cartPurchase.push({
        cartTime: item.dateTicket,
        cartDate: item.timeTicket,
        cartFrom: item.fromTicket,
        cartTo: item.toTicket,
        cartAirline: item.airlineTicket,
        cartPrice: item.priceTicket,
        cartName: item.name,
      });
    },
    deleteTicket1(index) {
      alert("Do you want remove this ticket ?");
      confirm(this.cartPurchase.splice(index, 1));
    },
    deleteTicket2(item) {
      this.cartPurchase.splice(item);
      alert("Purchase success");
    },
    
    total: function () {
      var sum = 0;
      this.cartPurchase.forEach(function (item) {
        sum += item.cartPrice;
      });
      return sum;
    },
  },
};
</script>

<style scoped>
#appview {
  background-color: rgba(159, 248, 226, 0.479);
}
</style>
>
