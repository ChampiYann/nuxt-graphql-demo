<script setup>

const route = useRoute()

const query = gql`
{
  repository(owner:"ChampiYann", name: "${route.params.slug}") {
    id
    name
    createdAt
    description
    url
    forks {
      totalCount
    }
    watchers {
      totalCount
    }
    stargazers {
      totalCount
    }
  }
}
`

const { data } = await useAsyncQuery(query);

</script>

<template>
  <div>
    <h2>{{ data.repository.name }}</h2>
    <div>{{ data.repository.description }}</div>
    <div>
      <div>Stars: {{ data.repository.stargazers.totalCount }}</div>
      <div>Forks: {{ data.repository.forks.totalCount }}</div>
      <div>Watchers: {{ data.repository.watchers.totalCount }}</div>
    </div>
  </div>
</template>