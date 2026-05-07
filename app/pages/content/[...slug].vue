<script setup>

const route = useRoute()

const query = gql`
{
	item(path: "${route.params.slug}",language: "en") {
		displayName
		fields {
			name
			jsonValue
		}
		template {
			id
		}
	}
}
`

const { data } = await useAsyncQuery(query);

const fields = Object.fromEntries(
  data.value.item.fields.map(f => [f.name, f.jsonValue.value])
)

</script>

<template>
  <div>
    <h2>{{ fields.Title }}</h2>
    <div v-html="fields.Text" />
    <div>Template ID: {{ data.item.template.id }}</div>
  </div>
</template>