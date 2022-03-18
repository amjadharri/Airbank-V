<template>
  <div class="transaction-data">
    <div>
      <div>
        <label for="startDate">Select start date </label>
        <input
          type="datetime-local"
          id="start-date"
          name="startDate"
          v-model="start_date"
          format="yyyy/mm/dd HH:MM:SS"
        />
      </div>
      <div>
        <label for="endDate">Select end date </label>
        <input
          type="datetime-local"
          id="end-date"
          name="endDate"
          v-model="end_date"
          format="yyyy/mm/dd HH:MM:SS"
        />
      </div>
    </div>
    <ApolloQuery
      :query="
        (gql) => gql`
          query myQuery($start_date: String!, $end_date: String!) {
            list(start_date: $start_date, end_date: $end_date) {
              id
              account
              description
              category
              reference
              currency
              amount
              status
              transactionDate
              createdAt
              updatedAt
            }
          }
        `
      "
      :variables="{ start_date, end_date }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>

        <div v-else-if="error" class="error apollo">An error occurred</div>

        <div v-else-if="data && data.list.length" class="result apollo">
          <DataTable :transactionData="data.list" />
        </div>

        <strong v-else class="no-result apollo">No result :( </strong>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import DataTable from "./DataTable.vue";

export default {
  name: "TransactionData",
  data() {
    return {
      start_date: "2021-02-18 13:18:14",
      end_date: "2022-02-18 30:16:53",
    };
  },
  components: {
    DataTable,
  },
};
</script>
