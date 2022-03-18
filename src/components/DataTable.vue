<template>
  <div>
    <div class="data-table">
      <p v-if="!transactionData">loading...</p>
      <table class="table" v-else>
        <tr>
          <th v-for="(headingName, index) in tableHeading" :key="index">
            {{ headingName }}
          </th>
        </tr>
        <tr v-for="(item, index) in transactionData" :key="index">
          <td>{{ item.account }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.createdAt }}</td>
          <td>{{ item.currency }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.reference }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.transactionDate }}</td>
          <td>{{ item.updatedAt }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: ["transactionData"],
  data() {
    return {
      tableHeading: [
        "account",
        "amount",
        "category",
        "createdAt",
        "currency",
        "description",
        "reference",
        "status",
        "transactionDate",
        "updatedAt",
      ],
    };
  },
};
</script>
<style scoped>
.data-table {
  font-family: arial, sans-serif;
  padding: 20px;
}
.data-table .table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
