<template>
  <div class="home">
    <div class="sidebar">
      <div class="logo">
        <img src="../assets/zambanlogo.svg" />
      </div>
      <div class="=btn-lgt-wraper"></div>
      <button class="btn-lgt" @click="logOut">Logout</button>
    </div>
    <div class="content">
      <div class="he-r">
        <button v-b-modal.modal-prevent-closing class="add-btn">
          Add Product
        </button>
      </div>
      <div class="cardcontent">
        <div class="container">
          <div class="d-flex flex-wrap">
            <Card
              v-for="product in this.$store.state.products"
              :key="product.id"
              :products="product"
              class="col-3"
            ></Card>
          </div>
        </div>
      </div>
    </div>
    <Modal></Modal>
    <div></div>
  </div>
</template>

<script>
import Modal from "../components/add-modal";
import Card from "../components/card";
import router from "../router";
import Swal from "sweetalert2";

export default {
  name: "Home",
  props: ["product"],
  components: {
    Card,
    Modal,
  },
  methods: {
    logOut() {
      Swal.fire({
        title: "Are you sure?",
        text: "Sign out this page!",
        icon: "warning",
        iconColor: "#ea9292",
        showCancelButton: true,
        confirmButtonColor: "#ea9292",
        cancelButtonColor: " #7453b8;",
        confirmButtonText: "Yes!!",
      }).then((data) => {
        if (data.isConfirmed) {
          localStorage.clear();
          router.push({ path: "Login" });
        }
      });
    },
  },
  created() {
    console.log("ini di home");
    this.$store.dispatch("fetchData");
  },
};
</script>
