import s from "./servicesList.module.scss"
import ServicesItem from "./servicesItem"

const ServicesList = () => { 
  const servicesStore = [ 
    {
      name: "Create Customer",
      url: "/create-customer"
    },
    { 
      name: "Update Customer",
      url: "/update-customer"
    }, 
    {
      name: "Delete Customer",
      url: "/delete-customer"
    }, 
    {
      name: "Create Account for customer",
      url: "/create-account-customer"
    }, 
    { 
      name: "Delete account for customer",
      url: "/delete-account-customer"
    }, 
    {
      name: "Add funds",
      url: "/add-funds"
    },
    {
      name: "Withdraw funds",
      url: "/withdraw-funds"
    }, 
    {
      name: "Send funds",
      url: "/send-funds"
    }
  ]
  return ( 
    <section className={s.container}> 
      <ul className={s.list}>
        {servicesStore.map(item => <ServicesItem key={item.name} name={item.name} url={item.url}/>)}
        </ul> 
    </section>
  )
}

export default ServicesList