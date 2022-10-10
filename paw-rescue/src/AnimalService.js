import axios from 'axios'

const ANIMAL_API_BASE_URL = 'http://localhost:8080/api/auth/animals';

class AnimalService {

    // getEmployees(){
    //     return axios.get(EMPLOYEE_API_BASE_URL);
    // }

    // createEmployee(employee){
    //     return axios.post(EMPLOYEE_API_BASE_URL, employee);
    // }

    // getEmployeeById(employeeId){
    //     return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    // }

    // updateEmployee(employee, employeeId){
    //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    // }
    getAllAnimals(){
        return axios.get(ANIMAL_API_BASE_URL);
    }
    deleteAnimal(animalId){
        return axios.delete(ANIMAL_API_BASE_URL + '/' + animalId);
    }
    getAnimalById(animalId){
          return axios.get(ANIMAL_API_BASE_URL + '/' + animalId);
         }
}

export default new AnimalService();