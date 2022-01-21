var person = new Object()

person["firstName"] ="Scott"
person["lastName"] ="Desatnick"

var cityName ="city"

person[cityName] ="Boston"

person["address"] = new Object()

person["address"]["state"] ="massachusetts"
person["address"]["country"] = "USA"

person.company = new Object()
person.company.name = "India Mart"
person.company.website = "https://www.indiamart.com/"

console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["city"])

console.log(person.company.name)
console.log(person.company.website)