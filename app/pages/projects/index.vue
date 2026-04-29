<script setup>
const query = gql`
{
  viewer {
    repositories(first: 6, orderBy:{field:CREATED_AT,direction: DESC}) {
      totalCount
      nodes {
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
  }
}
`

const { data } = await useAsyncQuery(query);

</script>

<template>
  <h1>Projects</h1>
  <p>Here are some of my projects on GitHub.</p>
  <section>
    <div v-for="project in data?.viewer.repositories.nodes" :key="project.id">
      <NuxtLink  :to="`/projects/${project.name}`">
        <h2>{{ project.name }}</h2>
      </NuxtLink>
      <p>{{ project.description }}</p>
      <div>
        Stars: {{ project.stargazers.totalCount }}
        Forks: {{ project.forks.totalCount }}
        Watchers: {{ project.watchers.totalCount }}
      </div>
    </div>
  </section>
</template>