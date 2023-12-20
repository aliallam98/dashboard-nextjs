const dataFetcher = async() => {
    const url = ""
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
        next: {
            revalidate: 60 * 60 * 24,
          },
        }
    const response = await fetch(url,options)
    const data = await response.json()
    return data
};
const getCategories = async() => {


    const response = await fetch("")
    const data = await response.json()
    return data
};
const getCustomers = async() => {


    const response = await fetch("")
    const data = await response.json()
    return data
};
const getProducts = async() => {


    const response = await fetch("")
    const data = await response.json()
    return data
};
const getOrders= async() => {


    const response = await fetch("")
    const data = await response.json()
    return data
};
