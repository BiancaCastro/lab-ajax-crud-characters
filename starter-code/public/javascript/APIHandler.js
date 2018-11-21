

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then((character)=>{
       console.log(character.data);
      console.log(`${this.BASE_URL}/characters`)
       return character.data;
    })
    .catch(err=>{
      console.log(err)
    })
  }

  getOneRegister () {

    // axios.get(`${this.BASE_URL}/characters/:id`)
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
