import axios from "axios";


export default class Service {
 
   static async getPosts(_limit = 10, _page = 1) {
    try { 
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${_limit}&_page=${_page}`)
        return response
    }
    catch (error) {
        console.log(error)
    }
        
   }

   static async getUser(id) {
       const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
       return response
   }

   static async getCommentsById(id) {
       const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=` + id)
       return response
   }
}
