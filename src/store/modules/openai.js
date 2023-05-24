import {Configuration,OpenAIApi} from 'openai';
export default {
  state: {},
  actions: {
    async fetchAPI({ commit }) {
      const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_KEY,
      })

      const openai = new OpenAIApi(configuration)

      const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'Hello world',
      })
      console.log(completion.data.choices[0].text)
    },
  },
  getters: {},
  mutations: {},
}
