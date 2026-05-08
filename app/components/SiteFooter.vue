<script setup>
const route = useRoute()

const query = gql`
{
	item(path: "/sitecore/content/New Footer",language: "en") {
		fields {
			name
			jsonValue
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
  <div style="display: flex; gap: 200px;">
    <div>
      <h2 v-text="fields['Big text']" />
      <h3 v-text="fields['Small text']" />
      <a :href="fields.Button.href" :target="fields.Button.target" rel="noopener noreferrer">
        <button v-text="fields.Button.text" />
      </a>
      <p v-text="fields.Adressen" />
    </div>
    <div>
      <p><a :href="fields['Socials 1'].href" v-text="fields['Socials 1'].text" :target="fields['Socials 1'].target" />
      </p>
      <p><a :href="fields['Socials 2'].href" v-text="fields['Socials 2'].text" :target="fields['Socials 2'].target" />
      </p>
      <p><a :href="fields['Socials 3'].href" v-text="fields['Socials 3'].text" :target="fields['Socials 3'].target" />
      </p>
    </div>
  </div>
</template>