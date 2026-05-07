<script setup>
const query = gql`
{
	item(path: "/sitecore/content",language: "en") {
		children(first: 8) {
			results {
				id
				name
			}
			total
		}
	}
}
`

const { data, error } = await useAsyncQuery(query);

</script>

<template>
  <h1>Content</h1>
  <p>Here are some of the articles in Sitecore.</p>
  <section>
    <div v-for="article in data?.item.children.results" :key="article.id">
      <NuxtLink  :to="`/content/${article.id}`">
        <h2>{{ article?.name }}</h2>
      </NuxtLink>
    </div>
  </section>
</template>