import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/";

class AuthService {
  async login(email, password) {
    const response = await axios
      .post(API_URL + "admin/login", {
        email,
        password
      });
    return response;
  }

  async register(email, name, password) {
    return axios.post(API_URL + "admin/register", {
      email,
      name,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  async getRecipes() {
    const response = await axios
      .get(API_URL + "recipes",
      {
        headers: {
          ...authHeader()
        }
      }
    );
    return response;
  }

  async getIngredients() {
    const response = await axios
      .get(API_URL + "ingredients",
      {
        headers: {
          ...authHeader()
        }
      }
    );
    return response;
  }

  async getRequest() {
    const response = await axios
      .get(API_URL + "requests",
      {
        headers: {
          ...authHeader()
        }
      }
    );
    return response;
  }

  async setRecipe(data) {
    let dataBody = {
      "name": data.name,
      "ingredients": []
    }
    for(var i in data.arrayRes) {
      if(data.arrayRes[i].quantity !== 0) {
        dataBody.ingredients.push(data.arrayRes[i])
      }
    };
    if (dataBody.ingredients.length === 0) return;
    console.log(dataBody)
    return axios.post(API_URL + "recipes/create", dataBody, {
        headers: {
          ...authHeader()
        }
      }
    );
  }

  async setIngredients(data) {
    return axios.post(API_URL + "ingredients/edit/stock", data, {
        headers: {
          ...authHeader()
        }
      }
    );
  }

  async addIngredients(data) {
    return axios.post(API_URL + "ingredients/create", data, {
        headers: {
          ...authHeader()
        }
      }
    );
  }

  async setRequest(id, status) {
    var data = {
      'id': id,
      'status': status
    }
    return axios.post(API_URL + "requests/edit/status", data, {
        headers: {
          ...authHeader()
        }
      }
    );
  }
}


export default new AuthService();
